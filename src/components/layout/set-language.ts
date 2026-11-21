"use server";

import { cookies } from "next/headers";
import { isLocale } from "@/lib/i18n";
import { localeCookieName } from "@/lib/locale";

export async function setLanguage(formData: FormData) {
  const locale = formData.get("locale");
  if (typeof locale !== "string" || !isLocale(locale)) return;

  (await cookies()).set(localeCookieName, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}
