import { getLocale } from "@/lib/locale";
import { IntroductionSection } from "@/features/introduction/introduction-section";
import { AboutSection } from "@/features/introduction/about-section";
import { EducationSection } from "@/features/education/education-section";
import { ExperienceSection } from "@/features/experience/experience-section";
import { SectionReveal, SectionRevealGroup } from "@/components/ui/section-reveal";

export default async function Home() {
  const lang = await getLocale();
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
