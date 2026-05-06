import "./style.css";
import SectionTitle from "../../components/SectionTitle";
import ExpansiveCard from "../../components/ExpansiveCard";
import type { SectionsProps } from "../../App";
import { contents } from "../../content/languages/content";
import { educationContent } from "../../content/educationContent";

function Education({ language }: SectionsProps) {
  const content = contents[language].education;

  const cardsData = educationContent.map((item) => ({
    ...item,
    ...content.items[item.id],
  }));

  return (
    <div className="education" id="education">
      <SectionTitle title={content.title} positioning="center" />
      <div className="formations">
        {cardsData.map((card) => (
          <div key={card.id}>
            <ExpansiveCard {...card} language={language}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
