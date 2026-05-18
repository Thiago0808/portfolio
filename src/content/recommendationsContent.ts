import faculmatchImg from "../assets/img/projects/faculmatch.png";
import alineImg from "../assets/img/recommendations/aline.jpg";


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
    name: "Carlos Henrique Lima",
    role: "Product Manager",
    company: "StartupXYZ",
    photo: faculmatchImg,
  },
  {
    id: "rec3",
    name: "Fernanda Oliveira",
    role: "UX Designer",
    company: "Design Studio",
    photo: faculmatchImg,
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