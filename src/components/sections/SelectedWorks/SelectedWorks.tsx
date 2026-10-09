"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container/Container";
import { Button } from "@/src/components/ui/Button/Button";
import { ImageAccordion } from "@/src/components/ui/ImageAccordion/ImageAccordion";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { sectionHeadings, worksContent } from "@/src/data/home";
import { allProjects } from "@/src/data/projects";
import styles from "./SelectedWorks.module.scss";

const VISIBLE_COUNT = 4;
const AUTO_SLIDE_MS = 4200;

export function SelectedWorks() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const maxStart = Math.max(0, allProjects.length - VISIBLE_COUNT);
  const visibleItems = allProjects.slice(startIndex, startIndex + VISIBLE_COUNT);
  const canSlide = allProjects.length > VISIBLE_COUNT;

  const slide = (direction: "previous" | "next") => {
    setStartIndex((current) => {
      if (!canSlide) {
        return current;
      }

      if (direction === "previous") {
        return current <= 0 ? maxStart : current - 1;
      }

      return current >= maxStart ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (!canSlide || isPaused) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setStartIndex((current) => (current >= maxStart ? 0 : current + 1));
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [canSlide, isPaused, maxStart]);

  return (
    <section id="realisations" className={styles.section} aria-labelledby="works-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="works-title"
            tone="light"
            label={sectionHeadings.works.label}
            title={sectionHeadings.works.title}
            className={styles.heading}
          />

          {canSlide ? (
            <div className={styles.controls} aria-label={worksContent.controlsLabel}>
              <button type="button" aria-label={worksContent.previous} onClick={() => slide("previous")}>
                <ChevronLeft aria-hidden="true" size={20} />
              </button>
              <button type="button" aria-label={worksContent.next} onClick={() => slide("next")}>
                <ChevronRight aria-hidden="true" size={20} />
              </button>
            </div>
          ) : null}
        </div>
      </Container>

      <div
        className={styles.slider}
        key={startIndex}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setIsPaused(false);
          }
        }}
      >
        <ImageAccordion items={visibleItems} slots={VISIBLE_COUNT} />
      </div>

      <Container className={styles.footer}>
        <Button href="/realisations" variant="secondary">
          {worksContent.more}
        </Button>
      </Container>
    </section>
  );
}
