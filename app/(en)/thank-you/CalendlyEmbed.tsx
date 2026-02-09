"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const PREFILL_STORAGE_KEY = "calendly_prefill";

type CalendlyPrefill = {
  name?: string;
  email?: string;
  customAnswers?: Record<string, string>;
};

type CalendlyEmbedProps = {
  url: string;
  className?: string;
};

const readPrefill = (): CalendlyPrefill | null => {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(PREFILL_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as CalendlyPrefill;
    const name = typeof parsed?.name === "string" ? parsed.name.trim() : "";
    const email = typeof parsed?.email === "string" ? parsed.email.trim() : "";
    const customAnswers =
      parsed?.customAnswers && typeof parsed.customAnswers === "object"
        ? parsed.customAnswers
        : undefined;
    if (!name && !email && !customAnswers) return null;
    return { ...(name ? { name } : {}), ...(email ? { email } : {}), ...(customAnswers ? { customAnswers } : {}) };
  } catch {
    return null;
  }
};

export default function CalendlyEmbed({ url, className }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;

    const prefill = readPrefill();

    const initWidget = () => {
      const Calendly = (window as any).Calendly;
      if (!Calendly || !containerRef.current) return;
      containerRef.current.innerHTML = "";
      Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
        ...(prefill ? { prefill } : {}),
      });
      setIsLoaded(true);
    };

    const existingScript = document.querySelector(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    ) as HTMLScriptElement | null;

    if (existingScript) {
      if ((window as any).Calendly) {
        initWidget();
        return;
      }
      const handleLoad = () => initWidget();
      existingScript.addEventListener("load", handleLoad);
      return () => existingScript.removeEventListener("load", handleLoad);
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", initWidget);
    document.body.appendChild(script);
    return () => script.removeEventListener("load", initWidget);
  }, [url]);

  const widgetClassName = className
    ? `calendly-inline-widget ${className}`
    : "calendly-inline-widget";

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!isLoaded && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "#ffffff",
            border: "1px solid rgba(17, 17, 17, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6b6b6b",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            zIndex: 2,
          }}
        >
          Cargando calendario…
        </div>
      )}
      <div
        ref={containerRef}
        className={widgetClassName}
        data-url={url}
        style={{
          position: "relative",
          zIndex: 1,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 160ms ease",
        }}
      />
    </div>
  );
}
