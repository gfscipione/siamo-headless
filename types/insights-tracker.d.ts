declare global {
  interface Window {
    InsightsTracker?: {
      init?: (config: unknown) => void;
      track?: (eventName: string, props?: Record<string, unknown>) => void;
      trackCalendlyBooked?: (props?: Record<string, unknown>) => void;
    };
  }
}

export {};

