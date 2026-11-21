import { cache } from "react";
import { cookies } from "next/headers";
import { isLocale, type Locale } from "@/lib/i18n";

export const localeCookieName = "portfolio-locale";

export const getLocale = cache(async (): Promise<Locale> => {
  const value = (await cookies()).get(localeCookieName)?.value;
  return value && isLocale(value) ? value : "en";
});
