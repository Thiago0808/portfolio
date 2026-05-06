import React from "react";
import "./style.css";
import iconImg from "../../assets/img/icon.png";
import brFlag from "../../assets/img/flags/br-pt.png";
import usUkFlag from "../../assets/img/flags/us-uk.jpg";
import type { Language } from "../../App";
import { contents } from "../../content/languages/content";

interface HeaderProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "br" ? "en" : "br"));
  };

  const content = contents[language].header;

  return (
    <header className="header">
      <img
        src={iconImg}
        alt={content.altPortfolioIcon}
        className="header-icon"
      />

      <nav className="header-nav">
        <a href="#sobre-mim">{content.about}</a>
        <a href="#habilidades">{content.skills}</a>
        <a href="#projetos">{content.projects}</a>
        <a href="#formacao">{content.education}</a>
        <a href="#experiencia">{content.experience}</a>
        <a href="#conquistas">{content.achievements}</a>
        <a href="#livros">{content.books}</a>
        <a href="#contatos">{content.contacts}</a>
      </nav>

      <button className="language-toggle" onClick={toggleLanguage}>
        <img
          src={language === "br" ? brFlag : usUkFlag}
          alt={content.changeLanguage}
        />
      </button>
    </header>
  );
};

export default Header;
