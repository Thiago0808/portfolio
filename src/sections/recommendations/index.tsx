import { useState } from "react";
import type { SectionsProps } from "../../App";
import SectionTitle from "../../components/SectionTitle";
import "./style.css";
import { recommendationsContent } from "../../content/recommendationsContent";
import { contents } from "../../content/languages/content";
import RecommendationCard from "../../components/RecommendationCard";

const VISIBLE_COUNT = 3;

function Recommendations({ language }: SectionsProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const total = recommendationsContent.length;
  const content = contents[language].recommendations;

  
  const recommendationsData = recommendationsContent.map((recommendations) => ({
        ...recommendations,
        text: content.texts[recommendations.id as keyof typeof content.texts]
    }));
 
  const visibleItems = Array.from(
    { length: VISIBLE_COUNT },
    (_, i) => recommendationsData[(startIndex + i) % total]
  );
 
  const canPrev = total > VISIBLE_COUNT;
  const canNext = total > VISIBLE_COUNT;
 
  function navigate(dir: "prev" | "next") {
    if (animating) return;
    setDirection(dir === "next" ? "right" : "left");
    setAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) =>
        dir === "next" ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setAnimating(false);
    }, 300);
  }

 
  return (
    <section className="recommendations" id="recommendations">
      <SectionTitle title={content.title}/>
 
      <div className="rec-carousel-wrapper">
        {canPrev && (
          <button
            className="rec-arrow rec-arrow-prev"
            onClick={() => navigate("prev")}
            aria-label="Anterior"
          >
            &#8249;
          </button>
        )}
 
        <div
          className={`rec-carousel ${animating ? `rec-carousel--exit-${direction}` : ""}`}
        >
          {visibleItems.map((rec) => (
            <RecommendationCard key={rec.id} rec={rec} language={language} />
          ))}
        </div>
 
        {canNext && (
          <button
            className="rec-arrow rec-arrow-next"
            onClick={() => navigate("next")}
            aria-label="Próxima"
          >
            &#8250;
          </button>
        )}
      </div>
    </section>
  );
}
 
export default Recommendations;