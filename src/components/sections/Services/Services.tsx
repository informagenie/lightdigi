import { ArrowUpRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { ServiceIcon } from "@/src/components/ui/ServiceIcon/ServiceIcon";
import { sectionHeadings } from "@/src/data/home";
import { serviceFamilies } from "@/src/data/services";
import styles from "./Services.module.scss";

export function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="services-title"
            tone="light"
            label={sectionHeadings.services.label}
            title={sectionHeadings.services.title}
          />
        </Reveal>

        <Reveal as="div" className={styles.list} stagger={0.08}>
          {serviceFamilies.map((service) => (
            <article key={service.id} id={service.id} className={styles.item}>
              <div className={styles.number}>{service.label}</div>
              <div className={styles.content}>
                <h3>
                  <span className={styles.icon} aria-hidden="true">
                    <ServiceIcon id={service.id} size={22} />
                  </span>
                  {service.title}
                </h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <ArrowUpRight className={styles.arrow} aria-hidden="true" size={34} strokeWidth={1.5} />
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
