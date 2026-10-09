import Link from "next/link";
import styles from "./MarqueeBand.module.scss";

type MarqueeBandProps = {
  text: string;
  /** Rend le bandeau cliquable (le texte devient le libellé du lien). */
  href?: string;
  className?: string;
};

/** Bandeau typographique géant qui défile en boucle. */
export function MarqueeBand({ text, href, className }: MarqueeBandProps) {
  const track = (
    <div className={styles.track} aria-hidden="true">
      {Array.from({ length: 4 }, (_, index) => (
        <span key={index}>
          {text}
          <span className={styles.star}>✦</span>
        </span>
      ))}
    </div>
  );

  const classNames = [styles.band, href ? styles.link : "", className].filter(Boolean).join(" ");

  return href ? (
    <Link href={href} className={classNames} aria-label={text} data-cursor="Contact">
      {track}
    </Link>
  ) : (
    <div className={classNames}>{track}</div>
  );
}
