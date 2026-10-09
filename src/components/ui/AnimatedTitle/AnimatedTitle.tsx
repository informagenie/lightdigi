"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitAccentWords, stripAccentMarks } from "@/src/lib/accent";
import styles from "./AnimatedTitle.module.scss";

gsap.registerPlugin(ScrollTrigger);

type AnimatedTitleProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
  className?: string;
  delay?: number;
};

export function AnimatedTitle({ text, as: Tag = "h2", id, className, delay = 0 }: AnimatedTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const words = element.querySelectorAll<HTMLElement>("[data-title-word]");
    const animation = gsap.fromTo(
      words,
      { yPercent: 115, rotate: 4 },
      {
        yPercent: 0,
        rotate: 0,
        duration: 1,
        delay,
        stagger: 0.035,
        ease: "power4.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true }
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [delay, text]);

  return (
    <Tag
      id={id}
      ref={ref}
      className={[styles.title, className].filter(Boolean).join(" ")}
      aria-label={stripAccentMarks(text)}
    >
      {splitAccentWords(text).map(({ word, accent }, index) => (
        <span key={`${word}-${index}`} className={styles.mask} aria-hidden="true">
          <span data-title-word className={accent ? styles.accent : undefined}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
