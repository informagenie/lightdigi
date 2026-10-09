import Image from "next/image";
import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { sectionHeadings } from "@/src/data/home";
import { teamMembers } from "@/src/data/team";
import styles from "./Team.module.scss";

export function Team() {
  return (
    <section id="equipe" className={styles.section} aria-labelledby="team-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="team-title"
            tone="light"
            label={sectionHeadings.team.label}
            title={sectionHeadings.team.title}
            className={styles.heading}
          />
        </Reveal>

        <Reveal as="ul" className={styles.grid} stagger={0.06} variant="scale">
          {teamMembers.map((member) => (
            <li key={member.id} className={styles.item}>
              <article className={styles.card}>
                <div className={styles.photo}>
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 560px) 90vw, (max-width: 900px) 45vw, 22vw"
                  />
                  <div className={styles.shade} aria-hidden="true" />
                </div>
                <div className={styles.meta}>
                  <h3>{member.name}</h3>
                  {member.role ? <p className={styles.role}>{member.role}</p> : null}
                </div>
              </article>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
