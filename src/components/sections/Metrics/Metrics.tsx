import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { metrics } from "@/src/data/metrics";
import styles from "./Metrics.module.scss";

export function Metrics() {
  return (
    <section className={styles.section} aria-label="Chiffres cles">
      <Container>
        <Reveal as="ul" className={styles.grid} stagger={0.1} variant="up">
          {metrics.map((metric) => (
            <li key={metric.id}>
              <article className={styles.item}>
                <p className={styles.value}>{metric.value}</p>
                <p className={styles.label}>{metric.label}</p>
              </article>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
