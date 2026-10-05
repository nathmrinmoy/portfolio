import { FiAlertTriangle, FiClock, FiActivity, FiBellOff } from 'react-icons/fi';
import {
  CaseBack,
  CaseFooter,
  CardGrid,
  Chips,
  Flow,
  MetricShift,
  QuoteCompare,
  Reveal,
  Screen,
  ScreenTabs,
  StatGrid,
  useDocumentMeta
} from '../../components/case/CaseKit';
import '../../styles/CaseStudy.scss';

const img = (name) => `/projects/etl/${name}`;

const levels = [
  { level: 'Fleet', screen: 'Pipeline listing', question: 'Is anything wrong right now?' },
  { level: 'Pipeline', screen: 'Pipeline overview', question: 'How is this pipeline behaving?' },
  { level: 'Run', screen: 'Run history', question: 'When did it start going wrong?' },
  { level: 'Error', screen: 'Error insights', question: 'What broke, and how do I fix it?' }
];

const PipelineObservability = () => {
  useDocumentMeta(
    'Pipeline Observability case study',
    'Redesigning pipeline observability at Hevo so data engineers find failures before downstream systems break.'
  );

  return (
    <main className="case-study">
      <CaseBack />

      {/* HERO */}
      <section className="case-hero">
        <div className="case-project">Hevo · Pipeline Observability</div>
        <div className="case-eyebrow">Observability · Data platform · B2B SaaS</div>

        <h1>
          Engineers found out about failures
          <br />
          <em>after something downstream broke.</em>
        </h1>

        <p className="case-hero-intro">
          Data engineers use Hevo to build pipelines that pull data from
          sources like Salesforce and LinkedIn Ads into their warehouses. With
          limited observability, they found out about failures late and
          debugged by hand. I designed an observability experience that takes
          them from “something is wrong” to “here is the fix” in a few
          clicks.
        </p>

        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>Senior Product Designer, with a PM and engineers</dd>
          </div>
          <div>
            <dt>Company</dt>
            <dd>Hevo</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>2 months</dd>
          </div>
          <div>
            <dt>Users</dt>
            <dd>Data engineers</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Shipped to all users</dd>
          </div>
        </dl>
      </section>

      <section className="case-hero-visual">
        <Screen
          src={img('pipeline-listing.webp')}
          alt="Pipelines list with a health ring of 31 pipelines, net consumption, performance metrics and per-pipeline status"
          label="Hevo · Pipelines"
          width={2880}
          height={1830}
          theme="dark"
        />
      </section>

      {/* 01 PROBLEM */}
      <section className="case-section">
        <Reveal>
          <div className="section-label">01 / The problem</div>
          <h2>
            Monitoring was reactive,
            <em> and debugging was manual.</em>
          </h2>
        </Reveal>

        <CardGrid
          columns={2}
          items={[
            { icon: <FiClock />, title: 'Delayed failure detection', text: 'Problems only surfaced after downstream systems broke.' },
            { icon: <FiAlertTriangle />, title: 'Manual debugging', text: 'Engineers read through long logs with no structured tools to narrow things down.' },
            { icon: <FiActivity />, title: 'Performance blind spots', text: 'Without real-time insight, it was hard to pinpoint latency or decide what to optimize.' },
            { icon: <FiBellOff />, title: 'No alerts at all', text: 'Hevo had no alerting, so engineers learned about failures only after something downstream broke.' }
          ]}
        />

        <p className="pull-line">
          The result was more downtime, higher operational cost and
          frustrated users. The goal: an observability feature that gives data
          engineers actionable insight, not more logs.
        </p>
      </section>

      {/* 02 RESEARCH */}
      <section className="case-section dark-section">
        <div className="section-label">02 / Research</div>
        <h2>
          Four sources of evidence,
          <em> one consistent story.</em>
        </h2>

        <span className="small-label">Secondary research: industry challenges</span>
        <div className="card-grid" style={{ '--cols': 2 }}>
          <div className="card-grid__item">
            <span className="card-grid__index">Monte Carlo Data</span>
            <h3>Limited visibility into pipeline health</h3>
            <p>Many organizations lack real-time insight into data flows, so failures surface only after they hit downstream reports.</p>
          </div>
          <div className="card-grid__item">
            <span className="card-grid__index">IBM Research</span>
            <h3>Debugging takes a large share of time</h3>
            <p>Without structured monitoring, engineers spend much of their time troubleshooting failures, and manual log analysis doesn’t scale.</p>
          </div>
          <div className="card-grid__item">
            <span className="card-grid__index">Gartner Research</span>
            <h3>Schema drift breaks decisions</h3>
            <p>Unexpected schema changes, like a renamed or missing column, break transformations and lead to inaccurate reports.</p>
          </div>
          <div className="card-grid__item">
            <span className="card-grid__index">Data Engineering Weekly</span>
            <h3>Bottlenecks grow with volume</h3>
            <p>Without throughput and latency monitoring, engineers struggle to optimize execution time as data grows.</p>
          </div>
        </div>

        <div className="research-trio">
          <div>
            <span className="small-label">User interviews</span>
            <p>Semi-structured interviews with 3 data engineers from mid-sized companies.</p>
            <ul className="check-list">
              <li>Frustrated with late failure detection</li>
              <li>Debugging was slow because of manual log analysis</li>
              <li>Strong need for a central, real-time dashboard</li>
            </ul>
          </div>
          <div>
            <span className="small-label">Competitive analysis</span>
            <Chips label="Platforms analyzed" items={['Fivetran', 'Apache Airflow', 'Stitch']} />
            <ul className="check-list">
              <li>Basic logging, with few proactive alerts and little historical trend analysis</li>
              <li>Users relied on third-party tools for observability</li>
            </ul>
          </div>
          <div>
            <span className="small-label">Support ticket analysis</span>
            <p>A year of support tickets and feedback.</p>
            <ul className="check-list">
              <li>40% of complaints were about unexpected pipeline failures</li>
              <li>Users asked for real-time alerts, detailed error reports and performance monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 03 JOURNEY */}
      <section className="case-section case-section--alt">
        <div className="section-label">03 / The user journey</div>
        <h2>
          Where the journey
          <em> broke down.</em>
        </h2>
        <Flow
          steps={[
            { title: 'Setup & monitoring', text: 'Engineers expect real-time status, but only get limited insight, so they keep checking logs.' },
            { title: 'Execution & failure', text: 'Schema mismatches, connectivity and transformation errors surface only as data discrepancies in the warehouse.' },
            { title: 'Identification', text: 'Unclear error messages and unstructured logs. Engineers compare runs by hand, and raise tickets.' },
            { title: 'Resolution', text: 'Fixes by trial and error cause more delays. Bottlenecks stay invisible. The need for an error insights screen becomes clear.' }
          ]}
        />

        <span className="small-label" style={{ marginTop: '4rem' }}>User stories</span>
        <QuoteCompare
          left={{
            label: 'Story 1 · Proactive failure detection',
            quote: '“I want real-time alerts when my pipeline hits an issue, so I can fix it before it affects downstream processes.”'
          }}
          right={{
            label: 'Story 2 · Faster debugging',
            quote: '“I want a detailed breakdown of pipeline errors, so I can quickly identify and resolve issues.”'
          }}
        />
        <div className="research-trio research-trio--two">
          <p>
            <strong>Solution for story 1:</strong> real-time alerts and
            notifications, so engineers detect failures instantly and act
            before downstream processes are hit.
          </p>
          <p>
            <strong>Solution for story 2:</strong> an error insights screen
            with categorized error logs, severity levels and suggested fixes.
          </p>
        </div>
        <p style={{ marginTop: '2rem' }}>
          Before designing, we defined how we would judge it: adoption of the
          new dashboard, visits to the pipeline overview, how people
          responded to alerts, and mean time to detect failures before and after launch.
        </p>
      </section>

      {/* 03 APPROACH */}
      <section className="case-section">
        <div className="section-label">04 / The approach</div>

        <div className="two-column">
          <h2>
            A drill-down
            <em> from fleet to failure.</em>
          </h2>
          <p>
            Each screen answers one question and hands off to the next. An
            engineer can start from “is anything wrong?” and land on the
            specific error and its suggested fix without leaving the flow.
            Alerts bring them into that flow the moment something fails.
          </p>
        </div>

        <ol className="drilldown">
          {levels.map((l, i) => (
            <li key={l.level} style={{ '--depth': i }}>
              <span className="drilldown__level">{l.level}</span>
              <strong>{l.question}</strong>
              <em>{l.screen}</em>
            </li>
          ))}
        </ol>
      </section>

      {/* 05 ALERTS */}
      <section className="case-section dark-section">
        <div className="section-label">05 / Alerts</div>

        <div className="two-column">
          <h2>
            Hear about it
            <em> before anyone downstream does.</em>
          </h2>
          <div>
            <p className="problem-solved">
              <strong>Problem solved</strong>
              Hevo had no alerts, so failures surfaced only after something downstream broke. Real-time alerts were one of the top requests in support tickets.
            </p>
            <p>
              Alerts and notifications are separate. Only what needs action
              becomes an alert, sent by email or webhook. Everything else shows
              up as a notification in the dashboard. Users can set thresholds
              per pipeline, such as latency above 30 minutes.
            </p>
            <p>
              Each alert says what happened, the likely cause, the suggested
              fix and the impact, then links to the failing run. To keep alerts
              worth reading, repeated failures are grouped into one, there is a
              cooldown before re-alerting, severity sets the channel, info-level
              events go out as a daily digest, quiet hours hold non-critical
              alerts overnight, and a “resolved” alert tells engineers when to
              stop watching.
            </p>
          </div>
        </div>

        <ScreenTabs
          label="Alerts"
          theme="dark"
          tabs={[
            {
              title: 'Alert email',
              hint: 'Cause, fix and impact in one message',
              src: img('alert-email.webp'),
              alt: 'Alert email for a failed run with errors, likely cause, suggested fix, impact and a link to run details, beside an inbox of warning, resolved and digest alerts',
              label: 'Hevo · Alert email',
              width: 2880,
              height: 1080
            },
            {
              title: 'Alert rules',
              hint: 'Thresholds, channels and noise controls',
              src: img('alert-settings.webp'),
              alt: 'Alert settings with rules by severity and channel, and noise controls for grouping, cooldown, recovery alerts, daily digest and quiet hours',
              label: 'Hevo · Alert rules',
              width: 2880,
              height: 1350
            }
          ]}
        />
      </section>

      {/* 06 LISTING */}
      <section className="case-section">
        <div className="section-label">06 / Fleet view</div>

        <div className="two-column">
          <h2>
            Is anything wrong
            <em> right now?</em>
          </h2>
          <div>
            <p className="problem-solved">
              <strong>Problem solved</strong>
              Engineers had no quick, aggregated view of all their pipelines, so failing or under-performing ones were hard to spot.
            </p>
            <p>
              The listing aggregates health across every pipeline. The health
              ring splits them into healthy, warning, failing and paused. Net
              consumption shows events processed against the plan, and
              performance covers execution time, throughput, lag, downtime and
              error rate.
            </p>
            <p>
              Pipelines are sorted worst first, and each row says why it needs
              attention, such as “Run failed at 18:10, 146 errors”. Every row
              opens that pipeline.
            </p>
          </div>
        </div>

        <Screen
          src={img('pipeline-listing.webp')}
          alt="Pipelines list with a health ring, consumption, performance metrics and pipelines sorted worst first"
          label="Hevo · Pipelines"
          width={2880}
          height={1830}
          theme="dark"
        />
      </section>

      {/* 07 OVERVIEW */}
      <section className="case-section dark-section">
        <div className="section-label">07 / Pipeline view</div>

        <div className="two-column">
          <h2>
            How is this pipeline
            <em> behaving?</em>
          </h2>
          <div>
            <p className="problem-solved">
              <strong>Problem solved</strong>
              Engineers needed detailed insight into individual pipelines, but had to rely on raw logs to understand performance and issues.
            </p>
            <p>
              The header shows the route, status, last run and frequency. When
              the last run failed, a banner states the impact in plain words:
              what broke and which data hasn’t reached the warehouse.
            </p>
            <p>
              Charts show events loaded and latency per run, with the alert
              threshold drawn on the latency chart. Windows of 2, 12 and 24
              hours show whether a spike is new or part of a pattern.
            </p>
          </div>
        </div>

        <Screen
          src={img('pipeline-overview.webp')}
          alt="Pipeline overview with event consumption bar chart, latency line chart and throughput, lag and downtime tiles"
          label="Hevo · Pipeline overview"
          width={2880}
          height={1668}
          theme="dark"
        />
      </section>

      {/* 08 RUN HISTORY */}
      <section className="case-section">
        <div className="section-label">08 / Run history</div>

        <div className="two-column">
          <h2>
            When did it
            <em> start going wrong?</em>
          </h2>
          <div>
            <p className="problem-solved">
              <strong>Problem solved</strong>
              Debugging meant sifting through logs by hand, with no structured timeline of previous runs.
            </p>
            <p>
              Every run is recorded with its start time, status, duration,
              errors, records and throughput. A strip of the last 24 runs shows
              the pattern before you read a single row.
            </p>
            <p>
              Warnings that come before a failure become easy to spot. Here,
              two runs that finished with a few errors came before the run that
              failed.
            </p>
          </div>
        </div>

        <Screen
          src={img('run-history.webp')}
          alt="Run history table with success, warning and failed runs, execution time, errors and throughput"
          label="Hevo · Run history"
          width={2880}
          height={1616}
          theme="dark"
        />
      </section>

      {/* 09 ERROR INSIGHTS */}
      <section className="case-section dark-section">
        <div className="section-label">09 / Error insights</div>

        <div className="two-column">
          <h2>
            What broke,
            <em> and how do I fix it?</em>
          </h2>
          <div>
            <p className="problem-solved">
              <strong>Problem solved</strong>
              Engineers struggled to diagnose failures because errors weren’t categorized and there was no root cause analysis.
            </p>
            <p>
              A failed run opens with a summary: records processed, errors,
              error rate and the impact on throughput. “Where it broke” splits
              errors across source, transformation and destination, and a
              small chart shows whether this is new or recurring.
            </p>
            <p>
              Structured errors replace raw logs: type, stage, affected
              records, severity, message and a suggested fix. A schema mismatch
              names the column that changed. Engineers and the PM supplied the
              fixes, and I wrote the copy so each one reads as a next step.
            </p>
            <ul className="check-list">
              <li>Fix the mapping and retry</li>
              <li>Compare with similar past failures</li>
              <li>Open a support ticket with logs attached</li>
              <li>Download logs for external debugging</li>
            </ul>
          </div>
        </div>

        <Screen
          src={img('error-insights.webp')}
          alt="Run details panel for a failed run with records processed, errors, error rate and an error table with suggested fixes"
          label="Hevo · Run details"
          width={2880}
          height={1440}
          theme="dark"
        />
      </section>

      {/* 10 DECISIONS */}
      <section className="case-section">
        <div className="section-label">10 / Design decisions</div>
        <h2>
          Four calls
          <em> that shaped it.</em>
        </h2>
        <CardGrid
          columns={2}
          numbered
          items={[
            {
              title: 'A drill-down, not one big dashboard',
              text: 'One screen per question: is anything wrong, how is this pipeline behaving, when did it start, what broke. Each level hands off to the next instead of showing everything at once.'
            },
            {
              title: 'The fix next to the error',
              text: 'Every error carries its stage, severity and a suggested fix. Engineers and the PM supplied the fixes; I wrote the copy. Logs can still be downloaded, but they are no longer the first thing an engineer reads.'
            },
            {
              title: 'Alerts separate from notifications',
              text: 'Only failures, threshold breaches and recoveries become alerts, by email or webhook, and each links to the failing run. Everything else stays in the dashboard, so an alert always means act now.'
            },
            {
              title: 'Fewer, better alerts',
              text: 'Grouping, a cooldown, severity levels, a daily digest, quiet hours and recovery alerts keep the volume low enough that people keep reading them.'
            }
          ]}
        />
      </section>

      {/* 11 OUTCOME */}
      <section className="case-section dark-section outcome-section">
        <div className="section-label">11 / Outcome</div>
        <h2>
          From finding out late
          <em> to finding out first.</em>
        </h2>
        <p>Shipped to all Hevo users. As best I recall, these figures came mainly from product analytics and customer interviews.</p>

        <div className="shift-grid shift-grid--two">
          <MetricShift
            title="Mean time to detect"
            before={120}
            after={15}
            format={(v) => (v >= 60 ? `${v / 60} hr` : `${v} min`)}
            direction="down"
          />
          <MetricShift
            title="Mean time to resolve"
            before={240}
            after={120}
            format={(v) => `${v / 60} hr`}
            direction="down"
          />
        </div>

        <StatGrid
          columns={2}
          items={[
            { value: '85%', label: 'Adoption', note: 'of active users in the first month' },
            { value: '65%', label: 'Alert engagement', note: 'opened the alert or adjusted their rules' }
          ]}
        />
      </section>

      {/* 12 NEXT */}
      <section className="case-section">
        <div className="section-label">12 / What’s next</div>
        <h2>
          The next step is
          <em> catching issues before they happen.</em>
        </h2>
        <CardGrid
          columns={2}
          numbered
          items={[
            { title: 'Anomaly detection', text: 'Flag unusual volume or latency before a run fails.' },
            { title: 'Faster debugging', text: 'Better error filtering and drill-down navigation.' },
            { title: 'Data lineage', text: 'Show which reports a failing pipeline feeds.' },
            { title: 'Escalation paths', text: 'Route unresolved alerts to the next person on call.' }
          ]}
        />
      </section>

      {/* 13 TAKEAWAY */}
      <section className="case-section final-section dark-section">
        <div className="section-label">13 / What I learned</div>
        <h2>
          Engineers don’t want more data.
          <em> They want the next step.</em>
        </h2>
        <p>
          The old experience had the information, buried in logs. The work was
          deciding what to say first at each level, and making every screen end
          in an action: open the run, apply the fix, retry.
        </p>
      </section>

      <CaseFooter slug="pipeline-observability" />
    </main>
  );
};

export default PipelineObservability;
