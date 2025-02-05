import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import '../styles/ProjectPopup.scss';

const ProjectPopup = ({ project, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Construct Google Docs Viewer URL or PDF.js URL
  const getViewerUrl = (pdfUrl) => {
    // Using Google Docs Viewer
    const baseUrl = 'https://docs.google.com/viewer?embedded=true&url=';
    const fullPdfUrl = window.location.origin + pdfUrl;
    return baseUrl + encodeURIComponent(fullPdfUrl);
    
    // Alternatively, using PDF.js (if you prefer)
    // return `/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}&download=false&print=false`;
  };

  // Add preloading when hovering over project cards
  const handleProjectHover = (project) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = project.pdfUrl;
    document.head.appendChild(link);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="project-popup-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="project-popup-content"
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          exit={{ y: '100vh' }}
          onClick={e => e.stopPropagation()}
        >
          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
          
          {project.pdfUrl ? (
            <>
              {isLoading && (
                <div className="loading-state">
                  <div className="loader"></div>
                  <p>Loading project...</p>
                </div>
              )}
              <iframe
                src={getViewerUrl(project.pdfUrl)}
                title={project.title}
                width="100%"
                height="100%"
                onLoad={handleIframeLoad}
                style={{ opacity: isLoading ? 0 : 1 }}
                frameBorder="0"
              />
            </>
          ) : (
            <div className="placeholder-content">
              <h2>{project.title}</h2>
              <p>Case study coming soon...</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectPopup; 