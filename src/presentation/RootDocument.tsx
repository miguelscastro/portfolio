import { Funnel_Display } from "next/font/google";
import type { Locale } from "@/domain/locale";
import { getDictionary } from "./i18n";
import "../app/globals.css";

const funnel = Funnel_Display({ subsets: ["latin"], variable: "--font-funnel" });

/** Shared <html>/<body> shell; each locale's root layout renders it. */
export function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={getDictionary(locale).meta.htmlLang} className={funnel.variable}>
      <body>{children}</body>
    </html>
  );
}
