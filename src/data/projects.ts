export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: string;
  mission: string;
  image: string;
  alt: string;
  sector: string;
  service: string;
  deliverables: string[];
};

const clientSector: Record<string, string> = {
  "Engen RDC": "Énergie",
  "Africa CDC": "Santé publique",
  "CANAL+ RDC": "Média",
  "Fondation Denise Nyakeru": "Fondation"
};

function project(
  data: Omit<PortfolioItem, "sector" | "service" | "deliverables"> & {
    sector?: string;
    service?: string;
    deliverables?: string[];
  }
): PortfolioItem {
  return {
    ...data,
    sector: data.sector ?? clientSector[data.client] ?? "Digital",
    service: data.service ?? data.category,
    deliverables: data.deliverables ?? [data.category]
  };
}

export const selectedProjects: PortfolioItem[] = [
  project({
    id: "engen-anticipez",
    title: "Anticipez l'entretien de votre véhicule",
    client: "Engen RDC",
    category: "Communication & social media",
    mission: "Visuels éditoriaux et contenus de marque pour promouvoir les services et produits Engen.",
    image: "/projects/engen/anticipez-entretien.jpg",
    alt: "Visuel Engen RDC sur l'entretien du véhicule avec pneus, freins et huile Dieselube Super",
    deliverables: ["Social media", "Brand content", "Visuels éditoriaux"]
  }),
  project({
    id: "engen-premium-40",
    title: "Premium 40 — Huile moteur",
    client: "Engen RDC",
    category: "Brand content",
    mission: "Mise en avant du produit et argumentaire de performance pour la gamme Premium 40.",
    image: "/projects/engen/premium-40.jpg",
    alt: "Visuel produit Engen Premium 40 huile moteur SAE 40",
    deliverables: ["Brand content", "Design produit", "Social media"]
  }),
  project({
    id: "engen-securite",
    title: "Moteur coupé avant de faire le plein",
    client: "Engen RDC",
    category: "Campagne sécurité",
    mission: "Série de visuels de sensibilisation aux bonnes pratiques en station-service.",
    image: "/projects/engen/moteur-coupe.jpg",
    alt: "Campagne Engen RDC sur la sécurité en station avec le message « moteur coupé »",
    deliverables: ["Campagne sécurité", "Visuels de sensibilisation", "Social media"]
  }),
  project({
    id: "africa-cdc-ebola",
    title: "Ebola se propage : faisons circuler la bonne information",
    client: "Africa CDC",
    category: "Santé publique",
    mission: "Campagne de sensibilisation et de prévention autour de la circulation d'informations fiables.",
    image: "/projects/africa-cdc/ebola-se-propage.jpg",
    alt: "Visuel de campagne Africa CDC Ebola se propage faisons circuler la bonne information",
    deliverables: ["Campagne de sensibilisation", "Contenus de prévention", "Activation"]
  }),
  project({
    id: "africa-cdc-jeunes",
    title: "Jeune ya solo a partagaka ba info",
    client: "Africa CDC",
    category: "Activation communautaire",
    mission: "Dispositif de mobilisation des jeunes autour du partage d'informations de santé.",
    image: "/projects/africa-cdc/jeune-ya-solo.png",
    alt: "Visuel Africa CDC Jeune ya solo a partagaka ba info ya solo",
    deliverables: ["Activation communautaire", "Contenus jeunesse", "Campagne"]
  }),
  project({
    id: "africa-cdc-terrain",
    title: "Activation terrain & équipe staff",
    client: "Africa CDC",
    category: "Événementiel",
    mission: "Couverture terrain, supports de campagne et mobilisation des publics à Kinshasa.",
    image: "/projects/africa-cdc/equipe-staff.jpg",
    alt: "Équipe staff Africa CDC en activation terrain avec supports de campagne",
    deliverables: ["Événementiel", "Couverture terrain", "Supports de campagne"]
  })
];

export const allProjects: PortfolioItem[] = [
  ...selectedProjects,
  project({
    id: "engen-bon-debut",
    title: "Bon début de semaine",
    client: "Engen RDC",
    category: "Social media",
    mission: "Contenu éditorial Engen pour l'animation des réseaux sociaux.",
    image: "/projects/engen/bon-debut-semaine.jpg",
    alt: "Visuel Engen RDC Bon début de semaine",
    deliverables: ["Social media", "Contenu éditorial"]
  }),
  project({
    id: "engen-kata-moteur",
    title: "Kata moteur",
    client: "Engen RDC",
    category: "Campagne sécurité",
    mission: "Sensibilisation à la sécurité en station-service.",
    image: "/projects/engen/kata-moteur.jpg",
    alt: "Visuel Engen RDC Kata moteur",
    deliverables: ["Campagne sécurité", "Social media"]
  }),
  project({
    id: "engen-pas-detincelle",
    title: "Pas d'étincelle",
    client: "Engen RDC",
    category: "Campagne sécurité",
    mission: "Message de prévention autour des bonnes pratiques en station.",
    image: "/projects/engen/pas-detincelle.jpg",
    alt: "Visuel Engen RDC Pas d'étincelle",
    deliverables: ["Campagne sécurité", "Visuels de prévention"]
  }),
  project({
    id: "africa-cdc-activation",
    title: "Activation terrain",
    client: "Africa CDC",
    category: "Événementiel",
    mission: "Activation et couverture terrain Africa CDC.",
    image: "/projects/africa-cdc/activation-terrain.jpg",
    alt: "Activation terrain Africa CDC",
    deliverables: ["Événementiel", "Activation terrain"]
  }),
  project({
    id: "africa-cdc-portrait",
    title: "Portrait de campagne",
    client: "Africa CDC",
    category: "Campagne",
    mission: "Portrait et supports de campagne Africa CDC.",
    image: "/projects/africa-cdc/portrait-campagne.jpg",
    alt: "Portrait de campagne Africa CDC",
    deliverables: ["Campagne", "Photographie", "Supports"]
  }),
  project({
    id: "africa-cdc-prise-parole",
    title: "Prise de parole",
    client: "Africa CDC",
    category: "Communication",
    mission: "Prise de parole et mobilisation autour de la campagne.",
    image: "/projects/africa-cdc/prise-de-parole.jpg",
    alt: "Prise de parole Africa CDC",
    deliverables: ["Communication", "Mobilisation"]
  }),
  project({
    id: "canal-plus-visibilite",
    title: "Campagne de visibilité et de trafic",
    client: "CANAL+ RDC",
    category: "Acquisition",
    mission: "Campagne de visibilité et de trafic pour CANAL+ RDC.",
    image: "/projects/canal-talk.png",
    alt: "Campagne CANAL+ RDC Noël Ensemble et génération de trafic",
    deliverables: ["Acquisition", "Campagne de visibilité", "Trafic"]
  }),
  project({
    id: "fondation-denise-nyakeru",
    title: "Campagne de visibilité et de trafic — 2021",
    client: "Fondation Denise Nyakeru",
    category: "Acquisition",
    mission: "Campagne de visibilité et de trafic pour la Fondation Denise Nyakeru.",
    image: "/projects/campaign-digital.png",
    alt: "Campagne Fondation Denise Nyakeru Noël pour tous 2021",
    deliverables: ["Acquisition", "SEO", "Campagne content", "Display"]
  })
];

export const heroBackdropProjects: PortfolioItem[] = allProjects;

export function getProjectById(id: string): PortfolioItem | undefined {
  return allProjects.find((projectItem) => projectItem.id === id);
}

export function getRelatedProjects(id: string, limit = 4): PortfolioItem[] {
  const current = getProjectById(id);
  if (!current) {
    return [];
  }

  return allProjects
    .filter((projectItem) => projectItem.id !== id && projectItem.client === current.client)
    .slice(0, limit);
}
