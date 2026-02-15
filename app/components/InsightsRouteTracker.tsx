"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const LAST_URL_KEY = "__insights_last_url";

const safeGetCookie = (name: string) => {
  try {
    const parts = document.cookie.split(";").map((part) => part.trim());
    const match = parts.find((part) => part.startsWith(`${name}=`));
    if (!match) return "";
    return decodeURIComponent(match.slice(name.length + 1));
  } catch {
    return "";
  }
};

const trackWhenReady = (fn: (tracker: NonNullable<Window["InsightsTracker"]>) => void) => {
  const start = Date.now();
  const tick = () => {
    const tracker = window.InsightsTracker;
    if (tracker) {
      fn(tracker);
      return;
    }
    if (Date.now() - start > 2000) return;
    setTimeout(tick, 100);
  };
  tick();
};

const isThankYouPath = (pathname: string) => {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return normalized === "/thank-you/";
};

export default function InsightsRouteTracker() {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const search = useMemo(() => searchParams?.toString() ?? "", [searchParams]);
  const currentUrl = useMemo(
    () => (search ? `${pathname}?${search}` : pathname),
    [pathname, search]
  );

  const lastUrlRef = useRef<string>("");
  const didInitRef = useRef(false);

  useEffect(() => {
    // Dedupe for URL changes and avoid duplicating the initial page_view from the snippet.
    if (!didInitRef.current) {
      didInitRef.current = true;
      lastUrlRef.current = currentUrl;
      try {
        sessionStorage.setItem(LAST_URL_KEY, currentUrl);
      } catch {
        // ignore
      }
      return;
    }

    let lastUrl = lastUrlRef.current;
    try {
      lastUrl = sessionStorage.getItem(LAST_URL_KEY) || lastUrl;
    } catch {
      // ignore
    }

    if (lastUrl === currentUrl) return;

    lastUrlRef.current = currentUrl;
    try {
      sessionStorage.setItem(LAST_URL_KEY, currentUrl);
    } catch {
      // ignore
    }

    trackWhenReady((tracker) => {
      if (typeof tracker.track !== "function") return;
      tracker.track("page_view", { source: "route_change" });
    });
  }, [currentUrl]);

  useEffect(() => {
    // Calendly booked detection based on thank-you URL params (no iframe instrumentation).
    if (!isThankYouPath(pathname)) return;
    if (!searchParams) return;

    const hasBooked =
      searchParams.has("booked") ||
      searchParams.get("booked") === "1" ||
      searchParams.get("booked") === "true";
    if (!hasBooked) return;

    const sessionId = safeGetCookie("__insights_sid_siamo");
    const dedupeKey = `__insights_calendly_booked_${sessionId || "unknown"}`;
    try {
      if (sessionStorage.getItem(dedupeKey)) return;
      sessionStorage.setItem(dedupeKey, "1");
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
  }, [pathname, searchParams]);

  return null;
}

