import { formatDate, type Locale } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { getEducationEntries } from "@/features/education/education-content";

export function EducationSection({ locale }: { locale: Locale }) {
  const educationEntries = getEducationEntries(locale);
  return (
    <section
      id="education"
      lang={locale}
      aria-labelledby="education-title"
      tabIndex={-1}
      className="mx-auto max-w-[90rem] scroll-mt-8 px-[var(--page-gutter)]"
    >
      <div className="space-y-8 border-t border-divider pt-8 pb-16">
        <SectionHeading index="02" title={locale === "it" ? "FORMAZIONE" : "EDUCATION"} id="education-title" />
        <ol className="space-y-3">
          {educationEntries.map((entry) => (
            <li
              key={entry.id}
              className="flex flex-col gap-4 bg-surface p-5 sm:flex-row sm:justify-between sm:gap-6 sm:p-7"
            >
              <div className="min-w-0 space-y-2">
                <h3 className="type-card">{entry.institution}</h3>
                <p className="type-body text-muted">{entry.course}</p>
              </div>
              <p className="type-label shrink-0 text-muted sm:min-w-44 sm:text-right">
                <time dateTime={entry.start.date}>{formatDate(entry.start.date, locale)}</time>
                {" — "}
                {entry.end === null ? (
                  locale === "it" ? "Presente" : "Present"
                ) : (
                  <time dateTime={entry.end.date}>{formatDate(entry.end.date, locale)}</time>
                )}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
