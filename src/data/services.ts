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
    title: "Stratégie & Audit",
    label: "01",
    description:
      "Conseil, diagnostic de votre présence digitale, benchmark et recommandations pour clarifier les priorités avant d'activer les bons leviers.",
    items: ["Stratégie digitale", "Audit digital", "Benchmark", "Veille", "Conseil"]
  },
  {
    id: "communication",
    title: "Communication & Social",
    label: "02",
    description:
      "Animation de communautés, social media, e-réputation, influence et campagnes pensées pour le marché local comme pour vos ambitions internationales.",
    items: ["Community management", "Social media", "E-réputation", "Influence", "Campagnes"]
  },
  {
    id: "web",
    title: "Web & Produits digitaux",
    label: "03",
    description:
      "Sites institutionnels, e-commerce, applications mobiles et métiers, conçus avec une attention particulière à l'UX, au SEO et à la conversion.",
    items: ["Sites web", "E-commerce", "Applications mobiles", "Applications métiers", "UX/UI"]
  },
  {
    id: "creation",
    title: "Création & Contenus",
    label: "04",
    description:
      "Identité visuelle, design graphique, photographie, vidéo et contenus taillés pour chaque plateforme où votre marque doit exister.",
    items: ["Branding", "Design graphique", "Photographie", "Production vidéo", "Motion design"]
  },
  {
    id: "activation",
    title: "Acquisition & Activation",
    label: "05",
    description:
      "Publicité digitale, SEO/SEA, media planning, SMS marketing via TINDA MINGI, formation social media et accompagnement opérationnel de vos équipes.",
    items: ["Google Ads", "Meta Ads", "SEO/SEA", "TINDA MINGI (SMS)", "Formation & marque blanche"]
  }
];
