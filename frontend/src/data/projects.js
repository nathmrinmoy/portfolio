// Single source of truth for the project list and case study navigation.
export const projects = [
  {
    id: 1,
    slug: 'copilotgtm',
    kind: 'Product strategy · 0 → 1',
    role: 'Co-founder, product & design',
    color: '#4B44C8',
    title: 'CopilotGTM',
    headline: 'From presales copilot to an execution-first revenue system',
    description:
      'As co-founder with no separate PM, I ran discovery, led the pivot after real usage proved us wrong, and designed the product around deals, people and next actions.',
    category: 'CopilotGTM · AI',
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
    kind: 'Observability · Data tools',
    role: 'Senior Product Designer',
    color: '#12606B',
    title: 'Pipeline Observability',
    headline: 'Pipeline observability for data engineers',
    description:
      'A drill-down from fleet health to the exact error and its fix, so engineers find failures before downstream reports break.',
    category: 'Hevo · Data platform',
    year: '2024–25',
    route: '/projects/pipeline-observability',
    thumb: '/projects/etl/cover.webp',
    alt: 'Hevo pipelines dashboard',
    metrics: [
      { value: '2 hr → 15 min', label: 'Mean time to detect' },
      { value: '32 → 55', label: 'NPS' }
    ]
  },
  {
    id: 3,
    slug: 'information-architecture',
    kind: 'Information architecture · Research',
    role: 'Led the IA Charter',
    color: '#2F6B4C',
    title: 'Information Architecture',
    headline: 'Rebuilding navigation for three product lines',
    description:
      'I initiated and led the IA Charter at Whatfix: a baseline tree test, a 33-card sort, and a new structure validated on the same 14 tasks.',
    category: 'Whatfix · Research',
    year: '2022',
    route: '/projects/information-architecture',
    thumb: '/projects/information-architecture/cover.webp',
    alt: 'Proposed information architecture map',
    metrics: [
      { value: '36 → 76', label: 'Tree test score' },
      { value: '3 → 6', label: 'Tasks at 80%+ success' }
    ]
  },
  {
    id: 4,
    slug: 'content-lifecycle',
    kind: 'Workflow design · Concept testing',
    role: 'Senior Product Designer',
    color: '#8A3468',
    title: 'Content Lifecycle Management',
    headline: 'A content lifecycle teams could see',
    description:
      'Replacing spreadsheets, JIRA tickets and email review with status, review and selective release built into the product.',
    category: 'Whatfix · Workflow',
    year: '2020',
    route: '/projects/content-lifecycle',
    thumb: '/projects/content-lifecycle/cover.webp',
    alt: 'Content lifecycle board',
    metrics: [{ value: '76.4', label: 'SUS, concept test' }]
  }
];

export const getNextProject = (slug) => {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
};
