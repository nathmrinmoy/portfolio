// Single source of truth for the project list and case study navigation.
export const projects = [
  {
    id: 1,
    slug: 'copilotgtm',
    name: 'CopilotGTM',
    kind: 'Product strategy · 0 → 1',
    role: 'Co-founder, product & design',
    color: '#4B44C8',
    title: 'CopilotGTM',
    headline: 'From presales copilot to revenue orchestration',
    description:
      'As co-founder with no separate PM, I ran discovery, led the pivot after real usage proved us wrong, and designed the product around deals, people and next actions.',
    category: 'AI · B2B SaaS',
    year: '2025–26',
    route: '/projects/copilotgtm',
    thumb: '/projects/copilotgtm/cover.webp',
    alt: 'CopilotGTM deal workspace',
    tags: ['Discovery', 'Pivot', 'AI agents', 'Roadmap'],
    featured: true
  },
  {
    id: 2,
    slug: 'pipeline-observability',
    name: 'Hevo · Pipeline Observability',
    kind: 'Observability · Data tools',
    role: 'Senior Product Designer',
    color: '#12606B',
    title: 'Pipeline Observability',
    headline: 'Pipeline observability for data engineers',
    description:
      'A drill-down from fleet health to the exact error and its fix, so engineers find failures before downstream reports break.',
    category: 'Data platform',
    year: '2024–25',
    route: '/projects/pipeline-observability',
    thumb: '/projects/etl/cover.webp',
    alt: 'Hevo pipelines dashboard',
    metrics: [
      { value: '2 hr → 15 min', label: 'Mean time to detect' },
      { value: '85%', label: 'Adoption in month one' }
    ]
  },
  {
    id: 3,
    slug: 'information-architecture',
    name: 'Whatfix · Information Architecture',
    kind: 'Information architecture · Research',
    role: 'Initiated and led, team of 4',
    color: '#2F6B4C',
    title: 'Information Architecture',
    headline: 'Rebuilding navigation for three product lines',
    description:
      'My initiative at Whatfix: I led a team of four through a baseline tree test, a 33-card sort and a new structure for three product lines. Shipped to all users.',
    category: 'Research',
    year: '2021',
    route: '/projects/information-architecture',
    thumb: '/projects/information-architecture/cover.webp',
    alt: 'Proposed information architecture map',
    metrics: [
      { value: '4 → 8', label: 'Tasks at 40%+ success' },
      { value: '9 → 5', label: 'Tasks under 20% success' }
    ]
  },
  {
    id: 4,
    slug: 'content-lifecycle',
    name: 'Whatfix · Content Lifecycle Management',
    kind: 'Workflow design · Shipped',
    role: 'Senior Product Designer',
    color: '#8A3468',
    title: 'Content Lifecycle Management',
    headline: 'A content lifecycle teams could see',
    description:
      'Replacing spreadsheets, Jira tickets and email review with status, review and selective release built into the product. Shipped to all users.',
    category: 'Workflow',
    year: '2020',
    route: '/projects/content-lifecycle',
    thumb: '/projects/content-lifecycle/cover.webp',
    alt: 'Content lifecycle board',
    metrics: [{ value: '76.4', label: 'SUS, chosen concept (others under 65)' }]
  }
];

export const getNextProject = (slug) => {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
};
