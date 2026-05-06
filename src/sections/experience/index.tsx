import "./style.css";
import SectionTitle from "../../components/SectionTitle";
import ExperienceCard from "../../components/ExperienceCard";
import type { SectionsProps } from "../../App";
import { experienceContent } from "../../content/experienteContent";
import { contents } from "../../content/languages/content";

function Experience({ language }: SectionsProps) {
  const content = contents[language].experience;

  const cardsData = experienceContent.map((item) => ({
    ...item,
    ...content.items[item.id],
  }));

  return (
    <div className="experience" id="experience">
      <SectionTitle title={content.title} positioning="mid-right" />

      <div className="experiences-div">
        {cardsData.map((card) => (
          <div className="experience-div" key={card.id}>
            <ExperienceCard {...card} language={language}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
