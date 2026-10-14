import { homepageCopy } from "./content";

// Hero-only values extracted from ParallaxDemo. They never configure other sections.
export const heroConfig = {
  image: {
    desktop: "/assets/mid-century-waves/terrace-12.jpg",
    mobile: "/assets/soul-in-concrete/master-bedroom-4.webp",
    position: "50% 50%",
  },
  title: {
    ...homepageCopy.title,
    lineHeight: 1.1,
    letterSpacing: -0.02,
    wordSpacing: 0,
  },
  subline: homepageCopy.subline,
  cta: homepageCopy.serviceAction,
  scrim: { desktop: 30, mobile: 30, topFactor: 0.7, bottomFactor: 1.6 },
  typing: { enabled: true, characterMs: 85, delayMs: 300, caret: "—", caretX: -14, caretY: 12, caretScaleX: 0.65 },
  consultation: homepageCopy.projectAction,
  navigation: { maxWidth: 1700, itemGap: 44, solidBackground: "#DCD8CE" },
} as const;
