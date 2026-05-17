import React from "react";
import "./style.css";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title}) => {
  return (
    <div className={`title-div div-center`}>
      <h1 className={`h1-center`}>{title}</h1>
    </div>
  );
};

export default SectionTitle;
