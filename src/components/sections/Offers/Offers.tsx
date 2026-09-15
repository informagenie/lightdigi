"use client";

import { Check } from "lucide-react";
import { Button } from "@/src/components/ui/Button/Button";
import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { offerIntro, offerPackages } from "@/src/data/offers";
import styles from "./Offers.module.scss";

export function Offers() {
  return (
    <section id="offres" className={styles.section} aria-labelledby="offers-title">
      <Container>
        <Reveal className={styles.header}>
          <SectionHeading
            id="offers-title"
            tone="light"
            label={offerIntro.label}
            title={offerIntro.title}
          />
          <p className={styles.lead}>{offerIntro.body}</p>
        </Reveal>

        <Reveal as="ul" className={styles.grid} stagger={0.12} variant="up">
          {offerPackages.map((offer, index) => (
            <li key={offer.id} className={styles.item}>
              <article
                className={[styles.card, offer.featured ? styles.featured : ""].filter(Boolean).join(" ")}
              >
                <div className={styles.top}>
                  <div className={styles.meta}>
                    <span className={styles.index}>0{index + 1}</span>
                    {offer.featured ? <span className={styles.badge}>Populaire</span> : null}
                  </div>
                  <p className={styles.name}>{offer.name}</p>
                  <p className={styles.price}>
                    <strong>{offer.price}</strong>
                    <span>{offer.period}</span>
                  </p>
                  <p className={styles.summary}>{offer.summary}</p>
                </div>

                <ul className={styles.features}>
                  {offer.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" size={16} strokeWidth={2.4} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.cta}>
                  <Button href="#contact" variant={offer.featured ? "primary" : "secondary"}>
                    Demarrer
                  </Button>
                </div>
              </article>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
