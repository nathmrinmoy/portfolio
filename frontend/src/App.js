import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import HowIWork from './pages/HowIWork';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/App.scss';

// Case studies load on demand so the home page stays light.
const CopilotGTM = lazy(() => import('./pages/case-studies/CopilotGTM'));
const PipelineObservability = lazy(() => import('./pages/case-studies/PipelineObservability'));
const InformationArchitecture = lazy(() => import('./pages/case-studies/InformationArchitecture'));
const ContentLifecycle = lazy(() => import('./pages/case-studies/ContentLifecycle'));

function MainPage() {
  useEffect(() => {
    document.title = 'Mrinmoy Nath · Product Designer';
  }, []);

  return (
    <div className="site">
      <a href="#work" className="skip-link">Skip to work</a>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <HowIWork />
        <About />
        <Contact />
      </main>
    </div>
  );
}

// Scroll to the top on a new page, or to the #section when one is given.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return undefined;
    }

    const id = hash.slice(1);
    let attempts = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      attempts += 1;
      if (el || attempts > 40) {
        clearInterval(timer);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: 'instant' });
        }
      }
    }, 50);

    return () => clearInterval(timer);
  }, [pathname, hash]);

  return null;
}

function CaseFallback() {
  return <div className="case-fallback" aria-busy="true" />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="App">
        <Suspense fallback={<CaseFallback />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects/copilotgtm" element={<CopilotGTM />} />
            <Route path="/projects/pipeline-observability" element={<PipelineObservability />} />
            <Route path="/projects/information-architecture" element={<InformationArchitecture />} />
            <Route path="/projects/content-lifecycle" element={<ContentLifecycle />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
