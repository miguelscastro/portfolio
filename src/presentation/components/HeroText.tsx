"use client";

import { motion } from "motion/react";
import { useI18n } from "../i18n/I18nProvider";
import { FlipWords } from "./FlipWords";

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

function Reveal({
  delay,
  className,
  as = "p",
  children,
}: {
  delay: number;
  className?: string;
  as?: "p" | "h1" | "div";
  children: React.ReactNode;
}) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

export function HeroText() {
  const { dict } = useI18n();
  const { hero } = dict;
  const words = hero.words;

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <div className="flex-col hidden md:flex c-space">
        <Reveal as="h1" delay={1} className="text-4xl font-medium">
          {hero.greeting}
        </Reveal>
        <div className="flex flex-col items-start">
          <Reveal delay={1.2} className="text-5xl font-medium text-neutral-300">
            {hero.taglineTop} <br /> {hero.taglineBottom}
          </Reveal>
          <Reveal as="div" delay={1.5}>
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </Reveal>
          <Reveal delay={1.8} className="text-4xl font-medium text-neutral-300">
            {hero.suffix}
          </Reveal>
        </div>
      </div>

      <div className="flex flex-col space-y-6 md:hidden">
        <Reveal delay={1} className="text-4xl font-medium">
          {hero.greetingMobile}
        </Reveal>
        <div>
          <Reveal delay={1.2} className="text-5xl font-black text-neutral-300">
            {hero.mobileLead}
          </Reveal>
          <Reveal as="div" delay={1.5}>
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </Reveal>
          <Reveal delay={1.8} className="text-4xl font-black text-neutral-300">
            {hero.mobileSuffix}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
