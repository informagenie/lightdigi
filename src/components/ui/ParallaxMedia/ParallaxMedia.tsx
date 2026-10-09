"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxMediaProps = {
  children: React.ReactNode;
  className?: string;
  /** Amplitude du déplacement vertical, en pourcentage de la hauteur. */
  depth?: number;
  /** « clip » ouvre un rideau ; « fade » convient aux médias qui débordent de leur boîte. */
  reveal?: "clip" | "fade";
};

/** Révèle le média (rideau ou fondu) puis le fait glisser légèrement au scroll. */
export function ParallaxMedia({ children, className, depth = 8, reveal = "clip" }: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const from: gsap.TweenVars =
        reveal === "clip" ? { clipPath: "inset(18% 12% 18% 12%)" } : { autoAlpha: 0, scale: 0.94 };
      const to: gsap.TweenVars =
        reveal === "clip" ? { clipPath: "inset(0% 0% 0% 0%)" } : { autoAlpha: 1, scale: 1 };

      gsap.fromTo(element, from, {
        ...to,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: { trigger: element, start: "top 85%", once: true }
      });

      gsap.fromTo(
        element,
        { yPercent: depth / 2 },
        {
          yPercent: -depth / 2,
          ease: "none",
          scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true }
        }
      );
    }, element);

    return () => ctx.revert();
  }, [depth, reveal]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
