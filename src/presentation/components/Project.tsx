"use client";

import { useState } from "react";
import type { Project as ProjectModel } from "@/domain/project";
import { useI18n } from "../i18n/I18nProvider";
import { ProjectDetails } from "./ProjectDetails";

interface ProjectProps {
  project: ProjectModel;
  setPreview: (image: string | null) => void;
}

export function Project({ project, setPreview }: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { dict } = useI18n();

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(project.image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{project.title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {project.tags.map((tag) => (
              <span key={tag.name}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          {dict.projects.learnMore}{" "}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/arrow-right.svg" alt="" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isOpen && (
        <ProjectDetails project={project} closeModal={() => setIsOpen(false)} />
      )}
    </>
  );
}
