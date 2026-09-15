import { proofItems } from "@/src/data/home";
import styles from "./ClientMarquee.module.scss";

function MarqueeGroup({ duplicateKey }: { duplicateKey: string }) {
  return (
    <div className={styles.group} aria-hidden={duplicateKey === "b" ? true : undefined}>
      {proofItems.map((item) => (
        <span key={`${duplicateKey}-${item}`} className={styles.item}>
          <span className={styles.diamond} aria-hidden="true" />
          <span className={styles.label}>{item}</span>
        </span>
      ))}
    </div>
  );
}

export function ClientMarquee() {
  return (
    <section className={styles.band} aria-label="Domaines d'intervention">
      <div className={styles.viewport}>
        <div className={styles.track}>
          <MarqueeGroup duplicateKey="a" />
          <MarqueeGroup duplicateKey="b" />
        </div>
      </div>
    </section>
  );
}
