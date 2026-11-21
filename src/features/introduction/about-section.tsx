import { Fragment } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutContent } from "@/features/introduction/about-content";
import styles from "./about-section.module.css";

export function AboutSection() {
  const employerWords = Array.from(aboutContent.employer.name.matchAll(/\S+/g));

  return (
    <section
      id="about"
      lang="en"
      aria-labelledby="about-title"
      tabIndex={-1}
      className="mx-auto max-w-[90rem] scroll-mt-8 px-[var(--page-gutter)]"
    >
      <div className="grid gap-8 border-t border-divider pt-8 pb-16 md:grid-cols-2 md:gap-6">
        <SectionHeading index="01" title="ABOUT" id="about-title" />
        <div className="type-body space-y-5">
          <p className="font-bold">
            {aboutContent.introduction}{" "}
            <a
              href={aboutContent.employer.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={aboutContent.employer.name}
              className={styles.employerLink}
            >
              <span aria-hidden="true">
                {employerWords.map((word, wordIndex) => (
                  <Fragment key={word.index}>
                    {wordIndex > 0 ? " " : null}
                    <span className={styles.word}>
                      {Array.from(word[0]).map((letter, letterIndex) => (
                        <span
                          key={letterIndex}
                          className={styles.letter}
                          style={{ animationDelay: `${(word.index + letterIndex) * 18}ms` }}
                        >
                          {letter}
                        </span>
                      ))}
                    </span>
                  </Fragment>
                ))}
              </span>
            </a>
            .
          </p>
          <div className="space-y-7 text-secondary">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
