
import React, { useState } from 'react';
import '../styles/Projects.scss';
import ProjectModal from '../components/ProjectModal';
import projectsData from '../data/ProjectsData';

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        project={selectedProject} 
      />
    </div>
  );
};

export default Projects;
