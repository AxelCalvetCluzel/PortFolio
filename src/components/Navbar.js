// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss'; // Mise à jour du chemin

const Navbar = () =>  {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Accueil</Link>
      <Link className="nav-link" to="/about">À propos</Link>
      <Link className="nav-link" to="/projects">Projets</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
