import { SectionHeading } from "@/components/ui/section-heading";
import { experienceEntries } from "@/features/experience/experience-content";

export function ExperienceSection() {
  return (
    <section
      id="work"
      lang="en"
      aria-labelledby="work-title"
      tabIndex={-1}
      className="mx-auto max-w-[90rem] scroll-mt-8 px-[var(--page-gutter)]"
    >
      <div className="space-y-8 border-t border-divider pt-8 pb-16">
        <SectionHeading index="03" title="WORK" id="work-title" />
        <ol className="space-y-3">
          {experienceEntries.map((entry) => (
            <li
              key={entry.id}
              className="grid gap-4 bg-surface p-5 sm:gap-6 sm:p-7 lg:grid-cols-[9rem_minmax(0,1fr)_minmax(0,2fr)] xl:grid-cols-[10.5rem_minmax(0,1fr)_minmax(0,2.13fr)]"
            >
              <div className="type-label space-y-4 text-muted">
                {entry.periods.map((period) => (
                  <div key={period.start.date}>
                    <p>
                      <time className="whitespace-nowrap" dateTime={period.start.date}>
                        {period.start.label}
                      </time>
                      {" — "}
                      {period.end === null ? (
                        "Present"
                      ) : (
                        <time className="whitespace-nowrap" dateTime={period.end.date}>
                          {period.end.label}
                        </time>
                      )}
                    </p>
                    {period.label && <p className="mt-1">{period.label}</p>}
                  </div>
                ))}
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="type-card">{entry.role}</h3>
                <p className="type-label text-muted">{entry.company}</p>
              </div>
              <div className="min-w-0 space-y-4">
                <p className="type-body text-muted">{entry.description}</p>
                <ul aria-label="Technologies" className="flex flex-wrap gap-2">
                  {entry.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="type-label inline-flex items-center justify-center rounded-full border border-border-strong bg-surface-raised px-3 py-1 text-[#ccc]"
                    >
                      <span className="relative top-[0.2em]">{technology}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
