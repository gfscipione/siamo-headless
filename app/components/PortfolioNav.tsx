"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useState } from "react";
import { playfairFont } from "../fonts";
import QuestionnaireCtaLink from "./QuestionnaireCtaLink";

type PortfolioNavProps = {
  styleVars: CSSProperties;
  isHero?: boolean; // allow hero contrast (e.g., services) without affecting other pages
  variant?: "default" | "services" | "gtku";
  langHref?: string;
  getToKnowUsHref?: string;
  servicesHref?: string;
  portfolioHref?: string;
  ctaHref?: string;
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
  };
};

export default function PortfolioNav({
  styleVars,
  isHero = false,
  variant = "default",
  langHref = "/es/",
  getToKnowUsHref = "/get-to-know-us",
  servicesHref = "/services",
  portfolioHref = "/portfolio",
  ctaHref = "/questionnaire/",
  labels,
}: PortfolioNavProps) {
  const [navSolid, setNavSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const getToKnowUsLabel = labels?.getToKnowUs ?? "GET TO KNOW US";
  const servicesLabel = labels?.services ?? "SERVICES";
  const portfolioLabel = labels?.portfolio ?? "PORTFOLIO";
  const langDesktopLabel = labels?.langDesktop ?? "ESPAÑOL";
  const langMobileLabel = labels?.langMobile ?? "ES";
  const ctaLabel = labels?.cta ?? "LET'S TALK";
  const menuOpenLabel = labels?.menuOpen ?? "MENU";
  const menuCloseLabel = labels?.menuClose ?? "CLOSE";
  const followLabel = labels?.follow ?? "Follow";

  useEffect(() => {
    // Keep it simple: listen only to the viewport scroll.
    const heroEl =
      typeof document !== "undefined"
        ? (document.querySelector<HTMLElement>(".services-hero") ||
            document.querySelector<HTMLElement>(".portfolio-hero-block"))
        : null;

    const handleScroll = () => {
      // Services está desplazando el BODY (scrollTop) aunque window.scrollY quede en 0
      const yFromWindow = window.scrollY || 0;
      const yFromDoc = document.documentElement.scrollTop || 0;
      const yFromBody = document.body.scrollTop || 0;
      const heroScrolled =
        heroEl?.getBoundingClientRect
          ? heroEl.getBoundingClientRect().top < -10
          : false;
      setNavSolid(Math.max(yFromWindow, yFromDoc, yFromBody) > 10 || heroScrolled);
    };

    handleScroll();
    const cleanupFns: Array<() => void> = [];

    window.addEventListener("scroll", handleScroll, { passive: true });
    cleanupFns.push(() => window.removeEventListener("scroll", handleScroll));

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  useEffect(() => {
    // lock body scroll when mobile menu is open
    const body = typeof document !== "undefined" ? document.body : null;
    if (!body) return;
    if (!menuOpen) return;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <nav
      className={`site-nav portfolio-nav ${navSolid ? "is-solid" : ""} ${menuOpen ? "is-menu-open" : ""} ${
        isHero && !navSolid ? "is-hero" : ""
      } ${variant !== "default" ? `nav-${variant}` : ""}`}
      aria-label="Barra de navegación"
      style={styleVars}
    >
      <div className="site-nav__inner">
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="label">{menuOpen ? menuCloseLabel : menuOpenLabel}</span>
        </button>
        <ul className="nav-left" role="list">
          <li><a className="nav-link" href={getToKnowUsHref}>{getToKnowUsLabel}</a></li>
          <li><a className="nav-link" href={servicesHref}>{servicesLabel}</a></li>
          <li><a className="nav-link" href={portfolioHref}>{portfolioLabel}</a></li>
        </ul>

        <a href="/" className="brand-mark" aria-label="Siamo Design">
          <Image
            src="/assets/img/logotipo.png"
            alt="Siamo Design"
            width={180}
            height={40}
            priority
            style={{ height: "38px", width: "auto", objectFit: "contain" }}
          />
        </a>

        <div className="nav-right">
          <a className="nav-link nav-lang" href={langHref}>
            <span className="lang-dsk">{langDesktopLabel}</span>
            <span className="lang-mbl">{langMobileLabel}</span>
          </a>
          <QuestionnaireCtaLink className="cta nav-cta is-visible" href={ctaHref}>
            {ctaLabel} <span aria-hidden="true">→</span>
          </QuestionnaireCtaLink>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        style={{
          ['--menu-header-y-m' as any]: "0px",
          ['--menu-links-topline-y-m' as any]: "10px",
          ['--menu-links-x-m' as any]: "0px",
          ['--menu-links-y-m' as any]: "30px",
          ['--menu-header-row-y-m' as any]: "10px",
          ['--menu-follow-y-m' as any]: "250px",
          ['--menu-follow-divider-y-m' as any]: "80px",
          ['--menu-social-block-y-m' as any]: "0px",
          ['--menu-social-line-y-m' as any]: "0px",
          ['--menu-cta-y-m' as any]: "40px",
          ['--menu-brand-fs-m' as any]: "18px",
          ['--menu-brand-tracking-m' as any]: "0.08em",
          ['--menu-brand-logo-h-m' as any]: "32px",
          ['--menu-close-fs-m' as any]: "12px",
          ['--menu-close-tracking-m' as any]: "0.08em",
        }}
      >
        <div className="m-drawer" style={{ background: "#F4F2EA" }}>
          <div className="m-header">
            <button
              type="button"
              className="m-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              {menuCloseLabel}
            </button>
            <a className="m-brand" href="/">
              <Image
                src="/assets/img/logotipo.png"
                alt="Siamo Design"
                width={140}
                height={40}
                priority={false}
                style={{ width: "auto", height: "32px" }}
              />
            </a>
          </div>
          <nav className="m-nav" aria-label="Mobile menu">
            <a className="m-link" href={getToKnowUsHref}>{getToKnowUsLabel}</a>
            <a className="m-link" href={servicesHref}>{servicesLabel}</a>
            <a className="m-link" href={portfolioHref}>{portfolioLabel}</a>
          </nav>
          <div className="m-follow-label">{followLabel}</div>
          <div className="m-social" aria-label="Redes sociales">
            <a className="m-social__link" href="https://www.linkedin.com/company/siamo-design/" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 9h2.9v9H6.5V9Zm1.4-4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM10.8 9h2.8v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V18h-2.9v-4.2c0-1-.1-2.3-1.5-2.3-1.5 0-1.8 1.1-1.8 2.2V18h-2.9V9Z" />
              </svg>
            </a>
            <a className="m-social__link" href="https://www.facebook.com" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 10.5V8.4c0-.8.1-1.2 1.3-1.2H16V5h-2.5C10.9 5 10 6.5 10 8.2v2.3H8v2.2h2V19h3V12.7h2.2l.3-2.2H13Z" />
              </svg>
            </a>
            <a className="m-social__link" href="https://www.youtube.com/@siamodesign" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.7 8.2s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.8-.9C16.2 5 12 5 12 5h0s-4.2 0-7.1.1c-.3 0-1.1 0-1.8.9-.6.7-.8 2.2-.8 2.2S2 9.9 2 11.6v.8c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.7.8 1.7.8 2.2.9 1.6.2 6.8.2 6.8.2s4.2 0 7.1-.1c.3 0 1.1 0 1.8-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-.8c0-1.7-.2-3.4-.2-3.4Z" />
                <path d="m10 9.8 4.7 2.2L10 14.2V9.8Z" fill="#fff" />
              </svg>
            </a>
            <a className="m-social__link" href="https://www.tiktok.com/@siamodesign" aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 4.2c.6.8 1.5 1.3 2.5 1.3h.4v2.5c-.9 0-1.8-.2-2.6-.6v5.5a5.08 5.08 0 1 1-5.1-5.1c.3 0 .6 0 .9.1v2.7a2.4 2.4 0 0 0-.9-.2 2.38 2.38 0 1 0 2.38 2.4V3h2.5v1.2Z" />
              </svg>
            </a>
            <a className="m-social__link" href="https://www.instagram.com" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.2 4.5h9.6A2.7 2.7 0 0 1 19.5 7v9.6a2.7 2.7 0 0 1-2.7 2.7H7.2A2.7 2.7 0 0 1 4.5 16.6V7a2.7 2.7 0 0 1 2.7-2.7Zm0-1.5A4.2 4.2 0 0 0 3 7v9.6A4.2 4.2 0 0 0 7.2 20.8h9.6A4.2 4.2 0 0 0 21 16.6V7a4.2 4.2 0 0 0-4.2-4.2H7.2Z" />
                <path d="M12 8.4A3.6 3.6 0 1 1 8.4 12 3.6 3.6 0 0 1 12 8.4Zm0-1.5A5.1 5.1 0 1 0 17.1 12 5.1 5.1 0 0 0 12 6.9Z" />
                <circle cx="17.4" cy="6.6" r="1" />
              </svg>
            </a>
          </div>
          <p className={`m-cta-label ${playfairFont.className}`}>Have a project in mind?</p>
          <QuestionnaireCtaLink className="cta m-cta" href="/questionnaire/">
            {ctaLabel} <span aria-hidden="true">→</span>
          </QuestionnaireCtaLink>
        </div>
      </div>
    </nav>
  );
}
