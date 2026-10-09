import type { Metadata } from "next";
import { Header } from "@/src/components/navigation/Header/Header";
import { ProjectsGrid } from "@/src/components/portfolio/ProjectsGrid/ProjectsGrid";
import { Footer } from "@/src/components/sections/Footer/Footer";
import { Button } from "@/src/components/ui/Button/Button";
import { Container } from "@/src/components/ui/Container/Container";
import { MarqueeBand } from "@/src/components/ui/MarqueeBand/MarqueeBand";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { portfolioCta, portfolioListContent } from "@/src/data/portfolio";
import { allProjects } from "@/src/data/projects";
import styles from "./realisations.module.scss";

export const metadata: Metadata = {
  title: portfolioListContent.metaTitle,
  description: portfolioListContent.metaDescription
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
            label={portfolioListContent.label}
            title={portfolioListContent.title}
            className={styles.heading}
            titleAs="h1"
          />
          <Reveal delay={0.2}>
            <p className={styles.lead}>{portfolioListContent.lead}</p>
          </Reveal>
        </Container>

        <Container>
          <ProjectsGrid projects={allProjects} />
        </Container>

        <div className={styles.cta}>
          <MarqueeBand text={portfolioCta.marquee} href="/#contact" />
          <Container className={styles.ctaActions}>
            <Button href="/#contact">{portfolioCta.primary}</Button>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
