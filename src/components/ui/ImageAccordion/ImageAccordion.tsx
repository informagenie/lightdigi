"use client";

import Link from "next/link";
import { useRef, useState, type CSSProperties, type MouseEvent } from "react";
import type { PortfolioItem } from "@/src/data/projects";
import styles from "./ImageAccordion.module.scss";

type ImageAccordionProps = {
  items: PortfolioItem[];
  slots?: number;
};

export function ImageAccordion({ items, slots = 4 }: ImageAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const placeholders = Math.max(0, slots - items.length);

  const moveCursor = (event: MouseEvent<HTMLElement>) => {
    const root = rootRef.current;
    const cursor = cursorRef.current;
    if (!root || !cursor) {
      return;
    }

    const rootRect = root.getBoundingClientRect();
    const x = event.clientX - rootRect.left;
    const y = event.clientY - rootRect.top;
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };

  const zoomPanel = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--zoom-x", `${x}%`);
    target.style.setProperty("--zoom-y", `${y}%`);
    moveCursor(event);
  };

  return (
    <div
      ref={rootRef}
      className={[styles.accordion, cursorVisible ? styles.cursorActive : ""].filter(Boolean).join(" ")}
      style={{ "--accordion-slots": slots } as CSSProperties}
      onMouseLeave={() => setCursorVisible(false)}
    >
      <div ref={cursorRef} className={styles.cursor} aria-hidden="true">
        <span>Voir</span>
      </div>

      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <Link
            key={item.id}
            href={`/realisations/${item.id}`}
            className={[styles.item, isActive ? styles.itemActive : ""].filter(Boolean).join(" ")}
            onMouseEnter={() => {
              setActiveId(item.id);
              setCursorVisible(true);
            }}
            onMouseLeave={() => setActiveId(null)}
            onMouseMove={zoomPanel}
            onFocus={() => setActiveId(item.id)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setActiveId(null);
              }
            }}
            aria-label={`Voir le projet ${item.title}`}
          >
            <div className={styles.panel}>
              <div
                className={styles.media}
                style={{ backgroundImage: `url(${item.image})` }}
                role="img"
                aria-label={item.alt}
              />
            </div>
            <div className={styles.below}>
              <div className={styles.content}>
                <p className={styles.client}>{item.client}</p>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
            </div>
          </Link>
        );
      })}

      {Array.from({ length: placeholders }, (_, index) => (
        <div key={`placeholder-${index}`} className={styles.placeholder} aria-hidden="true" />
      ))}
    </div>
  );
}
