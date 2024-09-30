import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Calvet-Cluzel Axel. Tous droits réservés.
      </p>
      <p>
        Suivez-moi sur
        <a
          href="https://www.linkedin.com/in/votreprofil" 
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/AxelCalvetCluzel?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
