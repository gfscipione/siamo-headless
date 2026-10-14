import type { Metadata } from "next";
import { LabRootLayout } from "../../es/lab/home/LabRootLayout";
export const metadata: Metadata = {
  title: "Siamo — Homepage in development",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};
export default function EnglishHomeLabLayout({ children }: { children: React.ReactNode }) {
  return <LabRootLayout locale="en">{children}</LabRootLayout>;
}
