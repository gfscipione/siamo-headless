"use client";

import type { HTMLAttributes, PointerEvent } from "react";
import { useRef, useState } from "react";

export default function DragScroll({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragStateRef = useRef<{
    pointerId: number;
    startX: number;
    startScrollLeft: number;
    prevUserSelect: string;
  } | null>(null);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return; // keep native scroll for touch
    if (e.button !== 0) return;
    const el = ref.current;
    if (!el) return;

    e.preventDefault();
    dragStateRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startScrollLeft: el.scrollLeft,
      prevUserSelect: document.body.style.userSelect,
    };
    document.body.style.userSelect = "none";
    setDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    const state = dragStateRef.current;
    if (!el || !state) return;
    if (e.pointerType !== "mouse") return;
    if (e.pointerId !== state.pointerId) return;

    e.preventDefault();
    const dx = e.clientX - state.startX;
    el.scrollLeft = state.startScrollLeft - dx;
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    const state = dragStateRef.current;
    if (!el || !state) return;
    if (e.pointerId !== state.pointerId) return;

    try {
      el.releasePointerCapture(state.pointerId);
    } catch {
      // ignore
    }
    document.body.style.userSelect = state.prevUserSelect;
    dragStateRef.current = null;
    setDragging(false);
  };

  return (
    <div
      {...props}
      ref={ref}
      className={`${className || ""}${dragging ? " is-dragging" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onDragStart={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}
