export type MetricItem = {
  id: string;
  value: string;
  label: string;
};

export const metrics: MetricItem[] = [
  {
    id: "experience",
    value: "10+",
    label: "D'experience des experts passionnes"
  },
  {
    id: "projets",
    value: "30+",
    label: "Projets realises et clients accompagnes"
  },
  {
    id: "tinda-mingi",
    value: "98%",
    label: "Taux d'ouverture SMS via TINDA MINGI"
  }
];
