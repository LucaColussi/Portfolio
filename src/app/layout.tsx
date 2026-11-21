import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";
import { getLocale } from "@/lib/locale";

const courierPrime = localFont({
  src: [
    { path: "./fonts/courier-prime-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/courier-prime-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-courier-prime",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-variable.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLocale();
  return {
    title: "Luca Colussi - Portfolio",
    description: lang === "it"
      ? "Il portfolio personale di Luca Colussi: esperienze, formazione e progetti."
      : "Luca Colussi’s personal portfolio: experience, education, and projects.",
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lang = await getLocale();
  return (
    <html lang={lang} data-scroll-behavior="smooth" className={`${courierPrime.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Script src="/scripts/reset-scroll-on-reload.js" strategy="beforeInteractive" />
        <SiteHeader locale={lang} />
        {children}
        <SiteFooter locale={lang} />
      </body>
    </html>
  );
}
