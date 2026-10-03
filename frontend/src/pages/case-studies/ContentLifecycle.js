import {
  CaseBack,
  CaseFooter,
  CardGrid,
  Chain,
  Flow,
  Reveal,
  Screen,
  useDocumentMeta
} from '../../components/case/CaseKit';
import '../../styles/CaseStudy.scss';

const img = (name) => `/projects/content-lifecycle/${name}`;

/* System Usability Scale gauge, 0–100, with the commonly cited 68 average */
function SusGauge({ score }) {
  const average = 68;
  return (
    <figure className="sus">
      <div className="sus__score">
        <strong>{score}</strong>
        <span>SUS score for the selected concept</span>
      </div>
      <div
        className="sus__track"
        role="img"
        aria-label={`SUS score ${score} out of 100, above the commonly cited average of ${average}`}
      >
        <span className="sus__fill" style={{ width: `${score}%` }} />
        <span className="sus__marker" style={{ left: `${average}%` }}>
          <em>Average ≈ {average}</em>
        </span>
      </div>
      <div className="sus__scale" aria-hidden="true">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
    </figure>
  );
}

const palette = [
  { name: 'Whatfix Fire', role: 'Primary', hex: '#C74900' },
  { name: 'Inkredible', role: 'Secondary', hex: '#1F1F32' },
  { name: 'Knowledgablue', role: 'Info', hex: '#0975D7' },
  { name: 'SuccesSage', role: 'Success', hex: '#21AD73' },
  { name: 'Yell-uh-oh', role: 'Warning', hex: '#E0A400' },
  { name: 'Scare-let', role: 'Critical', hex: '#B3141D' }
];

const ContentLifecycle = () => {
  useDocumentMeta(
    'Content Lifecycle Management case study',
    'Designing and concept-testing a content lifecycle system for Whatfix content teams.'
  );

  return (
    <main className="case-study">
      <CaseBack />

      {/* HERO */}
      <section className="case-hero">
        <div className="case-eyebrow">Workflow design · Concept testing · Whatfix</div>

        <h1>
          Nobody could tell
          <br />
          <em>what was actually live.</em>
        </h1>

        <p className="case-hero-intro">
          Content teams tracked drafts, reviews and releases in spreadsheets
          and Jira tickets. Feedback was buried in email, and there was no way
          to publish one piece without releasing everything. I designed and
          concept-tested a lifecycle system that made the status of every
          piece of content visible.
        </p>

        <dl className="case-meta">
          <div>
            <dt>Company</dt>
            <dd>Whatfix</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>2020</dd>
          </div>
          <div>
            <dt>Stage</dt>
            <dd>Concept → tested</dd>
          </div>
          <div>
            <dt>Users</dt>
            <dd>Instructional designers &amp; content teams</dd>
          </div>
        </dl>
      </section>

      <section className="case-hero-visual">
        <Screen
          src={img('lifecycle-board.webp')}
          alt="Lifecycle management board with Draft, In Review, Ready and Published columns"
          label="Whatfix · Lifecycle management"
          width={1231}
          height={812}
          bare
        />
      </section>

      {/* 01 PERSONA */}
      <section className="case-section case-section--narrow">
        <Reveal>
          <div className="section-label">01 / Who we designed for</div>
          <h2>
            An instructional designer
            <em> accountable for every piece of content.</em>
          </h2>
          <p>
            Our primary user created online learning content for employees at
            a large financial services organization, helping them work in
            complex tools like CRM and HR systems.
          </p>
          <p>
            Their motivation was to help employees be more productive and
            successful in their day-to-day work. Their goal with a digital
            adoption platform was to improve the employee experience in tools
            like CRM and HRM systems.
          </p>
          <p>
            They wanted to spend less time creating, deploying and maintaining
            content, while staying accountable for where each piece was in its
            lifecycle.
          </p>
        </Reveal>

        <Reveal className="quote-card">
          <blockquote>
            “Following the lifecycle process is not an option for me. But there
            is no easy way to do it. Maintaining spreadsheets and JIRA manually
            is time consuming, error prone and not creatively challenging.”
          </blockquote>
          <span>Persona: instructional designer, financial and insurance provider</span>
        </Reveal>

        <ul className="check-list" style={{ marginTop: '2rem' }}>
          <li>Spend less time creating, deploying and maintaining content</li>
          <li>Stay accountable for content throughout its lifecycle</li>
          <li>Make sure the right people are on the right job</li>
        </ul>
      </section>

      {/* 02 PROBLEMS */}
      <section className="case-section dark-section">
        <div className="section-label">02 / The problem</div>
        <h2>
          The lifecycle lived
          <em> outside the product.</em>
        </h2>
        <p>
          Large and medium enterprises managed content creation, review,
          testing and deployment by hand, tracking it in spreadsheets and JIRA.
          That caused inefficiencies, errors and delays in getting good
          learning content to employees.
        </p>

        <CardGrid
          columns={3}
          numbered
          items={[
            { title: 'Manual tracking', text: 'Spreadsheets and Jira tickets drifted out of sync across Draft, Review and Published.' },
            { title: 'Scattered review', text: 'Feedback was buried in email chains instead of sitting next to the content.' },
            { title: 'Two environments only', text: 'Development and Production, with no UAT for parallel testing.' },
            { title: 'No status visibility', text: 'Nobody could tell what was live, in review or pending.' },
            { title: 'All-or-nothing releases', text: 'There was no way to move selected content to an environment.' },
            { title: 'Manual tagging', text: 'Tags were updated by hand, so content was misclassified and hard to find.' }
          ]}
        />
        <p className="pull-line">
          The risk was lower productivity, delayed training and content that
          didn’t land. The team needed automation, better tracking and a
          better review workflow.
        </p>
      </section>

      {/* 03 JOURNEY */}
      <section className="case-section">
        <div className="section-label">03 / The journey</div>
        <h2>
          Seven stages,
          <em> each with its own friction.</em>
        </h2>

        <Flow
          compact
          steps={[
            { title: 'Requirements', text: '“What to create?” Discussed with SMEs, then tracked in spreadsheets or JIRA.' },
            { title: 'Creation', text: '“How to create?” Some content is built in the Editor, some in the Dashboard, and the taxonomy of content and widgets is unclear.' },
            { title: 'Assessment', text: '“What needs to be published?” No way to see what was created for this release. Manual tagging is error prone, so more spreadsheets.' },
            { title: 'Review', text: '“Is it good enough?” Language and look and feel are reviewed, but there’s no way to assign reviewers. Screenshots go out in email and lose context.' },
            { title: 'Testing', text: '“Is it working?” Testers validate content against the rules, but see everything in UAT, not just what’s ready.' },
            { title: 'Packaging', text: '“What needs to be published?” No way to move selected content without sending everything.' },
            { title: 'Maintenance', text: '“What needs updating?” No way to tell what is new, in review or live, so admins chase people to find out.' }
          ]}
        />

        <span className="small-label" style={{ marginTop: '4.5rem' }}>Not every release takes the same path</span>
        <div className="lanes">
          <div>
            <strong>Most releases</strong>
            <Chain label="Standard path" steps={['Creation', 'Review', 'QA', 'UAT', 'Production']} />
          </div>
          <div>
            <strong>Very high urgency</strong>
            <Chain label="Urgent path" steps={['Creation', 'QA', 'Production']} />
            <em>Some review and testing stages are skipped.</em>
          </div>
          <div>
            <strong>Low-risk configuration changes</strong>
            <Chain label="Configuration path" steps={['Configuration', 'Production']} />
            <em>All review and testing stages are skipped.</em>
          </div>
        </div>
        <p style={{ marginTop: '2rem' }}>
          The path depended on the customer type (an ISV product team or a
          financial services company, for example) and the level of urgency.
          In the standard path, content moves through review, QA and UAT in
          segments. A low-urgency release like 1.1 goes through UAT as a
          package, and if any piece fails review or testing, the entire
          process is repeated.
        </p>
        <p>
          The lifecycle had to follow each enterprise’s own practice, not
          force one rigid path on everyone.
        </p>
      </section>

      {/* 03b VOICES */}
      <section className="case-section case-section--alt">
        <div className="section-label">From research</div>
        <h2>
          In their
          <em> own words.</em>
        </h2>
        <div className="quote-wall">
          {[
            '“Want a place where you can see all current LIVE WFX content. I have no idea what content is actually live without going onto my production environment and seeing what appears.”',
            '“Could we add ‘Live/Not Live’ texts against each flow name, to differentiate the flows in production from the ones that aren’t?”',
            '“I find tags to be an overly manual process, prone to errors.”',
            '“No clarity on how Development vs UAT vs Production can be separated. Two environments are not sufficient to run UAT in parallel to development.”',
            '“Content which is expected to break should be turned off and removed from live status until it’s fixed.”',
            '“With multiple users using the dashboard, it will be great if we can show the state of each flow: live, draft, or saved but not live.”',
            '“Strong review/approve mechanisms. Internal team review comments and notes along with the content.”',
            '“Which of his content are in review, which have been deployed.”',
            '“Ability to revert to a particular version of content.”'
          ].map((q) => (
            <blockquote key={q}>{q}</blockquote>
          ))}
        </div>
      </section>

      {/* 04 HMW */}
      <section className="case-section dark-section">
        <div className="section-label">04 / How might we</div>
        <h2>
          Seven questions
          <em> shaped the concepts.</em>
        </h2>

        <ol className="hmw-list">
          {[
            'Track content status without manual updates?',
            'Publish specific content without releasing everything?',
            'Separate content that needs review from content ready to publish?',
            'Follow an enterprise-compliant lifecycle?',
            'Assign content to specific reviewers?',
            'Make reviewing content easier?',
            'Send only tested content to QA and UAT?'
          ].map((q) => (
            <li key={q}>
              <span>How might we</span> {q.charAt(0).toLowerCase() + q.slice(1)}
            </li>
          ))}
        </ol>
      </section>

      {/* 04b RECOMMENDATIONS */}
      <section className="case-section">
        <div className="section-label">From questions to a system</div>
        <h2>
          Five capabilities
          <em> the system needed.</em>
        </h2>
        <CardGrid
          columns={3}
          numbered
          items={[
            { title: 'Automated tracking & status', text: 'Track progress automatically across Draft, In Review and Published, with Live/Not Live indicators.' },
            { title: 'Review & approval workflow', text: 'Review notes and comments inside the system, and specific reviewers assigned to content.' },
            { title: 'Testing & deployment', text: 'A third UAT environment for parallel testing, and selective movement so only tested content ships.' },
            { title: 'Central content dashboard', text: 'Status across every stage in one place, with search and filters to find content fast.' },
            { title: 'Tagging automation', text: 'Automated tagging to categorize content accurately, with AI suggestions based on relevance.' }
          ]}
        />
      </section>

      {/* 05 SOLUTION: STATUS */}
      <section className="case-section">
        <div className="section-label">05 / Status you can see</div>

        <div className="two-column">
          <h2>
            Every piece of content
            <em> knows where it is.</em>
          </h2>
          <div>
            <p>
              Progress is tracked automatically across lifecycle stages.
              Draft, In Review, Ready and Live states are visible in the
              content list and filterable by stage, type and folder.
            </p>
            <p>
              The board view gives the same content a release-focused layout,
              with stages a team can manage to match its own process.
            </p>
            <p>
              Content moves in releases, with “Push to UAT” and “Push to
              Production”. If any child content is still in draft, the push is
              blocked and the reason is shown, so broken content never ships
              by accident.
            </p>
          </div>
        </div>

        <Screen
          src={img('content-list.webp')}
          alt="Content list with type, stage, folder, creator and last updated columns and colored stage chips"
          label="Whatfix · Content"
          width={1240}
          height={818}
          bare
        />
      </section>

      {/* 06 SOLUTION: REVIEW */}
      <section className="case-section dark-section">
        <div className="section-label">06 / Review in context</div>

        <div className="two-column">
          <h2>
            Feedback moved out of email
            <em> and onto the content.</em>
          </h2>
          <div>
            <p>
              Reviewers comment directly on the walkthrough in the
              application where it runs. Threads stay attached to the content,
              and authors can assign specific reviewers.
            </p>
            <p>
              Replies come back as notifications, so a review doesn’t stall
              waiting for someone to check an inbox.
            </p>
          </div>
        </div>

        <div className="two-up">
          <Screen
            src={img('in-context-comments.webp')}
            alt="In-context comment threads on a page with a comments side panel"
            label="Review · Comments"
            width={822}
            height={585}
            theme="dark"
            caption="Comment threads pinned to the content, with a panel listing every open conversation."
            bare
          />
          <Screen
            src={img('status-and-notifications.webp')}
            alt="Content list beside an email notification for a comment reply"
            label="Review · Notifications"
            width={1145}
            height={758}
            theme="dark"
            caption="A reply notification brings the reviewer back to the exact thread."
            bare
          />
        </div>

        <ul className="check-list check-list--inline">
          <li>Selective publishing to a chosen environment</li>
          <li>A UAT environment for parallel testing</li>
          <li>Version history with rollback</li>
          <li>AI-suggested tags</li>
        </ul>
      </section>

      {/* 07 TESTING */}
      <section className="case-section">
        <div className="section-label">07 / Concept testing</div>

        <div className="two-column">
          <h2>
            Tested before
            <em> committing to a build.</em>
          </h2>
          <div>
            <p>
              The System Usability Scale (SUS) is a standardized measure of
              how intuitive and easy to use a system is. We used it to test
              four concepts and see whether they addressed user needs.
            </p>
            <p>
              Users were asked to track content statuses (Draft, In Review,
              Published, Live), submit content for review and get feedback,
              navigate a central dashboard across environments, use automated
              tagging and search, and publish selected content instead of
              pushing every update at once.
            </p>
            <p>Based on the score, concept 4 was selected as the direction to build.</p>
          </div>
        </div>

        <SusGauge score={76.4} />

        <span className="small-label" style={{ marginTop: '5rem' }}>Every problem mapped to a solution</span>
        <div className="pivot-table" role="table" aria-label="Problems and solutions">
          {[
            ['Tracking', 'Spreadsheets and JIRA tickets to track requirements', 'Lifecycle board with stages'],
            ['Status', 'No way to tell what is new, in review or live', 'Stage chips, filters and Live/Not Live states'],
            ['Review', 'Constant back and forth; review buried in email chains', 'Comments pinned to content in the live app'],
            ['Ownership', 'No in-house way to assign content for review', 'Reviewer assignment'],
            ['Context', 'Screenshots don’t show the current state of the application', 'Review on the live application, not on screenshots'],
            ['Release', 'Testers see everything; no selective movement', 'Selective push to UAT and Production']
          ].map(([dimension, before, after]) => (
            <div className="pivot-table__row" role="row" key={dimension}>
              <span role="rowheader">{dimension}</span>
              <span role="cell">{before}</span>
              <span role="cell" aria-hidden="true" className="pivot-table__arrow">→</span>
              <strong role="cell">{after}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* 08 SYSTEM */}
      <section className="case-section dark-section">
        <div className="section-label">08 / Built on the design system</div>
        <h2>
          Status colors
          <em> did the explaining.</em>
        </h2>
        <p>
          The concepts used the Whatfix design system, so stage and severity
          colors carried meaning consistently across the product. Each status
          color was checked for contrast at its 50 and 100 tints.
        </p>

        <ul className="swatches">
          {palette.map((c) => (
            <li key={c.hex}>
              <span className="swatches__chip" style={{ background: c.hex }} />
              <strong>{c.name}</strong>
              <em>{c.role} · {c.hex}</em>
            </li>
          ))}
        </ul>
      </section>

      {/* 09 EXPECTED OUTCOMES */}
      <section className="case-section outcome-section">
        <div className="section-label">09 / Expected outcomes</div>
        <h2>
          What we expected
          <em> the system to change.</em>
        </h2>

        <CardGrid
          columns={5}
          items={[
            { title: 'More efficient', text: 'Faster content creation and management.' },
            { title: 'Fewer rollbacks', text: 'Better testing and review before content reaches production.' },
            { title: 'Less manual work', text: 'Less dependence on manual tagging and tracking.' },
            { title: 'Less duplication', text: 'Clear status reduces employee confusion, and with it duplicate content.' },
            { title: 'Fewer success tickets', text: 'Fewer tickets about content status.' }
          ]}
        />

        <p className="outcome-note">
          These are the outcomes the concept was designed to move, not
          measured results.
        </p>
      </section>

      {/* 10 TAKEAWAY */}
      <section className="case-section final-section dark-section">
        <div className="section-label">10 / What I learned</div>
        <h2>
          The most useful status
          <em> is the one nobody has to update.</em>
        </h2>
        <p>
          Every workaround the team had, from spreadsheets to Jira tickets,
          was someone manually keeping status in sync. Making the lifecycle
          part of the product removed that work instead of organizing it.
        </p>
      </section>

      <CaseFooter slug="content-lifecycle" />
    </main>
  );
};

export default ContentLifecycle;
