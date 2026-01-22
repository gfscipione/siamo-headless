import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: App Router no longer supports `i18n` in next.config.*.
  // We handle locales via routes (e.g. `/es/...`) and optional middleware.
};

export default nextConfig;
