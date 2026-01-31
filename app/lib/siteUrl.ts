function normalizeUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export function getSiteUrl() {
  const deployEnv = (process.env.VERCEL_ENV ?? process.env.DEPLOY_ENV ?? "development").toLowerCase();
  const isProductionDeploy = deployEnv === "production";

  const inferred =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (isProductionDeploy
      ? "https://siamodesign.com"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

  return normalizeUrl(inferred);
}

