import type { CSSProperties } from "react";
import { heroConfig as config } from "./hero.config";
import heroPreviews from "./hero-previews.json";

type HeroVariables = CSSProperties & Record<`--hero-${string}`, string | number>;
export const heroVariables: HeroVariables = {
  "--hero-preview-desktop": `url("${heroPreviews.desktop}")`,
  "--hero-preview-mobile": `url("${heroPreviews.mobile}")`,
  "--hero-image-x": config.image.position.split(" ")[0],
  "--hero-image-y": config.image.position.split(" ")[1],
  "--hero-line-height": config.title.lineHeight,
  "--hero-letter-spacing": `${config.title.letterSpacing}em`,
  "--hero-word-spacing": `${config.title.wordSpacing}em`,
  "--hero-scrim-top": config.scrim.desktop / 100 * config.scrim.topFactor,
  "--hero-scrim-bottom": config.scrim.desktop / 100 * config.scrim.bottomFactor,
  "--hero-mobile-scrim-top": config.scrim.mobile / 100 * config.scrim.topFactor,
  "--hero-mobile-scrim-bottom": config.scrim.mobile / 100 * config.scrim.bottomFactor,
  "--hero-caret-x": `${config.typing.caretX}px`,
  "--hero-caret-y": `${config.typing.caretY}px`,
  "--hero-caret-scale": config.typing.caretScaleX,
  "--hero-nav-width": `${config.navigation.maxWidth}px`,
  "--hero-nav-gap": `${config.navigation.itemGap}px`,
  "--hero-nav-background": config.navigation.solidBackground,
};

