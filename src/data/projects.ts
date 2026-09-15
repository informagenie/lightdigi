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
  "Engen RDC": "Energie",
  "Africa CDC": "Sante publique",
  "CANAL+ RDC": "Media",
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
    title: "Anticipez l'entretien de votre vehicule",
    client: "Engen RDC",
    category: "Communication & social media",
    mission: "Visuels editoriaux et contenus de marque pour la promotion des services et produits Engen.",
    image: "/projects/engen/anticipez-entretien.jpg",
    alt: "Visuel Engen RDC sur l'entretien vehicule avec pneus, freins et huile Dieselube Super",
    deliverables: ["Social media", "Brand content", "Visuels editoriaux"]
  }),
  project({
    id: "engen-premium-40",
    title: "Premium 40 — Huile moteur",
    client: "Engen RDC",
    category: "Brand content",
    mission: "Mise en avant produit et argumentaire de performance pour la gamme Premium 40.",
    image: "/projects/engen/premium-40.jpg",
    alt: "Visuel produit Engen Premium 40 huile moteur SAE 40",
    deliverables: ["Brand content", "Design produit", "Social media"]
  }),
  project({
    id: "engen-securite",
    title: "Moteur coupe avant de faire le plein",
    client: "Engen RDC",
    category: "Campagne securite",
    mission: "Series de visuels de sensibilisation sur les bonnes pratiques en station-service.",
    image: "/projects/engen/moteur-coupe.jpg",
    alt: "Campagne Engen RDC sur la securite en station avec message moteur coupe",
    deliverables: ["Campagne securite", "Visuels de sensibilisation", "Social media"]
  }),
  project({
    id: "africa-cdc-ebola",
    title: "Ebola se propage — Bonne information",
    client: "Africa CDC",
    category: "Sante publique",
    mission: "Campagne de sensibilisation et de prevention autour de la circulation d'informations fiables.",
    image: "/projects/africa-cdc/ebola-se-propage.jpg",
    alt: "Visuel de campagne Africa CDC Ebola se propage faisons circuler la bonne information",
    deliverables: ["Campagne de sensibilisation", "Contenus de prevention", "Activation"]
  }),
  project({
    id: "africa-cdc-jeunes",
    title: "Jeune ya solo a partagaka ba info",
    client: "Africa CDC",
    category: "Activation communautaire",
    mission: "Dispositif de mobilisation des jeunes autour du partage d'informations de sante.",
    image: "/projects/africa-cdc/jeune-ya-solo.png",
    alt: "Visuel Africa CDC Jeune ya solo a partagaka ba info ya solo",
    deliverables: ["Activation communautaire", "Contenus jeunesse", "Campagne"]
  }),
  project({
    id: "africa-cdc-terrain",
    title: "Activation terrain & equipe staff",
    client: "Africa CDC",
    category: "Evenementiel",
    mission: "Couverture terrain, supports de campagne et mobilisation sur le terrain a Kinshasa.",
    image: "/projects/africa-cdc/equipe-staff.jpg",
    alt: "Equipe staff Africa CDC en activation terrain avec supports de campagne",
    deliverables: ["Evenementiel", "Couverture terrain", "Supports de campagne"]
  })
];

export const allProjects: PortfolioItem[] = [
  ...selectedProjects,
  project({
    id: "engen-bon-debut",
    title: "Bon debut de semaine",
    client: "Engen RDC",
    category: "Social media",
    mission: "Contenu editorial Engen pour l'animation des reseaux.",
    image: "/projects/engen/bon-debut-semaine.jpg",
    alt: "Visuel Engen RDC Bon debut de semaine",
    deliverables: ["Social media", "Contenu editorial"]
  }),
  project({
    id: "engen-kata-moteur",
    title: "Kata moteur",
    client: "Engen RDC",
    category: "Campagne securite",
    mission: "Sensibilisation securite en station-service.",
    image: "/projects/engen/kata-moteur.jpg",
    alt: "Visuel Engen RDC Kata moteur",
    deliverables: ["Campagne securite", "Social media"]
  }),
  project({
    id: "engen-pas-detincelle",
    title: "Pas d'etincelle",
    client: "Engen RDC",
    category: "Campagne securite",
    mission: "Message de prevention autour des bonnes pratiques en station.",
    image: "/projects/engen/pas-detincelle.jpg",
    alt: "Visuel Engen RDC Pas d'etincelle",
    deliverables: ["Campagne securite", "Visuels de prevention"]
  }),
  project({
    id: "africa-cdc-activation",
    title: "Activation terrain",
    client: "Africa CDC",
    category: "Evenementiel",
    mission: "Activation et couverture terrain Africa CDC.",
    image: "/projects/africa-cdc/activation-terrain.jpg",
    alt: "Activation terrain Africa CDC",
    deliverables: ["Evenementiel", "Activation terrain"]
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
    title: "Campagne de visibilite et trafic",
    client: "CANAL+ RDC",
    category: "Acquisition",
    mission: "Campagne de visibilite et de trafic pour CANAL+ RDC.",
    image: "/projects/canal-talk.png",
    alt: "Campagne CANAL+ RDC Noel Ensemble et generation de trafic",
    deliverables: ["Acquisition", "Campagne de visibilite", "Trafic"]
  }),
  project({
    id: "fondation-denise-nyakeru",
    title: "Campagne de visibilite et trafic — 2021",
    client: "Fondation Denise Nyakeru",
    category: "Acquisition",
    mission: "Campagne de visibilite et de trafic pour la Fondation Denise Nyakeru.",
    image: "/projects/campaign-digital.png",
    alt: "Campagne Fondation Denise Nyakeru Noel pour tous 2021",
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
