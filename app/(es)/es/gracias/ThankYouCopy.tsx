"use client";

import { useEffect, useState } from "react";

const isCalendlyEvent = (value: unknown): value is { event: string } => {
  if (!value || typeof value !== "object") return false;
  return typeof (value as { event?: unknown }).event === "string";
};

export default function ThankYouCopy() {
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const previewBooked = params.get("booked");
    if (previewBooked === "1" || previewBooked === "true") {
      setIsBooked(true);
    }

    const handleMessage = (event: MessageEvent) => {
      if (!isCalendlyEvent(event.data)) return;
      if (event.data.event === "calendly.event_scheduled") {
        setIsBooked(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (isBooked) {
    return (
      <div className="thankyou-copy">
        <p className="thankyou-title">Tu cita está confirmada</p>
        <div className="thankyou-rule" aria-hidden="true" />
        <p className="thankyou-body">
          Hemos enviado a tu correo la invitación de calendario y el link de Zoom. Nos vemos
          pronto.
        </p>
        <p className="thankyou-body">
          Si tienes links de inspiración, tráelos a la llamada.
        </p>
        <div className="thankyou-cta">
          <a className="thankyou-cta__button" href="/es/">
            Volver al inicio
          </a>
          <a className="thankyou-cta__link" href="/es/portafolio/">
            Ver portafolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="thankyou-copy">
      <p className="thankyou-title">Programemos tu llamada</p>
      <div className="thankyou-rule" aria-hidden="true" />
      <p className="thankyou-body">
        Elige un horario de 30 minutos que te funcione. Revisaremos tu cuestionario y definiremos
        los siguientes pasos.
      </p>
      <div className="thankyou-signature">Siamo Design</div>
    </div>
  );
}
