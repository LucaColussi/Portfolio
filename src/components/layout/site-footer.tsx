import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Locale } from "@/lib/i18n";
import { CurrentYear } from "@/components/ui/current-year";

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucacolussi/" },
  { label: "GitHub", href: "https://github.com/LucaColussi" },
  { label: "Email", href: "mailto:luca.colussi@gmail.com" },
];

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="mx-auto max-w-360 px-(--page-gutter)">
      <div className="flex flex-col gap-4 border-t border-divider py-8 sm:min-h-26 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-6">
        <p className="type-label text-muted">© <CurrentYear /></p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <nav aria-label={locale === "it" ? "Contatti e profili social" : "Contacts and social profiles"}>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {contactLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("https:") ? "_blank" : undefined}
                    rel={href.startsWith("https:") ? "noopener noreferrer" : undefined}
                    className="type-label flex min-h-11 items-center font-bold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </footer>
  );
}
