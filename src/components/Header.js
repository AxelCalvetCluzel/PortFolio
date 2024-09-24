// src/components/Header.js
import React from 'react';
import '../styles/Header.scss'; // Assure-toi d'avoir ce fichier de styles
import montagne from '../images/montagne.jpg'; // Assure-toi d'avoir cette image

const Header = () => {
  return (
    <header className="header">
      <img src={montagne} alt="Montagne" className="header-image" />
      <div className="header-text">
        <h1>Bienvenue sur mon Portfolio</h1>
      </div>
    </header>
  );
}

export default Header;
