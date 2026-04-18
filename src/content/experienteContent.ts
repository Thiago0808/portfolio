import dgImg from "../assets/img/experience/dg.png";
import mineoroImg from "../assets/img/experience/mineoro.png";
import ifscImg from "../assets/img/experience/ifsc.png";
import tbdcImg from "../assets/img/experience/tbdc.png";

export interface ExperienceItem {
  id: "del-grande" | "mineoro" | "ifsc-monitor" | "tbdc";
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
    id: "tbdc",
    duration: "08/2025 – 03/2026",
    image: tbdcImg,
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
