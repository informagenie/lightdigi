"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioListContent } from "@/src/data/portfolio";
import type { PortfolioItem } from "@/src/data/projects";
import styles from "./ProjectsGrid.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ALL = "all";

export function ProjectsGrid({ projects }: { projects: PortfolioItem[] }) {
  const [filter, setFilter] = useState(ALL);
  const gridRef = useRef<HTMLUListElement>(null);
  const isFirstRender = useRef(true);

  const clients = Array.from(new Set(projects.map((project) => project.client)));
  const visible = filter === ALL ? projects : projects.filter((project) => project.client === filter);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const cards = grid.querySelectorAll<HTMLElement>("[data-project-card]");
    const firstRender = isFirstRender.current;
    isFirstRender.current = false;

    // Première apparition au scroll, puis réapparition immédiate à chaque changement de filtre.
    const animation = gsap.fromTo(
      cards,
      { autoAlpha: 0, y: firstRender ? 48 : 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: firstRender ? 1 : 0.6,
        stagger: firstRender ? 0.07 : 0.04,
        ease: "power3.out",
        scrollTrigger: firstRender ? { trigger: grid, start: "top 88%", once: true } : undefined
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [filter]);

  return (
    <>
      <div className={styles.filters} role="group" aria-label={portfolioListContent.filterLabel}>
        {[ALL, ...clients].map((client) => {
          const count =
            client === ALL ? projects.length : projects.filter((project) => project.client === client).length;

          return (
            <button
              key={client}
              type="button"
              className={styles.filter}
              aria-pressed={filter === client}
              onClick={() => setFilter(client)}
            >
              {client === ALL ? portfolioListContent.filterAll : client}
              <sup>{String(count).padStart(2, "0")}</sup>
            </button>
          );
        })}
      </div>

      <ul ref={gridRef} className={styles.grid}>
        {visible.map((project, index) => (
          <li key={project.id} data-project-card className={index % 3 === 1 ? styles.offset : undefined}>
            <Link href={`/realisations/${project.id}`} className={styles.card} data-cursor="Voir">
              <div className={styles.media}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <span className={styles.overlay} aria-hidden="true">
                  {portfolioListContent.viewProject}
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <div className={styles.meta}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <span className={styles.client}>{project.client}</span>
                  <h2>{project.title}</h2>
                  <p>{project.category}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
