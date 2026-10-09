import { AnimatedTitle } from "@/src/components/ui/AnimatedTitle/AnimatedTitle";
import { SectionLabel } from "@/src/components/ui/SectionLabel/SectionLabel";
import styles from "./SectionHeading.module.scss";

type SectionHeadingProps = {
  label: string;
  /** Accepte la syntaxe *accent* pour surligner un passage. */
  title: string;
  id?: string;
  tone?: "light" | "dark";
  className?: string;
  labelVariant?: "default" | "minimal";
};

export function SectionHeading({
  label,
  title,
  id,
  tone = "dark",
  className,
  labelVariant = "default"
}: SectionHeadingProps) {
  const classNames = [styles.heading, styles[tone], className].filter(Boolean).join(" ");

  return (
    <header className={classNames}>
      <SectionLabel tone={tone} variant={labelVariant}>
        {label}
      </SectionLabel>
      <AnimatedTitle id={id} text={title} />
    </header>
  );
}
