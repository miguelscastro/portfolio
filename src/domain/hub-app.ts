import type { Localized } from "./locale";

/** Where a hub app is served from. */
export type HubAppTarget =
  /** Lives under this site's domain (e.g. /finance) and is proxied to `upstream`. */
  | { kind: "mounted"; path: `/${string}`; upstream: Upstream }
  /** Lives on its own domain; the hub just links to it. */
  | { kind: "external"; url: string };

export interface Upstream {
  /** Environment variable holding the deployed origin, e.g. https://x.vercel.app */
  envVar: string;
  /** Origin used when the variable is not set (local development). */
  devOrigin: string;
}

/** What gets registered: texts exist in every locale. */
export interface HubAppDefinition {
  id: string;
  name: Localized<string>;
  description: Localized<string>;
  tags: readonly string[];
  target: HubAppTarget;
}

/** A hub app resolved for one locale. */
export interface HubApp {
  id: string;
  name: string;
  description: string;
  tags: readonly string[];
  target: HubAppTarget;
}

/** The URL a visitor should follow to open the app. */
export function hubAppHref(app: Pick<HubApp, "target">): string {
  return app.target.kind === "mounted" ? app.target.path : app.target.url;
}

export function isExternal(app: Pick<HubApp, "target">): boolean {
  return app.target.kind === "external";
}
