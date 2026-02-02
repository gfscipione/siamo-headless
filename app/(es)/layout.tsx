import type { Metadata } from "next";
import { playfairFont, poppinsFont } from "../fonts";
import "../globals.css";

const deployEnv = (process.env.VERCEL_ENV ?? process.env.DEPLOY_ENV ?? "development").toLowerCase();
const isProductionDeploy = deployEnv === "production";
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
      <body
        className={`${playfairFont.variable} ${poppinsFont.variable} ${poppinsFont.className} antialiased`}
        style={{ fontFamily: poppinsFont.style.fontFamily }}
      >
        {children}
      </body>
    </html>
  );
}

