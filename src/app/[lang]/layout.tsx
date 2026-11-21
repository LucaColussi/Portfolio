import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "../globals.css";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";

const courierPrime = localFont({
  src: [
    { path: "../fonts/courier-prime-regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/courier-prime-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-courier-prime",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter-variable.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Luca Colussi — Portfolio",
    description: lang === "it"
      ? "Il portfolio personale di Luca Colussi: esperienze, formazione e progetti."
      : "Luca Colussi’s personal portfolio: experience, education, and projects.",
    alternates: { languages: { it: "/it", en: "/en" } },
  };
}

export default async function RootLayout({ children, params }: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${courierPrime.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Script src="/scripts/reset-scroll-on-reload.js" strategy="beforeInteractive" />
        <SiteHeader locale={lang} />
        {children}
        <SiteFooter locale={lang} />
      </body>
    </html>
  );
}
