const principles = [
  {
    title: 'Measure before redesigning',
    text: 'Baseline tree tests, support tickets and interviews come first, so decisions rest on evidence, not opinions about menus.'
  },
  {
    title: 'Design the system, not the screen',
    text: 'Navigation, data models and workflows that still hold up when the product adds a new line or a new kind of user.'
  },
  {
    title: 'Own the product decision',
    text: 'At CopilotGTM there was no separate PM. I moved between discovery, roadmap and design, and changed course when the data said so.'
  }
];

const HowIWork = () => (
  <section className="principles wrap" aria-labelledby="how-i-work">
    <h2 id="how-i-work">How I work</h2>
    <ol className="principles__grid">
      {principles.map((p, i) => (
        <li key={p.title}>
          <span className="mono accent-ink">{String(i + 1).padStart(2, '0')}</span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default HowIWork;
