import faculmatchImg from "../assets/img/projects/faculmatch.png";
import alineImg from "../assets/img/recommendations/aline.jpg";
import emmanuelImg from "../assets/img/recommendations/emmanuel.png";
import leandroImg from "../assets/img/recommendations/leandro.jpg";
import brunoImg from "../assets/img/recommendations/bruno.jpg";

export interface Recommendation {
  id: string;
  name: string;
  company: string;
  photo: string;
}
 
export const recommendationsContent: Recommendation[] = [
  {
    id: "rec1",
    name: "Aline Espindola",
    company: "Vialaser",
    photo: alineImg,
  },
  {
    id: "rec2",
    name: "Emmanuel Públio",
    company: "Staleks Pro Brazil",
    photo: emmanuelImg,
  },
  {
    id: "rec3",
    name: "Leandro Crispim",
    company: "Del Grande",
    photo: leandroImg,
  },
  {
    id: "rec4",
    name: "Bruno da Silva",
    company: "Central Contabilidade Ltda",
    photo: brunoImg,
  },
];