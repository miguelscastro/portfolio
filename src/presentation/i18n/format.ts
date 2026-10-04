import type { Locale } from "@/domain/locale";

const intlLocale: Record<Locale, string> = { en: "en-US", pt: "pt-BR" };

/** "2026-09" → "September 2026" / "setembro de 2026". */
export function formatMonth(yearMonth: string, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale[locale], {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${yearMonth}-01T00:00:00Z`));
}
