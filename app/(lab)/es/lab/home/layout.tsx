import type { Metadata } from "next";
import { LabRootLayout } from "./LabRootLayout";
export const metadata: Metadata = {
  title: "Siamo — Homepage en desarrollo",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};
export default function HomeLabLayout({ children }: { children: React.ReactNode }) {
  return <LabRootLayout>{children}</LabRootLayout>;
}
