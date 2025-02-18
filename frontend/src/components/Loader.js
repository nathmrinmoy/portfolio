import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/Loader.scss';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => {
          const newProgress = prev + 1;
          if (newProgress === 100) {
            onLoadingComplete();
          }
          return newProgress;
        });
      }
    }, 20); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <motion.div 
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-content">
        <motion.div 
          className="progress-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.2 }}
        />
        <span className="progress-text">{progress}%</span>
      </div>
    </motion.div>
  );
};

export default Loader; 