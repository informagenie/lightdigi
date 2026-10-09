import Image from "next/image";
import { Container } from "@/src/components/ui/Container/Container";
import { ParallaxMedia } from "@/src/components/ui/ParallaxMedia/ParallaxMedia";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { ScrollHighlightText } from "@/src/components/ui/ScrollHighlightText/ScrollHighlightText";
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
            <ScrollHighlightText text={introContent.body} />

            <ParallaxMedia className={styles.imageReveal} reveal="fade" depth={6}>
              <div className={styles.imageWrap}>
                <Image
                  src="/media/intro-equipe-table.png"
                  alt={introContent.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  priority
                />
              </div>
            </ParallaxMedia>
          </div>
        </div>
      </Container>
    </section>
  );
}
