import type { Metadata } from "next";
import { playfairFont, poppinsFont } from "../fonts";
import "../globals.css";

const deployEnv = (process.env.VERCEL_ENV ?? process.env.DEPLOY_ENV ?? "development").toLowerCase();
const isProductionDeploy = deployEnv === "production";
const clarityProjectId = "v40q6xud75";
const shouldLoadClarity = process.env.NODE_ENV === "production";
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
