import { FiArrowUpRight, FiUsers, FiActivity, FiLayers } from 'react-icons/fi';
import {
  CaseBack,
  CaseFooter,
  Chain,
  Chips,
  QuestionList,
  QuoteCompare,
  Reveal,
  Screen,
  ScreenTabs,
  useDocumentMeta
} from '../../components/case/CaseKit';
import '../../styles/CaseStudy.scss';

const img = (name) => `/projects/copilotgtm/${name}`;

const CopilotGTM = () => {
  useDocumentMeta(
    'CopilotGTM case study',
    'How customer discovery turned CopilotGTM from a presales copilot into a revenue intelligence product.'
  );

  return (
    <main className="case-study">
      <CaseBack />

      {/* HERO */}
      <section className="case-hero">
        <div className="case-eyebrow">Product · Design · Strategy · AI</div>

        <h1>
          We built the right product
          <br />
          <em>for the wrong buyer.</em>
        </h1>

        <p className="case-hero-intro">
          CopilotGTM started as an AI copilot for presales teams. Customer
          discovery revealed a bigger opportunity: helping sales teams
          understand what was happening inside their deals, who mattered,
          and what to do next.
        </p>

        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>Co-founder, Product &amp; Design</dd>
          </div>
          <div>
            <dt>Stage</dt>
            <dd>0 → 1</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>2025–26</dd>
          </div>
          <div>
            <dt>Customers</dt>
            <dd>3–4 pilots</dd>
          </div>
        </dl>

        <div className="role-block">
          <img src={img('mrinmoy.webp')} alt="Mrinmoy Nath" width="64" height="64" />
          <div>
            <strong>My role: Co-founder, Product &amp; Design</strong>
            <p>
              I worked across product design and product management. I owned
              customer discovery, JTBD, product definition, information
              architecture, UX, roadmap prioritization and PRDs, while
              partnering with the other co-founders on product direction and
              execution.
            </p>
          </div>
        </div>
      </section>

      {/* HERO VISUAL */}
      <section className="case-hero-visual">
        <Screen
          src={img('buying-committee.webp')}
          alt="CopilotGTM buying committee map showing champions, supporters, detractors and AI insights for a deal"
          label="CopilotGTM · Buying committee"
          width={1440}
          height={1314}
        />
      </section>

      {/* 01 STARTING POINT */}
      <section className="case-section case-section--narrow">
        <Reveal>
          <div className="section-label">01 / The starting point</div>
          <h2>
            Presales teams spent their time
            <em> piecing information together.</em>
          </h2>
          <p>
            CopilotGTM started with a simple observation. Presales teams spent a
            lot of time piecing together information before, during and after
            customer conversations. It lived across conversations, documents,
            proposals, RFPs, product material and sales context. Even simple
            questions could mean digging through several sources.
          </p>
          <p>We believed AI could remove much of that manual work.</p>
        </Reveal>

        <Reveal className="hypothesis-card">
          <dl>
            <div>
              <dt>Persona</dt>
              <dd>Presales / Sales Engineering</dd>
            </div>
            <div>
              <dt>Problem</dt>
              <dd>Too much time finding information, preparing responses and creating sales collateral.</dd>
            </div>
          </dl>
          <div>
            <span className="small-label">Initial product: an AI copilot to</span>
            <ul className="check-list">
              <li>Prepare for customer conversations</li>
              <li>Answer ad hoc questions during sales calls</li>
              <li>Create proposals</li>
              <li>Respond to RFPs</li>
              <li>Find relevant customer and product information</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* 02 REAL USERS */}
      <section className="case-section dark-section">
        <div className="section-label">02 / We started with real users</div>

        <div className="two-column">
          <h2>
            They liked it.
            <em> They couldn’t buy it.</em>
          </h2>
          <div>
            <p>
              We worked with five U.S. presales leaders as design partners. They
              used the product for several weeks, saw value in the workflows and
              told us they would pay for it.
            </p>
            <p>
              But when we tried to move toward a purchase, something unexpected
              happened. The people who used the product did not control the
              budget. Presales leaders could advocate for it, but the budget sat
              with the VP of Sales.
            </p>
          </div>
        </div>

        <QuoteCompare
          left={{ label: 'What we had validated', quote: '“This is useful to me.”' }}
          right={{ label: 'What we had not', quote: '“Will the organization pay for this?”' }}
        />

        <p className="pull-line">
          That distinction changed the way I think about product validation.
        </p>
      </section>

      {/* 03 INDIA */}
      <section className="case-section">
        <div className="section-label">03 / The second signal came from India</div>

        <div className="two-column">
          <h2>
            Sales teams were already
            <em> doing the same work.</em>
          </h2>
          <p>
            Around the same time, we started speaking with sales teams in
            India. Many companies did not have a separate presales function.
            Salespeople were doing much of that work themselves, and the
            problems overlapped.
          </p>
        </div>

        <Chain
          label="The sales workflow"
          steps={[
            'Prepare for a call',
            'Understand customer context',
            'Run the call',
            'Follow up',
            'Manage stakeholders',
            'Move the deal forward'
          ]}
        />

        <div className="card-grid" style={{ '--cols': 2 }}>
          <div className="card-grid__item">
            <span className="card-grid__index">Signal 1</span>
            <h3>Users weren’t buyers</h3>
            <p>Presales users valued the product, but were not the budget owners.</p>
          </div>
          <div className="card-grid__item">
            <span className="card-grid__index">Signal 2</span>
            <h3>Sales was closer to revenue</h3>
            <p>Sales teams already performed many of the same workflows, much closer to the commercial outcome.</p>
          </div>
        </div>

        <p className="callout-question">
          What if the product was not really about helping presales work faster?
        </p>
      </section>

      {/* 04 PIVOT */}
      <section className="case-section case-section--alt pivot-section">
        <div className="section-label">04 / The pivot</div>

        <div className="pivot-heading">
          <div>
            <span>From</span>
            <h2>Presales assistance</h2>
          </div>
          <div className="pivot-arrow" aria-hidden="true">→</div>
          <div>
            <span>To</span>
            <h2>Revenue intelligence</h2>
          </div>
        </div>

        <div className="pivot-table" role="table" aria-label="What changed in the pivot">
          {[
            ['Persona', 'Presales', 'Sales and sales leadership'],
            ['Problem', 'Help me perform my GTM work', 'Help me understand and move the deal forward'],
            ['Value', 'Information and task assistance', 'Intelligence, risk detection and intervention']
          ].map(([dimension, before, after]) => (
            <div className="pivot-table__row" role="row" key={dimension}>
              <span role="rowheader">{dimension}</span>
              <span role="cell">{before}</span>
              <span role="cell" aria-hidden="true" className="pivot-table__arrow">→</span>
              <strong role="cell">{after}</strong>
            </div>
          ))}
        </div>

        <div className="two-column" style={{ marginTop: '3.5rem' }}>
          <p>
            The pivot was ultimately a unanimous founder decision. The original
            product direction came from the CEO. As the product evolved, I
            played a major role in shaping the product strategy, discovery and
            experience around the new direction.
          </p>
          <p className="pivot-copy" style={{ marginTop: 0 }}>
            The lesson was not simply that presales was the wrong persona. User
            pain, buyer value and budget ownership are three different things.
          </p>
        </div>
      </section>

      {/* 05 REFRAMING */}
      <section className="case-section dark-section">
        <div className="section-label">05 / Reframing the problem</div>

        <div className="two-column">
          <div>
            <h2>
              The data existed.
              <em> The answers didn’t.</em>
            </h2>
            <p>Sales teams already had systems for storing activity:</p>
            <ul className="check-list">
              <li>CRM showed deal status</li>
              <li>Call intelligence captured conversations</li>
              <li>Spreadsheets and reviews captured additional context</li>
            </ul>
            <p style={{ marginTop: '1.5rem' }}>But the information was still fragmented.</p>
          </div>
          <QuestionList
            title="The harder questions"
            items={[
              'What changed?',
              'Is this deal gaining or losing momentum? If so, why?',
              'What puts the deal at risk?',
              'Who is influencing the outcome?',
              'What should I do next?'
            ]}
          />
        </div>

        <Chain label="The shift in product thinking" steps={['Information retrieval', 'Decision intelligence']} />
      </section>

      {/* 06 DESIGNING */}
      <section className="case-section">
        <div className="section-label">06 / Designing the new product</div>

        <div className="two-column">
          <h2>
            The product grew around
            <em> the actual sales workflow.</em>
          </h2>
          <div>
            <p>
              I worked with the founding team to identify the highest-value
              problems and decide what to build first. We did not try to build
              everything at once, and repeatedly deprioritized functionality
              that was interesting but not essential.
            </p>
            <span className="small-label" style={{ marginTop: '1.5rem' }}>What drove the roadmap</span>
          </div>
        </div>

        <Chain
          label="Roadmap inputs"
          steps={['Customer conversations', 'Recurring needs', 'Jobs-to-be-Done', 'Business value', 'Prioritization']}
        />
      </section>

      {/* PRODUCT DIVIDER */}
      <section className="product-divider">
        <span>The product</span>
        <h2>
          Eight problems, <em>one system for understanding a deal.</em>
        </h2>
        <ol>
          <li>Prepare before the call</li>
          <li>Follow up after the call</li>
          <li>Understand the deal</li>
          <li>See the deal unfold over time</li>
          <li>Understand the buying committee</li>
          <li>Turn product gaps into evidence</li>
          <li>Bring knowledge together</li>
          <li>Move from automation to agents</li>
        </ol>
      </section>

      {/* P01 BRIEFING ROOM */}
      <section className="case-section">
        <div className="section-label">Product 01 / Prepare before the call</div>

        <div className="two-column">
          <div>
            <h2>
              Preparing for a call became
              <em> part of the product.</em>
            </h2>
            <p>
              Salespeople often had to reconstruct previous conversations from
              memory before every meeting.
            </p>
            <QuestionList
              items={[
                'What happened last time?',
                'What was promised?',
                'Who was involved?',
                'What is the objective of today’s call?'
              ]}
            />
          </div>
          <div>
            <span className="small-label">The solution: Briefing Room</span>
            <p>
              Briefing Room brought together previous context, upcoming meeting
              information and stakeholder details to help prepare for the
              conversation.
            </p>
            <Chips
              label="What Briefing Room provides"
              items={[
                'Meeting recap',
                'Customer pain points',
                'Stakeholders attending',
                'Objections and rebuttals',
                'Narrative guidance',
                'Suggested call flow',
                'Recommended questions'
              ]}
            />
          </div>
        </div>

        <ScreenTabs
          label="Briefing Room views"
          tabs={[
            {
              title: 'Insights',
              hint: 'Pain points, attendees, objections',
              src: img('briefing-room.webp'),
              alt: 'Briefing Room insights tab listing customer pain points, meeting attendees and objections',
              label: 'Briefing Room · Insights',
              width: 1440,
              height: 1052
            },
            {
              title: 'Narrative',
              hint: 'Why change, why now, why us',
              src: img('briefing-narrative.webp'),
              alt: 'Briefing Room narrative coach with suggested call flow, micro-stories and recommended questions',
              label: 'Briefing Room · Narrative',
              width: 1440,
              height: 1630,
              tall: true
            }
          ]}
        />
      </section>

      {/* P02 FOLLOW UP */}
      <section className="case-section dark-section">
        <div className="section-label">Product 02 / Follow up after the call</div>

        <div className="two-column">
          <h2>
            The meeting shouldn’t end
            <em> when the meeting ends.</em>
          </h2>
          <div>
            <p>
              The next problem appeared immediately after the meeting. Important
              information from the conversation needed to turn into action.
            </p>
            <p>
              The system generated a recap, identified next steps and drafted
              the follow-up, based on the current conversation and previous
              context.
            </p>
          </div>
        </div>

        <Chain label="Follow-up flow" steps={['Meeting recap', 'Action items', 'Follow-up email']} />

        <p className="pull-line">
          This turned the product from a passive repository into an active
          part of the workflow.
        </p>

        <Screen
          src={img('meeting-follow-up.webp')}
          alt="Post-call view with meeting recap, action items table and a drafted follow-up email"
          label="Briefing Room · Follow-up"
          width={1440}
          height={1475}
          tall
          theme="dark"
        />
      </section>

      {/* P03 DEAL OVERVIEW */}
      <section className="case-section">
        <div className="section-label">Product 03 / Understand the deal</div>

        <div className="two-column">
          <div>
            <h2>
              What is actually happening
              <em> in this deal?</em>
            </h2>
            <p>
              The Deal Overview gives the salesperson or sales leader a common
              understanding of the deal, without forcing them to reconstruct it
              manually.
            </p>
          </div>
          <div>
            <span className="small-label">The overview brings together</span>
            <Chips
              label="Deal overview contents"
              items={[
                'Deal context',
                'Current stage',
                'Deal health',
                'Contributing insights',
                'AI-generated summary',
                'Risks',
                'Blockers',
                'Sources',
                'Tasks',
                'Connected channels'
              ]}
            />
          </div>
        </div>

        <Screen
          src={img('deal-overview.webp')}
          alt="CopilotGTM deal overview with context, deal health, AI summary, risks and channels"
          label="CopilotGTM · Deal overview"
          width={1440}
          height={1633}
          tall
        />
      </section>

      {/* P04 TIMELINE */}
      <section className="case-section dark-section">
        <div className="section-label">Product 04 / See the deal unfold over time</div>

        <div className="two-column">
          <h2>
            A snapshot can’t tell you
            <em> where a deal is heading.</em>
          </h2>
          <div>
            <p>
              The team also needed to understand how the story evolved. The
              timeline brings together events from email, Slack, Teams and the
              CRM.
            </p>
            <p>
              This became especially important as our product thesis shifted
              toward deal momentum over time.
            </p>
          </div>
        </div>

        <Chain
          label="What the timeline shows"
          steps={['What happened', 'When it happened', 'Who was involved', 'What changed']}
        />

        <ScreenTabs
          theme="dark"
          label="Timeline views"
          tabs={[
            {
              title: 'Timeline',
              hint: 'Events across every channel',
              src: img('timeline-cards.webp'),
              alt: 'Deal timeline with events from Gmail, Slack, Teams and HubSpot, risk events highlighted in red',
              label: 'Deals · Timeline',
              width: 1440,
              height: 1201,
              tall: true
            },
            {
              title: 'Event detail',
              hint: 'Summary, quotes, next steps',
              src: img('timeline-event.webp'),
              alt: 'Timeline event detail panel with meeting summary, highlighted customer quotes and next steps',
              label: 'Deals · Timeline event',
              width: 1440,
              height: 1201
            }
          ]}
        />
      </section>

      {/* P05 BUYING COMMITTEE */}
      <section className="case-section">
        <div className="section-label">Product 05 / Understand the buying committee</div>

        <div className="two-column">
          <div>
            <h2>
              Deals aren’t won by
              <em> one person.</em>
            </h2>
            <p>
              This was one of the most important product concepts in
              CopilotGTM. A CRM contact list can tell you who is involved. It
              cannot necessarily tell you:
            </p>
            <ul className="check-list">
              <li>Who has influence</li>
              <li>Who supports the deal</li>
              <li>Who can block it</li>
              <li>What each person wants</li>
              <li>Who is missing</li>
              <li>How the stakeholder group is changing</li>
            </ul>
          </div>
          <div>
            <span className="small-label">Buying Committee Intelligence</span>
            <p>
              The system builds a map of the stakeholders in the deal. It
              identifies people through meetings, email threads and calendar
              activity, then enriches their context.
            </p>
            <span className="small-label" style={{ marginTop: '1.5rem' }}>For each stakeholder</span>
            <Chips
              label="Stakeholder attributes"
              items={['Role', 'Motivation', 'Influence', 'Stance', 'Champion potential', 'Relationship to the deal']}
            />
          </div>
        </div>

        <p className="callout-question">
          Not just “who is involved?” but: who matters, what do they want, how
          much influence do they have, and what should we do about it?
        </p>

        <div className="inset-layout">
          <Screen
            src={img('committee-ai-insights.webp')}
            alt="AI insights panel: a blocking stakeholder, an emerging champion, and a missing approver"
            label="AI insights"
            width={380}
            height={461}
            caption="Insights turn the map into action: who is blocking, who is becoming a champion, and which approver is missing."
          />
          <div className="inset-layout__side">
            <div>
              <span className="small-label">Two ideas that shaped the map</span>
              <Chain label="Stance" steps={['Detractor', 'Neutral', 'Supporter']} />
              <Chain label="Champions" steps={['Identify', 'Develop', 'Strengthen champions']} />
            </div>
            <Screen
              src={img('committee-coverage.webp')}
              alt="Committee coverage at 70 percent with missing roles CFO, Procurement and Finance"
              label="Coverage"
              width={1316}
              height={86}
              caption="Coverage makes the gaps visible: who is mapped, and which roles are still missing."
            />
            <p className="pull-line" style={{ marginTop: 0 }}>
              The value was not the org chart itself. It was connecting people
              to deal progression.
            </p>
          </div>
        </div>
      </section>

      {/* P06 PRODUCT GAPS */}
      <section className="case-section dark-section">
        <div className="section-label">Product 06 / Turn product gaps into business evidence</div>

        <div className="two-column">
          <div>
            <h2>
              “The customer wants
              <em> SAP integration.”</em>
            </h2>
            <p>
              Salespeople regularly heard requests for missing capabilities. The
              problem was getting Product to prioritize them. A request alone
              was not enough.
            </p>
          </div>
          <QuestionList
            title="What Product needed to know"
            items={[
              'How many customers are asking for it?',
              'Which deals are affected?',
              'What revenue is at stake?',
              'How strong is the evidence?'
            ]}
          />
        </div>

        <Chain
          label="Product Insights"
          steps={['Customer conversation', 'Product gap', 'Revenue impact', 'Product prioritization']}
        />

        <div className="two-column" style={{ marginTop: '1rem' }}>
          <p>
            Product Insights aggregated product gaps from sales conversations
            and connected them to potential revenue impact.
          </p>
          <div className="decision-card">
            <span>Decision</span>
            <strong>Deprioritized as the roadmap evolved</strong>
            <p>That was an important product decision too. Not every useful capability deserved to stay in the MVP.</p>
          </div>
        </div>

        <Screen
          src={img('product-gaps.webp')}
          alt="Product gaps view linking a feature request to ARR impact, transcript snippets and linked deals"
          label="Product Insights · explored, then deprioritized"
          width={1440}
          height={980}
          tall
          theme="dark"
        />
      </section>

      {/* P07 KNOWLEDGE */}
      <section className="case-section">
        <div className="section-label">Product 07 / Bring fragmented knowledge together</div>

        <div className="two-column">
          <div>
            <h2>
              The intelligence is only useful
              <em> if it has context.</em>
            </h2>
            <p>
              Customers had RFPs, proposals, product documents, sales
              methodology, internal knowledge, websites and documentation, all
              in different places.
            </p>
            <p>
              The Knowledge Base brought these sources together, and the system
              used that context to answer questions and support sales
              workflows.
            </p>
          </div>
          <div>
            <span className="small-label">Integrations we explored</span>
            <Chips
              label="Integrations"
              items={['Google Drive', 'OneDrive', 'Calendars', 'Email', 'Teams', 'Slack', 'Salesforce', 'HubSpot', 'Gong', 'Sybill']}
            />
            <p style={{ marginTop: '1.5rem' }}>
              We increasingly designed the product as a layer connecting
              information from the tools sales teams already used.
            </p>
          </div>
        </div>

        <Screen
          src={img('knowledge-base.webp')}
          alt="Knowledge Base repository with filters and a grid of documents"
          label="Knowledge Hub · Knowledge Base"
          width={1440}
          height={900}
        />
      </section>

      {/* P08 AGENTS */}
      <section className="case-section dark-section">
        <div className="section-label">Product 08 / Move from automation to agents</div>
        <h2>
          AI shouldn’t just answer.
          <br />
          <em>It should help move the deal.</em>
        </h2>

        <div className="two-column agent-example">
          <div>
            <span className="small-label">Traditional automation</span>
            <p className="mono">When X happens, do Y.</p>
            <p style={{ marginTop: '1.5rem' }}>
              We wanted the system to interpret context first. Trigger: a member
              of the buying committee has not responded for several days.
            </p>
          </div>
          <QuestionList
            title="Before acting, an agent asks"
            items={[
              'Is this a normal delay?',
              'Is engagement declining?',
              'Is there a known blocker?',
              'Is a different action more appropriate?'
            ]}
          />
        </div>

        <p className="pull-line">
          The system could then recommend or initiate an action, such as
          drafting an email or scheduling a meeting. AI not just as a text
          generator, but as a way to understand context and act on it.
        </p>
      </section>

      {/* ARCHITECTURE */}
      <section className="case-section">
        <div className="section-label">07 / The architecture evolved with the problem</div>

        <div className="two-column">
          <h2>
            The navigation is
            <em> the mental model.</em>
          </h2>
          <p>
            As the product expanded, the information architecture started to
            reflect the underlying sales problem. It was not just a collection
            of features.
          </p>
        </div>

        <div className="ia-columns">
          {[
            { title: 'Context', hint: 'Understand the deal', items: ['Overview', 'Timeline', 'CRM information'] },
            { title: 'People', hint: 'Understand the people', items: ['Stakeholders', 'Buying Committee'] },
            { title: 'Execution', hint: 'Understand what is happening', items: ['Briefing Room', 'Validation Plan', 'Deal Assets'] },
            { title: 'Intelligence', hint: 'Decide what to do next', items: ['Risks', 'Product Gaps', 'AI Insights'] }
          ].map((col) => (
            <div key={col.title}>
              <strong>{col.title}</strong>
              <em>{col.hint}</em>
              <ul>
                {col.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="product-model product-model--light" aria-hidden="true">
          {[
            { icon: <FiLayers />, t: 'Understand the deal' },
            { icon: <FiUsers />, t: 'Understand the people' },
            { icon: <FiActivity />, t: 'Understand what is happening' },
            { icon: <FiArrowUpRight />, t: 'Decide what to do next' }
          ].map((s) => (
            <span key={s.t}>{s.icon}{s.t}</span>
          ))}
        </div>
      </section>

      {/* HOW I DECIDED */}
      <section className="case-section dark-section">
        <div className="section-label">08 / How I made product decisions</div>
        <h2>
          There was no separate PM.
          <em> So I moved between both roles.</em>
        </h2>

        <div className="ownership">
          <div>
            <span className="small-label">I worked across</span>
            <Chips
              label="Areas owned"
              items={[
                'Customer discovery',
                'JTBD',
                'Product strategy',
                'Roadmap',
                'Feature prioritization',
                'PRDs',
                'Sprint planning',
                'Success metrics',
                'Pricing',
                'UX',
                'Information architecture'
              ]}
            />
            <p className="pull-line" style={{ marginTop: '2.5rem' }}>
              “A startup roadmap is also a list of things you consciously say
              no to.”
            </p>
          </div>
          <div>
            <span className="small-label">My approach</span>
            <ol className="approach-list">
              <li>Start with the customer’s actual workflow.</li>
              <li>Understand what they do today.</li>
              <li>Identify the underlying Job-to-be-Done. Don’t simply reproduce the feature request.</li>
              <li>Test the business value.</li>
              <li className="sub">Who benefits? Who owns the outcome? Who owns the budget?</li>
              <li>Decide what not to build.</li>
              <li>Build, learn and change the roadmap.</li>
            </ol>
          </div>
        </div>

        <div style={{ marginTop: '3.5rem' }}>
          <span className="small-label">Our biggest roadmap change was also our biggest product decision</span>
          <Chain label="Biggest decision" steps={['Presales', 'Revenue intelligence']} />
        </div>
      </section>

      {/* COMMERCIAL LESSON */}
      <section className="case-section">
        <div className="section-label">09 / The commercial lesson</div>

        <div className="two-column">
          <h2>
            The biggest lesson
            <em> wasn’t about AI.</em>
          </h2>
          <div>
            <p>It was about validation. Our first product had:</p>
            <ul className="check-list">
              <li>Real users</li>
              <li>Design partners</li>
              <li>Positive feedback</li>
              <li>A product people liked</li>
            </ul>
            <p style={{ marginTop: '1.25rem' }}>And yet that was not enough.</p>
          </div>
        </div>

        <QuoteCompare
          left={{ label: 'We had validated', quote: '“This helps me.”' }}
          right={{ label: 'We had not validated', quote: '“My company will spend money on this.”' }}
        />

        <p style={{ marginTop: '3rem' }}>
          Today, I would validate four things before investing heavily in a
          product:
        </p>
        <div className="four-checks">
          {['User', 'Problem', 'Buyer', 'Budget'].map((x, i) => (
            <div key={x}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <strong>{x}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOME */}
      <section className="case-section dark-section outcome-section">
        <div className="section-label">10 / Outcome</div>
        <h2>
          No 10x story.
          <em> Real validation, twice.</em>
        </h2>

        <p className="honest-line">
          We did not end with a clean “we launched and grew 10x” story, and I
          would not try to manufacture one.
        </p>

        <div className="outcome-grid outcome-grid--dark">
          <div>
            <strong>5</strong>
            <span>U.S. presales design partners used the first product for several weeks and responded positively</span>
          </div>
          <div>
            <strong>3–4</strong>
            <span>pilot customers onboarded after the pivot, including a couple of paid pilots</span>
          </div>
          <div>
            <strong>1</strong>
            <span>broader platform: deal context, preparation, follow-up, stakeholders, risks, knowledge and AI workflows</span>
          </div>
        </div>

        <p style={{ marginTop: '3rem' }}>
          The most important outcome was not a vanity metric. Customer
          discovery materially changed the product, persona, positioning,
          pricing and roadmap.
        </p>
      </section>

      {/* WHAT CHANGED */}
      <section className="case-section">
        <div className="section-label">11 / What changed in my product thinking</div>

        <div className="two-column">
          <h2>
            Validation is
            <em> a chain.</em>
          </h2>
          <div>
            <p>
              Before CopilotGTM, I thought of product discovery largely as
              understanding the user’s problem well enough to build the right
              solution.
            </p>
            <p>
              After it, I think of validation as a chain. A product can succeed
              at one step and fail at the next.
            </p>
          </div>
        </div>

        <Chain label="Validation chain" steps={['User pain', 'Business outcome', 'Buyer', 'Budget', 'Product']} />

        <div className="two-column" style={{ marginTop: '5rem' }}>
          <div>
            <span className="small-label">What I would do differently</span>
            <p>
              Validate the economic buyer much earlier. We spent meaningful
              effort making the first product useful for presales users before
              fully validating whether those users could unlock budget.
            </p>
          </div>
          <QuestionList
            title="Questions I would ask much earlier"
            items={[
              'Who experiences the problem?',
              'Who owns the outcome?',
              'Who controls the budget?',
              'What event causes them to spend money?'
            ]}
          />
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="case-section final-section dark-section">
        <div className="section-label">12 / The takeaway</div>
        <h2>
          The most important design decision
          <br />
          can happen <em>before the interface exists.</em>
        </h2>
        <p>
          CopilotGTM taught me that product design is not just about making a
          workflow easier. It is deciding which problem is actually worth
          solving, for whom, and why they will pay for it.
        </p>
        <p>
          That is what turned CopilotGTM from a presales assistant into a
          revenue intelligence product.
        </p>
      </section>

      <CaseFooter slug="copilotgtm" />
    </main>
  );
};

export default CopilotGTM;
