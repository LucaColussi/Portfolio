import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Luca Colussi — Portfolio",
  description: "Il portfolio personale di Luca Colussi: esperienze, formazione e progetti.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${courierPrime.variable} ${inter.variable}`}>
      <body className="antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
