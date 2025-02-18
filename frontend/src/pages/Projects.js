import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProjectPopup from '../components/ProjectPopup';
import ImageCarousel from '../components/ImageCarousel';
import '../styles/Projects.scss';

const projects = [
  {
    id: 1,
    title: 'ETL Platform Design',
    description: 'Redesigned complex data transformation workflows into intuitive interfaces',
    image: '/assets/images/projects/etl-platform.jpg',
    screenshots: [
      '/assets/images/projects/etl/screen1.jpg',
      '/assets/images/projects/etl/screen2.jpg'
    ],
    category: 'Enterprise',
    year: '2023',
    pdfUrl: '/projects/etl-platform.pdf'
  },
  {
    id: 2,
    title: 'Content Lifecycle Management',
    description: 'Designed a comprehensive system for managing content from creation to archival',
    image: '/assets/images/projects/placeholder.svg',
    category: 'Enterprise',
    year: '2023',
    pdfUrl: '/projects/content-lifecycle.pdf'
  },
  {
    id: 3,
    title: 'Information Architecture',
    description: 'Developed intuitive navigation and content structure for complex enterprise systems',
    image: '/assets/images/projects/placeholder.svg',
    category: 'Enterprise',
    year: '2023',
    pdfUrl: '/projects/information-architecture.pdf'
  },
  {
    id: 4,
    title: 'B2B SaaS Dashboard',
    description: 'Created a unified dashboard for managing multiple business processes',
    image: '/assets/images/projects/placeholder.svg',
    category: 'SaaS',
    year: '2023',
    pdfUrl: null
  },
  {
    id: 5,
    title: 'Data Visualization Tool',
    description: 'Developed interactive data visualization components for complex datasets',
    image: '/assets/images/projects/placeholder.svg',
    category: 'Enterprise',
    year: '2022',
    pdfUrl: null
  }
  // Add more projects as needed
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
    const handleImageError = (e) => {
      e.target.src = '/assets/images/projects/placeholder.svg';
      console.log('Image failed to load:', e.target.src);
    };

    console.log('Project data:', {
      title: project.title,
      hasScreenshots: !!project.screenshots,
      screenshotsCount: project.screenshots?.length,
      images: project.screenshots ? [project.image, ...project.screenshots] : null
    });

    return (
      <motion.div 
        className="project-card"
        whileHover={{ y: -10 }}
        onClick={onClick}
      >
        <div className="project-image">
          {project.screenshots ? (
            <ImageCarousel 
              images={[project.image, ...project.screenshots]} 
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title}
              onError={handleImageError}
            />
          )}
          <div className="project-overlay">
            <span className="view-project">View Project</span>
          </div>
        </div>
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