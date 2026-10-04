"use client";

import { ArrowUpRight, Info, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Certification } from "@/domain/credential";
import { formatMonth } from "../i18n/format";
import { useI18n } from "../i18n/I18nProvider";

export function BadgeGallery({
  certifications,
}: {
  certifications: readonly Certification[];
}) {
  const { dict } = useI18n();
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <>
      <ul className="flex flex-wrap gap-8 mt-12">
        {certifications.map((cert) =>
          cert.badge ? (
            <li key={cert.id}>
              <button
                onClick={() => setSelected(cert)}
                aria-haspopup="dialog"
                aria-label={`${cert.name} — ${dict.badges.clickHint}`}
                className="group flex flex-col items-center gap-3 cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.badge.image}
                  alt=""
                  className="w-40 h-40 sm:w-48 sm:h-48 object-contain transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-105"
                />
                <span className="inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors group-hover:text-white">
                  <Info className="w-4 h-4" />
                  {dict.badges.clickHint}
                </span>
              </button>
            </li>
          ) : null,
        )}
      </ul>
      {selected?.badge && (
        <BadgeDialog cert={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

function BadgeDialog({
  cert,
  onClose,
}: {
  cert: Certification;
  onClose: () => void;
}) {
  const { locale, dict } = useI18n();
  const badge = cert.badge!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={cert.name}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={onClose}
          aria-label={dict.badges.close}
          className="absolute p-2 rounded-sm top-4 right-4 bg-midnight hover:bg-gray-500 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center p-6 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={badge.image} alt={cert.name} className="w-40 h-40 object-contain" />
          <h3 className="mt-4 text-2xl font-bold text-white">{cert.name}</h3>
          <p className="mt-1 text-neutral-300">
            {dict.badges.issuedBy} {cert.issuer}
          </p>
          <p className="text-sm text-neutral-400">
            {dict.badges.issuedOn} {formatMonth(cert.issuedAt, locale)}
          </p>
          <p className="mt-4 text-neutral-400">{badge.description}</p>
          <a
            href={badge.verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 mt-6 font-medium hover-animation"
          >
            {dict.badges.verify} <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
