import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/App.scss';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <AnimatePresence mode='wait'>
          {isLoading ? (
            <Loader onLoadingComplete={() => setIsLoading(false)} />
          ) : (
            <>
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
            </>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App; 