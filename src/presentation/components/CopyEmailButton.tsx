"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const { dict } = useI18n();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="btn"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/copy-done.svg" className="w-5" alt="" />
            {dict.about.emailCopied}
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/copy.svg" className="w-5" alt="" />
            {dict.about.copyEmail}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
