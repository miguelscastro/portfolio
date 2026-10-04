export interface TechTag {
  name: string;
  /** Public path to the technology logo. */
  logo: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  details: readonly string[];
  url: string;
  repository: string;
  /** Public path to a preview screenshot. */
  image: string;
  tags: readonly TechTag[];
}
