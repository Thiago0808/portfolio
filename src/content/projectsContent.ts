import faculmatchImg from "../assets/img/projects/faculmatch.png";
import timelineImg from "../assets/img/projects/timeline.png";
import waystationImg from "../assets/img/projects/waystation.png";
import codesnapeImg from "../assets/img/projects/codesnape.png";
import reptorsImg from "../assets/img/projects/reptors.png";
import sanctuarioImg from "../assets/img/projects/sanctuario.png";

export interface ProjectItem {
  id: "faculmatch" | "sanctuario" | "timeline" | "waystation" | "codesnape" | "reptors";
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
    link: "https://thiagomartins.dev/faculmatch",
  },
  {
    id: "sanctuario",
    name: "Sanctuario",
    technologies: ["Python", "Flask", "MySQL", "Azure", "React", "TypeScript", "CSS", "ShadCN", "Tailwind"],
    image: sanctuarioImg,
    link: "https://app.sanctuario.com.br/select",
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
    link: "https://www.linkedin.com/posts/thiago-martins-oliveira_reactnative-fullstack-softwareengineering-ugcPost-7451674704198742016-1JSK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVI4tYBViNQX4oUctSb-kXR2oqBJRUNmvg",
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
