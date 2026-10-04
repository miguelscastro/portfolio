"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { defaultLocale, locales } from "@/domain/locale";
import { localeHref } from "../i18n";
import { useI18n } from "../i18n/I18nProvider";

function Navigation() {
  const { locale, dict } = useI18n();
  const { nav } = dict;
  const links = [
    { href: "#home", label: nav.home },
    { href: "#about", label: nav.about },
    { href: "#hub", label: nav.hub },
    { href: "#projects", label: nav.projects },
    { href: "#experience", label: nav.experience },
    { href: "#badges", label: nav.badges },
  ];
  // With two locales the switcher points at the other one.
  const other = locales.find((l) => l !== locale) ?? defaultLocale;

  return (
    <ul className="nav-ul">
      {links.map((link) => (
        <li key={link.href} className="nav-li">
          <a className="nav-link" href={link.href}>
            {link.label}
          </a>
        </li>
      ))}
      <li className="nav-li">
        <a
          className="nav-link"
          href={localeHref(other)}
          hrefLang={other}
          lang={other}
        >
          {nav.switchLanguage}
        </a>
      </li>
    </ul>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, dict } = useI18n();

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href={localeHref(locale)}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Miguel
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={dict.nav.menu}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt=""
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
}
