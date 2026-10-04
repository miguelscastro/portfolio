import type { Certification, Education } from "./credential";
import type { Experience } from "./experience";
import type { HubApp } from "./hub-app";
import type { Locale } from "./locale";
import type { Profile } from "./profile";
import type { Project } from "./project";
import type { SkillGroup } from "./skill";

/**
 * Ports. The domain only states what it needs; where the data comes from
 * (static files, a CMS, a database) is an infrastructure concern.
 * Every read is resolved for a locale.
 */
export interface ProjectRepository {
  findAll(locale: Locale): Promise<readonly Project[]>;
}

export interface ExperienceRepository {
  findAll(locale: Locale): Promise<readonly Experience[]>;
}

export interface HubAppRepository {
  findAll(locale: Locale): Promise<readonly HubApp[]>;
}

export interface ProfileRepository {
  get(): Promise<Profile>;
}

export interface SkillRepository {
  findAll(locale: Locale): Promise<readonly SkillGroup[]>;
}

export interface CredentialRepository {
  certifications(locale: Locale): Promise<readonly Certification[]>;
  education(locale: Locale): Promise<readonly Education[]>;
}
