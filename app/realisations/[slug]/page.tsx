import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/src/components/navigation/Header/Header";
import { Footer } from "@/src/components/sections/Footer/Footer";
import { AnimatedTitle } from "@/src/components/ui/AnimatedTitle/AnimatedTitle";
import { Button } from "@/src/components/ui/Button/Button";
import { Container } from "@/src/components/ui/Container/Container";
import { MarqueeBand } from "@/src/components/ui/MarqueeBand/MarqueeBand";
import { ParallaxMedia } from "@/src/components/ui/ParallaxMedia/ParallaxMedia";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { portfolioCta, projectPageContent } from "@/src/data/portfolio";
import { allProjects, getProjectById, getRelatedProjects } from "@/src/data/projects";
import styles from "./project.module.scss";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return { title: projectPageContent.notFound };
  }

  return {
    title: project.title,
    description: project.mission,
    openGraph: {
      title: `${project.title} | Light Digital Consulting`,
      description: project.mission,
      images: [project.image]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.id, 4);
  const currentIndex = allProjects.findIndex((item) => item.id === project.id);
  const next = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <>
      <Header />
      <main className={styles.page}>
        <Container className={styles.hero}>
          <Link className={styles.back} href="/realisations">
            <ArrowLeft aria-hidden="true" size={16} />
            {projectPageContent.back}
          </Link>

          <p className={styles.eyebrow}>
            <span>{project.client}</span>
            <span aria-hidden="true">/</span>
            <span>{project.category}</span>
          </p>
          <AnimatedTitle as="h1" text={project.title} className={styles.title} />

          <div className={styles.intro}>
            <Reveal delay={0.25}>
              <p className={styles.mission}>{project.mission}</p>
            </Reveal>

            <Reveal as="div" className={styles.meta} stagger={0.08}>
              <div>
                <p className={styles.metaLabel}>{projectPageContent.client}</p>
                <p className={styles.metaValue}>{project.client}</p>
              </div>
              <div>
                <p className={styles.metaLabel}>{projectPageContent.service}</p>
                <p className={styles.metaValue}>{project.service}</p>
              </div>
              <div>
                <p className={styles.metaLabel}>{projectPageContent.sector}</p>
                <p className={styles.metaValue}>{project.sector}</p>
              </div>
              <div>
                <p className={styles.metaLabel}>{projectPageContent.deliverables}</p>
                <ul className={styles.tags}>
                  {project.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>

        <Container className={styles.showcase}>
          <ParallaxMedia className={styles.heroMedia} depth={10}>
            <Image src={project.image} alt={project.alt} fill priority sizes="(max-width: 900px) 100vw, 1180px" />
          </ParallaxMedia>
        </Container>

        {related.length > 0 ? (
          <Container className={styles.galleryBlock}>
            <div className={styles.galleryHead}>
              <h2>
                {projectPageContent.related} <em>{project.client}</em>
              </h2>
              <span />
            </div>
            <Reveal as="ul" className={styles.gallery} stagger={0.08}>
              {related.map((item) => (
                <li key={item.id}>
                  <Link href={`/realisations/${item.id}`} className={styles.galleryCard} data-cursor="Voir">
                    <div className={styles.galleryMedia}>
                      <Image src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 50vw, 280px" />
                    </div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </Reveal>
          </Container>
        ) : null}

        {next && next.id !== project.id ? (
          <Link href={`/realisations/${next.id}`} className={styles.next} data-cursor="Suivant">
            <Container className={styles.nextInner}>
              <span className={styles.nextLabel}>{projectPageContent.next}</span>
              <span className={styles.nextTitle}>
                {next.title}
                <ArrowUpRight aria-hidden="true" className={styles.nextArrow} />
              </span>
              <span className={styles.nextClient}>{next.client}</span>
            </Container>
          </Link>
        ) : null}

        <div className={styles.cta}>
          <MarqueeBand text={portfolioCta.marquee} href="/#contact" />
          <Container className={styles.ctaActions}>
            <Button href="/#contact">{portfolioCta.primary}</Button>
            <Button href="/realisations" variant="secondary">
              {portfolioCta.secondary}
            </Button>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
