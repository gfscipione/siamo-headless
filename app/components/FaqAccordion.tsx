"use client";

import { ReactNode, useEffect, useId, useRef, useState } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const measure = () => {
      const next = answerRefs.current.map((el) => el?.scrollHeight || 0);
      setHeights((current) =>
        next.length === current.length && next.every((height, i) => height === current[i])
          ? current
          : next,
      );
    };
    const observer = new ResizeObserver(measure);
    answerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    measure();
    return () => observer.disconnect();
  }, [items]);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="faq-section__list">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const maxH = isOpen ? `${heights[idx] || 0}px` : "0px";
        return (
          <div className="faq-item" key={item.question}>
            <button
              type="button"
              className="faq-item__question"
              aria-expanded={isOpen}
              aria-controls={`${id}-answer-${idx}`}
              onClick={() => toggle(idx)}
            >
              <span>{item.question}</span>
              <span className="faq-item__caret" aria-hidden="true">
                ▾
              </span>
            </button>
            <div
              id={`${id}-answer-${idx}`}
              inert={!isOpen}
              aria-hidden={!isOpen}
              className="faq-item__answer"
              style={{ maxHeight: maxH, opacity: isOpen ? 1 : 0 }}
            >
              <div
                ref={(el) => {
                  answerRefs.current[idx] = el;
                }}
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaqAccordion;
