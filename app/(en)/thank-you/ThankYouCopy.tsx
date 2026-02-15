"use client";

import { useEffect, useState } from "react";
import { hasSessionFlag, safeGetCookie, setSessionFlag, trackWhenReady } from "../../components/insightsClient";

const isCalendlyEvent = (value: unknown): value is { event: string } => {
  if (!value || typeof value !== "object") return false;
  return typeof (value as { event?: unknown }).event === "string";
};

const CALENDLY_BOOKED_KEY = "__insights_calendly_booked";
const INSIGHTS_SESSION_COOKIE = "__insights_sid_siamo";

export default function ThankYouCopy() {
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    const emitBooked = (source: string) => {
      const sessionId = safeGetCookie(INSIGHTS_SESSION_COOKIE);
      try {
        if (hasSessionFlag(CALENDLY_BOOKED_KEY, sessionId)) return;
        setSessionFlag(CALENDLY_BOOKED_KEY, sessionId);
      } catch {
        if ((window as unknown as { __insightsBooked?: boolean }).__insightsBooked) return;
        (window as unknown as { __insightsBooked?: boolean }).__insightsBooked = true;
      }

      trackWhenReady((tracker) => {
        if (typeof tracker.trackCalendlyBooked === "function") {
          tracker.trackCalendlyBooked({ source });
          return;
        }
        if (typeof tracker.track === "function") {
          tracker.track("calendly_booked", { source });
        }
      });
    };

    const params = new URLSearchParams(window.location.search);
    const previewBooked = params.get("booked");
    if (previewBooked === "1" || previewBooked === "true") {
      setIsBooked(true);
      emitBooked("thank_you_booked_param");
    }

    const handleMessage = (event: MessageEvent) => {
      if (!isCalendlyEvent(event.data)) return;
      if (event.data.event === "calendly.event_scheduled") {
        setIsBooked(true);
        emitBooked("calendly_postmessage");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (isBooked) {
    return (
      <div className="thankyou-copy">
        <p className="thankyou-title">You&apos;re booked</p>
        <div className="thankyou-rule" aria-hidden="true" />
        <p className="thankyou-body">
          We&apos;ve emailed your calendar invite and Zoom link. See you soon.
        </p>
        <p className="thankyou-body">If you have inspo links, bring them to the call.</p>
        <div className="thankyou-cta">
          <a className="thankyou-cta__button" href="/">
            Back to Home
          </a>
          <a className="thankyou-cta__link" href="/portfolio/">
            View Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="thankyou-copy">
      <p className="thankyou-title">
        Let&apos;s Set
        <br />
        Your Call
      </p>
      <div className="thankyou-rule" aria-hidden="true" />
      <p className="thankyou-body">
        Pick a 30-minute time that works for you. We&apos;ll review your questionnaire and map out
        next steps.
      </p>
      <div className="thankyou-signature">Siamo Design</div>
    </div>
  );
}
