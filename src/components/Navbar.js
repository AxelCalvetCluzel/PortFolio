import React from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="nav-link" href="#about">
        <i className="fas fa-user"></i>
      </a>
      <a className="nav-link" href="#Competences">
        <i className="fas fa-cogs"></i>
      </a>
      <a className="nav-link" href="#projects">
        <i className="fas fa-briefcase"></i>
      </a>
      <a className="nav-link" href="#contact">
        <i className="fas fa-envelope"></i>
      </a>
    </nav>
  );
};

export default Navbar;
