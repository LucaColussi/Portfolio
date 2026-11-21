import styles from "./introduction-section.module.css";

export function IntroductionSection() {
  return (
    <section
      aria-labelledby="introduction-title"
      className="flex min-h-[calc(100svh-var(--header-height))] flex-col items-center justify-center gap-[var(--text-lead)] px-4 py-12 sm:px-6"
    >
      <h1
        id="introduction-title"
        className={`type-display text-center ${styles.name}`}
      >
        <span className="sr-only">Luca Colussi</span>
        <span aria-hidden="true">
          <span className="block whitespace-nowrap sm:inline">
            /<span className="font-sans">ˈ</span>lu.ka
          </span>{" "}
          <span className="block whitespace-nowrap sm:inline">
            ko<span className="font-sans">ˈ</span>lus.si/
          </span>
        </span>
      </h1>
      <p
        lang="en"
        className={`type-lead max-w-3xl text-center text-balance ${styles.description}`}
      >
        An archive of work, projects
        <br /> and things I spend time on.
      </p>
    </section>
  );
}
