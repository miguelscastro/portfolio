import type { Localized } from "./locale";

/** What gets registered: texts exist in every locale. */
export interface HubAppDefinition {
  id: string;
  name: Localized<string>;
  description: Localized<string>;
  tags: readonly string[];
  /** Where the app lives: its own deployment/domain. */
  url: string;
}

/** A hub app resolved for one locale. */
export interface HubApp {
  id: string;
  name: string;
  description: string;
  tags: readonly string[];
  url: string;
}
