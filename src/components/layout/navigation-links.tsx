import type { Locale } from "@/lib/i18n";
import Link from "next/link";
import { BouncyText } from "@/components/ui/bouncy-text";

export function NavigationLinks({ mobile = false, locale }: { mobile?: boolean; locale: Locale }) {
  const navigationItems = [
    { label: locale === "it" ? "Chi sono" : "About", href: "/#about" },
    { label: locale === "it" ? "Formazione" : "Education", href: "/#education" },
    { label: locale === "it" ? "Lavoro" : "Work", href: "/#work" },
    { label: locale === "it" ? "Progetti" : "Projects", href: undefined },
  ];
  return (
    <ul className={mobile ? "flex flex-col gap-1 p-3" : "flex items-center gap-4 lg:gap-8"}>
      {navigationItems.map(({ label, href }) => (
        <li key={label}>
          {href ? (
            <Link
              href={href}
              aria-label={label}
              data-bounce-trigger
              className={`type-navigation flex min-h-11 items-center no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground ${mobile ? "px-3" : ""}`}
            >
              <BouncyText text={label} />
            </Link>
          ) : (
            <span
              role="link"
              aria-disabled="true"
              className={`type-navigation flex min-h-11 items-center ${mobile ? "px-3" : ""}`}
            >
              {label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
