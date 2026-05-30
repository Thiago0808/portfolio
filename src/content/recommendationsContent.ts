import faculmatchImg from "../assets/img/projects/faculmatch.png";
import alineImg from "../assets/img/recommendations/aline.jpg";
import emmanuelImg from "../assets/img/recommendations/emmanuel.png";
import leandroImg from "../assets/img/recommendations/leandro.jpg";

export interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
}
 
export const recommendationsContent: Recommendation[] = [
  {
    id: "rec1",
    name: "Aline Espindola",
    role: "Frontend Developer",
    company: "Vialaser",
    photo: alineImg,
  },
  {
    id: "rec2",
    name: "Emmanuel Públio",
    role: "Backend Developer",
    company: "Staleks Pro Brazil",
    photo: emmanuelImg,
  },
  {
    id: "rec3",
    name: "Leandro Crispim",
    role: "Senior Full Stack Developer",
    company: "Del Grande",
    photo: leandroImg,
  },
  {
    id: "rec4",
    name: "Ricardo Mendes",
    role: "Senior Developer",
    company: "TechCo",
    photo: faculmatchImg,
  },
  {
    id: "rec5",
    name: "Juliana Castro",
    role: "CTO",
    company: "Inovação SA",
    photo: faculmatchImg,
  },
];