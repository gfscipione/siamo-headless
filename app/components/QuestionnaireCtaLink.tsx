"use client";

import { useCallback, useState } from "react";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick" | "children"> & {
  href?: string;
  children: React.ReactNode;
  loadingText?: string;
};

export default function QuestionnaireCtaLink({
  href = "/questionnaire/",
  children,
  loadingText = "Loading questionnaire…",
  style,
  ...anchorProps
}: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (event.currentTarget.target === "_blank") return;
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (isLoading) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      setIsLoading(true);

      setTimeout(() => {
        window.location.assign(href);
      }, 50);
    },
    [href, isLoading],
  );

  const mergedStyle = isLoading ? { ...(style || {}), cursor: "progress" } : style;

  return (
    <a
      {...anchorProps}
      href={href}
      onClick={handleClick}
      aria-disabled={isLoading}
      aria-busy={isLoading}
      style={mergedStyle}
    >
      {isLoading ? loadingText : children}
    </a>
  );
}
