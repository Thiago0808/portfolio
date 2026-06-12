import { useState } from "react";
import { contents } from "../../content/languages/content";
import type { Language } from "../../App";
import "./style.css";

export interface RecommendationCardProps {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  text: string;
}

function RecommendationCard({
  rec,
  language,
}: {
  rec: RecommendationCardProps;
  language: Language;
}) {
  const [expanded, setExpanded] = useState(false);
  const MAX_CHARS = 120;
  const isLong = rec.text.length > MAX_CHARS;
  const preview = isLong ? rec.text.slice(0, MAX_CHARS).trimEnd() + "…" : rec.text;
  const content = contents[language].recommendations;
 
  return (
    <div className="rec-card">
      <div className="rec-quote-icon">"</div>
      <p className="rec-text">{expanded ? rec.text : preview}</p>
      {isLong && (
        <button
          className="rec-read-more"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? content.less : content.more}
        </button>
      )}
      <div className="rec-author">
        <img src={rec.photo} alt={rec.name} className="rec-photo" />
        <div className="rec-author-info">
          <span className="rec-name">{rec.name}</span>
          <span className="rec-role">
            {rec.role} · {rec.company}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;
