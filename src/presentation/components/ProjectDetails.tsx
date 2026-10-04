"use client";

import { motion } from "motion/react";
import type { Project } from "@/domain/project";
import { useI18n } from "../i18n/I18nProvider";

interface ProjectDetailsProps {
  project: Project;
  closeModal: () => void;
}

export function ProjectDetails({ project, closeModal }: ProjectDetailsProps) {
  const { title, description, details, image, tags, repository, url } = project;
  const { dict } = useI18n();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          aria-label={dict.projects.close}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/close.svg" alt="" className="w-6 h-6" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {details.map((detail) => (
            <p key={detail} className="mb-3 font-normal text-neutral-400">
              {detail}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={tag.name}
                  src={tag.logo}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <div className="flex flex-col gap-4 items-end">
              <a
                className="inline-flex items-center gap-1 font-medium hover-animation cursor-pointer"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {dict.projects.viewProject}{" "}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/arrow-up.svg" alt="" className="size-4" />
              </a>
              <a
                className="inline-flex items-center gap-1 font-medium hover-animation cursor-pointer"
                href={repository}
                target="_blank"
                rel="noreferrer"
              >
                {dict.projects.viewRepository}{" "}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/arrow-up.svg" alt="" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
