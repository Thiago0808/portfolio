import React from "react";
import "./style.css";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title}) => {
  return (
    <div className="title-div">
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitle;
