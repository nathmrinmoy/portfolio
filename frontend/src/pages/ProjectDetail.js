import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

const ProjectDetail = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="project-detail">
      {/* Project detail content will go here */}
    </div>
  );
};

export default ProjectDetail; 