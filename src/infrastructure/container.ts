import {
  getProfile,
  listCertifications,
  listEducation,
  listExperiences,
  listHubApps,
  listProjects,
  listSkills,
} from "@/application/use-cases";
import {
  staticCredentialRepository,
  staticExperienceRepository,
  staticHubAppRepository,
  staticProfileRepository,
  staticProjectRepository,
  staticSkillRepository,
} from "./static-repositories";

/** Composition root: the only place that wires adapters into use cases. */
export const useCases = {
  listProjects: listProjects(staticProjectRepository),
  listExperiences: listExperiences(staticExperienceRepository),
  listHubApps: listHubApps(staticHubAppRepository),
  getProfile: getProfile(staticProfileRepository),
  listSkills: listSkills(staticSkillRepository),
  listCertifications: listCertifications(staticCredentialRepository),
  listEducation: listEducation(staticCredentialRepository),
};
