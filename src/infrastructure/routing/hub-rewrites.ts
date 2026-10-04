import type { HubAppDefinition } from "../../domain/hub-app";

interface Rewrite {
  source: string;
  destination: string;
}

/**
 * Turns every mounted hub app into rewrites that proxy `/<path>` and
 * `/<path>/*` to the app's own deployment. The upstream is expected to be
 * built with a matching basePath (e.g. `basePath: "/finance"`).
 */
export function buildHubRewrites(
  apps: readonly Pick<HubAppDefinition, "target">[],
  env: Record<string, string | undefined>,
): Rewrite[] {
  return apps.flatMap((app) => {
    if (app.target.kind !== "mounted") return [];
    const { path, upstream } = app.target;
    const origin = (env[upstream.envVar] ?? upstream.devOrigin).replace(/\/$/, "");
    return [
      { source: path, destination: `${origin}${path}` },
      { source: `${path}/:path*`, destination: `${origin}${path}/:path*` },
    ];
  });
}
