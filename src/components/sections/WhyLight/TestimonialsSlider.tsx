"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { whyContent, type Testimonial } from "@/src/data/home";
import styles from "./TestimonialsSlider.module.scss";

type TestimonialsSliderProps = {
  items: Testimonial[];
};

const AUTO_MS = 5500;

export function TestimonialsSlider({ items }: TestimonialsSliderProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const canSlide = items.length > 1;

  useEffect(() => {
    if (!canSlide || isPaused) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % items.length);
    }, AUTO_MS);

    return () => window.clearInterval(timer);
  }, [canSlide, isPaused, items.length]);

  if (!items.length) {
    return null;
  }

  const goTo = (next: number) => {
    setIndex((next + items.length) % items.length);
  };

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
    >
      <div className={styles.top}>
        <p className={styles.label}>{whyContent.testimonialsLabel}</p>
        {canSlide ? (
          <p className={styles.counter} aria-live="polite">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>
        ) : null}
      </div>

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {items.map((item) => (
            <blockquote key={item.id} className={styles.quote}>
              <p>« {item.quote} »</p>
              <footer>
                <cite>{item.author}</cite>
                {item.role ? <span>{item.role}</span> : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      {canSlide ? (
        <div className={styles.nav}>
          <div className={styles.dots} role="tablist" aria-label={whyContent.testimonialsLabel}>
            {items.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={itemIndex === index}
                aria-label={`${whyContent.testimonialsLabel} ${itemIndex + 1}`}
                className={itemIndex === index ? styles.dotActive : styles.dot}
                onClick={() => goTo(itemIndex)}
              />
            ))}
          </div>

          <div className={styles.arrows}>
            <button type="button" aria-label={whyContent.previous} onClick={() => goTo(index - 1)}>
              <ChevronLeft aria-hidden="true" size={18} />
            </button>
            <button type="button" aria-label={whyContent.next} onClick={() => goTo(index + 1)}>
              <ChevronRight aria-hidden="true" size={18} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
