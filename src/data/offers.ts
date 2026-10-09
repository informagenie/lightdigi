export type OfferPackage = {
  id: string;
  name: string;
  price: string;
  period: string;
  summary: string;
  features: string[];
  image: string;
  featured?: boolean;
};

export const offerPackages: OfferPackage[] = [
  {
    id: "light-starter",
    name: "Light Starter",
    price: "500 $",
    period: "/mois",
    summary: "Pour poser des bases solides et rendre votre marque visible.",
    image: "/media/light-starter.jpg",
    features: [
      "Calendrier éditorial mensuel (structuré et réutilisable).",
      "3 visuels + 2 vidéos animées par semaine, adaptés a vos plateformes.",
      "Élaboration d'une stratégie digitale complète.",
      "Analyse digitale de la marque : audit, positionnement et recommandations.",
      "Campagne publicitaire Facebook (Meta Ads niveau basique).",
      "Audit digital général (performance, cohérence, image)."
    ]
  },
  {
    id: "light-booster",
    name: "Light Booster",
    price: "700 $",
    period: "/mois",
    summary: "Pour accélérer votre présence et renforcer votre activation digitale.",
    image: "/media/light-booster.jpg",
    featured: true,
    features: [
      "Calendrier éditorial mensuel (structuré et réutilisable).",
      "3 visuels + 2 vidéos animées par semaine, adaptés a vos plateformes.",
      "Élaboration d'une stratégie digitale complète.",
      "Analyse digitale de la marque : audit, positionnement et recommandations.",
      "Campagne publicitaire Facebook (Meta Ads niveau basique).",
      "Audit digital général (performance, cohérence, image)."
    ]
  },
  {
    id: "light-avance",
    name: "Light Avancé",
    price: "1000 $",
    period: "/mois",
    summary: "Pour une exécution plus ambitieuse et un accompagnement renforcé.",
    image: "/media/light-booster.jpg",
    features: [
      "Calendrier éditorial mensuel (structuré et réutilisable).",
      "3 visuels + 2 vidéos animées par semaine, adaptés a vos plateformes.",
      "Élaboration d'une stratégie digitale complète.",
      "Analyse digitale de la marque : audit, positionnement et recommandations.",
      "Campagne publicitaire Facebook (Meta Ads niveau basique).",
      "Audit digital général (performance, cohérence, image)."
    ]
  }
];

export const offerIntro = {
  label: "Offres",
  title: "Campagne spéciale — packages Light Digital Consulting.",
  body: "Des formules mensuelles pour structurer votre présence, produire des contenus et activer vos campagnes."
};
