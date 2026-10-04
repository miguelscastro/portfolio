"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Experience } from "@/domain/experience";
import { useI18n } from "../i18n/I18nProvider";

export function Timeline({ data }: { data: readonly Experience[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { dict } = useI18n();

  useEffect(() => {
    if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const heightTransform = useTransform(smoothProgress, [0, 1], [0, height], {
    clamp: true,
  });
  const opacityTransform = useTransform(smoothProgress, [0, 0.05], [0, 1]);

  return (
    <div className="c-space section-spacing">
      <h2 className="text-heading">{dict.experience.title}</h2>

      <div ref={ref} className="relative pb-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <h3>{item.period}</h3>
                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                <h3 className="text-3xl text-neutral-500">{item.company}</h3>
              </div>
            </div>
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-xl font-bold text-left text-neutral-300 md:hidden">
                <h3>{item.period}</h3>
                <h3 className="text-lg text-neutral-400">{item.title}</h3>
                <h3 className="text-lg text-neutral-500">{item.company}</h3>
              </div>
              {item.highlights.map((highlight) => (
                <p key={highlight} className="mb-3 font-normal text-neutral-400">
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
