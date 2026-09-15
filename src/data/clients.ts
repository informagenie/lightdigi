export type ClientLogo = {
  id: string;
  name: string;
  logo: string;
  scale?: number;
};

export const clientLogos: ClientLogo[] = [
  { id: "vivo-energy", name: "Vivo Energy", logo: "/clients/vivo-energy.png" },
  { id: "africa-cdc", name: "Africa CDC", logo: "/clients/africa-cdc.png" },
  { id: "vodacom", name: "Vodacom", logo: "/clients/vodacom.png" },
  { id: "engen", name: "Engen", logo: "/clients/engen.png" },
  { id: "canal-plus", name: "CANAL+", logo: "/clients/canal-plus.png" },
  { id: "uba", name: "UBA", logo: "/clients/uba.png?v=2" },
  { id: "afriyan", name: "AfriYAN RDC", logo: "/clients/afriyan.png" },
  { id: "tbg", name: "The Best Group", logo: "/clients/tbg.png" },
  { id: "bboxx", name: "Bboxx", logo: "/clients/bboxx.png" },
  { id: "tokumisa", name: "TOKUMISA Cinema", logo: "/clients/tokumisa.png" },
  { id: "easy-tv", name: "EASY TV", logo: "/clients/easy-tv.png" },
  { id: "aqua-splash", name: "Aqua Splash", logo: "/clients/aqua-splash.png" },
  { id: "non-au-viol", name: "Non au Viol", logo: "/clients/non-au-viol.png" },
  { id: "bceco", name: "BCECO", logo: "/clients/bceco.png" },
  { id: "royal-pressing", name: "Royal Pressing", logo: "/clients/royal-pressing.png" },
  { id: "bet243", name: "bet243", logo: "/clients/bet243.png" },
  { id: "ministere-mines", name: "Ministère des Mines", logo: "/clients/ministere-mines.png" },
  { id: "pasea", name: "PASEA", logo: "/clients/pasea.png", scale: 1.35 },
  { id: "novotel", name: "Novotel", logo: "/clients/novotel.png" }
];
