"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";
import type { Project as ProjectModel } from "@/domain/project";
import { Project } from "../components/Project";
import { useI18n } from "../i18n/I18nProvider";

export function Projects({ projects }: { projects: readonly ProjectModel[] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const [preview, setPreview] = useState<string | null>(null);
  const { dict } = useI18n();

  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="projects"
    >
      <h2 className="text-heading">{dict.projects.title}</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full">
        {projects.map((project) => (
          <Project key={project.id} project={project} setPreview={setPreview} />
        ))}
        {preview && (
          // eslint-disable-next-line @next/next/no-img-element
          <motion.img
            alt=""
            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
            src={preview}
            style={{ x: springX, y: springY }}
          />
        )}
      </div>
    </section>
  );
}
