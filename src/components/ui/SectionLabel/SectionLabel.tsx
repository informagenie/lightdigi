import styles from "./SectionLabel.module.scss";

type SectionLabelProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  variant?: "default" | "minimal";
};

export function SectionLabel({ children, tone = "dark", variant = "default" }: SectionLabelProps) {
  return (
    <p className={[styles.label, styles[tone], variant === "minimal" ? styles.minimal : ""].filter(Boolean).join(" ")}>
      {children}
    </p>
  );
}
