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
