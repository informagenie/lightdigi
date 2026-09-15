"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/src/components/ui/Button/Button";
import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { finalCta } from "@/src/data/home";
import styles from "./FinalCTA.module.scss";

export function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <Container>
        <div className={styles.layout}>
          <Reveal className={styles.copy}>
            <SectionHeading id="contact-title" tone="light" label="Contact" title={finalCta.title} />
            <p className={styles.lead}>{finalCta.body}</p>
          </Reveal>

          <Reveal className={styles.formWrap} delay={0.1} variant="scale">
            <form className={styles.form} onSubmit={onSubmit}>
              <p className={styles.formLabel}>Parlez-nous de votre projet</p>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Nom</span>
                  <input name="name" type="text" autoComplete="name" required placeholder="Votre nom" />
                </label>
                <label className={styles.field}>
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="vous@entreprise.com"
                  />
                </label>
              </div>

              <label className={styles.field}>
                <span>Telephone</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="+243 …" />
              </label>

              <label className={styles.field}>
                <span>Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Objectifs, delais, contexte de marque…"
                />
              </label>

              <div className={styles.submitRow}>
                <Button type="submit" data-cursor="Envoyer">
                  {finalCta.action}
                </Button>
                <p className={styles.status} role="status" aria-live="polite">
                  {status === "success"
                    ? "Merci. La connexion backend sera ajoutee dans une prochaine phase."
                    : ""}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
