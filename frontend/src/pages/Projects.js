import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const num = (i) => String(i + 1).padStart(2, '0');

const Meta = ({ project, index }) => (
  <p className="work-meta mono">
    <span className="work-meta__num">{num(index)}</span>
    <span className="work-meta__kind">
      <span className="work-meta__dot" aria-hidden="true" />
      {project.kind}
    </span>
    {project.featured && <span className="work-meta__flag">Featured</span>}
  </p>
);

const Facts = ({ project }) => (
  <p className="work-facts mono">
    {project.category} · {project.year} · {project.role}
  </p>
);

const Metrics = ({ metrics }) =>
  metrics ? (
    <dl className="work-metrics">
      {metrics.map((m) => (
        <div key={m.label}>
          <dd>{m.value}</dd>
          <dt className="mono">{m.label}</dt>
        </div>
      ))}
    </dl>
  ) : null;

const Cta = ({ title }) => (
  <span className="work-cta">
    Read case study <span aria-hidden="true">→</span>
    <span className="visually-hidden">: {title}</span>
  </span>
);

const Cover = ({ project, eager }) => (
  <div className="work-cover">
    <img
      src={project.thumb}
      alt={project.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      width="960"
      height="600"
    />
  </div>
);

const Row = ({ project, index }) => (
  <li
    className={`work-row ${index % 2 === 0 ? 'work-row--flip' : ''}`}
    style={{ '--p': project.color }}
  >
    <Link to={project.route} className="work-row__link">
      <div className="work-row__text">
        <Meta project={project} index={index} />
        <p className="work-name">{project.name}</p>
        <h3 className="work-title">{project.headline}</h3>
        <Facts project={project} />
        <p className="work-desc">{project.description}</p>
        <Metrics metrics={project.metrics} />
        {!project.metrics && project.tags && (
          <ul className="tags tags--ruled mono" aria-label="Focus areas">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <Cta title={project.title} />
      </div>
      <Cover project={project} eager={index === 0} />
    </Link>
  </li>
);

const Projects = () => (
  <section id="work" className="work wrap">
    <div className="section-head">
      <h2>Selected work</h2>
      <span className="mono muted">{String(projects.length).padStart(2, '0')} case studies</span>
    </div>
    <ol className="work-list">
      {projects.map((p, i) => (
        <Row key={p.slug} project={p} index={i} />
      ))}
    </ol>
  </section>
);

export default Projects;
