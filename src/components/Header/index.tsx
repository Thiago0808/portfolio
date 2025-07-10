import React from 'react';
import './style.css';
import iconImg from '../../assets/img/icon.png';

const Header: React.FC = () => {
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
    </header>
  );
};

export default Header;
