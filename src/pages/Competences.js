import React from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaJs, FaGithub, FaFigma,FaSwatchbook} from 'react-icons/fa'; 
import '../styles/Competences.scss'; 

const Competences = () => {
  return (
    <div className="competences-container">
      <h2>Mes Compétences</h2>
      <div className="competences-grid">
        <div className="competence-item">
          <FaHtml5 size={50} className="icon html" />
          <p>HTML</p>
        </div>
        <div className="competence-item">
          <FaCss3Alt size={50} className="icon css" />
          <p>CSS</p>
        </div>
        <div className="competence-item">
          <FaSass size={50} className="icon sass" />
          <p>SCSS/Sass</p>
        </div>
        <div className="competence-item">
          <FaReact size={50} className="icon react" />
          <p>React</p>
        </div>
        <div className="competence-item">
          <FaJs size={50} className="icon javascript" />
          <p>JavaScript</p>
        </div>
        <div className="competence-item">
          <FaGithub size={50} className="icon github" />
          <p>GitHub</p>
        </div>
        <div className="competence-item">
          <FaFigma size={50} className="icon figma" />
          <p>Figma</p>
        </div>
        <div className="competence-item">
          <FaSwatchbook size={50} className="icon swagger" />
          <p>Swagger</p>
        </div>
      </div>
    </div>
  );
};

export default Competences;
