import { locales, type Locale } from "@/lib/i18n";
import { BouncyText } from "@/components/ui/bouncy-text";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <nav aria-label={locale === "it" ? "Lingua" : "Language"}>
      <ul className="type-label flex items-center gap-1">
        {locales.map((language, index) => (
          <li key={language} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden="true" className="text-muted">/</span>}
            <a
              href={`/${language}`}
              hrefLang={language}
              lang={language}
              aria-label={language === "it" ? "Italiano" : "English"}
              aria-current={language === locale ? "page" : undefined}
              data-bounce-trigger={language !== locale ? "" : undefined}
              className={`flex min-h-11 min-w-8 items-center justify-center no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${language === locale ? "text-foreground" : "text-foreground/40"}`}
            >
              <BouncyText text={language.toUpperCase()} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
