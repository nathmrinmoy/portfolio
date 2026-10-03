import {
  CaseBack,
  CaseFooter,
  CardGrid,
  Flow,
  MetricShift,
  Reveal,
  Screen,
  ScreenTabs,
  StatGrid,
  useDocumentMeta
} from '../../components/case/CaseKit';
import '../../styles/CaseStudy.scss';

const img = (name) => `/projects/information-architecture/${name}`;

const InformationArchitecture = () => {
  useDocumentMeta(
    'Information Architecture case study',
    'Restructuring Whatfix navigation with card sorting and tree testing so it could scale to new product lines.'
  );

  return (
    <main className="case-study">
      <CaseBack />

      {/* HERO */}
      <section className="case-hero">
        <div className="case-eyebrow">Information architecture · Research · Whatfix</div>

        <h1>
          Whatfix had outgrown
          <br />
          <em>its own navigation.</em>
        </h1>

        <p className="case-hero-intro">
          New product lines like Product Analytics and Enterprise Admin didn’t
          fit the existing structure, and the way features were grouped didn’t
          match how customers looked for them. I initiated and led the
          Information Architecture Charter to rebuild the navigation from
          research up.
        </p>

        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>Led the IA Charter</dd>
          </div>
          <div>
            <dt>Company</dt>
            <dd>Whatfix</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>2022</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>DAP, Product Analytics, Admin</dd>
          </div>
        </dl>
      </section>

      <section className="case-hero-visual">
        <Screen
          src={img('ia-map-dap.webp')}
          alt="Proposed information architecture for the Digital Adoption Platform with account switcher and contextual navigation"
          label="Proposed IA · DAP"
          width={1504}
          height={1110}
        />
      </section>

      {/* 01 PROBLEM */}
      <section className="case-section">
        <Reveal>
          <div className="section-label">01 / The problem</div>
          <h2>
            The structure couldn’t scale,
            <em> and users couldn’t find things.</em>
          </h2>
        </Reveal>

        <CardGrid
          columns={2}
          numbered
          items={[
            { title: 'It couldn’t scale', text: 'There was no clean place for new verticals like Product Analytics and Enterprise Admin.' },
            { title: 'It didn’t match mental models', text: 'Feature grouping and terminology didn’t align with how users expected to navigate.' },
            { title: 'Key features were hard to find', text: 'Important capabilities were buried or scattered across the product.' },
            { title: 'Changes were risky', text: 'Interconnected content and widgets meant restructuring could break things.' }
          ]}
        />

        <div className="two-column" style={{ marginTop: '4rem' }}>
          <h3>What a good IA had to do for Whatfix</h3>
          <div>
            <p>
              The existing IA mainly represented the DAP offering. A new one
              had to organize DAP, Product Analytics and the Admin portal, and
              show how they connect. An effective IA needed:
            </p>
            <ul className="check-list">
              <li>Scalability across multiple product verticals</li>
              <li>Categorization that matches customer mental models</li>
              <li>Better discoverability of product offerings</li>
              <li>Logical dependencies and workflows that prevent content from breaking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 02 APPROACH */}
      <section className="case-section dark-section">
        <div className="section-label">02 / The approach</div>
        <h2>
          Measure the problem first,
          <em> then rebuild from research.</em>
        </h2>

        <Flow
          steps={[
            { title: 'Sitemap & baseline', text: 'Document the current sitemap and tree-test it to measure how well it performs.' },
            { title: 'Card sort', text: '33 feature cards in an open sort to learn users’ mental models.' },
            { title: 'Competitor IAs', text: 'What works in comparable products, and what doesn’t.' },
            { title: 'Explore structures', text: 'Brainstorm possible IA configurations.' },
            { title: 'Feedback from PODs', text: 'Pressure-test options with internal product teams.' },
            { title: 'Terminology & taxonomy', text: 'Agree on names and groupings based on the research.' },
            { title: 'Finalize & validate', text: 'Final IA for DAP, Admin and Analytics, validated with iterative tree tests and user feedback sessions.' }
          ]}
        />
      </section>

      {/* 03 BASELINE */}
      <section className="case-section">
        <div className="section-label">03 / The baseline</div>

        <div className="two-column">
          <h2>
            Three critical tasks had
            <em> zero success.</em>
          </h2>
          <div>
            <p>
              The baseline tree test covered 14 real tasks on the existing
              structure. Configuring task list visibility rules, creating
              self-help segments and finding repository content all scored 0%.
              Users either didn’t connect the terms with where they lived, or
              the features were buried too deep.
            </p>
            <p>
              Tree testing checks the hierarchy without any visual design in
              the way: can users find things where they expect them? We
              measured task success, directness and time taken, and read the
              results through similarity matrices, dendrograms, pie trees and
              3D cluster views.
            </p>
            <p>
              Some tasks were easy to find. Many suffered from poor placement,
              ambiguous terms and deep nesting. The existing navigation put 12
              items side by side in the main bar, and a settings menu of more
              than 20 unrelated items.
            </p>
          </div>
        </div>

        <div className="card-grid" style={{ '--cols': 2 }}>
          <div className="card-grid__item">
            <span className="card-grid__index">Terminology mismatch</span>
            <h3>Publishing content: 18%</h3>
            <p>Misleading labels caused high first-click errors. Users looked for a “finalize and publish” step that didn’t exist under that name.</p>
          </div>
          <div className="card-grid__item">
            <span className="card-grid__index">Scattered grouping</span>
            <h3>Translating content: 12%</h3>
            <p>Related tasks were spread across categories. Translation belonged with localization settings, not where it sat.</p>
          </div>
          <div className="card-grid__item">
            <span className="card-grid__index">Abandonment</span>
            <h3>55 and 53 returns to home</h3>
            <p>On creating self-help segments and finding repository content, participants went back to the start again and again.</p>
          </div>
          <div className="card-grid__item">
            <span className="card-grid__index">Inconsistency</span>
            <h3>94% next to 0%</h3>
            <p>Adding users (94%) and editing a flow (82%) worked well. With no consistent structure, success swung from task to task.</p>
          </div>
        </div>

        <ScreenTabs
          label="Baseline artifacts"
          tabs={[
            {
              title: 'Current IA',
              hint: 'The structure we started from',
              src: img('ia-map-current-homepage.webp'),
              alt: 'Map of the existing navigation with a long main navigation and a large settings menu',
              label: 'Current IA · All content homepage',
              width: 1750,
              height: 906
            },
            {
              title: 'Baseline tree test',
              hint: 'Task-level results',
              src: img('tree-test-baseline.webp'),
              alt: 'Baseline tree test board with task success, first click and times participants returned home for 14 tasks',
              label: 'Tree test · Baseline',
              width: 2000,
              height: 1052
            }
          ]}
        />
      </section>

      {/* 04 CARD SORT */}
      <section className="case-section dark-section">
        <div className="section-label">04 / How users group features</div>

        <div className="two-column">
          <h2>
            Users grouped by
            <em> what they were trying to do.</em>
          </h2>
          <div>
            <p>
              In an open card sort, users grouped 33 feature cards and named
              the groups themselves. The goal was grouping and labels built on
              the themes users had in common. The similarity matrix showed strong
              clustering around content creation and management: tooltips,
              self-help guides and pop-ups were consistently grouped together.
            </p>
            <p>
              Admin functions like user roles and API integrations scored low
              similarity. The dendrogram, a tree of how cards cluster, helped
              decide which features to consolidate and which to separate. It
              showed users consistently grouping
              help features together (self-help, task lists, widgets), but
              also overlap between admin actions and user settings. The
              direction was clear: separate content management from system
              administration, and keep admin controls apart from content
              features.
            </p>
          </div>
        </div>

        <div className="two-up">
          <Screen
            src={img('similarity-matrix.webp')}
            alt="Card sort similarity matrix showing how often participants grouped pairs of features together"
            label="Card sort · Similarity matrix"
            width={1186}
            height={992}
            theme="dark"
            caption="Darker cells mean more participants put two features in the same group."
          />
          <Screen
            src={img('dendrogram.webp')}
            alt="Card sort dendrogram with a highlighted cluster for configuration, actions and admin"
            label="Card sort · Dendrogram"
            width={1312}
            height={848}
            theme="dark"
            caption="At 64% agreement, one clear cluster forms around creating and configuring content."
          />
        </div>
      </section>

      {/* 05 NEW STRUCTURE */}
      <section className="case-section">
        <div className="section-label">05 / The new structure</div>

        <div className="two-column">
          <h2>
            One switcher,
            <em> a navigation per product.</em>
          </h2>
          <div>
            <p>
              Instead of one long menu, each product line got its own
              contextual navigation, with a shared account switcher and global
              settings above it.
            </p>
            <p>
              That gave Product Analytics and Admin a home of their own, and
              left room for the next vertical without another reshuffle.
            </p>
          </div>
        </div>

        <ScreenTabs
          label="Proposed information architecture"
          tabs={[
            {
              title: 'Digital Adoption Platform',
              hint: 'Guidance, content, themes, testing',
              src: img('ia-map-dap.webp'),
              alt: 'Proposed IA for the Digital Adoption Platform',
              label: 'Proposed IA · DAP',
              width: 1504,
              height: 1110
            },
            {
              title: 'Product Analytics',
              hint: 'Reports, insights, audience',
              src: img('ia-map-product-analytics.webp'),
              alt: 'Proposed IA for Product Analytics',
              label: 'Proposed IA · Product Analytics',
              width: 1466,
              height: 856
            },
            {
              title: 'Admin',
              hint: 'Accounts, data, collaborators',
              src: img('ia-map-admin-ecc.webp'),
              alt: 'Proposed IA for the Admin console',
              label: 'Proposed IA · Admin ECC',
              width: 1110,
              height: 642
            }
          ]}
        />
      </section>

      {/* 06 VALIDATION */}
      <section className="case-section dark-section outcome-section">
        <div className="section-label">06 / Validation</div>
        <h2>
          The new structure
          <em> more than doubled the benchmark.</em>
        </h2>

        <div className="shift-grid shift-grid--two">
          <MetricShift
            title="Tree test overall score"
            before={36}
            after={76}
            beforeLabel="Benchmark"
            afterLabel="New IA"
            max={100}
          />
          <MetricShift
            title="Tasks with 80%+ success"
            before={3}
            after={6}
            beforeLabel="Baseline"
            afterLabel="New IA"
            max={14}
            format={(v) => `${v} of 14`}
          />
        </div>

        <StatGrid
          columns={1}
          items={[
            { value: '85%', label: 'of participants reached their destination without backtracking' }
          ]}
        />

        <ul className="check-list check-list--inline" style={{ marginTop: '3rem' }}>
          <li>Abandonment dropped sharply from 53–55 returns home</li>
          <li>Scattered features consolidated</li>
          <li>Ambiguous labels like “Configure Task List Visibility Rules” rewritten, improving first-click accuracy</li>
          <li>Admin and Actions overlap fixed by refining labels and grouping</li>
        </ul>

        <Screen
          src={img('tree-test-validated.webp')}
          alt="Validation tree test board with task success, directness, time taken and first click for 14 tasks"
          label="Tree test · New IA"
          width={1322}
          height={964}
          theme="dark"
        />
      </section>

      {/* 07 WHAT DIDN'T WORK */}
      <section className="case-section">
        <div className="section-label">07 / What still didn’t work</div>

        <div className="two-column">
          <h2>
            Five tasks stayed
            <em> below 20%.</em>
          </h2>
          <div>
            <p>
              Tasks 1, 3, 8, 10 and 13 still had success rates under 20%, so
              their naming and placement needed another pass. Some users still
              misclicked first, which pointed at subcategories and deeper
              layers of the IA. Edge cases such as advanced user
              configurations still needed usability testing.
            </p>
            <p>
              The structure performed far better overall, and the task-level
              results showed exactly which areas needed the next round of
              work.
            </p>
          </div>
        </div>
      </section>

      {/* 08 TAKEAWAY */}
      <section className="case-section final-section dark-section">
        <div className="section-label">08 / What I learned</div>
        <h2>
          Measure the old structure
          <em> before you defend the new one.</em>
        </h2>
        <p>
          The baseline tree test changed the conversation with stakeholders.
          Instead of debating opinions about menus, we were comparing task
          success on the same 14 tasks, before and after.
        </p>
      </section>

      <CaseFooter slug="information-architecture" />
    </main>
  );
};

export default InformationArchitecture;
