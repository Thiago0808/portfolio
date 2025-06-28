import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface CardButtonProps {
  text: string;
  href: string;
  target?: string;
  rel?: string;
}

const CardButton: React.FC<CardButtonProps> = ({ text, href, target = "_blank", rel = "noopener noreferrer" }) => {
  return (
    <a className="custom-button" href={href} target={target} rel={rel}>
      <FontAwesomeIcon icon={faSearch} style={{ marginRight: '8px' }} />
      {text}
    </a>
  );
};

export default CardButton;
