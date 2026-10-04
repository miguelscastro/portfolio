import type { HubApp } from "@/domain/hub-app";
import type { Experience } from "@/domain/experience";
import type { Project } from "@/domain/project";
import type {
  CredentialRepository,
  ExperienceRepository,
  HubAppRepository,
  ProfileRepository,
  ProjectRepository,
  SkillRepository,
} from "@/domain/repositories";
import { certifications, education } from "./content/credentials";
import { experiences } from "./content/experiences";
import { hubApps } from "./content/hub-apps";
import { profile } from "./content/profile";
import { projects } from "./content/projects";
import { skills } from "./content/skills";

/**
 * Adapters backed by in-repo content: each one picks the requested locale out
 * of the authored definitions. Swap for a CMS/DB adapter without touching callers.
 */
export const staticProjectRepository: ProjectRepository = {
  findAll: async (locale) =>
    projects.map(
      (p): Project => ({
        ...p,
        title: p.title[locale],
        description: p.description[locale],
        details: p.details[locale],
      }),
    ),
};

export const staticExperienceRepository: ExperienceRepository = {
  findAll: async (locale) =>
    experiences.map(
      (e): Experience => ({
        ...e,
        title: e.title[locale],
        company: e.company[locale],
        period: e.period[locale],
        highlights: e.highlights[locale],
      }),
    ),
};

export const staticHubAppRepository: HubAppRepository = {
  findAll: async (locale) =>
    hubApps.map(
      (a): HubApp => ({
        ...a,
        name: a.name[locale],
        description: a.description[locale],
      }),
    ),
};

export const staticProfileRepository: ProfileRepository = {
  get: async () => profile,
};

export const staticSkillRepository: SkillRepository = {
  findAll: async (locale) =>
    skills.map((g) => ({
      id: g.id,
      label: g.label[locale],
      items: g.items[locale],
    })),
};

export const staticCredentialRepository: CredentialRepository = {
  // Newest first.
  certifications: async (locale) =>
    [...certifications]
      .sort((a, b) => b.issuedAt.localeCompare(a.issuedAt))
      .map(({ badge, ...c }) => ({
        ...c,
        ...(badge && {
          badge: { ...badge, description: badge.description[locale] },
        }),
      })),
  education: async (locale) =>
    education.map((e) => ({ ...e, title: e.title[locale] })),
};
