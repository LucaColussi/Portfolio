"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export function MobileNavigation({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    const desktop = window.matchMedia("(min-width: 48rem)");
    function handleViewportChange(event: MediaQueryListEvent) {
      if (event.matches) setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktop.addEventListener("change", handleViewportChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", handleViewportChange);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Chiudi navigazione" : "Apri navigazione"}
        onClick={() => setIsOpen((open) => !open)}
        className="type-navigation flex min-h-11 min-w-14 cursor-pointer items-center justify-end px-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <nav
        id={panelId}
        aria-label="Navigazione principale mobile"
        hidden={!isOpen}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a[href]")) {
            setIsOpen(false);
          }
        }}
        className="absolute top-[calc(100%+1rem)] right-0 z-10 w-48 border border-divider bg-background shadow-lg"
      >
        {children}
      </nav>
    </div>
  );
}
