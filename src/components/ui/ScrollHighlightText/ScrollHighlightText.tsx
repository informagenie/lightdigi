"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollHighlightTextProps = {
  text: string;
  className?: string;
};

/** Paragraphe dont les mots s'illuminent un à un au rythme du scroll. */
export function ScrollHighlightText({ text, className }: ScrollHighlightTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const words = element.querySelectorAll<HTMLElement>("[data-highlight-word]");
    const animation = gsap.fromTo(
      words,
      { opacity: 0.18 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.08,
        scrollTrigger: { trigger: element, start: "top 82%", end: "bottom 45%", scrub: 0.5 }
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [text]);

  return (
    <p ref={ref} className={className}>
      {text.split(/\s+/).map((word, index) => (
        <span key={`${word}-${index}`} data-highlight-word>
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
