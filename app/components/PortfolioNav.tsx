import type { CSSProperties } from "react";
import SiteHeader from "./SiteHeader";
import { getContent } from "../(lab)/es/lab/home/localized";

type PortfolioNavProps = {
  lang?: "en" | "es";
  styleVars: CSSProperties;
  isHero?: boolean; // allow hero contrast (e.g., services) without affecting other pages
  variant?: "default" | "services" | "gtku";
  langHref?: string;
  getToKnowUsHref?: string;
  servicesHref?: string;
  portfolioHref?: string;
  ctaHref?: string;
  hideCta?: boolean;
  logoOnly?: boolean;
  labels?: {
    getToKnowUs?: string;
    services?: string;
    portfolio?: string;
    langDesktop?: string;
    langMobile?: string;
    cta?: string;
    menuOpen?: string;
    menuClose?: string;
    follow?: string;
    menuNavigation?: string;
  };
};

// Compatibility adapter: page-specific destinations and contrast, one shared public header.
export default function PortfolioNav({
  lang = "en", isHero = false, variant = "default", langHref,
  getToKnowUsHref, servicesHref, portfolioHref, ctaHref,
  hideCta = false, logoOnly = false,
}: PortfolioNavProps) {
  const copy = getContent(lang, "public");
  const destinations = [getToKnowUsHref, servicesHref, portfolioHref];
  return <SiteHeader locale={lang} hideCta={hideCta} logoOnly={logoOnly}
    contrast={isHero && variant !== "gtku" ? "light" : "dark"}
    copy={{ ...copy,
      languageHref: langHref ?? copy.languageHref,
      navigation: copy.navigation.map((item, index) => ({ ...item, href: destinations[index] ?? item.href })),
      hero: { ...copy.hero, projectAction: { ...copy.hero.projectAction, href: ctaHref ?? copy.hero.projectAction.href } },
    }} />;
}
