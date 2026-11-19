import { IntroductionSection } from "@/features/introduction/introduction-section";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center gap-6 px-6 py-16 sm:px-12">
      <IntroductionSection />
    </main>
  );
}
