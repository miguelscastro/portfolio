import type { Locale } from "@/domain/locale";
import type {
  CredentialRepository,
  ExperienceRepository,
  HubAppRepository,
  ProfileRepository,
  ProjectRepository,
  SkillRepository,
} from "@/domain/repositories";

/** One small function per use case, each depending only on the port it needs. */
export const listProjects = (repo: ProjectRepository) => (locale: Locale) =>
  repo.findAll(locale);
export const listExperiences =
  (repo: ExperienceRepository) => (locale: Locale) => repo.findAll(locale);
export const listHubApps = (repo: HubAppRepository) => (locale: Locale) =>
  repo.findAll(locale);
export const getProfile = (repo: ProfileRepository) => () => repo.get();
export const listSkills = (repo: SkillRepository) => (locale: Locale) =>
  repo.findAll(locale);
export const listCertifications =
  (repo: CredentialRepository) => (locale: Locale) =>
    repo.certifications(locale);
export const listEducation = (repo: CredentialRepository) => (locale: Locale) =>
  repo.education(locale);
