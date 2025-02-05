import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

const ProjectDetail = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div className="project-detail">
      <HeroSection />
      <Overview />
      <Process />
      <Outcome />
      <NextProject />
    </motion.div>
  );
};

export default ProjectDetail; 