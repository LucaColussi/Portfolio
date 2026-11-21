import Image from "next/image";
import Link from "next/link";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { NavigationLinks } from "@/components/layout/navigation-links";

export function SiteHeader() {
  return (
    <header className="mx-auto max-w-[90rem] px-[var(--page-gutter)]">
      <div className="flex h-[var(--header-height)] items-center justify-between gap-4 border-b border-divider">
        <Link
          href="/"
          aria-label="Luca Colussi — Homepage"
          className="flex min-h-11 shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <span className="relative size-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/luca-colussi.jpeg"
              alt=""
              width={1737}
              height={3088}
              sizes="48px"
              className="absolute top-[-59.07%] left-[-8.29%] h-[207.25%] w-[116.58%] max-w-none"
            />
          </span>
          <span className="type-body font-bold">Luca Colussi</span>
        </Link>
        <nav aria-label="Navigazione principale" className="hidden md:block">
          <NavigationLinks />
        </nav>
        <MobileNavigation>
          <NavigationLinks mobile />
        </MobileNavigation>
      </div>
    </header>
  );
}
