import { useState } from "react";
import "./style.css";
import type { Language } from "../../App";
import { contents } from "../../content/languages/content";

interface CourseCardProps {
  title: string;
  place: string
  duration: string;
  location: string;
  subjects: string[];
  description: string;
  image: string;
  language: Language
}

function ExpansiveCard({ title, place, duration, location, subjects, description, image, language }: CourseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const content = contents[language].education;

  return (
    <div className="expansive-card-container">
      <div className="expansive-card">
        <img src={image} alt="Instituto Federal Logo" className="expansive-img" />
        <div className="expansive-info">
          <h2>{title}</h2>
          <p><strong>{content.institute}: </strong>{place}</p>

          {expanded && (
            <>
              <p><strong>{content.duration}: </strong>{duration}</p>
              <p><strong>{content.location}: </strong>{location}</p>
              <p><strong>{content.subjects}: </strong> 
                <div>
                  {subjects.join(' | ')}
                </div>
              </p>
              <p>{description}</p>
            </>
          )}

          <button className="toggle-button" onClick={() => setExpanded(!expanded)}>
            {expanded ? content.button.less : content.button.more}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpansiveCard;
