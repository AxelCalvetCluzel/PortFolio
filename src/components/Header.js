import React from "react";
import "../styles/Header.scss";
import profile from "../images/profil.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-description">
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>
            Je suis <strong>Calvet-Cluzel Axel</strong>, Développeur front-end
            passionné par la création d'interfaces utilisateur modernes et
            intuitives. J'ai une expérience dans le développement avec React,
            JavaScript, HTML, CSS, et SCSS.
          </p>
        </div>
        <div className="profile-bubble">
          <img
            src={profile}
            alt="Profil de Calvet-Cluzel Axel"
            className="profile-image"
          />
        </div>
      </div>
      <div className="light"></div>
    </header>
  );
};

export default Header;
