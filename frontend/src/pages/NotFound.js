import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <motion.div 
      className="not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <motion.button
            className="primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Home
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound; 