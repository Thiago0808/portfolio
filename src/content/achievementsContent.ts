import sanctuarioImg from "../assets/img/projects/sanctuario.png";
import delGrandeImg from "../assets/img/achievements/delgrande.jfif";
import swImg from "../assets/img/achievements/sw23.jpg";
import sepeiImg from "../assets/img/achievements/sepei.jpg";
import ifscGaropabaImg from "../assets/img/achievements/ifscGaropaba.jpg";

export interface AchievementItem {
  id: string;
  image: string;
}

export const achievementsContent: AchievementItem[] = [
  {
    id: "1",
    image: delGrandeImg
  },
  {
    id: "2",
    image: swImg
  },
  {
    id: "3",
    image: sepeiImg
  },
  {
    id: "4",
    image: sanctuarioImg
  },
  {
    id: "5",
    image: sanctuarioImg
  },
  {
    id: "6",
    image: ifscGaropabaImg
  },
  {
    id: "7",
    image: sanctuarioImg
  },
];