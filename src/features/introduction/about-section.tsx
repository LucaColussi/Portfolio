import type { Locale } from "@/lib/i18n";
import { BouncyText } from "@/components/ui/bouncy-text";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAboutContent } from "@/features/introduction/about-content";
import styles from "./about-section.module.css";

export function AboutSection({ locale }: { locale: Locale }) {
  const aboutContent = getAboutContent(locale);
  return (
    <section
      id="about"
      lang={locale}
      aria-labelledby="about-title"
      tabIndex={-1}
      className="mx-auto max-w-[90rem] scroll-mt-8 px-[var(--page-gutter)]"
    >
      <div className="grid gap-8 border-t border-divider pt-8 pb-16 md:grid-cols-2 md:gap-6">
        <SectionHeading index="01" title={locale === "it" ? "CHI SONO" : "ABOUT"} id="about-title" />
        <div className="type-body space-y-5">
          <p className="font-bold">
            {aboutContent.introduction}{" "}
            <a
              href={aboutContent.employer.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={aboutContent.employer.name}
              data-bounce-trigger
              className={styles.employerLink}
            >
              <BouncyText text={aboutContent.employer.name} />
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
