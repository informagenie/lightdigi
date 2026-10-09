import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { clientLogos, type ClientLogo } from "@/src/data/clients";
import { sectionHeadings } from "@/src/data/home";
import styles from "./Clients.module.scss";

const half = Math.ceil(clientLogos.length / 2);
const rows = [clientLogos.slice(0, half), clientLogos.slice(half)];

function LogoGroup({ logos, hidden }: { logos: ClientLogo[]; hidden?: boolean }) {
  return (
    <ul className={styles.group} aria-hidden={hidden || undefined}>
      {logos.map((client) => (
        <li key={client.id} className={styles.logoCard}>
          {/* Static public logos; img avoids next/image SVG limits */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={client.logo}
            alt={hidden ? "" : client.name}
            className={styles.logo}
            loading="lazy"
            style={client.scale ? { ["--logo-scale" as string]: String(client.scale) } : undefined}
          />
        </li>
      ))}
    </ul>
  );
}

export function Clients() {
  return (
    <section id="clients" className={styles.section} aria-labelledby="clients-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="clients-title"
            tone="light"
            label={sectionHeadings.clients.label}
            title={sectionHeadings.clients.title}
          />
        </Reveal>
      </Container>

      <Reveal className={styles.bands} delay={0.1}>
        {rows.map((logos, index) => (
          <div key={index} className={[styles.band, index % 2 ? styles.reverse : ""].join(" ")}>
            <div className={styles.track}>
              <LogoGroup logos={logos} />
              <LogoGroup logos={logos} hidden />
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
