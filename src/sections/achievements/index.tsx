import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../../components/SectionTitle";
import type { SectionsProps } from "../../App";
import { contents } from "../../content/languages/content";
import { achievementsContent } from "../../content/achievementsContent";
import ImageCard from "../../components/ImageCard";

function Achievements({ language }: SectionsProps) {
  const content = contents[language].achievements;

  const cardsData = achievementsContent.map((achievement) => ({
    ...achievement,
    description: content.descriptions[achievement.id as keyof typeof content.descriptions],
  }));

  return (
    <div className="achievements" id="conquistas">
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
              <ImageCard {...card}/>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Achievements;
