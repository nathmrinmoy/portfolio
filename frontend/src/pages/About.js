import { useRef } from 'react';
import useGridDrift from '../hooks/useGridDrift';

const experience = [
  { org: 'CopilotGTM', role: 'Co-founder', when: '2025–26' },
  { org: 'Hevo', role: 'Senior Product Designer', when: '2023–24' },
  { org: 'Fynley', role: 'Founder', when: '2023' },
  { org: 'Whatfix', role: 'Senior Product Designer', when: '2019–23' },
  { org: 'CGI', role: 'UX Designer', when: '2017–19' }
];

const education = [
  { org: 'IIT Guwahati', role: 'MDes', when: '2015–17' },
  { org: 'NERIST', role: 'BTech', when: '2011–15' }
];

// Off-the-clock interests. Icons share the MN logo's round stroke style.
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

const beyond = [
  {
    label: 'Cosmology',
    icon: (
      <>
        <circle cx="12" cy="12" r="5" {...stroke} />
        <g className="ico-ring">
          <ellipse cx="12" cy="12" rx="9.5" ry="2.8" transform="rotate(-20 12 12)" {...stroke} />
        </g>
        <circle cx="20" cy="4" r="0.6" fill="currentColor" />
      </>
    )
  },
  {
    label: 'Drums',
    icon: (
      <>
        <ellipse cx="12" cy="12" rx="7" ry="2.4" {...stroke} />
        <path d="M5 12v5.5c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4V12" {...stroke} />
        <g className="ico-stick ico-stick--l">
          <path d="M6.5 3.5 10 9.5" {...stroke} />
        </g>
        <g className="ico-stick ico-stick--r">
          <path d="M17.5 3.5 14 9.5" {...stroke} />
        </g>
      </>
    )
  },
  {
    label: 'Gaming',
    icon: (
      <>
        <path
          d="M7.5 7.5h9a4.5 4.5 0 0 1 4.4 5.4l-.7 3.5a2.2 2.2 0 0 1-3.8 1L14.6 15H9.4l-1.8 2.4a2.2 2.2 0 0 1-3.8-1l-.7-3.5a4.5 4.5 0 0 1 4.4-5.4Z"
          {...stroke}
        />
        <path d="M8 10.5v3M6.5 12h3" {...stroke} />
        <g className="ico-btn">
          <circle cx="15.5" cy="11" r="0.9" fill="currentColor" />
          <circle cx="17.5" cy="13" r="0.9" fill="currentColor" />
        </g>
      </>
    )
  },
  {
    label: 'Bike riding',
    icon: (
      <>
        <g className="ico-spin ico-spin--back">
          <circle cx="5.5" cy="16" r="3.5" {...stroke} />
          <path d="M5.5 12.5v7" {...stroke} />
        </g>
        <g className="ico-spin ico-spin--front">
          <circle cx="18.5" cy="16" r="3.5" {...stroke} />
          <path d="M18.5 12.5v7" {...stroke} />
        </g>
        <path d="M5.5 16 9 11h6l3.5 5M9.5 11c.6-1.6 2.2-2.4 4-2l1.5 2M15 11l1.5-3.5h2" {...stroke} />
      </>
    )
  },
  {
    label: 'Car driving',
    icon: (
      <g className="ico-steer">
        <circle cx="12" cy="12" r="8.5" {...stroke} />
        <circle cx="12" cy="12" r="2.2" {...stroke} />
        <path d="M3.8 10.5 9.8 11.5M20.2 10.5 14.2 11.5M12 14.2V20.5" {...stroke} />
      </g>
    )
  }
];

const List = ({ items }) => (
  <ul className="timeline">
    {items.map((t) => (
      <li key={t.org}>
        <span>
          {t.org}
          <span className="timeline__role"> · {t.role}</span>
        </span>
        <span className="mono">{t.when}</span>
      </li>
    ))}
  </ul>
);

const About = () => {
  const band = useRef(null);
  useGridDrift(band);

  return (
    <section id="about" className="about-band" ref={band}>
      <div className="about-band__inner wrap">
        <div className="about-band__story">
          <img
            src="/projects/copilotgtm/mrinmoy.webp"
            alt="Portrait of Mrinmoy Nath"
            className="about-band__photo"
            width="320"
            height="320"
          />
          <div className="about-band__copy">
            <span className="mono accent-soft">About</span>
            <p className="about-band__lead">
              I design for people who run complex systems: sales teams, data engineers, content
              teams and the admins behind them.
            </p>
            <p className="about-band__body">
              I’ve stepped out twice to build my own. Fynley (2023) made a company’s customer
              conversations searchable. At CopilotGTM I led product and design without a separate PM
              and took it to four pilots, two of them paid, before distribution stalled us. Before
              that, four years at Whatfix: I ran design hiring until a VP of Design joined,
              interviewing about 200 designers to hire close to 20, mentored five or six directly, and
              led the information architecture initiative. I began as a UX designer at CGI,
              after an MDes at IIT Guwahati.
            </p>
          </div>
        </div>

        <div className="about-band__cols">
          <div>
            <h3 className="about-band__label mono">Experience</h3>
            <List items={experience} />
          </div>
          <div>
            <h3 className="about-band__label mono">Education</h3>
            <List items={education} />
          </div>
          <div>
            <h3 className="about-band__label mono">Beyond work</h3>
            <ul className="timeline hobbies">
              {beyond.map((b) => (
                <li key={b.label}>
                  <span className="hobbies__item">
                    <svg
                      viewBox="0 0 24 24"
                      width="26"
                      height="26"
                      aria-hidden="true"
                      focusable="false"
                    >
                      {b.icon}
                    </svg>
                    {b.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
