import { notFound } from "next/navigation";
import type { Locale } from "./localized";
import HomeView from "./HomeView";

export function LabHomepage({ locale = "es" }: { locale?: Locale }) {
  if (process.env.NODE_ENV === "production" && process.env.SIAMO_HOME_LAB_ENABLED !== "true") notFound();
  return <HomeView locale={locale} routeMode="lab" />;
}
