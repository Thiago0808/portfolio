import React from "react";
import "./style.css";
import iconImg from "../../assets/img/icon.png";
import brFlag from "../../assets/img/flags/br-pt.png";
import usUkFlag from "../../assets/img/flags/us-uk.jpg";
import type { Language } from "../../App";

interface HeaderProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "br" ? "en" : "br"));
  };

  return (
    <header className="header">
      <img src={iconImg} alt="Ícone do Portfólio" className="header-icon" />

      <nav className="header-nav">
        <a href="#sobre-mim">Sobre Mim</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#formacao">Formação</a>
        <a href="#experiencia">Experiência</a>
        <a href="#contatos">Contatos</a>
      </nav>

      <button className="language-toggle" onClick={toggleLanguage}>
        <img
          src={language === "br" ? brFlag : usUkFlag}
          alt="Trocar idioma"
        />
      </button>
    </header>
  );
};

export default Header;
