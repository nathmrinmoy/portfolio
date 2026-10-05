import {
  CaseBack,
  CaseFooter,
  CardGrid,
  Flow,
  MetricShift,
  Reveal,
  Screen,
  ScreenTabs,
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
        <div className="case-project">Whatfix · Information Architecture</div>
        <div className="case-eyebrow">Navigation · Research · Three product lines</div>

        <h1>
          Whatfix had outgrown
          <br />
          <em>its own navigation.</em>
        </h1>

        <p className="case-hero-intro">
          New product lines like Product Analytics and Enterprise Admin didn’t
          fit the existing structure, and the way features were grouped didn’t
          match how customers looked for them. Fixing that was my initiative. I
          led a team of four designers and researchers through the research,
          and the new structure shipped to all users.
        </p>

        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>Started the IA initiative, led a team of 4</dd>
          </div>
          <div>
            <dt>Company</dt>
            <dd>Whatfix</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>2021</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>DAP, Product Analytics, Admin</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Shipped to all users</dd>
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

      {/* 03 LEADERSHIP */}
      <section className="case-section case-section--alt">
        <Reveal>
          <div className="section-label">03 / How I ran it</div>
          <h2>
            My initiative,
            <em> a team of four.</em>
          </h2>
        </Reveal>

        <CardGrid
          columns={2}
          numbered
          items={[
            {
              title: 'Started it',
              text: 'The IA initiative was mine. I got it going, and the VP of Product Design and the VP of Product approved it, covering DAP, Product Analytics and Admin together.'
            },
            {
              title: 'Led the team',
              text: 'I led a team of four designers and researchers through the sitemap, the baseline tree test, the card sort, the new maps and the validation round.'
            },
            {
              title: 'Brought engineering on board',
              text: 'Engineering pushed back the most. We showed product and engineering leadership what the new structure would fix, and after that every team came on board.'
            },
            {
              title: 'Handed over, then shipped',
              text: 'I led it until a Director joined and took charge. The new IA shipped to all users in 2021 and is still how the product is organized today. Customer success received fewer queries, and product analytics showed people reaching their destination more directly.'
            }
          ]}
        />
      </section>

      {/* 04 BASELINE */}
      <section className="case-section">
        <div className="section-label">04 / The baseline</div>

        <div className="two-column">
          <h2>
            Two tasks had zero success,
            <em> and most were under 20%.</em>
          </h2>
          <div>
            <p>
              The baseline tree test gave 17 participants 14 real tasks on the
              existing structure. Average success was 27%, and 9 of the 14
              tasks finished under 20%. Configuring task list visibility rules
              and creating a self-help segment scored 0%. Finding repository
              content scored 0% on first click: nobody even started in the
              right place. Users either didn’t connect the terms with where
              they lived, or the features were buried too deep.
            </p>
            <p>
              Tree testing checks the hierarchy without any visual design in
              the way: can users find things where they expect them? We
              measured task success, directness, first click and time taken,
              and read each task’s paths through pie trees.
            </p>
            <p>
              Some tasks were easy to find. Many suffered from poor placement,
              ambiguous terms and deep nesting. The existing navigation put 12
              items side by side in the main bar, and a settings menu of more
              than 20 items.
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
            <p>On creating self-help segments and translating content, 17 participants went back to the start 55 and 53 times.</p>
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
              title: 'Baseline tree test',
              hint: '17 participants, 14 tasks',
              src: img('tree-test-baseline.webp'),
              alt: 'Baseline tree test board with task success, first click and times participants returned home for 14 tasks',
              label: 'Tree test · Baseline',
              width: 2000,
              height: 1052
            },
            {
              title: 'Current IA',
              hint: 'The structure we started from',
              src: img('ia-map-current-homepage.webp'),
              alt: 'Map of the existing navigation with a long main navigation and a large settings menu',
              label: 'Current IA · All content homepage',
              width: 1750,
              height: 906
            }
          ]}
        />
      </section>

      {/* 04 CARD SORT */}
      <section className="case-section dark-section">
        <div className="section-label">05 / How users group features</div>

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
        <div className="section-label">06 / The new structure</div>

        <div className="two-column">
          <h2>
            One home per product,
            <em> one way to move between them.</em>
          </h2>
          <div>
            <p>
              Instead of one long menu, each product line got its own
              contextual navigation. DAP and Product Analytics share an account
              switcher and global settings, and Admin has a product switcher.
            </p>
            <p>
              That gave Product Analytics and Admin a home of their own, and
              left room for the next vertical without another reshuffle.
            </p>
            <p>
              The alternative was one unified tree with every product under a
              single menu. The card sort argued against it: users kept content
              creation and system administration apart, and a single tree
              would have buried Analytics and Admin under a structure shaped
              by DAP.
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

      {/* 07 VALIDATION */}
      <section className="case-section dark-section outcome-section">
        <div className="section-label">07 / Validation</div>
        <div className="two-column">
          <h2>
            Fewer tasks failed.
            <em> Many labels still needed work.</em>
          </h2>
          <div>
            <p>
              Round two tested the proposed structure with 27 participants.
              The tasks were rewritten to use the new labels, so single tasks
              don’t compare one to one. The overall shape does.
            </p>
            <p>
              The number of tasks with 40% or better success doubled, and
              tasks under 20% fell from nine to five. Two of the baseline’s
              zero-success tasks, task list visibility rules and self-help
              segments, had no equivalent in round two, so they weren’t
              retested.
            </p>
          </div>
        </div>

        <div className="shift-grid">
          <MetricShift
            title="Average task success"
            before={27}
            after={37}
            beforeLabel="Before"
            afterLabel="After"
            max={100}
            format={(v) => `${v}%`}
          />
          <MetricShift
            title="Tasks at 40%+ success"
            before={4}
            after={8}
            beforeLabel="Before"
            afterLabel="After"
            max={14}
            format={(v) => `${v} of 14`}
          />
          <MetricShift
            title="Tasks under 20% success"
            before={9}
            after={5}
            beforeLabel="Before"
            afterLabel="After"
            max={14}
            direction="down"
            format={(v) => `${v} of 14`}
          />
        </div>

        <span className="small-label" style={{ marginTop: '4.5rem' }}>Closest matching tasks, before and after</span>
        <div className="task-compare" role="table" aria-label="Task success on matching tasks">
          {[
            ['Translating content', 12, 44],
            ['Finding support', 41, 48],
            ['Viewing user actions', 35, 41],
            ['Viewing flow analytics', 6, 11],
            ['Finding repository content', 12, 15],
            ['Configuring a beacon theme', 12, 4],
            ['Adding users', 94, 74]
          ].map(([task, before, after]) => (
            <div className="task-compare__row" role="row" key={task}>
              <span role="rowheader">{task}</span>
              <span role="cell" className="task-compare__before">{before}%</span>
              <span role="cell" aria-hidden="true" className="task-compare__arrow">→</span>
              <strong role="cell" className={after >= before ? 'is-up' : 'is-down'}>{after}%</strong>
            </div>
          ))}
        </div>

        <Screen
          src={img('tree-test-round2.webp')}
          alt="Round two tree test results for 14 tasks with success, directness, first click, visited right branch, time and returns home"
          label="Tree test · New IA, round 2"
          width={2640}
          height={1600}
          theme="dark"
        />
      </section>

      {/* 08 WHAT DIDN'T WORK */}
      <section className="case-section">
        <div className="section-label">08 / What still didn’t work</div>

        <div className="two-column">
          <h2>
            People found the right branch,
            <em> then lost the label.</em>
          </h2>
          <div>
            <p>
              Participants reached the right branch 54% of the time, but only
              37% finished there. First-click accuracy stayed flat, 39% before
              and 35% after, and returns to home didn’t fall. The top level was
              right more often than the labels underneath it.
            </p>
            <p>
              Five tasks were under 20% in round two: beacon themes, employee
              app menus, content repositories, funnels and test cases. Adding
              users also dropped from 94% to 74% once it moved under
              Collaborators. These were the open problems after round two.
            </p>
          </div>
        </div>
      </section>

      {/* 09 TAKEAWAY */}
      <section className="case-section final-section dark-section">
        <div className="section-label">09 / What I learned</div>
        <h2>
          Measure the old structure
          <em> before you defend the new one.</em>
        </h2>
        <p>
          The baseline gave us evidence to show leadership what the new
          structure would fix. Round two was humbler: fewer tasks failed, but
          many labels still needed work.
        </p>
      </section>

      <CaseFooter slug="information-architecture" />
    </main>
  );
};

export default InformationArchitecture;
