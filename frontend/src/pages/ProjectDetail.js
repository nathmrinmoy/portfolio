import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCheck,
  FiPlus,
  FiUsers,
  FiActivity,
  FiLayers,
  FiMessageSquare
} from 'react-icons/fi';
import '../styles/ProjectDetail.scss';

const imagePath = (name) => `/projects/copilotgtm/${name}`;

const ProjectDetail = () => {
  return (
    <main className="copilot-case-study">

      {/* BACK */}
      <a href="/#projects" className="case-back">
        <FiArrowLeft />
        Back to selected works
      </a>

      {/* HERO */}
      <section className="case-hero">
        <div className="case-eyebrow">
          PRODUCT · DESIGN · STRATEGY · AI
        </div>

        <h1>
          We built the right product
          <br />
          <em>for the wrong buyer.</em>
        </h1>

        <p className="case-hero-intro">
          CopilotGTM started as an AI copilot for presales teams.
          Customer discovery revealed a bigger opportunity:
          helping sales teams understand what was happening inside
          their deals, who mattered, and what to do next.
        </p>

        <div className="case-meta">
          <div>
            <span>Role</span>
            <strong>Product + Design</strong>
          </div>

          <div>
            <span>Product</span>
            <strong>CopilotGTM</strong>
          </div>

          <div>
            <span>Stage</span>
            <strong>0 → 1</strong>
          </div>

          <div>
            <span>Customers</span>
            <strong>3–4 pilots</strong>
          </div>
        </div>
      </section>

      {/* HERO VISUAL */}
      <section className="case-hero-visual">
        <img
          src={imagePath('deals-overview.png')}
          alt="CopilotGTM deal intelligence interface"
        />
      </section>

      {/* CONTEXT */}
      <section className="case-section case-section--narrow">
        <div className="section-label">01 / THE STARTING POINT</div>

        <h2>
          The first hypothesis was about
          <em> who needed an AI copilot.</em>
        </h2>

        <p>
          We initially believed presales teams were the natural users
          and buyers. Their work was full of repetitive information
          retrieval, RFP preparation, proposal work, competitive
          research and meeting preparation.
        </p>

        <p>
          We started testing that hypothesis with US presales leaders
          and design partners.
        </p>

        <div className="insight-card">
          <div className="insight-number">~5</div>
          <div>
            <strong>US presales design partners</strong>
            <p>
              Enough conversations to see a consistent pattern:
              the problem was real, but the buying motion was not as
              straightforward as we expected.
            </p>
          </div>
        </div>
      </section>

      {/* HYPOTHESIS */}
      <section className="case-section hypothesis-section">
        <div className="section-label">02 / THE HYPOTHESIS</div>

        <div className="hypothesis-grid">
          <div>
            <span className="small-label">USER</span>
            <h3>Presales</h3>
            <p>
              People doing the research, preparing responses and
              supporting sales conversations.
            </p>
          </div>

          <div className="hypothesis-arrow">→</div>

          <div>
            <span className="small-label">PROBLEM</span>
            <h3>Information overload</h3>
            <p>
              Relevant customer, product and competitive information
              was scattered across systems.
            </p>
          </div>

          <div className="hypothesis-arrow">→</div>

          <div>
            <span className="small-label">ASSUMPTION</span>
            <h3>Presales buys</h3>
            <p>
              We assumed the team experiencing the pain would also
              own the budget.
            </p>
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section className="case-section dark-section">
        <div className="section-label">03 / CUSTOMER DISCOVERY</div>

        <h2>
          The pain was real.
          <br />
          <em>The buyer was different.</em>
        </h2>

        <div className="discovery-grid">
          <div className="discovery-copy">
            <p>
              Presales teams saw value in the product. Some even told
              us they would pay for it.
            </p>

            <p>
              But as we mapped the workflow around the problem, another
              pattern became obvious. Sales teams were involved in many
              of the same information workflows, while being much closer
              to the commercial outcome.
            </p>

            <p>
              That changed the question we were asking.
            </p>

            <div className="question">
              <span>Instead of asking</span>
              <strong>
                “Who has this problem?”
              </strong>

              <span>we started asking</span>

              <strong>
                “Who owns the outcome this problem affects?”
              </strong>
            </div>
          </div>

          <div className="decision-loop">
            <div className="loop-title">
              Our discovery loop
            </div>

            {[
              'Customer conversation',
              'Current workflow',
              'JTBD',
              'Business value',
              'Who benefits?',
              'Who owns the outcome?',
              'Who owns the budget?',
              'Prioritize'
            ].map((item, index) => (
              <div className="loop-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIVOT */}
      <section className="case-section pivot-section">
        <div className="section-label">04 / THE PIVOT</div>

        <div className="pivot-heading">
          <div>
            <span>FROM</span>
            <h2>Presales Assistance</h2>
          </div>

          <div className="pivot-arrow">→</div>

          <div>
            <span>TO</span>
            <h2>Revenue Intelligence</h2>
          </div>
        </div>

        <div className="pivot-copy">
          <p>
            The product stopped being primarily about finding answers.
            It became about turning scattered information into
            decisions around an active deal.
          </p>
        </div>

        <div className="evolution">
          <div>
            <span>Before</span>
            <strong>Information Retrieval</strong>
          </div>

          <div className="evolution-arrow">→</div>

          <div>
            <span>After</span>
            <strong>Decision Intelligence</strong>
          </div>
        </div>
      </section>

      {/* PRODUCT MODEL */}
      <section className="case-section dark-section">
        <div className="section-label">05 / PRODUCT STRATEGY</div>

        <h2>
          The product became a system for
          <em> understanding a deal.</em>
        </h2>

        <div className="product-model">
          <div className="model-step">
            <div className="model-icon">
              <FiLayers />
            </div>

            <span>01</span>
            <h3>Understand the Deal</h3>
            <p>
              Stage, value, activity, risks, competitive context and
              validation progress.
            </p>
          </div>

          <div className="model-connector">→</div>

          <div className="model-step">
            <div className="model-icon">
              <FiUsers />
            </div>

            <span>02</span>
            <h3>Understand the People</h3>
            <p>
              Stakeholders, influence, sentiment, champions,
              blockers and missing coverage.
            </p>
          </div>

          <div className="model-connector">→</div>

          <div className="model-step">
            <div className="model-icon">
              <FiActivity />
            </div>

            <span>03</span>
            <h3>Understand What Is Happening</h3>
            <p>
              Meetings, engagement, changes in sentiment and deal
              momentum.
            </p>
          </div>

          <div className="model-connector">→</div>

          <div className="model-step">
            <div className="model-icon">
              <FiArrowUpRight />
            </div>

            <span>04</span>
            <h3>Decide What To Do Next</h3>
            <p>
              Recommended actions, briefing, follow-up and deal
              assets.
            </p>
          </div>
        </div>
      </section>

      {/* DEAL INTELLIGENCE */}
      <section className="case-section">
        <div className="section-label">06 / DEAL INTELLIGENCE</div>

        <div className="two-column">
          <div>
            <h2>
              From a pile of CRM data
              <em> to a deal narrative.</em>
            </h2>
          </div>

          <div>
            <p>
              Instead of forcing sellers to reconstruct the state of
              a deal across multiple systems, the product brought the
              important context together.
            </p>

            <p>
              The goal was not another dashboard. It was a faster path
              from “What is happening?” to “What should I do?”
            </p>
          </div>
        </div>

        <div className="screen-frame">
          <img
            src={imagePath('deals-overview.png')}
            alt="Deal overview"
          />
        </div>
      </section>

      {/* BRIEFING ROOM */}
      <section className="case-section dark-section">
        <div className="section-label">07 / BRIEFING ROOM</div>

        <div className="two-column">
          <div>
            <h2>
              Preparing for a call became
              <em> part of the product.</em>
            </h2>
          </div>

          <div>
            <p>
              A seller shouldn't have to reconstruct the customer's
              story immediately before a meeting.
            </p>

            <p>
              Briefing Room combined upcoming meetings, previous
              conversations, narrative guidance, questions and
              supporting context into one place.
            </p>
          </div>
        </div>

        <div className="screen-frame">
          <img
            src={imagePath('briefing-room.png')}
            alt="Briefing Room"
          />
        </div>
      </section>

      {/* MEETING INTELLIGENCE */}
      <section className="case-section">
        <div className="section-label">08 / MEETING INTELLIGENCE</div>

        <h2>
          The meeting shouldn't end
          <em> when the meeting ends.</em>
        </h2>

        <div className="meeting-grid">
          <div className="meeting-card">
            <FiMessageSquare />
            <h3>What changed?</h3>
            <p>
              Capture the important signals from the conversation.
            </p>
          </div>

          <div className="meeting-card">
            <FiCheck />
            <h3>What happens next?</h3>
            <p>
              Turn discussion into clear next steps and ownership.
            </p>
          </div>

          <div className="meeting-card">
            <FiArrowUpRight />
            <h3>How do we follow up?</h3>
            <p>
              Generate a useful follow-up without starting from
              scratch.
            </p>
          </div>
        </div>

        <div className="screen-frame">
          <img
            src={imagePath('meeting-recap.png')}
            alt="Meeting recap and follow-up"
          />
        </div>
      </section>

      {/* BUYING COMMITTEE */}
      <section className="case-section committee-section dark-section">
        <div className="section-label">09 / BUYING COMMITTEE</div>

        <div className="two-column committee-heading">
          <div>
            <h2>
              Deals aren't won by
              <em> one person.</em>
            </h2>
          </div>

          <div>
            <p>
              One of the most important shifts was treating stakeholder
              intelligence as a first-class part of deal intelligence.
            </p>

            <p>
              The product needed to show more than an org chart. It
              needed to help sellers understand influence, sentiment,
              relationships, blockers and gaps in coverage.
            </p>
          </div>
        </div>

        <div className="committee-visual">
          <div className="committee-toolbar">
            <div>
              <strong>Buying Committee</strong>
              <span>8 stakeholders</span>
            </div>

            <button>
              <FiPlus />
              Add Stakeholder
            </button>
          </div>

          <div className="committee-map">

            <div className="committee-line line-one" />
            <div className="committee-line line-two" />
            <div className="committee-line line-three" />

            <div className="stakeholder stakeholder--center">
              <div className="avatar">SC</div>
              <strong>Sarah Chen</strong>
              <span>CTO</span>
              <small>Champion potential · 85%</small>
            </div>

            <div className="stakeholder stakeholder--supporter stakeholder-a">
              <div className="avatar">JD</div>
              <strong>Jane Doe</strong>
              <span>Director of IT</span>
              <small>Supporter · High influence</small>
            </div>

            <div className="stakeholder stakeholder--neutral stakeholder-b">
              <div className="avatar">AP</div>
              <strong>Arun Patel</strong>
              <span>VP Engineering</span>
              <small>Neutral · High influence</small>
            </div>

            <div className="stakeholder stakeholder--blocker stakeholder-c">
              <div className="avatar">LS</div>
              <strong>Lisa Shah</strong>
              <span>Security</span>
              <small>Blocker · Approval required</small>
            </div>

            <div className="stakeholder stakeholder--supporter stakeholder-d">
              <div className="avatar">MJ</div>
              <strong>Marcus Johnson</strong>
              <span>IT Manager</span>
              <small>Emerging champion</small>
            </div>
          </div>

          <div className="committee-insights">
            <div>
              <span>AI insight</span>
              <strong>Decision maker not engaged in 3 weeks</strong>
            </div>

            <div>
              <span>AI insight</span>
              <strong>Security concern remains unaddressed</strong>
            </div>

            <div>
              <span>Recommended action</span>
              <strong>Build secondary champion coverage</strong>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE */}
      <section className="case-section">
        <div className="section-label">10 / KNOWLEDGE AS A LAYER</div>

        <div className="two-column">
          <div>
            <h2>
              The intelligence is only useful
              <em> if it has context.</em>
            </h2>
          </div>

          <div>
            <p>
              Sales information was spread across conversations,
              documents, CRM records, product material and external
              sources.
            </p>

            <p>
              Knowledge Hub became the connective layer that gave
              the intelligence system the context required to answer
              questions and recommend actions.
            </p>
          </div>
        </div>

        <div className="screen-frame">
          <img
            src={imagePath('knowledge-hub.png')}
            alt="Knowledge Hub"
          />
        </div>
      </section>

      {/* AGENTS */}
      <section className="case-section dark-section">
        <div className="section-label">11 / AGENTS</div>

        <h2>
          AI shouldn't just answer.
          <br />
          <em>It should help move the deal.</em>
        </h2>

        <div className="agent-grid">
          <div>
            <span>CONTEXT</span>
            <strong>Understand the deal</strong>
          </div>

          <div>
            <span>REASON</span>
            <strong>Identify risks and opportunities</strong>
          </div>

          <div>
            <span>ACT</span>
            <strong>Recommend or generate the next action</strong>
          </div>
        </div>
      </section>

      {/* DEPRIORITIZATION */}
      <section className="case-section">
        <div className="section-label">12 / WHAT WE DIDN'T BUILD</div>

        <div className="two-column">
          <div>
            <h2>
              A roadmap is also a list of
              <em> things you say no to.</em>
            </h2>
          </div>

          <div>
            <p>
              Product Insights was explored as another potential
              direction. But as the product strategy became clearer,
              we deprioritized it in favour of capabilities closer to
              active deal progression.
            </p>

            <div className="decision-card">
              <span>DECISION</span>
              <strong>Deprioritize Product Insights</strong>
              <p>
                Focus product investment on deal, stakeholder,
                meeting and action intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="case-section outcome-section dark-section">
        <div className="section-label">13 / OUTCOME</div>

        <h2>
          The product became closer to the
          <em> commercial outcome.</em>
        </h2>

        <div className="outcome-grid">
          <div>
            <strong>3–4</strong>
            <span>pilot customers</span>
          </div>

          <div>
            <strong>2+</strong>
            <span>paid pilots</span>
          </div>

          <div>
            <strong>1</strong>
            <span>major product repositioning</span>
          </div>
        </div>

        <p className="outcome-note">
          These numbers describe the stage of validation, not a claim
          of business impact. The bigger outcome was finding a product
          direction aligned more closely with the buyer and the
          commercial problem.
        </p>
      </section>

      {/* LEARNING */}
      <section className="case-section final-section">
        <div className="section-label">14 / WHAT I LEARNED</div>

        <h2>
          The most important design decision
          <br />
          can happen <em>before the interface exists.</em>
        </h2>

        <div className="final-principle">
          <div>
            <span>USER</span>
            <strong>Who experiences the pain?</strong>
          </div>

          <div>→</div>

          <div>
            <span>PROBLEM</span>
            <strong>What are they actually trying to accomplish?</strong>
          </div>

          <div>→</div>

          <div>
            <span>BUYER</span>
            <strong>Who owns the outcome?</strong>
          </div>

          <div>→</div>

          <div>
            <span>BUDGET</span>
            <strong>Who can fund the solution?</strong>
          </div>

          <div>→</div>

          <div>
            <span>PRODUCT</span>
            <strong>What should we build?</strong>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="case-footer">
        <a href="/#projects">
          <FiArrowLeft />
          Back to selected works
        </a>
      </section>

    </main>
  );
};

export default ProjectDetail;
