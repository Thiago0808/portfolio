import faculmatchImg from "../assets/img/projects/faculmatch.png";
import timelineImg from "../assets/img/projects/timeline.png";
import waystationImg from "../assets/img/projects/waystation.png";
import codesnapeImg from "../assets/img/projects/codesnape.png";
import reptorsImg from "../assets/img/projects/reptors.png";

export interface ProjectItem {
  id: "faculmatch" | "timeline" | "waystation" | "codesnape" | "reptors";
  name: string;
  technologies: string[];
  image: string;
  link: string;
}

export const projectsContent: ProjectItem[] = [
  {
    id: "faculmatch",
    name: "FaculMatch",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    image: faculmatchImg,
    link: "https://faculmatch.com/",
  },
  {
    id: "timeline",
    name: "Timeline",
    technologies: ["React", "TypeScript"],
    image: timelineImg,
    link: "https://thiagomartins.dev/timeline",
  },
  {
    id: "waystation",
    name: "WayStation",
    technologies: ["React Native", "TypeScript", "CSS", "Expo"],
    image: waystationImg,
    link: "https://waystation.com.br/",
  },
  {
    id: "codesnape",
    name: "CodeSnape",
    technologies: ["HTML", "CSS", "PHP", "SQL", "Bootstrap"],
    image: codesnapeImg,
    link: "https://thiagomartins.dev/codesnape",
  },
  {
    id: "reptors",
    name: "Reptors Timequake",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: reptorsImg,
    link: "https://reptors-timequake.vercel.app/",
  },
];
