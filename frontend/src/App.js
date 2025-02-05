import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/App.scss';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Set isFirstLoad to false after loader completes
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2800); // Slightly longer than loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {isFirstLoad && <Loader />}
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App; 