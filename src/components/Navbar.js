import React from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      {" "}
      <a className="nav-link" href="#about">
        À propos
      </a>
      <a className="nav-link" href="#Competences">
        Mes compétences
      </a>
      <a className="nav-link" href="#projects">
        Projets
      </a>
      <a className="nav-link" href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
