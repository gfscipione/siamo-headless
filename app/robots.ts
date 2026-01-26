import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const deployEnv = (process.env.VERCEL_ENV ?? process.env.DEPLOY_ENV ?? "development").toLowerCase();
  const isProductionDeploy = deployEnv === "production";
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (isProductionDeploy
      ? "https://siamodesign.com"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ).replace(/\/+$/, "");

  if (!isProductionDeploy) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/sitemap_index.xml`],
  };
}
