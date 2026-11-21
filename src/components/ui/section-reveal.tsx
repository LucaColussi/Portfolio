"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./section-reveal.module.css";

export function SectionRevealGroup({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || !("IntersectionObserver" in window) || motion.matches) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-section-reveal]"));
    const pending = new Set(sections);
    const queued = new Set<HTMLElement>();
    let frame = 0;
    let timer = 0;

    function reveal(section: HTMLElement) {
      pending.delete(section);
      queued.delete(section);
      section.dataset.revealState = "visible";
      observer.unobserve(section);
      if (!pending.size) {
        window.removeEventListener("scroll", scheduleScan);
        window.removeEventListener("resize", scheduleScan);
      }
    }

    function playNext() {
      timer = 0;
      const section = sections.find((candidate) => queued.has(candidate));
      if (!section) return;
      reveal(section);
      if (queued.size) timer = window.setTimeout(playNext, 180);
    }

    function scan() {
      frame = 0;
      for (const section of pending) {
        // Include sections passed during a fast scroll, even if no intersection was sampled.
        if (section.getBoundingClientRect().top <= window.innerHeight - 64) {
          queued.add(section);
          section.dataset.revealState = "queued";
        }
      }
      // Allow the hidden pose to paint before starting the first entrance.
      if (queued.size && !timer) timer = window.setTimeout(playNext, 32);
    }

    function scheduleScan() {
      if (!frame) frame = window.requestAnimationFrame(scan);
    }

    function revealFocusedSection(event: FocusEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      const section = sections.find((candidate) => candidate.contains(target));
      if (section) reveal(section);
    }

    function handleMotionChange(event: MediaQueryListEvent) {
      if (!event.matches) return;
      window.clearTimeout(timer);
      timer = 0;
      sections.forEach(reveal);
    }

    const observer = new IntersectionObserver(scheduleScan, {
      threshold: 0,
      rootMargin: "0px 0px -64px 0px",
    });

    for (const section of sections) {
      section.dataset.revealState = "pending";
      observer.observe(section);
    }
    root.addEventListener("focusin", revealFocusedSection);
    motion.addEventListener("change", handleMotionChange);
    window.addEventListener("scroll", scheduleScan, { passive: true });
    window.addEventListener("resize", scheduleScan);
    scheduleScan();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      root.removeEventListener("focusin", revealFocusedSection);
      motion.removeEventListener("change", handleMotionChange);
      window.removeEventListener("scroll", scheduleScan);
      window.removeEventListener("resize", scheduleScan);
      sections.forEach((section) => delete section.dataset.revealState);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}

export function SectionReveal({ children }: { children: ReactNode }) {
  return (
    <div data-section-reveal className={styles.frame}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
