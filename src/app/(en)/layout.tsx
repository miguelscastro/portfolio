import type { Metadata, Viewport } from "next";
import { getDictionary } from "@/presentation/i18n";
import { RootDocument } from "@/presentation/RootDocument";

const { meta } = getDictionary("en");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  icons: { icon: "https://github.com/miguelscastro.png" },
};

export const viewport: Viewport = { themeColor: "#030412" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
