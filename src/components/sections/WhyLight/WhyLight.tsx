import { Container } from "@/src/components/ui/Container/Container";
import { Reveal } from "@/src/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading/SectionHeading";
import { sectionHeadings, testimonials, whyContent, whyItems } from "@/src/data/home";
import { TestimonialsSlider } from "./TestimonialsSlider";
import styles from "./WhyLight.module.scss";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M9.2 17.4 3.8 12l1.7-1.7 3.7 3.7 9.3-9.3L20.2 6.4 9.2 17.4z"
      />
    </svg>
  );
}

export function WhyLight() {
  return (
    <section className={styles.section} aria-labelledby="why-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="why-title"
            tone="light"
            label={sectionHeadings.why.label}
            title={sectionHeadings.why.title}
          />
        </Reveal>

        <div className={styles.layout}>
          <Reveal className={styles.reasons} delay={0.06}>
            <p className={styles.kicker}>{whyContent.kicker}</p>
            <ul>
              {whyItems.map((item, index) => (
                <li key={item} style={{ ["--i" as string]: String(index) }}>
                  <span className={styles.check}>
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.testimonials} delay={0.14} variant="scale">
            <TestimonialsSlider items={testimonials} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
