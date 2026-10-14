// CSS breakpoints in Hero.module.css/home.module.css mirror these queries.
// Header compacts earlier than the hero: they serve different layout constraints.
export const responsive = {
  heroMobileQuery: "(max-width: 860px)",
  headerDesktopQuery: "(min-width: 1101px)",
} as const;
