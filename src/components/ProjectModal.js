import React from "react";
import Modal from "react-modal";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaJs, FaGithub, FaFigma, FaSwatchbook, FaWaveSquare } from 'react-icons/fa';

const skillIcons = {
  html: <FaHtml5 className="icon html" size={50} />,
  css: <FaCss3Alt className="icon css" size={50} />,
  sass: <FaSass className="icon sass" size={50} />,
  react: <FaReact className="icon react" size={50} />,
  js: <FaJs className="icon javascript" size={50} />,
  github: <FaGithub className="icon github" size={50} />,
  figma: <FaFigma className="icon figma" size={50} />,
  swagger: <FaSwatchbook className="icon swagger" size={50} />,
  wave: <FaWaveSquare className="icon wave" size={50} />,
};

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Détails du projet"
      className="project-modal"
      overlayClassName="project-modal-overlay"
    >
      {project && (
        <div className="modalContent">
          <h3>{project.title}</h3>
          <p>{project.details}</p>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              GitHub
            </a>
          )}
          <div className="skills-container">
            {project.skills.map((skill) => (
              <div key={skill} className="skill-icon">
                {skillIcons[skill]}
              </div>
            ))}
          </div>
          <button onClick={onRequestClose} className="close-modal-btn">
            Fermer
          </button>
        </div>
      )}
    </Modal>
  );
};

export default ProjectModal;
