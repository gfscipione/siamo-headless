"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const h = answerRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(h);
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
              onClick={() => toggle(idx)}
            >
              <span>{item.question}</span>
              <span className="faq-item__caret" aria-hidden="true">
                ▾
              </span>
            </button>
            <div
              ref={(el) => {
                answerRefs.current[idx] = el;
              }}
              className="faq-item__answer"
              style={{ maxHeight: maxH, opacity: isOpen ? 1 : 0 }}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaqAccordion;
