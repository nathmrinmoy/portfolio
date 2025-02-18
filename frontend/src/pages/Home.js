import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Home.scss';
import { useEffect, useState } from 'react';
import { FiDownload } from 'react-icons/fi';

const sentences = [
  { bold: "Designing", rest: "clarity in complexity" },
  { bold: "Bridging", rest: "users, data, and design" },
  { bold: "Refining", rest: "chaos into clarity" }
];

const colors = ['#FFD700', '#FFA500', '#FFB347'];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sentences.length);
    }, 4000); // Change sentence every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            Hi 👋, I'm <motion.span 
              className="highlight"
              whileHover={{ 
                scale: 1.0,
                transition: { duration: 0.2 }
              }}
            >
              Mrinmoy Nath
            </motion.span>
          </motion.h1>

          <motion.p
            className="intro-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I practice product design to solve complex problems through
          </motion.p>

          <div className="animated-text-container">
            <AnimatePresence mode='wait'>
              <motion.div 
                key={currentIndex}
                className="animated-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span 
                  className="bold-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ color: colors[currentIndex] }}
                >
                  {sentences[currentIndex].bold}
                </motion.span>{' '}
                <motion.span
                  className="rest-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {sentences[currentIndex].rest}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div 
            className="cta-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            <motion.button
              className="primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  const offset = 80; // Height of navbar
                  const elementPosition = projectsSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              View Projects
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download="Mrinmoy_Nath_Resume.pdf"
              className="ghost-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                console.log('Resume downloaded');
              }}
            >
              Download Resume <FiDownload className="icon" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home; 