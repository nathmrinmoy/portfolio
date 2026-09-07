import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProjectPopup from '../components/ProjectPopup';
import '../styles/Projects.scss';

const projects = [
  {
    id: 'copilotgtm',
    title: 'CopilotGTM',
    description:
      'An AI-native revenue intelligence product that evolved from a presales copilot into a system for understanding deals, people, and what to do next.',
    category: 'Product Strategy · AI',
    year: '2025–26',
    route: '/projects/copilotgtm',
    featured: true
  },
  {
    id: 1,
    title: 'ETL Platform Design',
    description:
      'Redesigned a complex ETL platform to simplify data transformation workflows, improving user efficiency by 40% and reducing training time by 60%.',
    category: 'Enterprise',
    year: '2024',
    pdfUrl: '/projects/etl-platform.pdf'
  },
  {
    id: 2,
    title: 'Content Lifecycle Management',
    description:
      'Developed an end-to-end content management system that streamlined content creation, review, and publishing, reducing workflow time by 50%.',
    category: 'Enterprise',
    year: '2020',
    pdfUrl: '/projects/content-lifecycle.pdf'
  },
  {
    id: 3,
    title: 'Information Architecture',
    description:
      'Restructured enterprise information hierarchy to improve findability and user navigation, resulting in 35% faster task completion rates.',
    category: 'Enterprise',
    year: '2022',
    pdfUrl: '/projects/information-architecture.pdf'
  },
  {
  id: 4,
  title: 'CopilotGTM',
  description:
    'An AI-native revenue intelligence product that evolved from a presales copilot into a system for understanding deals, stakeholders, and what to do next.',
  category: 'Product Strategy · AI',
  year: '2025–26',
  pdfUrl: '/projects/copilotgtm.pdf'
},
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setSelectedProject(null);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleProjectClick = (project) => {
    if (project.route) {
      window.location.href = project.route;
      return;
    }

    if (project.pdfUrl) {
      window.open(project.pdfUrl, '_blank');
      return;
    }

    setSelectedProject(project);
    window.history.pushState(
      { project: project.id },
      '',
      `#project-${project.id}`
    );
  };

  const handleClosePopup = () => {
    setSelectedProject(null);

    if (window.location.hash) {
      window.history.back();
    }
  };

  const ProjectCard = ({ project, onClick }) => {
    return (
      <motion.article
        className={`project-card ${
          project.featured ? 'project-card--featured' : ''
        }`}
        whileHover={{ y: -10 }}
        onClick={onClick}
      >
        {project.featured && (
          <div className="featured-label">
            Featured case study
          </div>
        )}

        <div className="project-info">
          <div className="project-number">
            {project.featured ? '01' : `0${project.id}`}
          </div>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="project-meta">
            <span className="category">{project.category}</span>
            <span className="year">{project.year}</span>
          </div>

          {project.featured && (
            <div className="project-link">
              Read case study <span>↗</span>
            </div>
          )}
        </div>
      </motion.article>
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
          Products, systems and decisions I've worked on
        </motion.p>
      </div>

      <motion.div
        className="projects-grid"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project) => (
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
