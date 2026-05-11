import { useState } from "react";
import "./style.css";
 
interface QuestionProps {
  question: string;
  answer: string;
}
 
function Question({ question, answer }: QuestionProps) {
  const [expanded, setExpanded] = useState(false);
 
  return (
    <div className={`question-container ${expanded ? "expanded" : ""}`}>
      <button className="question-header" onClick={() => setExpanded(!expanded)}>
        <span className="question-text">{question}</span>
        <span className={`question-arrow ${expanded ? "rotated" : ""}`}>▼</span>
      </button>
 
      {expanded && (
        <div className="question-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
 
export default Question;