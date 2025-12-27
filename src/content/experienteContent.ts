import dgImg from "../assets/img/experience/dg.png";
import mineoroImg from "../assets/img/experience/mineoro.png";
import ifscImg from "../assets/img/experience/ifsc.png";

export interface ExperienceItem {
  id: "del-grande" | "mineoro" | "ifsc-monitor";
  duration: string;
  image: string;
}

export const experienceContent: ExperienceItem[] = [
  {
    id: "del-grande",
    duration: "11/2024 →",
    image: dgImg,
  },
  {
    id: "mineoro",
    duration: "06/2024 – 10/2024",
    image: mineoroImg,
  },
  {
    id: "ifsc-monitor",
    duration: "08/2023 – 12/2023",
    image: ifscImg,
  },
];
