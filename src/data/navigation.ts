export type NavigationItem = {
  label: string;
  href: string;
  opensMenu?: boolean;
};

export const navigationItems: NavigationItem[] = [
  { label: "Services", href: "/#services", opensMenu: true },
  { label: "Expertises", href: "/#approche" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Clients", href: "/#clients" },
  { label: "Agence", href: "/#agence" },
  { label: "Équipe", href: "/#equipe" },
  { label: "Contact", href: "/#contact" }
];
