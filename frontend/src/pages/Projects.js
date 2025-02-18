import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProjectPopup from '../components/ProjectPopup';
import ImageCarousel from '../components/ImageCarousel';
import '../styles/Projects.scss';

const projects = [
  {
    id: 1,
    title: 'ETL Platform Design',
    description: 'Redesigned a complex ETL platform to simplify data transformation workflows, improving user efficiency by 40% and reducing training time by 60%.',
    category: 'Enterprise',
    year: '2024',
    pdfUrl: '/projects/etl-platform.pdf'
  },
  {
    id: 2,
    title: 'Content Lifecycle Management',
    description: 'Developed an end-to-end content management system that streamlined content creation, review, and publishing, reducing workflow time by 50%.',
    category: 'Enterprise',
    year: '2020',
    pdfUrl: '/projects/content-lifecycle.pdf'
  },
  {
    id: 3,
    title: 'Information Architecture',
    description: 'Restructured enterprise information hierarchy to improve findability and user navigation, resulting in 35% faster task completion rates.',
    category: 'Enterprise',
    year: '2022',
    pdfUrl: '/projects/information-architecture.pdf'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle escape key to close popup
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      setSelectedProject(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleProjectClick = (project) => {
    console.log('Clicked project:', {
      title: project.title,
      pdfUrl: project.pdfUrl,
      hasScreenshots: !!project.screenshots
    });

    if (project.pdfUrl) {
      // If project has a PDF, always open it in new tab
      console.log('Opening PDF:', project.pdfUrl);
      window.open(project.pdfUrl, '_blank');
      return; // Add return to ensure we don't execute the else block
    } else {
      // For projects without PDF, show the popup with screenshots or placeholder
      console.log('Opening popup for project:', project.title);
      setSelectedProject(project);
      window.history.pushState({ project: project.id }, '', `#project-${project.id}`);
    }
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
    window.history.back();
  };

  // Add image error handling in the project card
  const ProjectCard = ({ project, onClick }) => {
    return (
      <motion.div 
        className="project-card"
        whileHover={{ y: -10 }}
        onClick={onClick}
      >
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-meta">
            <span className="category">{project.category}</span>
            <span className="year">{project.year}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div 
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projects-header">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Selected Works
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="subtitle"
        >
          A collection of projects I've worked on
        </motion.p>
      </div>

      <motion.div 
        className="projects-grid"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectPopup 
          project={selectedProject} 
          onClose={handleClosePopup}
        />
      )}
    </motion.div>
  );
};

export default Projects; 