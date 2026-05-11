import "./style.css";
import SectionTitle from "../../components/SectionTitle";
import Question from "../../components/Question";
import type { SectionsProps } from "../../App";
import { contents } from "../../content/languages/content";
 
function FAQ({ language }: SectionsProps) {
  const items = Object.values(contents[language].faq.items); 

  return (
    <div className="faq" id="faq">
      <SectionTitle title="FAQ" positioning="mid-right" />
      <div className="faq-list">
        {items.map((item) => (
          <Question question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}
 
export default FAQ;
 