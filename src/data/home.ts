/**
 * Les titres acceptent la syntaxe *mot* pour mettre un passage en accent orange.
 */

export const heroContent = {
  eyebrow: "Agence de communication digitale",
  title: "Transformez votre présence digitale en *avantage de marque*.",
  lead:
    "Stratégie, contenus, web et campagnes : Light Digital Consulting conçoit et active des dispositifs digitaux qui rendent les marques plus visibles, plus claires et plus performantes. Depuis Kinshasa, pour la RDC, l'Afrique et l'international.",
  primaryCta: "Parlez-nous de votre projet",
  secondaryCta: "Découvrir nos réalisations",
  scrollLabel: "Défiler",
  scrollAria: "Découvrir la suite"
};

export const proofItems = [
  "Stratégie digitale",
  "Communication 360°",
  "Sites & applications",
  "Contenus de marque",
  "Activation & performance"
];

export const sectionHeadings = {
  clients: {
    label: "Ils nous font confiance",
    title: "Des marques, institutions et organisations *de premier plan* nous confient leur image."
  },
  services: {
    label: "Services",
    title: "Cinq expertises réunies pour *construire, lancer et faire grandir* votre marque."
  },
  works: {
    label: "Réalisations",
    title: "Nos projets récents, *nos terrains d'expression*."
  },
  approach: {
    label: "Méthode",
    title: "Une approche 360°, *jamais confuse*."
  },
  why: {
    label: "Pourquoi Light",
    title: "Le juste équilibre entre *lecture du terrain*, exigence créative et culture digitale."
  },
  team: {
    label: "Notre équipe",
    title: "Des experts mobilisés pour répondre *aux besoins uniques* de chaque projet."
  }
};

export const worksContent = {
  controlsLabel: "Navigation du portfolio",
  previous: "Projets précédents",
  next: "Projets suivants",
  more: "Voir tous les projets"
};

export const introContent = {
  label: "L'agence",
  title: "Une équipe agile pour des marques qui veulent être *plus claires, plus visibles et plus performantes*.",
  body:
    "Basée à Kinshasa, Light Digital Consulting réunit conseil, création, technologie et exécution opérationnelle sous un même toit. Nous accompagnons entreprises, institutions et organisations dans leur transformation numérique, avec une connaissance fine des marchés congolais et africains, et l'exigence des standards internationaux.",
  imageAlt: "L'équipe Light Digital Consulting en séance de travail autour d'une table"
};

export const approachSteps = [
  {
    label: "01",
    title: "Comprendre",
    body: "Audit, écoute, contexte de marque et objectifs business : nous identifions les leviers prioritaires avant d'agir."
  },
  {
    label: "02",
    title: "Structurer",
    body: "Stratégie, architecture des messages, parcours utilisateur, calendrier éditorial et choix des canaux."
  },
  {
    label: "03",
    title: "Créer",
    body: "Identité, interfaces, contenus, campagnes et pages conçus pour être déployés avec cohérence sur chaque support."
  },
  {
    label: "04",
    title: "Activer",
    body: "Diffusion, pilotage, reporting et optimisation continue pour transformer chaque effort en résultat."
  }
];

export const whyContent = {
  kicker: "Ce qui nous distingue",
  testimonialsLabel: "Témoignages",
  previous: "Témoignage précédent",
  next: "Témoignage suivant"
};

export const whyItems = [
  "Une expertise locale et une lecture fine du marché",
  "Une culture digitale et créative au cœur de l'équipe",
  "Une approche réactive, humaine et impliquée",
  "La capacité de relier stratégie, design et exécution",
  "Une expérience éprouvée en web, social media, contenus et activation"
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  source?: string;
};

/** Témoignages publics validés uniquement — en ajouter après validation. */
export const testimonials: Testimonial[] = [
  {
    id: "canal-plus-rdc",
    quote:
      "Une équipe jeune et dynamique qui comprend nos besoins et qui délivre des solutions utiles pour notre marché.",
    author: "CANAL+ RDC",
    role: "Client",
    source: "https://lightdigital-consult.cd/"
  }
];

/** @deprecated Prefer testimonials[] */
export const testimonial = testimonials[0];

export const finalCta = {
  label: "Contact",
  marquee: "Parlons de votre projet",
  title: "Votre prochaine présence digitale peut devenir *bien plus qu'un site*.",
  body:
    "Parlez-nous de vos objectifs. Nous construisons avec vous une expérience claire, premium et orientée résultats, à la hauteur de l'exigence de votre marque.",
  action: "Démarrer la conversation",
  form: {
    label: "Parlez-nous de votre projet",
    name: "Nom",
    namePlaceholder: "Votre nom",
    email: "E-mail",
    emailPlaceholder: "vous@entreprise.com",
    phone: "Téléphone",
    phonePlaceholder: "+243 …",
    message: "Message",
    messagePlaceholder: "Objectifs, délais, contexte de marque…",
    success:
      "Merci ! L'envoi en ligne sera activé prochainement. En attendant, écrivez-nous directement par e-mail."
  }
};

export const footerContent = {
  tagline: "Stratégie, création, technologie et activation digitale.",
  socialsLabel: "Réseaux sociaux",
  navLabel: "Navigation de pied de page",
  copyright: "© 2022 – 2026 Light Digital Consulting. Tous droits réservés."
};
