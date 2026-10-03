import { useEffect, useRef, useState, useId } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiMaximize2, FiX } from 'react-icons/fi';
import { getNextProject } from '../../data/projects';

/* ------------------------------------------------------------------ */
/* Page meta: title + description per case study (no extra dependency) */
/* ------------------------------------------------------------------ */
export function useDocumentMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    const tag = document.querySelector('meta[name="description"]');
    const previousDescription = tag ? tag.getAttribute('content') : null;

    document.title = `${title} · Mrinmoy Nath`;
    if (tag && description) tag.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
      if (tag && previousDescription !== null) {
        tag.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}

/* ------------------------------------------------------------------ */
/* Scroll reveal that respects prefers-reduced-motion                  */
/* ------------------------------------------------------------------ */
export function Reveal({ children, className, delay = 0, as = 'div' }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Back link + case footer with next project                           */
/* ------------------------------------------------------------------ */
export function CaseBack() {
  return (
    <Link to="/#work" className="case-back">
      <FiArrowLeft aria-hidden="true" />
      Back to selected works
    </Link>
  );
}

export function CaseFooter({ slug }) {
  const next = getNextProject(slug);
  return (
    <footer className="case-footer">
      <Link to="/#work" className="case-footer__back">
        <FiArrowLeft aria-hidden="true" />
        All work
      </Link>

      <Link to={next.route} className="case-footer__next">
        <span>Next case study</span>
        <strong>
          {next.title} <FiArrowRight aria-hidden="true" />
        </strong>
      </Link>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Lightbox for full-size screens                                       */
/* ------------------------------------------------------------------ */
function Lightbox({ src, alt, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close full-size view"
      >
        <FiX />
      </button>
      <div className="lightbox__body" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
      </div>
    </div>,
    document.body
  );
}

/* ------------------------------------------------------------------ */
/* Screen: product screenshot in a browser frame.                      */
/* `tall` caps the visible height and fades out, with a button to     */
/* open the full screen. Every screen can be opened full size.         */
/* ------------------------------------------------------------------ */
export function Screen({
  src,
  alt,
  label,
  caption,
  width,
  height,
  tall = false,
  bare = false,
  theme = 'light',
  className = ''
}) {
  const [open, setOpen] = useState(false);
  const classes = [
    'screen',
    `screen--${theme}`,
    tall ? 'screen--tall' : '',
    bare ? 'screen--bare' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <figure className={classes} style={width ? { maxWidth: `${width}px` } : undefined}>
      {!bare && (
        <div className="screen__chrome" aria-hidden="true">
          <span />
          <span />
          <span />
          {label && <em>{label}</em>}
        </div>
      )}

      <button
        type="button"
        className="screen__viewport"
        onClick={() => setOpen(true)}
        aria-label={`Open full-size view: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
        {tall && <span className="screen__fade" aria-hidden="true" />}
        <span className="screen__expand" aria-hidden="true">
          <FiMaximize2 />
          {tall ? 'View full screen' : 'Enlarge'}
        </span>
      </button>

      {caption && <figcaption>{caption}</figcaption>}

      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Tabbed screens: several states of one feature                        */
/* ------------------------------------------------------------------ */
export function ScreenTabs({ tabs, label, theme = 'light' }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const current = tabs[active];

  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const delta = e.key === 'ArrowRight' ? 1 : -1;
    const next = (active + delta + tabs.length) % tabs.length;
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div className="screen-tabs">
      <div className="screen-tabs__list" role="tablist" aria-label={label}>
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            id={`${id}-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            className={i === active ? 'is-active' : ''}
            onClick={() => setActive(i)}
            onKeyDown={onKeyDown}
          >
            <strong>{tab.title}</strong>
            {tab.hint && <span>{tab.hint}</span>}
          </button>
        ))}
      </div>

      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
      >
        <Screen
          key={current.src}
          src={current.src}
          alt={current.alt}
          label={current.label}
          caption={current.caption}
          width={current.width}
          height={current.height}
          tall={current.tall}
          theme={theme}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stat grid: big numbers with labels                                   */
/* ------------------------------------------------------------------ */
export function StatGrid({ items, columns = 3 }) {
  return (
    <dl className="stat-grid" style={{ '--cols': columns }}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>
            {item.label}
            {item.note && <span>{item.note}</span>}
          </dt>
          <dd>
            <strong>{item.value}</strong>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------------ */
/* Metric shift: before vs after on one scale                           */
/* direction "down" means lower is better                               */
/* ------------------------------------------------------------------ */
export function MetricShift({
  title,
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  format = (v) => v,
  max,
  direction = 'up'
}) {
  const scale = max || Math.max(before, after);
  const pct = (v) => `${Math.max(2, (v / scale) * 100)}%`;
  const improved = direction === 'up' ? after > before : after < before;

  return (
    <div className="metric-shift">
      <div className="metric-shift__title">{title}</div>
      <div className="metric-shift__row">
        <span className="metric-shift__label">{beforeLabel}</span>
        <span className="metric-shift__track">
          <span className="metric-shift__bar metric-shift__bar--before" style={{ width: pct(before) }} />
        </span>
        <span className="metric-shift__value">{format(before)}</span>
      </div>
      <div className="metric-shift__row">
        <span className="metric-shift__label">{afterLabel}</span>
        <span className="metric-shift__track">
          <span
            className={`metric-shift__bar ${improved ? 'metric-shift__bar--good' : 'metric-shift__bar--after'}`}
            style={{ width: pct(after) }}
          />
        </span>
        <span className="metric-shift__value metric-shift__value--after">{format(after)}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Flow: numbered steps that read as a sequence                         */
/* ------------------------------------------------------------------ */
export function Flow({ steps, compact = false }) {
  return (
    <ol className={`flow ${compact ? 'flow--compact' : ''}`}>
      {steps.map((step, i) => (
        <li key={step.title}>
          <span className="flow__index">{String(i + 1).padStart(2, '0')}</span>
          <strong>{step.title}</strong>
          {step.text && <p>{step.text}</p>}
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Card grid: problems, questions, principles                           */
/* ------------------------------------------------------------------ */
export function CardGrid({ items, columns = 2, numbered = false }) {
  return (
    <div className="card-grid" style={{ '--cols': columns }}>
      {items.map((item, i) => (
        <div className="card-grid__item" key={item.title}>
          {numbered && (
            <span className="card-grid__index">{String(i + 1).padStart(2, '0')}</span>
          )}
          {item.icon && <span className="card-grid__icon">{item.icon}</span>}
          <h3>{item.title}</h3>
          {item.text && <p>{item.text}</p>}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Chain: a short sequence of steps joined by arrows                   */
/* ------------------------------------------------------------------ */
export function Chain({ steps, label }) {
  return (
    <ol className="chain-pills" aria-label={label}>
      {steps.map((step, i) => (
        <li key={step}>
          <span>{step}</span>
          {i < steps.length - 1 && <i aria-hidden="true">→</i>}
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Quote compare: what we validated vs what we had not                 */
/* ------------------------------------------------------------------ */
export function QuoteCompare({ left, right }) {
  return (
    <div className="quote-compare">
      <figure className="quote-compare__item quote-compare__item--yes">
        <span>{left.label}</span>
        <blockquote>{left.quote}</blockquote>
      </figure>
      <figure className="quote-compare__item quote-compare__item--no">
        <span>{right.label}</span>
        <blockquote>{right.quote}</blockquote>
      </figure>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Chips: a compact list of short items                                */
/* ------------------------------------------------------------------ */
export function Chips({ items, label }) {
  return (
    <ul className="chips" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Question list: the questions a feature had to answer                 */
/* ------------------------------------------------------------------ */
export function QuestionList({ items, title }) {
  return (
    <div className="question-list">
      {title && <span className="small-label">{title}</span>}
      <ul>
        {items.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
    </div>
  );
}
