import React from "react";
import "./style.css";
import iconImg from "../../assets/img/icon.png";
import brFlag from "../../assets/img/flags/br-pt.png";
import usUkFlag from "../../assets/img/flags/us-uk.jpg";
import type { Language } from "../../App";
import { contents } from "../../content/languages/content";
import { useEffect } from "react";

interface HeaderProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "br" ? "en" : "br"));
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const languageParam = url.searchParams.get("language");

    if (languageParam === "br" || languageParam === "en") {
      setLanguage(languageParam);
    }

    if (url.searchParams.has("language")) {
      url.searchParams.delete("language");

      const newUrl =
        url.pathname +
        (url.searchParams.toString()
          ? `?${url.searchParams.toString()}`
          : "") +
        url.hash;

      window.history.replaceState({}, "", newUrl);
    }
  }, []);

  const content = contents[language].header;

  return (
    <header className="header">
      <img
        src={iconImg}
        alt={content.altPortfolioIcon}
        className="header-icon"
      />

      <nav className="header-nav">
        <a href="#about">{content.about}</a>
        <a href="#skills">{content.skills}</a>
        <a href="#projects">{content.projects}</a>
        <a href="#education">{content.education}</a>
        <a href="#experience">{content.experience}</a>
        <a href="#recommendations">{content.recommendations}</a>
        <a href="#achievements">{content.achievements}</a>
        <a href="#contacts">{content.contacts}</a>
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
