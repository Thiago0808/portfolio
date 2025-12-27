import Card from "../../components/Cards";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../../components/SectionTitle";
import type { SectionsProps } from "../../App";
import { contents } from "../../content/content";
import { projectsContent } from "../../content/projectsContent";

function Projects({ language }: SectionsProps) {
  const content = contents[language].projects;

  const cardsData = projectsContent.map((project) => ({
    ...project,
    description: content.descriptions[project.id],
  }));

  return (
    <div className="projects" id="projetos">
      <SectionTitle title={content.title} positioning="mid-left" />

      <div className="carousel">
        <Carousel
          showArrows
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          emulateTouch
        >
          {cardsData.map((card) => (
            <div key={card.id}>
              <Card {...card} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
