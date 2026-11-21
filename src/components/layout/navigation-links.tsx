import Link from "next/link";
import { BouncyText } from "@/components/ui/bouncy-text";

const navigationItems: { label: string; href?: string }[] = [
  { label: "About", href: "/#about" },
  { label: "Education", href: "/#education" },
  { label: "Work", href: "/#work" },
  { label: "Projects" },
];

export function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <ul className={mobile ? "flex flex-col gap-1 p-3" : "flex items-center gap-6 lg:gap-12"}>
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
