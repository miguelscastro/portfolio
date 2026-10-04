import type { Locale } from "@/domain/locale";
import { en } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";
import type { Dictionary } from "./dictionaries/types";

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

/** English lives at the root, other locales under their own prefix. */
export const localeHref = (locale: Locale): string =>
  locale === "en" ? "/" : `/${locale}`;

export type { Dictionary };
