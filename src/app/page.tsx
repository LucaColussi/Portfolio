import { IntroductionSection } from "@/features/introduction/introduction-section";
import { AboutSection } from "@/features/introduction/about-section";
import { EducationSection } from "@/features/education/education-section";

export default function Home() {
  return (
    <main>
      <IntroductionSection />
      <AboutSection />
      <EducationSection />
    </main>
  );
}
