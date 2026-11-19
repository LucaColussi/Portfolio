export function IntroductionSection() {
  return (
    <section aria-labelledby="introduction-title" className="flex flex-col gap-6">
      <p className="text-sm text-foreground/60">Portfolio</p>
      <h1
        id="introduction-title"
        className="text-4xl font-bold tracking-tight sm:text-6xl"
      >
        Luca Colussi
      </h1>
      <p className="max-w-xl text-base leading-7 text-foreground/75">
        Uno spazio per esperienze, formazione e progetti. Sito in costruzione.
      </p>
    </section>
  );
}
