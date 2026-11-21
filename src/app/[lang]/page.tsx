import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { IntroductionSection } from "@/features/introduction/introduction-section";
import { AboutSection } from "@/features/introduction/about-section";
import { EducationSection } from "@/features/education/education-section";
import { ExperienceSection } from "@/features/experience/experience-section";
import { SectionReveal, SectionRevealGroup } from "@/components/ui/section-reveal";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <main>
      <IntroductionSection locale={lang} />
      <SectionRevealGroup>
        <SectionReveal>
          <AboutSection locale={lang} />
        </SectionReveal>
        <SectionReveal>
          <EducationSection locale={lang} />
        </SectionReveal>
        <SectionReveal>
          <ExperienceSection locale={lang} />
        </SectionReveal>
      </SectionRevealGroup>
    </main>
  );
}
