import React from "react";
import "./style.css";

interface SectionTitleProps {
  title: string;
  positioning: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, positioning}) => {
  return (
    <div className={`title-div div-${positioning}`}>
      <h1 className={`h1-${positioning}`}>{title}</h1>
    </div>
  );
};

export default SectionTitle;
