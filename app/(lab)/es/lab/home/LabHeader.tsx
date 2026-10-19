import type { Ref } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import { getContent, type Locale, type RouteMode } from "./localized";

export default function LabHeader({ navRef, locale = "es", routeMode = "lab" }: { navRef: Ref<HTMLElement>; locale?: Locale; routeMode?: RouteMode }) {
  return <SiteHeader navRef={navRef} copy={getContent(locale, routeMode)} locale={locale} externalScrollControl nativeLinks={routeMode === "lab"} />;
}
