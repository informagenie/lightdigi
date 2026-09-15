import Image from "next/image";
import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { introContent } from "@/src/data/home";
import styles from "./Intro.module.scss";

export function Intro() {
  return (
    <section id="agence" className={styles.section} aria-labelledby="agence-title">
      <Container>
        <div className={styles.intro}>
          <Reveal>
            <SectionHeading
              id="agence-title"
              className={styles.heading}
              tone="light"
              label={introContent.label}
              title={introContent.title}
            />
          </Reveal>

          <div className={styles.body}>
            <Reveal delay={0.08}>
              <p>{introContent.body}</p>
            </Reveal>

            <Reveal className={styles.imageReveal} delay={0.16} variant="scale">
              <div className={styles.imageWrap}>
                <Image
                  src="/media/intro-equipe-table.png"
                  alt="Equipe Light Digital Consulting en collaboration autour d'une table de travail"
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
