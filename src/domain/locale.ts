export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** A value that exists once per supported locale. */
export type Localized<T> = Record<Locale, T>;

export const localized = <T>(en: T, pt: T): Localized<T> => ({ en, pt });
