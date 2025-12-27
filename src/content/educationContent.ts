import ifscImg from "../assets/img/formation/ifsc.png";

export interface EducationItem {
  id: "ifsc-tech" | "ifsc-grad";
  duration: string;
  location: string;
  image: string;
}

export const educationContent: EducationItem[] = [
  {
    id: "ifsc-tech",
    duration: "2021–2023",
    location: "Garopaba, SC",
    image: ifscImg,
  },
  {
    id: "ifsc-grad",
    duration: "2025–2027",
    location: "Tubarão, SC",
    image: ifscImg,
  },
];
