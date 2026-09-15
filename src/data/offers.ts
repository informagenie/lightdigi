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
      "Calendrier editorial mensuel (structure et reutilisable).",
      "3 visuels + 2 videos animees par semaine, adaptes a vos plateformes.",
      "Elaboration d'une strategie digitale complete.",
      "Analyse digitale de la marque : audit, positionnement et recommandations.",
      "Campagne publicitaire Facebook (Meta Ads niveau basique).",
      "Audit digital general (performance, coherence, image)."
    ]
  },
  {
    id: "light-booster",
    name: "Light Booster",
    price: "700 $",
    period: "/mois",
    summary: "Pour accelerer votre presence et renforcer votre activation digitale.",
    image: "/media/light-booster.jpg",
    featured: true,
    features: [
      "Calendrier editorial mensuel (structure et reutilisable).",
      "3 visuels + 2 videos animees par semaine, adaptes a vos plateformes.",
      "Elaboration d'une strategie digitale complete.",
      "Analyse digitale de la marque : audit, positionnement et recommandations.",
      "Campagne publicitaire Facebook (Meta Ads niveau basique).",
      "Audit digital general (performance, coherence, image)."
    ]
  },
  {
    id: "light-avance",
    name: "Light Avance",
    price: "1000 $",
    period: "/mois",
    summary: "Pour une execution plus ambitieuse et un accompagnement renforce.",
    image: "/media/light-booster.jpg",
    features: [
      "Calendrier editorial mensuel (structure et reutilisable).",
      "3 visuels + 2 videos animees par semaine, adaptes a vos plateformes.",
      "Elaboration d'une strategie digitale complete.",
      "Analyse digitale de la marque : audit, positionnement et recommandations.",
      "Campagne publicitaire Facebook (Meta Ads niveau basique).",
      "Audit digital general (performance, coherence, image)."
    ]
  }
];

export const offerIntro = {
  label: "Offres",
  title: "Campagne speciale — packages Light Digital Consulting.",
  body: "Des formules mensuelles pour structurer votre presence, produire des contenus et activer vos campagnes."
};
