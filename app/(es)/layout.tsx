import type { Metadata } from "next";
import { playfairFont, poppinsFont } from "../fonts";
import "../globals.css";

const deployEnv = (process.env.VERCEL_ENV ?? process.env.DEPLOY_ENV ?? "development").toLowerCase();
const isProductionDeploy = deployEnv === "production";
const clarityProjectId = "v40q6xud75";
const shouldLoadClarity = process.env.NODE_ENV === "production";
const insightsScriptSrc = "https://insights-dashboard-six.vercel.app/insights-snippet.js";
const insightsEndpoint = "https://insights-dashboard-six.vercel.app/api/events";
const insightsSiteId = "siamo";
const insightsApiKey = process.env.NEXT_PUBLIC_INSIGHTS_API_KEY ?? "b1c0b6f2e9a44c1f8c8c0f6a3d9b2a1c9f4d7e2a6b8c1d0e3f5a7b9c2d4e6f8a";
const shouldLoadInsights = insightsApiKey !== "TU_API_KEY";
const insightsInitScript = `(function(){var s=document.createElement('script');s.src=${JSON.stringify(insightsScriptSrc)};s.async=true;s.onload=function(){if(window.InsightsTracker&&typeof window.InsightsTracker.init==='function'){window.InsightsTracker.init({endpoint:${JSON.stringify(insightsEndpoint)},siteId:${JSON.stringify(insightsSiteId)},apiKey:${JSON.stringify(insightsApiKey)}});}};document.head.appendChild(s);}());`;
const inferredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (isProductionDeploy
    ? "https://siamodesign.com"
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(inferredSiteUrl),
  title: {
    default: "Siamo Design — Interior Design Studio",
    template: "%s | Siamo Design",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  description: "Interior design studio crafting modern, livable spaces across the Riviera Maya.",
  openGraph: {
    type: "website",
    siteName: "Siamo Design",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    ...(isProductionDeploy
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        {shouldLoadInsights && (
          <script
            dangerouslySetInnerHTML={{
              __html: insightsInitScript,
            }}
          />
        )}
        {shouldLoadClarity && (
          <script
            dangerouslySetInnerHTML={{
              __html:
                "(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script','" +
                clarityProjectId +
                "');",
            }}
          />
        )}
      </head>
      <body
        className={`${playfairFont.variable} ${poppinsFont.variable} ${poppinsFont.className} antialiased`}
        style={{ fontFamily: poppinsFont.style.fontFamily }}
      >
        {children}
      </body>
    </html>
  );
}
