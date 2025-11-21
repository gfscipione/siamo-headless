import type { Metadata } from "next";
import { playfairFont, poppinsFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Siamo Design — Interior Design Studio",
    template: "%s | Siamo Design",
  },
  description:
    "Interior design studio crafting modern, livable spaces across the Riviera Maya.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Siamo Design",
    url: "/",
    // Si tienes una imagen OG global, colócala en /public/og/home.jpg y descomenta la línea de abajo.
    // images: ["/og/home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairFont.variable} ${poppinsFont.variable} ${poppinsFont.className} antialiased`}
        style={{ fontFamily: poppinsFont.style.fontFamily }}
      >
        {children}
      </body>
    </html>
  );
}
