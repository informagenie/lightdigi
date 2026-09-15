"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.scss";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursor = cursorRef.current;
    const labelEl = labelRef.current;

    if (!finePointer || reduceMotion || !cursor || !labelEl) {
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");
    cursor.classList.add(styles.ready);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let raf = 0;
    let hovering = false;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      const interactive = (event.target as Element | null)?.closest?.(
        "a, button, [data-cursor], [role='button']"
      ) as HTMLElement | null;

      if (interactive) {
        hovering = true;
        cursor.classList.add(styles.active);
        const label = interactive.getAttribute("data-cursor")?.trim();
        labelEl.textContent = label || "";
        cursor.classList.toggle(styles.hasLabel, Boolean(label));
      } else if (hovering) {
        hovering = false;
        cursor.classList.remove(styles.active, styles.hasLabel);
        labelEl.textContent = "";
      }
    };

    const onLeave = () => cursor.classList.add(styles.hidden);
    const onEnter = () => cursor.classList.remove(styles.hidden);

    const tick = () => {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor} aria-hidden="true">
      <span className={styles.dot} />
      <span ref={labelRef} className={styles.label} />
    </div>
  );
}
