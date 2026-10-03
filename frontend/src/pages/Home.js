import { useRef } from 'react';
import useGridDrift from '../hooks/useGridDrift';

const experience = [
  { org: 'CopilotGTM', role: 'Co-founder' },
  { org: 'Hevo', role: 'Senior product designer' },
  { org: 'Fynley', role: 'Founder' },
  { org: 'Whatfix', role: 'Senior product designer' },
  { org: 'Education', role: 'MDes, IIT Guwahati' }
];

const Home = () => {
  const band = useRef(null);
  useGridDrift(band);

  return (
    <>
      <section id="top" className="hero-band" ref={band}>
        <div className="hero wrap">
          <p className="hero__status mono">
            <span className="dot" aria-hidden="true" />
            Open to Lead, Staff and Principal design roles · Bangalore or remote
          </p>
          <h1 className="hero__title">Product designer for complex B2B software.</h1>
          <div className="hero__foot">
            <p className="hero__intro">
              Designer and two-time founder. Nine years on the hard end of B2B: AI agents, data
              pipelines and enterprise navigation. I design with the business in mind, because I’ve
              had to run one.
            </p>
            <div className="actions">
              <a href="#work" className="pill pill--solid">
                See selected work
              </a>
              <a href="#contact" className="pill">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Experience at a glance" className="strip">
        <dl className="strip__grid wrap">
          {experience.map((e) => (
            <div key={e.org}>
              <dt className="eyebrow">{e.org}</dt>
              <dd>{e.role}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
};

export default Home;
