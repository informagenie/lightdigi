"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/src/components/ui/Button/Button";
import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { contactContent } from "@/src/data/contact";
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
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index}>
              {finalCta.marquee}
              <span className={styles.marqueeStar}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <Container>
        <div className={styles.layout}>
          <Reveal className={styles.copy}>
            <SectionHeading id="contact-title" tone="light" label={finalCta.label} title={finalCta.title} />
            <p className={styles.lead}>{finalCta.body}</p>
          </Reveal>

          <Reveal className={styles.formWrap} delay={0.1} variant="scale">
            <form className={styles.form} onSubmit={onSubmit}>
              <p className={styles.formLabel}>{finalCta.form.label}</p>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span>{finalCta.form.name}</span>
                  <input name="name" type="text" autoComplete="name" required placeholder={finalCta.form.namePlaceholder} />
                </label>
                <label className={styles.field}>
                  <span>{finalCta.form.email}</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder={finalCta.form.emailPlaceholder}
                  />
                </label>
              </div>

              <label className={styles.field}>
                <span>{finalCta.form.phone}</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder={finalCta.form.phonePlaceholder} />
              </label>

              <label className={styles.field}>
                <span>{finalCta.form.message}</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={finalCta.form.messagePlaceholder}
                />
              </label>

              <div className={styles.submitRow}>
                <Button type="submit" data-cursor="Envoyer">
                  {finalCta.action}
                </Button>
                <p className={styles.status} role="status" aria-live="polite">
                  {status === "success" ? (
                    <>
                      {finalCta.form.success}{" "}
                      <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
                    </>
                  ) : null}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
