import { motion } from 'framer-motion';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/About.scss';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div 
      className="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="about-content">
        <motion.div className="intro-section" variants={itemVariants}>
          <h1>About Me</h1>
          <div className="highlight-bar" />
        </motion.div>

        <motion.div className="bio-section" variants={itemVariants}>
          <p className="lead">
            I craft digital experiences that are intuitive, impactful, and human-centered.
          </p>
          <p>
            With a strong foundation in B2B SaaS, ETL platforms, and enterprise product design, 
            I specialize in transforming complex workflows into seamless, user-friendly interfaces.
          </p>
        </motion.div>

        <motion.div className="interests-section" variants={itemVariants}>
          <p>
            Beyond work, I have interests in cosmology, entrepreneurship, and storytelling. 
            When I'm not refining interfaces, you'll probably find me flying my FPV drone, 
            jamming on my drums, or road-tripping to the mountains.
          </p>
        </motion.div>

        <motion.div className="connect-section" variants={itemVariants}>
          <p className="connect-text">
            Let's connect and create something remarkable. 🚀
          </p>
          <div className="social-links">
            <motion.a
              href="mailto:nathmrinmoy001@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nathmrinmoy/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About; 