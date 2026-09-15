"use client";

import { useEffect, useRef, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type RevealVariant = "up" | "left" | "scale";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  stagger?: number;
  as?: "div" | "span" | "ul" | "li";
};

gsap.registerPlugin(ScrollTrigger);

const variantFrom: Record<RevealVariant, gsap.TweenVars> = {
  up: { autoAlpha: 0, y: 36 },
  left: { autoAlpha: 0, x: -28 },
  scale: { autoAlpha: 0, scale: 0.96 }
};

const variantReadyClass: Record<RevealVariant, string> = {
  up: "reveal-ready",
  left: "reveal-ready-left",
  scale: "reveal-ready-scale"
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  stagger,
  as = "div"
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const useChildStagger = stagger != null;
  const Tag = as as ElementType;

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      element.classList.remove(
        variantReadyClass.up,
        variantReadyClass.left,
        variantReadyClass.scale,
        "reveal-stagger"
      );
      return;
    }

    const targets = useChildStagger ? Array.from(element.children) : [element];
    if (!targets.length) {
      return;
    }

    const animation = gsap.fromTo(
      targets,
      { ...variantFrom[variant] },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.95,
        delay,
        stagger: useChildStagger ? stagger : 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true
        }
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [delay, stagger, useChildStagger, variant]);

  const classNames = [useChildStagger ? "reveal-stagger" : variantReadyClass[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classNames || undefined}>
      {children}
    </Tag>
  );
}
