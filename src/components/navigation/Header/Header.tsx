"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SocialIcon } from "@/src/components/ui/SocialIcon/SocialIcon";
import { navigationItems } from "@/src/data/navigation";
import { serviceFamilies } from "@/src/data/services";
import { socialLinks } from "@/src/data/social";
import styles from "./Header.module.scss";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
  const [portalReady, setPortalReady] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navigationItems.forEach((item) => {
      const hashIndex = item.href.indexOf("#");
      const id = hashIndex >= 0 ? item.href.slice(hashIndex + 1) : "";
      if (!id) {
        return;
      }

      const section = document.getElementById(id);
      if (!section) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setActiveHref(item.href);
          }
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  const megaMenu =
    portalReady && isOpen
      ? createPortal(
          <div
            id="mega-menu"
            ref={panelRef}
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Services et navigation"
          >
            <div className={styles.panelBar}>
              <Link
                className={styles.logo}
                href="/"
                aria-label="Light Digital Consulting - Accueil"
                onClick={closeMenu}
              >
                <Image src="/brand/light-digital-logo.png" alt="" width={154} height={99} priority />
                <span className={styles.brandText}>
                  <strong>Light Digital</strong>
                  <small>agence digitale</small>
                </span>
              </Link>
              <button className={styles.menuToggle} type="button" aria-label="Fermer le menu" onClick={closeMenu}>
                <X aria-hidden="true" size={20} />
              </button>
            </div>

            <div className={styles.panelBody}>
              <div className={styles.panelTop}>
                <p>Navigation immersive</p>
                <button type="button" onClick={closeMenu}>
                  Fermer
                </button>
              </div>

              <div className={styles.panelGrid}>
                <div>
                  <p className={styles.panelKicker}>Explorer</p>
                  <Link className={styles.panelTitle} href="/#services" onClick={closeMenu}>
                    Services
                  </Link>
                  <Link className={styles.panelTitle} href="/#realisations" onClick={closeMenu}>
                    Realisations
                  </Link>
                  <Link className={styles.panelTitle} href="/#contact" onClick={closeMenu}>
                    Contact
                  </Link>
                </div>

                <div className={styles.serviceLinks}>
                  {serviceFamilies.map((service) => (
                    <Link key={service.id} href={`/#${service.id}`} onClick={closeMenu}>
                      <span>{service.label}</span>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <header className={[styles.header, isScrolled ? styles.scrolled : ""].filter(Boolean).join(" ")}>
        <div className={styles.bar}>
          <Link className={styles.logo} href="/" aria-label="Light Digital Consulting - Accueil" onClick={closeMenu}>
            <Image src="/brand/light-digital-logo.png" alt="" width={154} height={99} priority />
            <span className={styles.brandText}>
              <strong>Light Digital</strong>
              <small>agence digitale</small>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Navigation principale">
            {navigationItems.map((item) => {
              const isActive = activeHref === item.href;

              if (item.opensMenu) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={[styles.navLink, isActive ? styles.navLinkActive : ""].filter(Boolean).join(" ")}
                    aria-expanded={isOpen}
                    aria-controls="mega-menu"
                    onClick={openMenu}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={[styles.navLink, isActive ? styles.navLinkActive : ""].filter(Boolean).join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <ul className={styles.socials} aria-label="Reseaux sociaux">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    data-cursor={link.label}
                  >
                    <SocialIcon id={link.id} size={18} />
                  </a>
                </li>
              ))}
            </ul>
            <button
              ref={toggleRef}
              className={styles.menuToggle}
              type="button"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mega-menu"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>
          </div>
        </div>
      </header>
      {megaMenu}
    </>
  );
}
