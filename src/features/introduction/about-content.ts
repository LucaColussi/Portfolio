import type { Locale } from "@/lib/i18n";
// Biographical source: https://www.linkedin.com/in/lucacolussi/
export const aboutContent = {
  introduction:
    "I study Computer Science at Ca’ Foscari University in Venice and work full-time at",
  employer: {
    name: "Sanmarco Informatica",
    url: "https://www.sanmarcoinformatica.com/",
  },
  paragraphs: [
    "Based in Mestre, I’m building my path in computer science alongside university studies and professional experience.",
    "This portfolio brings together my work, personal projects and the things I’m learning along the way.",
  ],
};

export function getAboutContent(locale: Locale) {
  if (locale === "en") return aboutContent;
  return {
    ...aboutContent,
    introduction: "Studio Informatica all’Università Ca’ Foscari di Venezia e lavoro a tempo pieno presso",
    paragraphs: [
      "Vivo a Mestre e sto costruendo il mio percorso in informatica, affiancando gli studi universitari all’esperienza professionale.",
      "Questo portfolio raccoglie il mio lavoro, i progetti personali e ciò che imparo lungo il percorso.",
    ],
  };
}
