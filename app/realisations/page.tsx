import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/src/components/navigation/Header/Header";
import { Footer } from "@/src/components/sections/Footer/Footer";
import { Container } from "@/src/components/ui/Container/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { Button } from "@/src/components/ui/Button/Button";
import { allProjects } from "@/src/data/projects";
import styles from "./realisations.module.scss";

export const metadata: Metadata = {
  title: "Realisations",
  description:
    "Decouvrez l'ensemble des projets realises par Light Digital Consulting pour des marques, institutions et organisations."
};

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <Container className={styles.intro}>
          <SectionHeading
            id="all-works-title"
            tone="light"
            label="Portfolio"
            title="Tous nos projets realises."
          />
          <p className={styles.lead}>
            Une selection elargie de campagnes, activations et productions digitalisees pour nos
            clients en RDC et au-dela.
          </p>
        </Container>

        <Container>
          <ul className={styles.grid}>
            {allProjects.map((project) => (
              <li key={project.id}>
                <Link href={`/realisations/${project.id}`} className={styles.card}>
                  <div className={styles.media}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.meta}>
                    <span>{project.client}</span>
                    <h2>{project.title}</h2>
                    <p>{project.category}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.cta}>
            <Button href="/#contact">Parlez-nous de votre projet</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
