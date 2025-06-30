import React from 'react';
import './style.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src="/src/assets/img/icon.png" alt="Ícone do Portfólio" className="header-icon" />
      <nav className="header-nav">
        <a href="#sobre-mim">Sobre Mim</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#formacao">Formação</a>
        <a href="#experiencia">Experiência</a>
        <a href="#contatos">Contatos</a>
      </nav>
    </header>
  );
};

export default Header;
