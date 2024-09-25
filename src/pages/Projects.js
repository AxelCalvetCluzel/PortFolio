import React, { useState } from 'react';
import '../styles/Projects.scss';
import ProjectModal from '../components/ProjectModal';

const projectsData = [
  {
    title: "Projet 1",
    description: "Description du projet.",
    details: "Ce projet a été réalisé avec ."
  },
  {
    title: "Projet 1",
    description: "Description du projet.",
    details: "Ce projet a été réalisé avec ."
  },{
    title: "Projet 1",
    description: "Description du projet.",
    details: "Ce projet a été réalisé avec ."
  },{
    title: "Projet 1",
    description: "Description du projet.",
    details: "Ce projet a été réalisé avec ."
  },{
    title: "Projet 1",
    description: "Description du projet.",
    details: "Ce projet a été réalisé avec ."
  },{
    title: "Projet 1",
    description: "Description du projet.",
    details: "Ce projet a été réalisé avec ."
  },{
    title: "Projet 1",
    description: "Description du projet.",
    details: "Ce projet a été réalisé avec ."
  },
];

const Projects = () =>  {
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
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
}

export default Projects;
