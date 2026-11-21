import type { Locale } from "@/lib/i18n";
// Source: https://github.com/LucaColussi/Resume/blob/main/main.pdf
export const experienceEntries = [
  {
    id: "sanmarco-informatica",
    company: "Sanmarco Informatica S.p.A.",
    role: "Software Engineer",
    periods: [
      {
        label: "Full-time",
        start: { date: "2026-10", label: "Oct 2026" },
        end: null,
      },
      {
        label: "Intern",
        start: { date: "2026-03", label: "Mar 2026" },
        end: { date: "2026-09", label: "Sep 2026" },
      },
    ],
    description:
      "Delivered an internal platform used by 700+ employees, with a Flutter mobile app, a React administration portal, and a Fastify backend. Integrated corporate systems, secure authentication, and targeted push notifications.",
    technologies: ["Flutter", "React", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Firebase"],
  },
  {
    id: "previnet",
    company: "Previnet S.p.A.",
    role: "Software Developer",
    periods: [
      {
        label: null,
        start: { date: "2022-05", label: "May 2022" },
        end: { date: "2022-06", label: "Jun 2022" },
      },
    ],
    description:
      "Built an internal web prototype that brought approximately 100 client-specific links and resources into a single page for 20 employees, with interactive sections for quick access to client information.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON", "Python"],
  },
] as const;

export function getExperienceEntries(locale: Locale) {
  return experienceEntries.map((entry) => ({
    ...entry,
    role: locale === "it"
      ? (entry.id === "sanmarco-informatica" ? "Software Engineer" : "Sviluppatore software")
      : entry.role,
    periods: entry.periods.map((period) => ({
      ...period,
      label: locale === "it" && period.label === "Intern" ? "Tirocinio" : period.label,
    })),
    description: locale === "en" ? entry.description : entry.id === "sanmarco-informatica"
      ? "Ho realizzato una piattaforma interna utilizzata da oltre 700 dipendenti, con un’app mobile Flutter, un portale di amministrazione React e un backend Fastify. Ho integrato sistemi aziendali, autenticazione sicura e notifiche push mirate."
      : "Ho sviluppato un prototipo web interno che raccoglieva circa 100 link e risorse specifiche dei clienti in un’unica pagina per 20 dipendenti, con sezioni interattive per accedere rapidamente alle informazioni.",
  }));
}
