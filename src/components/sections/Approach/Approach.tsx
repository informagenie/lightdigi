import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { ScrollProgressLine } from "@/src/components/ui/ScrollProgressLine/ScrollProgressLine";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { approachSteps, sectionHeadings } from "@/src/data/home";
import styles from "./Approach.module.scss";

export function Approach() {
  return (
    <section id="approche" className={styles.section} aria-labelledby="approach-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="approach-title"
            tone="dark"
            label={sectionHeadings.approach.label}
            title={sectionHeadings.approach.title}
          />
        </Reveal>

        <div className={styles.stepsWrap}>
          <ScrollProgressLine className={styles.progress} />
          <Reveal as="div" className={styles.steps} stagger={0.12}>
            {approachSteps.map((step) => (
              <article key={step.label} className={styles.step}>
                <span className={styles.index}>{step.label}</span>
                <div className={styles.copy}>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
