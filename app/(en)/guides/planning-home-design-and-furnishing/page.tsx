import type { Metadata } from "next";
import PlanningGuideArticle from "@/app/components/planning-guide/PlanningGuideArticle";
import { planningGuides, planningGuideLanguages } from "@/app/lib/planningGuide";
import { guideCopy, guideUI } from "./copy";

const title = "Planning Your Home’s Interior Design & Furnishing | Siamo Design";
const description = "Plan your home’s interior design and furnishing: what to prepare, which tasks to delegate, and how full-service and virtual design differ.";
const image = "/assets/mayan-sanctuary/main-lounge-3.webp";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: planningGuides.en.path, languages: planningGuideLanguages },
  openGraph: { type: "article", locale: "en_US", siteName: "Siamo Design",
    title, description, url: planningGuides.en.path, images: [{ url: image }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function PlanningGuidePage() {
  return <PlanningGuideArticle copy={guideCopy} ui={guideUI} locale="en" />;
}
