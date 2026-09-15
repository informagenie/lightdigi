"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  id?: string;
  className?: string;
  delay?: number;
};

gsap.registerPlugin(ScrollTrigger);

export function TextReveal({
  text,
  as: Tag = "h2",
  id,
  className,
  delay = 0
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const words = element.querySelectorAll<HTMLElement>(".text-reveal-word");
    if (!words.length) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(words, { autoAlpha: 1, y: 0 });
      return;
    }

    const animation = gsap.fromTo(
      words,
      { autoAlpha: 0, yPercent: 110 },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.85,
        delay,
        stagger: 0.045,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true
        }
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [delay, text]);

  const parts = text.split(/(\s+)/);

  return (
    <Tag id={id} ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {parts.map((part, index) =>
        /^\s+$/.test(part) ? (
          <span key={`space-${index}`}>{" "}</span>
        ) : (
          <span
            key={`${part}-${index}`}
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
          >
            <span className="text-reveal-word">{part}</span>
          </span>
        )
      )}
    </Tag>
  );
}
