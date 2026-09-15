export type ServiceFamily = {
  id: string;
  title: string;
  label: string;
  description: string;
  items: string[];
};

export const serviceFamilies: ServiceFamily[] = [
  {
    id: "strategie",
    title: "Strategie & Audit",
    label: "01",
    description:
      "Conseil, diagnostic de presence digitale, benchmark et recommandations pour clarifier les priorites avant d'activer les leviers.",
    items: ["Strategie digitale", "Audit digital", "Benchmark", "Veille", "Conseil"]
  },
  {
    id: "communication",
    title: "Communication & Social",
    label: "02",
    description:
      "Animation de communautes, social media, e-reputation, influence et campagnes pensees pour le marche local comme pour les ambitions internationales.",
    items: ["Community management", "Social media", "E-reputation", "Influence", "Campagnes"]
  },
  {
    id: "web",
    title: "Web & Produits Digitaux",
    label: "03",
    description:
      "Sites institutionnels, e-commerce, applications mobiles et metiers avec une attention forte portee a l'UX, au SEO et a la conversion.",
    items: ["Sites web", "E-commerce", "Applications mobiles", "Applications metiers", "UX/UI"]
  },
  {
    id: "creation",
    title: "Creation & Contenus",
    label: "04",
    description:
      "Identite visuelle, design graphique, photographie, video et contenus adaptes aux plateformes ou la marque doit exister.",
    items: ["Branding", "Design graphique", "Photographie", "Production video", "Motion design"]
  },
  {
    id: "activation",
    title: "Acquisition & Activation",
    label: "05",
    description:
      "Publicite digitale, SEO/SEA, media planning, SMS marketing via TINDA MINGI, formation Social Media et accompagnement operationnel des equipes.",
    items: ["Google Ads", "Meta Ads", "SEO/SEA", "TINDA MINGI (SMS)", "Formation & marque blanche"]
  }
];
