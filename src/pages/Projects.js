// src/pages/Projects.js
import React, { useState } from 'react';
import '../styles/Projects.scss';
import ProjectModal from '../components/ProjectModal';

// Fake projects data
const projectsData = [
  {
    title: "Projet 1",
    description: "Description du projet 1. Ce projet concerne la création d'une application web.",
    details: "Ce projet a été réalisé avec React, Node.js et MongoDB."
  },
  {
    title: "Projet 2",
    description: "Description du projet 2. Il s'agit d'une plateforme e-commerce.",
    details: "Utilisation de technologies comme React, Express et Stripe."
  },
  {
    title: "Projet 3",
    description: "Description du projet 3. Ce projet concerne la création d'une API REST.",
    details: "Implémentation avec Node.js, Express et PostgreSQL."
  },
  {
    title: "Projet 4",
    description: "Description du projet 3. Ce projet concerne la création d'une API REST.",
    details: "Implémentation avec Node.js, Express et PostgreSQL."
  },
  {
    title: "Projet 4",
    description: "Description du projet 3. Ce projet concerne la création d'une API REST.",
    details: "Implémentation avec Node.js, Express et PostgreSQL."
  },
  {
    title: "Projet 4",
    description: "Description du projet 3. Ce projet concerne la création d'une API REST.",
    details: "Implémentation avec Node.js, Express et PostgreSQL."
  },
  {
    title: "Projet 4",
    description: "Description du projet 3. Ce projet concerne la création d'une API REST.",
    details: "Implémentation avec Node.js, Express et PostgreSQL."
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
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <h2>{project.title}</h2>
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
