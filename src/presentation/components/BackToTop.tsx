"use client";

import { LucideArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

export function BackToTop() {
  const [atBottom, setAtBottom] = useState(false);
  const { dict } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      const reachedBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 50;
      setAtBottom(reachedBottom);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-10 right-6 z-50 p-3 rounded-full bg-indigo text-white shadow-md hover:bg-royal cursor-pointer transition-all duration-300 ${
        atBottom ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label={dict.backToTop}
    >
      <LucideArrowUp className="w-5 h-5" />
    </button>
  );
}
