import type { Locale } from "@/lib/i18n";
// Source: education entries at https://www.linkedin.com/in/lucacolussi/
export const educationEntries = [
  {
    id: "ca-foscari",
    institution: "Ca’ Foscari University of Venice",
    course: "Bachelor’s Degree in Computer Science",
    start: { date: "2023", label: "2023" },
    end: null,
  },
  {
    id: "zuccante",
    institution: 'I.T.I.S. "C. Zuccante"',
    course: "High School Diploma in Computer Science",
    start: { date: "2018-09", label: "Sep 2018" },
    end: { date: "2023-06", label: "Jun 2023" },
  },
] as const;

export function getEducationEntries(locale: Locale) {
  return educationEntries.map((entry) => ({
    ...entry,
    institution: locale === "it" && entry.id === "ca-foscari"
      ? "Università Ca’ Foscari Venezia" : entry.institution,
    course: locale === "it"
      ? (entry.id === "ca-foscari" ? "Laurea in Informatica" : "Diploma in Informatica")
      : entry.course,
  }));
}
