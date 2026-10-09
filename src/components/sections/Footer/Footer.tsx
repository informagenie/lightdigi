import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Container } from "@/src/components/ui/Container/Container";
import { navigationItems } from "@/src/data/navigation";
import { contactContent } from "@/src/data/contact";
import { footerContent } from "@/src/data/home";
import { socialLinks } from "@/src/data/social";
import styles from "./Footer.module.scss";

const socialIcons = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram
} as const;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" aria-label="Light Digital Consulting - Accueil" className={styles.brandLink}>
            <Image src="/brand/light-digital-logo.png" alt="" width={154} height={99} />
            <span className={styles.brandText}>
              <strong>Light Digital</strong>
              <small>agence digitale</small>
            </span>
          </Link>
          <p>{footerContent.tagline}</p>
          <ul className={styles.socials} aria-label={footerContent.socialsLabel}>
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.id as keyof typeof socialIcons];
              if (!Icon) {
                return null;
              }

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    data-cursor={link.label}
                  >
                    <Icon aria-hidden="true" size={16} strokeWidth={1.75} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <nav aria-label={footerContent.navLabel}>
          {navigationItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <address>
          <span>{contactContent.location}</span>
          <span>{contactContent.address}</span>
          <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
          {contactContent.phones.map((phone) => (
            <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`}>
              {phone}
            </a>
          ))}
        </address>
      </Container>
      <Container>
        <p className={styles.copy}>{footerContent.copyright}</p>
      </Container>
    </footer>
  );
}
