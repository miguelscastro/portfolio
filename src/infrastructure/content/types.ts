import type { Badge, Certification, Education } from "@/domain/credential";
import type { SkillGroup } from "@/domain/skill";
import type { Localized } from "@/domain/locale";
import type { Project, TechTag } from "@/domain/project";
import type { Experience } from "@/domain/experience";

/** Content as authored: translatable fields hold one value per locale. */
export interface ProjectDefinition
  extends Omit<Project, "title" | "description" | "details"> {
  title: Localized<string>;
  description: Localized<string>;
  details: Localized<readonly string[]>;
}

export interface ExperienceDefinition
  extends Omit<Experience, "title" | "company" | "period" | "highlights"> {
  title: Localized<string>;
  company: Localized<string>;
  period: Localized<string>;
  highlights: Localized<readonly string[]>;
}

export type { TechTag };

export interface CertificationDefinition
  extends Omit<Certification, "badge"> {
  badge?: Omit<Badge, "description"> & { description: Localized<string> };
}

export interface EducationDefinition extends Omit<Education, "title"> {
  title: Localized<string>;
}

export interface SkillGroupDefinition extends Omit<SkillGroup, "label" | "items"> {
  label: Localized<string>;
  items: Localized<readonly string[]>;
}
