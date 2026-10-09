import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/src/components/navigation/Header/Header";
import { Footer } from "@/src/components/sections/Footer/Footer";
import { Container } from "@/src/components/ui/Container/Container";
import { Button } from "@/src/components/ui/Button/Button";
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
    return { title: "Projet introuvable" };
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

  const related = getRelatedProjects(project.id, 6);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <Container className={styles.hero}>
          <Link className={styles.back} href="/realisations">
            ← Toutes les realisations
          </Link>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{project.client}</p>
              <h1>{project.title}</h1>
              <p className={styles.mission}>{project.mission}</p>
            </div>
          </div>

          <dl className={styles.meta}>
            <div>
              <dt>Prestations fournies</dt>
              <dd>
                <ul>
                  {project.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Service</dt>
              <dd>{project.service}</dd>
            </div>
            <div>
              <dt>Secteur</dt>
              <dd>{project.sector}</dd>
            </div>
          </dl>
        </Container>

        <Container className={styles.showcase}>
          <div className={styles.heroMedia}>
            <Image
              src={project.image}
              alt={project.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1180px"
            />
          </div>
        </Container>

        {related.length > 0 ? (
          <Container className={styles.galleryBlock}>
            <div className={styles.galleryHead}>
              <h2>Visuels associés</h2>
              <span />
            </div>
            <ul className={styles.gallery}>
              {related.map((item) => (
                <li key={item.id}>
                  <Link href={`/realisations/${item.id}`} className={styles.galleryCard}>
                    <div className={styles.galleryMedia}>
                      <Image src={item.image} alt={item.alt} fill sizes="(max-width: 900px) 50vw, 280px" />
                    </div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        ) : null}

        <Container className={styles.cta}>
          <Button href="/#contact">Parlez-nous de votre projet</Button>
          <Button href="/realisations" variant="secondary">
            Retour au portfolio
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
