import { IntroductionSection } from "@/features/introduction/introduction-section";
import { AboutSection } from "@/features/introduction/about-section";
import { EducationSection } from "@/features/education/education-section";
import { ExperienceSection } from "@/features/experience/experience-section";
import { SectionReveal, SectionRevealGroup } from "@/components/ui/section-reveal";

export default function Home() {
  return (
    <main>
      <IntroductionSection />
      <SectionRevealGroup>
        <SectionReveal>
          <AboutSection />
        </SectionReveal>
        <SectionReveal>
          <EducationSection />
        </SectionReveal>
        <SectionReveal>
          <ExperienceSection />
        </SectionReveal>
      </SectionRevealGroup>
    </main>
  );
}
