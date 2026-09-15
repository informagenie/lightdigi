import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { clientLogos } from "@/src/data/clients";
import styles from "./Clients.module.scss";

export function Clients() {
  return (
    <section id="clients" className={styles.section} aria-labelledby="clients-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="clients-title"
            tone="light"
            label="Ils nous font confiance"
            title="Des marques, institutions et organisations de premier plan."
          />
        </Reveal>

        <Reveal as="ul" className={styles.grid} stagger={0.04} variant="scale">
          {clientLogos.map((client) => (
            <li key={client.id} className={styles.item}>
              <div className={styles.logoCard}>
                {/* Static public logos; img avoids next/image SVG limits */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className={styles.logo}
                  style={client.scale ? { ["--logo-scale" as string]: String(client.scale) } : undefined}
                />
              </div>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
