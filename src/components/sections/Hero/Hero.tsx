"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { Button } from "@/src/components/ui/Button/Button";
import { Container } from "@/src/components/ui/Container/Container";
import { SectionLabel } from "@/src/components/ui/SectionLabel/SectionLabel";
import { heroContent } from "@/src/data/home";
import { heroBackdropProjects } from "@/src/data/projects";
import styles from "./Hero.module.scss";

function HeroPanels({ duplicateKey }: { duplicateKey: string }) {
  return (
    <>
      {heroBackdropProjects.map((slide, index) => (
        <article
          key={`${duplicateKey}-${slide.id}`}
          className={styles.panel}
          data-hero-panel={duplicateKey === "a" ? "true" : undefined}
          data-cursor={slide.client}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={duplicateKey === "a" && index < 3}
            sizes="(max-width: 1024px) 72vw, 28rem"
          />
          <div className={styles.panelTint} />
          <div className={styles.panelMeta}>
            <span>{slide.client}</span>
            <strong>{slide.title}</strong>
          </div>
        </article>
      ))}
    </>
  );
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      root.classList.add(styles.ready);
      return;
    }

    const ctx = gsap.context(() => {
      const panels = root.querySelectorAll<HTMLElement>("[data-hero-panel]");
      const words = root.querySelectorAll<HTMLElement>("[data-hero-word]");
      const fadeItems = root.querySelectorAll<HTMLElement>("[data-hero-fade]");
      const scrollCue = root.querySelector<HTMLElement>("[data-hero-scroll]");

      gsap.set(panels, { autoAlpha: 0, y: 28, scale: 0.96 });
      gsap.set(words, { yPercent: 110, autoAlpha: 0 });
      gsap.set(fadeItems, { autoAlpha: 0, y: 20 });
      if (scrollCue) {
        gsap.set(scrollCue, { autoAlpha: 0, y: -8 });
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => root.classList.add(styles.ready)
      });

      timeline
        .to(
          panels,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: { each: 0.06, from: "start" }
          },
          0.05
        )
        .to(
          words,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.045
          },
          0.35
        )
        .to(
          fadeItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1
          },
          0.55
        );

      if (scrollCue) {
        timeline.to(scrollCue, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.95);
        gsap.to(scrollCue, {
          y: 6,
          duration: 1.1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.4
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const titleParts = heroContent.title.replace(/\.$/, "").split(/\s+/);

  return (
    <section id="top" ref={rootRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.track}>
          <div className={styles.group}>
            <HeroPanels duplicateKey="a" />
          </div>
          <div className={styles.group}>
            <HeroPanels duplicateKey="b" />
          </div>
        </div>
        <div className={styles.tintOverlay} />
        <div className={styles.gradientOverlay} />
      </div>

      <Container>
        <div className={styles.inner}>
          <div className={styles.layout}>
            <div className={styles.left}>
              <header className={styles.heading}>
                <div data-hero-fade>
                  <SectionLabel tone="dark">{heroContent.eyebrow}</SectionLabel>
                </div>
                <h1 id="hero-title" className={styles.title} aria-label={heroContent.title}>
                  {titleParts.map((word, index) => (
                    <span key={`${word}-${index}`} className={styles.wordWrap} aria-hidden="true">
                      <span data-hero-word>{word}</span>
                    </span>
                  ))}
                  <span className={styles.wordWrap} aria-hidden="true">
                    <span data-hero-word>.</span>
                  </span>
                </h1>
              </header>

              <p className={styles.lead} data-hero-fade>
                {heroContent.lead}
              </p>

              <div className={styles.actions} data-hero-fade>
                <Button href="#contact" data-cursor="Contact">
                  {heroContent.primaryCta}
                </Button>
                <Button href="#realisations" variant="secondary" data-cursor="Voir">
                  {heroContent.secondaryCta}
                </Button>
              </div>
            </div>

            <div className={styles.right} aria-hidden="true" />
          </div>
        </div>
      </Container>

      <a className={styles.scrollCue} href="#clients" data-hero-scroll data-cursor="Suite" aria-label="Decouvrir la suite">
        <span>Scroll</span>
        <ChevronDown aria-hidden="true" size={18} strokeWidth={2} />
      </a>
    </section>
  );
}
