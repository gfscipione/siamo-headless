"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { hasSessionFlag, safeGetCookie, setSessionFlag, trackWhenReady } from "./insightsClient";

const LAST_PATH_KEY = "__insights_last_path";
const ENTRY_PAGE_KEY = "insights_entry_page";
const LANDING_VIEW_KEY = "__insights_landing_view";
const CTA_CLICK_CONTACT_KEY = "__insights_cta_click_contact";
const CALENDLY_BOOKED_KEY = "__insights_calendly_booked";
const INSIGHTS_SESSION_COOKIE = "__insights_sid_siamo";

const normalizePath = (pathname: string) => (pathname.endsWith("/") ? pathname : `${pathname}/`);

const isThankYouPath = (pathname: string) => {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return normalized === "/thank-you/";
};

const isQuestionnairePath = (pathname: string) => {
  const normalized = normalizePath(pathname);
  return (
    normalized === "/questionnaire/" ||
    normalized === "/es/cuestionario/" ||
    normalized === "/cuestionario/"
  );
};

const isLeadIntakePath = (pathname: string) =>
  isThankYouPath(pathname) || isQuestionnairePath(pathname);

const isLandingAllowlisted = (pathname: string) => {
  const normalized = normalizePath(pathname);
  return (
    normalized === "/" ||
    normalized === "/es/" ||
    normalized.startsWith("/services/") ||
    normalized.startsWith("/es/servicios/")
  );
};

export default function InsightsRouteTracker() {
  const pathname = usePathname() || "/";

  const lastPathRef = useRef<string>("");
  const didInitRef = useRef(false);

  useEffect(() => {
    // Dedupe for URL changes (pathname only) and avoid duplicating the initial page_view from the snippet.
    if (!didInitRef.current) {
      didInitRef.current = true;
      lastPathRef.current = pathname;
      try {
        sessionStorage.setItem(LAST_PATH_KEY, pathname);
      } catch {
        // ignore
      }
      return;
    }

    let lastPath = lastPathRef.current;
    try {
      lastPath = sessionStorage.getItem(LAST_PATH_KEY) || lastPath;
    } catch {
      // ignore
    }

    if (lastPath === pathname) return;

    lastPathRef.current = pathname;
    try {
      sessionStorage.setItem(LAST_PATH_KEY, pathname);
    } catch {
      // ignore
    }

    trackWhenReady((tracker) => {
      if (typeof tracker.track !== "function") return;
      tracker.track("page_view", { source: "route_change", sdk: "site_repo", page_path: pathname });
    });
  }, [pathname]);

  useEffect(() => {
    // Determine entry_page once per session and emit landing_view only for allowlisted entry pages.
    let entryPage = "";
    try {
      entryPage = sessionStorage.getItem(ENTRY_PAGE_KEY) || "";
      if (!entryPage) {
        entryPage = pathname;
        sessionStorage.setItem(ENTRY_PAGE_KEY, entryPage);
      }
    } catch {
      entryPage = entryPage || pathname;
    }

    if (isLeadIntakePath(entryPage)) return;
    if (!isLandingAllowlisted(entryPage)) return;

    const sessionId = safeGetCookie(INSIGHTS_SESSION_COOKIE);
    try {
      if (hasSessionFlag(LANDING_VIEW_KEY, sessionId)) return;
      setSessionFlag(LANDING_VIEW_KEY, sessionId);
    } catch {
      // If storage is blocked, fall back to in-memory dedupe for this tab.
      if ((window as unknown as { __insightsLanding?: boolean }).__insightsLanding) return;
      (window as unknown as { __insightsLanding?: boolean }).__insightsLanding = true;
    }

    trackWhenReady((tracker) => {
      if (typeof tracker.track !== "function") return;
      tracker.track("landing_view", {
        source: "entry_page",
        sdk: "site_repo",
        page_path: entryPage,
      });
    });
  }, [pathname]);

  useEffect(() => {
    // Delegated listener for clicks that navigate to the lead intake form.
    const handler = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;
      const anchor = target.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      let toPathname = "";
      try {
        toPathname = new URL(href, window.location.href).pathname;
      } catch {
        return;
      }

      if (!isQuestionnairePath(toPathname)) return;

      const sessionId = safeGetCookie(INSIGHTS_SESSION_COOKIE);
      try {
        if (hasSessionFlag(CTA_CLICK_CONTACT_KEY, sessionId)) return;
        setSessionFlag(CTA_CLICK_CONTACT_KEY, sessionId);
      } catch {
        // If storage is blocked, fall back to in-memory dedupe for this tab.
        if ((window as unknown as { __insightsCta?: boolean }).__insightsCta) return;
        (window as unknown as { __insightsCta?: boolean }).__insightsCta = true;
      }

      trackWhenReady((tracker) => {
        if (typeof tracker.track !== "function") return;
        tracker.track("cta_click_contact", {
          source: "click",
          sdk: "site_repo",
          target_path: toPathname,
        });
      });
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  useEffect(() => {
    // Optional: if the user enters the questionnaire page without a prior click, emit the intent event once.
    if (!isQuestionnairePath(pathname)) return;

    const sessionId = safeGetCookie(INSIGHTS_SESSION_COOKIE);
    try {
      if (hasSessionFlag(CTA_CLICK_CONTACT_KEY, sessionId)) return;
      setSessionFlag(CTA_CLICK_CONTACT_KEY, sessionId);
    } catch {
      if ((window as unknown as { __insightsCta?: boolean }).__insightsCta) return;
      (window as unknown as { __insightsCta?: boolean }).__insightsCta = true;
    }

    trackWhenReady((tracker) => {
      if (typeof tracker.track !== "function") return;
      tracker.track("cta_click_contact", {
        source: "route_enter",
        sdk: "site_repo",
        target_path: pathname,
      });
    });
  }, [pathname]);

  useEffect(() => {
    // Calendly booked detection based on thank-you URL params (no iframe instrumentation).
    if (!isThankYouPath(pathname)) return;

    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    );
    const hasBooked =
      params.has("booked") || params.get("booked") === "1" || params.get("booked") === "true";
    if (!hasBooked) return;

    const sessionId = safeGetCookie(INSIGHTS_SESSION_COOKIE);
    try {
      if (hasSessionFlag(CALENDLY_BOOKED_KEY, sessionId)) return;
      setSessionFlag(CALENDLY_BOOKED_KEY, sessionId);
    } catch {
      // If storage is blocked, fall back to in-memory dedupe for this tab.
      if ((window as unknown as { __insightsBooked?: boolean }).__insightsBooked) return;
      (window as unknown as { __insightsBooked?: boolean }).__insightsBooked = true;
    }

    trackWhenReady((tracker) => {
      if (typeof tracker.trackCalendlyBooked === "function") {
        tracker.trackCalendlyBooked({ source: "thank_you_booked_param" });
        return;
      }
      if (typeof tracker.track === "function") {
        tracker.track("calendly_booked", { source: "thank_you_booked_param" });
      }
    });
  }, [pathname]);

  return null;
}
