import {
  CaseBack,
  CaseFooter,
  CardGrid,
  Chain,
  Flow,
  Reveal,
  Screen,
  ScreenTabs,
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
    'Designing, testing and shipping a content lifecycle system for Whatfix content teams.'
  );

  return (
    <main className="case-study">
      <CaseBack />

      {/* HERO */}
      <section className="case-hero">
        <div className="case-project">Whatfix · Content Lifecycle Management</div>
        <div className="case-eyebrow">Workflow design · Concept testing · Shipped</div>

        <h1>
          Nobody could tell
          <br />
          <em>what was actually live.</em>
        </h1>

        <p className="case-hero-intro">
          Content teams tracked drafts, reviews and releases in spreadsheets
          and Jira tickets. Feedback was buried in email, and there was no way
          to publish one piece without releasing everything. I designed and
          tested a lifecycle system that made the status of every piece of
          content visible, and it shipped to all users.
        </p>

        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>Senior Product Designer</dd>
          </div>
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
            <dd>Tested → shipped to all users</dd>
          </div>
          <div>
            <dt>Users</dt>
            <dd>Instructional designers &amp; content teams</dd>
          </div>
        </dl>
      </section>

      <section className="case-hero-visual">
        <Screen
          src={img('content-list.webp')}
          alt="Content list with stage chips, environment, folder and owner for each item"
          label="Whatfix · Content"
          width={2880}
          height={1336}
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
          testing and deployment by hand, tracking it in spreadsheets and Jira.
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
            { title: 'Requirements', text: '“What to create?” Discussed with SMEs, then tracked in spreadsheets or Jira.' },
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
            'Send only content that is ready to test to UAT?'
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
              When reviewers approve an item, it moves to Ready automatically.
              Items can also be moved by hand.
              Draft, In review, Ready and Live are visible in the content list
              and filterable by stage, type and folder.
            </p>
            <p>
              An Environment column answers the question teams asked most:
              is this live, and where? A stage board was also designed and
              planned for version 2.0.
            </p>
          </div>
        </div>

        <ScreenTabs
          label="Status views"
          tabs={[
            {
              title: 'Content list',
              hint: 'Stage and environment per item',
              src: img('content-list.webp'),
              alt: 'Content list with stage chips, environment, folder, owner and stage filters with counts',
              label: 'Whatfix · Content',
              width: 2880,
              height: 1336
            },
            {
              title: 'Stage board (v2.0)',
              hint: 'Designed, planned for version 2.0',
              src: img('lifecycle-board.webp'),
              alt: 'Lifecycle board with reviewers and due dates on in-review cards and a locked draft with a child item',
              label: 'Lifecycle · v2.0 design',
              width: 2880,
              height: 1490
            }
          ]}
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
              Authors send content for review with named reviewers, a due
              date and a note. Tags are suggested from the step text, so
              tagging stops being a separate manual chore.
            </p>
            <p>
              Reviewers comment on the walkthrough in the live application,
              on the exact step. Replies come back as in-product
              notifications, so a review doesn’t stall in someone’s inbox.
            </p>
          </div>
        </div>

        <Screen
          src={img('send-for-review.webp')}
          alt="Send for review drawer with two assigned reviewers, a due date, a note and suggested tags"
          label="Review · Assign reviewers"
          width={2880}
          height={1800}
          theme="dark"
        />

        <div className="two-up">
          <Screen
            src={img('in-context-comments.webp')}
            alt="A comment thread pinned to step 3 of a walkthrough running in the live application, with a comments panel and review status"
            label="Review · Comments on the live app"
            width={2880}
            height={1560}
            theme="dark"
            caption="Threads sit on the exact step, in the app the content runs in."
          />
          <Screen
            src={img('notifications.webp')}
            alt="Notifications panel with a comment reply, a review request, an approval and a blocked push"
            label="Review · Notifications"
            width={2880}
            height={1800}
            theme="dark"
            caption="Replies, review requests and blocked pushes arrive in the product."
          />
        </div>
      </section>

      {/* 07 RELEASE */}
      <section className="case-section">
        <div className="section-label">07 / Release without breaking things</div>

        <div className="two-column">
          <h2>
            Push what’s ready,
            <em> hold what isn’t.</em>
          </h2>
          <div>
            <p className="problem-solved">
              <strong>Problem solved</strong>
              Releases were all or nothing, testers saw everything, and there were only two environments.
            </p>
            <p>
              Teams push selected items to UAT to test with a small group, then
              to Production. If an item contains child content that is still in
              Draft, the push can’t complete. The dialog names the child item
              and offers to open it or take that item out of the push.
            </p>
            <p>
              Every push saves a version, so any item can be rolled back from
              its history.
            </p>
          </div>
        </div>

        <Screen
          src={img('push-to-production.webp')}
          alt="Push to Production dialog with two ready items and one item blocked because its child content is still in draft"
          label="Release · Push to Production"
          width={2880}
          height={1800}
        />
      </section>

      {/* 08 TESTING */}
      <section className="case-section case-section--alt">
        <div className="section-label">08 / Concept testing</div>

        <div className="two-column">
          <h2>
            Tested before
            <em> committing to a build.</em>
          </h2>
          <div>
            <p>
              The System Usability Scale (SUS) is a standardized measure of
              how intuitive and easy to use a system is. We built
              clickable prototypes of four concepts and tested them with about
              12 to 15 customers.
            </p>
            <p>
              Users were asked to track content statuses (Draft, In Review,
              Published, Live), submit content for review and get feedback,
              navigate a central dashboard across environments, use automated
              tagging and search, and publish selected content instead of
              pushing every update at once.
            </p>
            <p>
              Concepts 1 to 3 each scored below 65. Concept 4 scored 76.4,
              above the commonly cited average of 68, so it became the
              direction we built.
            </p>
            <p>
              One idea I dropped: I first wanted a formal testing process as
              part of the lifecycle. Our CTO convinced me that Whatfix is a
              digital adoption company, not a testing company, so testing
              stayed a step, UAT, rather than a product of its own.
            </p>
          </div>
        </div>

        <Screen
          src={img('concepts.webp')}
          alt="Four concepts: content moved in releases, one tab per environment, folders by readiness, and the chosen stage on every item"
          label="Concepts 1 to 4"
          width={2880}
          height={1782}
        />

        <SusGauge score={76.4} />

        <span className="small-label" style={{ marginTop: '5rem' }}>Every problem mapped to a solution</span>
        <div className="pivot-table" role="table" aria-label="Problems and solutions">
          {[
            ['Tracking', 'Spreadsheets and Jira tickets to track requirements', 'Stages that move on approval'],
            ['Status', 'No way to tell what is new, in review or live', 'Stage chips, filters and Live/Not Live states'],
            ['Review', 'Constant back and forth; review buried in email chains', 'Comments pinned to content in the live app'],
            ['Ownership', 'No in-house way to assign content for review', 'Reviewer assignment'],
            ['Context', 'Screenshots don’t show the current state of the application', 'Review on the live application, not on screenshots'],
            ['Release', 'Testers see everything; no selective movement', 'Selective push to UAT and Production'],
            ['Safety', 'A broken child item could ship with its parent', 'Push blocked per item, with the reason'],
            ['Tagging', 'Every item tagged by hand', 'Tags suggested at review'],
            ['Recovery', 'No way back after a bad release', 'Versions with rollback']
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
        <div className="section-label">09 / Built on the design system</div>
        <h2>
          Status colors
          <em> did the explaining.</em>
        </h2>
        <p>
          The product used the Whatfix design system, so stage and severity
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
        <div className="section-label">10 / Shipped</div>
        <h2>
          Shipped to all users.
          <em> Here’s what it was built to change.</em>
        </h2>

        <CardGrid
          columns={4}
          items={[
            { title: 'More efficient', text: 'Faster content creation and management.' },
            { title: 'Fewer rollbacks', text: 'Better testing and review before content reaches production.' },
            { title: 'Less manual work', text: 'Less dependence on manual tagging and tracking.' },
            { title: 'Fewer success tickets', text: 'Fewer tickets about content status.' }
          ]}
        />

        <p className="outcome-note">
          The release went to every customer. We didn’t instrument these
          outcomes, so they are the goals it was designed for, not measured
          results.
        </p>
      </section>

      {/* 10 TAKEAWAY */}
      <section className="case-section final-section dark-section">
        <div className="section-label">11 / What I learned</div>
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
