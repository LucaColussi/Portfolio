import type { Locale } from "@/lib/i18n";
import Link from "next/link";
import { BouncyText } from "@/components/ui/bouncy-text";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { NavigationLinks } from "@/components/layout/navigation-links";

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="mx-auto max-w-[90rem] px-[var(--page-gutter)]">
      <div className="flex h-[var(--header-height)] items-center justify-between gap-2 sm:gap-4 border-b border-divider">
        <Link
          href={`/${locale}`}
          aria-label="Luca Colussi — Homepage"
          data-bounce-trigger
          className="flex min-h-11 w-fit shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <span className="type-brand">
            <BouncyText text="Luca Colussi" />
          </span>
        </Link>
        <nav aria-label={locale === "it" ? "Navigazione principale" : "Main navigation"} className="ml-auto hidden md:block">
          <NavigationLinks locale={locale} />
        </nav>
        <MobileNavigation locale={locale}>
          <NavigationLinks mobile locale={locale} />
        </MobileNavigation>
      </div>
    </header>
  );
}
