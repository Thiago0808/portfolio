import { useState } from "react";
import "./style.css";

interface CourseCardProps {
  title: string;
  place: string
  duration: string;
  location: string;
  subjects: string[];
  description: string;
  image: string;
}

function ExpansiveCard({ title, place, duration, location, subjects, description, image }: CourseCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="expansive-card-container">
      <div className="expansive-card">
        <img src={image} alt="Instituto Federal Logo" className="expansive-img" />
        <div className="expansive-info">
          <h3>{title}</h3>
          <p><strong>Instituição: </strong>{place}</p>

          {expanded && (
            <>
              <p><strong>Duração: </strong>{duration}</p>
              <p><strong>Localização: </strong>{location}</p>
              <p><strong>Matérias: </strong> 
                <div>
                  {subjects.join(' | ')}
                </div>
              </p>
              <p>{description}</p>
            </>
          )}

          <button className="toggle-button" onClick={() => setExpanded(!expanded)}>
            {expanded ? "VER MENOS" : "VER MAIS"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpansiveCard;
