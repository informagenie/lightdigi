export const heroContent = {
  eyebrow: "Agence digitale strategique",
  title: "Transformez votre presence digitale en avantage de marque.",
  lead:
    "Light Digital Consulting accompagne les organisations en strategie, communication, web, contenus et activation digitale depuis Kinshasa et Goma, avec une ambition africaine et internationale.",
  primaryCta: "Parlez-nous de votre projet",
  secondaryCta: "Decouvrir les realisations"
};

export const proofItems = [
  "Strategie digitale",
  "Communication 360",
  "Sites & applications",
  "Contenus de marque",
  "Activation & performance"
];

export const introContent = {
  label: "Agence",
  title: "Une equipe agile pour des marques qui veulent etre plus claires, plus visibles et plus performantes.",
  body:
    "Light Digital Consulting est une agence digitale basee a Kinshasa et Goma, en RDC. Elle combine conseil, creation, technologie et execution operationnelle pour accompagner les entreprises et marques dans leur transformation numerique, avec une comprehension fine des marches congolais et africains."
};

export const approachSteps = [
  {
    label: "01",
    title: "Comprendre",
    body: "Audit, ecoute, contexte de marque, objectifs business et cartographie des leviers prioritaires."
  },
  {
    label: "02",
    title: "Structurer",
    body: "Strategie, architecture de message, parcours utilisateur, planning de contenus et choix des canaux."
  },
  {
    label: "03",
    title: "Creer",
    body: "Identite, interfaces, contenus, campagnes, pages et assets concus pour etre deployes avec coherence."
  },
  {
    label: "04",
    title: "Activer",
    body: "Diffusion, pilotage, reporting et recommandations d'optimisation pour transformer l'effort en resultat."
  }
];

export const whyItems = [
  "Expertise locale et lecture du marche",
  "Culture digitale et creative",
  "Approche reactive, humaine et impliquee",
  "Capacite a relier strategie, design et execution",
  "Experience sur des projets web, social media, contenu et activation"
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  source?: string;
};

/** Temoignages publics valides uniquement — en enrichir via back-office / validation. */
export const testimonials: Testimonial[] = [
  {
    id: "canal-plus-rdc",
    quote:
      "Une equipe jeune et dynamique qui comprend nos besoins et qui delivre des solutions utiles pour notre marche.",
    author: "CANAL+ RDC",
    role: "Client",
    source: "https://lightdigital-consult.cd/"
  }
];

/** @deprecated Prefer testimonials[] */
export const testimonial = testimonials[0];

export const finalCta = {
  title: "Votre prochaine presence digitale peut devenir beaucoup plus qu'un site.",
  body:
    "Construisons une experience claire, premium et orientee conversion pour presenter votre marque avec le niveau d'exigence qu'elle merite.",
  action: "Demarrer la conversation"
};
