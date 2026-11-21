import { SectionHeading } from "@/components/ui/section-heading";
import { educationEntries } from "@/features/education/education-content";

export function EducationSection() {
  return (
    <section
      id="education"
      lang="en"
      aria-labelledby="education-title"
      tabIndex={-1}
      className="mx-auto max-w-[90rem] scroll-mt-8 px-[var(--page-gutter)]"
    >
      <div className="space-y-8 border-t border-divider pt-8 pb-16">
        <SectionHeading index="02" title="EDUCATION" id="education-title" />
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
                <time dateTime={entry.start.date}>{entry.start.label}</time>
                {" — "}
                {entry.end === null ? (
                  "Present"
                ) : (
                  <time dateTime={entry.end.date}>{entry.end.label}</time>
                )}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
