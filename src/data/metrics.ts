export type MetricItem = {
  id: string;
  value: string;
  label: string;
};

export const metrics: MetricItem[] = [
  {
    id: "experience",
    value: "10+",
    label: "Années d'expérience cumulée de nos experts"
  },
  {
    id: "projets",
    value: "30+",
    label: "Projets réalisés et clients accompagnés"
  },
  {
    id: "tinda-mingi",
    value: "98%",
    label: "Taux d'ouverture SMS via TINDA MINGI"
  }
];
