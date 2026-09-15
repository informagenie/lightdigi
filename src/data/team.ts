export type TeamMember = {
  id: string;
  name: string;
  role?: string;
  image: string;
  alt: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "elie-mumba",
    name: "Elie Mumba",
    role: "Chef de Projet Digital",
    image: "/team/elie-mumba.jpg",
    alt: "Portrait d'Elie Mumba, Chef de Projet Digital chez Light Digital Consulting"
  },
  {
    id: "guynette-mbuyi",
    name: "Guynette Mbuyi",
    image: "/team/guynette-mbuyi.jpg",
    alt: "Portrait de Guynette Mbuyi, membre de l'equipe Light Digital Consulting"
  },
  {
    id: "boaz-mputu",
    name: "Boaz Mputu",
    role: "Chef Multimedia",
    image: "/team/boaz-mputu.png",
    alt: "Portrait de Boaz Mputu, Chef Multimedia chez Light Digital Consulting"
  },
  {
    id: "tracy-kanyinda",
    name: "Tracy Kanyinda",
    image: "/team/tracy-kanyinda.jpg",
    alt: "Portrait de Tracy Kanyinda, membre de l'equipe Light Digital Consulting"
  },
  {
    id: "dimanche-sokoto",
    name: "Dimanche Sokoto",
    image: "/team/dimanche-sokoto.jpg",
    alt: "Portrait de Dimanche Sokoto, membre de l'equipe Light Digital Consulting"
  },
  {
    id: "laure-wene",
    name: "Laure Wene",
    image: "/team/laure-wene.jpg",
    alt: "Portrait de Laure Wene, membre de l'equipe Light Digital Consulting"
  },
  {
    id: "tatiana-maketa",
    name: "Tatiana Maketa",
    role: "Administration & Finances",
    image: "/team/tatiana-maketa.jpg",
    alt: "Portrait de Tatiana Maketa, Administration & Finances chez Light Digital Consulting"
  },
  {
    id: "nehemie-yomba",
    name: "Nehemie Yomba",
    image: "/team/nehemie-yomba.jpg",
    alt: "Portrait de Nehemie Yomba, membre de l'equipe Light Digital Consulting"
  }
];
