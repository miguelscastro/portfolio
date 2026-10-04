import type { NextConfig } from "next";
// Relative imports on purpose: the config is loaded before tsconfig aliases exist.
import { hubApps } from "./src/infrastructure/content/hub-apps";
import { buildHubRewrites } from "./src/infrastructure/routing/hub-rewrites";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Every hub app mounted under a path is proxied from the same registry that
  // renders the Hub section, so adding an app never touches this file.
  rewrites: async () => buildHubRewrites(hubApps, process.env),
};

export default nextConfig;
