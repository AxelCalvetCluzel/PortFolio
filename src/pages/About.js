
import React from "react";
import "../styles/About.scss"; 
import cvImage from '../images/cv.jpg'; 
import cvFile from '../files/CV.pdf'; 

const About = () => {
  return (
    <div className="about-container">
      <h2>À propos de moi</h2>
      <div className="about-content">
        <div className="about-text">
          <div className="scrollable-text">
            <p>
              Je m'appelle Calvet-Cluzel Axel, et je suis un jeune développeur web
              passionné, spécialisé dans le front-end. Après avoir suivi une formation
              intensive de 9 mois chez OpenClassrooms en tant qu'intégrateur web, j'ai
              pu acquérir des compétences équivalentes à un Bac+2.
            </p>
            <p>
              Mon objectif est de continuer à enrichir mes compétences
              et mes connaissances dans ce domaine en constante évolution. Je suis à
              l'écoute d'opportunités d'emploi et de nouveaux projets.
            </p>
            <p>
              Si vous recherchez un développeur web enthousiaste et motivé pour rejoindre
              votre équipe ou collaborer sur un projet, n'hésitez pas à me contacter.
              Je serai ravi de contribuer à votre réussite.
            </p>
          </div>
        </div>
        <div className="about-extra">
          <div className="about-image">
            <img src={cvImage} alt="Profil de Calvet-Cluzel Axel" />
          </div>
          <a href={cvFile} target="_blank" rel="noopener noreferrer" className="cv-link">
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
