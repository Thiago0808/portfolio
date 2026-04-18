import { useState } from "react";
import "./style.css";
import { contents } from "../../content/languages/content";
import type { Language } from "../../App";

interface ExperienceCardProps {
  title: string;
  place: string;
  duration: string;
  image: string;
  paragraphs: string[];
  language: Language;
}

function ExperienceCard({
  title,
  place,
  duration,
  image,
  paragraphs,
  language,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const content = contents[language].education;

  const MAX_CHARACTERS = 600;

  const fullText = paragraphs.map((p) => `- ${p}`).join("\n");

  const shouldShowButton = fullText.length > MAX_CHARACTERS;

  const visibleText = expanded
    ? fullText
    : fullText.slice(0, MAX_CHARACTERS) + (shouldShowButton ? "..." : "");

  const visibleParagraphs = visibleText.split("\n");

  return (
    <div className="experience-card-container">
      <div className="experience-card">
        <div className="top-row">
          <img src={image} alt={`${place} logo`} className="experience-img" />
          <div className="experience-header">
            <h2>{title}</h2>
            <p><strong>{place}</strong></p>
            <p><strong>{duration}</strong></p>
          </div>
        </div>

        <div className="bottom-content">
          {visibleParagraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {shouldShowButton && (
          <button
            className="toggle-button"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? content.button.less : content.button.more}
          </button>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;