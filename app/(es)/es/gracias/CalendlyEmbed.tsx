"use client";

import { useEffect } from "react";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyEmbedProps = {
  url: string;
  className?: string;
};

export default function CalendlyEmbed({ url, className }: CalendlyEmbedProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const widgetClassName = className ? `calendly-inline-widget ${className}` : "calendly-inline-widget";

  return <div className={widgetClassName} data-url={url} />;
}
