import { FiAlertTriangle, FiClock, FiActivity, FiShield } from 'react-icons/fi';
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
            <dd>Senior Product Designer</dd>
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
        </dl>
      </section>

      <section className="case-hero-visual">
        <Screen
          src={img('pipeline-listing.webp')}
          alt="Pipelines list with a health ring of 31 pipelines, net consumption, performance metrics and per-pipeline status"
          label="Hevo · Pipelines"
          width={3191}
          height={1934}
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
            { icon: <FiActivity />, title: 'Performance blind spots', text: 'It was hard to tell where latency came from, or what to optimize.' },
            { icon: <FiShield />, title: 'Data quality risk', text: 'There was no proactive way to monitor pipeline integrity.' }
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
            <h3>40% of time spent troubleshooting</h3>
            <p>Engineers often spend 40% of their time on failures because monitoring isn’t structured. Manual log analysis doesn’t scale.</p>
          </div>
          <div className="card-grid__item">
            <span className="card-grid__index">Gartner Research</span>
            <h3>Schema drift breaks decisions</h3>
            <p>In a survey, 60% of companies said schema drift led to incorrect business decisions.</p>
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
              <li>Basic logging, but no proactive alerts or historical trends</li>
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

      {/* 02b JOURNEY */}
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
          Before designing, we defined how success would be measured: adoption
          of the dashboard, overview page views, alert interaction, and mean
          time to detect failures before and after the update. Mind maps
          linked every user challenge to a feature, so no pain point was left
          without an answer.
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
            Real-time alerts bring them into that flow the moment something
            fails.
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

      {/* 04 LISTING */}
      <section className="case-section dark-section">
        <div className="section-label">05 / Fleet view</div>

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
              The listing page aggregates health across every active pipeline.
              A health donut gives an instant snapshot of running, failed and
              pending pipelines. Net consumption shows events processed,
              converted to a dollar value. Performance metrics cover average
              execution time, peak and average throughput, average lag, total
              downtime and average error rate.
            </p>
            <p>
              Each pipeline card shows its name, source, destination, records
              processed, throughput and a clear status, so a paused or
              disabled pipeline stands out at a glance. Cards are clickable,
              so engineers can drill straight into a problem area.
            </p>
          </div>
        </div>
      </section>

      {/* 05 OVERVIEW */}
      <section className="case-section">
        <div className="section-label">06 / Pipeline view</div>

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
              A metadata strip at the top shows the pipeline name, ID, status,
              last run and run frequency. Charts show event consumption and
              latency over adjustable windows (2, 12 or 24 hours), alongside
              average lag, average and peak throughput, and downtime.
            </p>
            <p>
              The time-period selection makes historical trends visible, so
              long-term inefficiencies and latency spikes show up before they
              become incidents.
            </p>
          </div>
        </div>

        <Screen
          src={img('pipeline-overview.webp')}
          alt="Pipeline overview with event consumption bar chart, latency line chart and throughput, lag and downtime tiles"
          label="Hevo · Pipeline overview"
          width={3149}
          height={1909}
          theme="dark"
        />
      </section>

      {/* 06 RUN HISTORY */}
      <section className="case-section dark-section">
        <div className="section-label">07 / Run history</div>

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
              Every execution is recorded with its date, timestamp, status,
              execution time, errors detected, records processed, and average
              and peak throughput. Engineers can click into a failed run to see
              detailed error logs and performance insights.
            </p>
            <p>
              Patterns, such as warnings that precede a failure, become easy to
              spot, which helps engineers find recurring failure points.
            </p>
          </div>
        </div>

        <Screen
          src={img('run-history.webp')}
          alt="Run history table with success, warning and failed runs, execution time, errors and throughput"
          label="Hevo · Run history"
          width={3159}
          height={1915}
          theme="dark"
        />
      </section>

      {/* 07 ERROR INSIGHTS */}
      <section className="case-section">
        <div className="section-label">08 / Error insights</div>

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
              Opening a failed run starts with a summary: pipeline name and ID,
              run date and timestamp, status, total errors, error rate and the
              impact on throughput. Below it, structured error details replace
              raw logs: the error type, message, affected records, severity, a
              suggested fix and the stack trace. Error breakdowns split failures into source,
              transformation and destination errors, and a trend graph shows
              spikes over time.
            </p>
            <ul className="check-list">
              <li>Retry the run, with modifications</li>
              <li>Open a support ticket with logs and metadata attached</li>
              <li>Compare with similar historical failures</li>
              <li>Download logs for external debugging</li>
            </ul>
          </div>
        </div>

        <Screen
          src={img('error-insights.webp')}
          alt="Run details panel for a failed run with records processed, errors, error rate and an error table with suggested fixes"
          label="Hevo · Run details"
          width={3135}
          height={1900}
          theme="dark"
        />
      </section>

      {/* 08 OUTCOME */}
      <section className="case-section dark-section outcome-section">
        <div className="section-label">09 / Outcome</div>
        <h2>
          From finding out late
          <em> to finding out first.</em>
        </h2>

        <div className="outcome-group">
          <span className="small-label">Efficiency &amp; performance</span>
          <div className="shift-grid shift-grid--two">
            <MetricShift
              title="Mean time to detect"
              before={120}
              after={15}
              format={(v) => (v >= 60 ? `${v / 60} hr` : `${v} min`)}
              direction="down"
            />
            <MetricShift
              title="Mean time to resolve (50% faster)"
              before={240}
              after={120}
              format={(v) => `${v / 60} hr`}
              direction="down"
            />
          </div>
          <StatGrid
            columns={3}
            items={[
              { value: '40%', label: 'Less time debugging', note: 'structured error logs, instantly' }
            ]}
          />
        </div>

        <div className="outcome-group">
          <span className="small-label">Adoption &amp; engagement</span>
          <StatGrid
            columns={3}
            items={[
              { value: '85%', label: 'Feature adoption', note: 'of active users, within the first month' },
              { value: '3.2×', label: 'Pipeline overview visits', note: 'vs. the old log-based method' },
              { value: '65%', label: 'Alert engagement', note: 'clicked notifications or adjusted preferences' }
            ]}
          />
        </div>

        <div className="outcome-group">
          <span className="small-label">Accuracy &amp; reliability</span>
          <StatGrid
            columns={3}
            items={[
              { value: '70%', label: 'Errors resolved self-service', note: 'without escalating to support' },
              { value: '<5%', label: 'False alert rate', note: 'alerts stayed relevant and actionable' },
              { value: '30%', label: 'Less downtime', note: 'from proactive monitoring and faster fixes' }
            ]}
          />
        </div>

        <div className="outcome-group">
          <span className="small-label">User satisfaction</span>
          <div className="shift-grid shift-grid--two">
            <MetricShift
              title="Net Promoter Score"
              before={32}
              after={55}
              max={100}
              direction="up"
            />
            <StatGrid
              columns={1}
              items={[
                { value: '88%', label: 'Task success', note: 'diagnosed and resolved pipeline issues with the new system' }
              ]}
            />
          </div>
        </div>
      </section>

      {/* 09 NEXT */}
      <section className="case-section">
        <div className="section-label">10 / What’s next</div>
        <h2>
          The next step is
          <em> catching issues before they happen.</em>
        </h2>
        <CardGrid
          columns={2}
          numbered
          items={[
            { title: 'AI anomaly detection', text: 'Predict failures before they happen.' },
            { title: 'Faster debugging UI', text: 'Better error filtering and drill-down navigation.' },
            { title: 'Data lineage', text: 'Interactive tracking of how data flows through pipelines.' },
            { title: 'Custom alerting rules', text: 'Let users set their own failure thresholds and escalation paths.' }
          ]}
        />
      </section>

      {/* 10 TAKEAWAY */}
      <section className="case-section final-section dark-section">
        <div className="section-label">11 / The thinking behind it</div>
        <h2>
          Not a monitoring tool.
          <em> A proactive system.</em>
        </h2>
        <p>
          The Observability Dashboard is not just a monitoring tool. It is a
          proactive system that helps data engineers maintain pipeline health,
          optimize performance and keep data reliable at scale.
        </p>
        <CardGrid
          columns={3}
          items={[
            { title: 'Faster issue resolution', text: '40% less debugging time, thanks to better error visibility.' },
            { title: 'Improved data reliability', text: 'Lower failure rates and proactive anomaly detection.' },
            { title: 'Better resource allocation', text: 'Engineers could focus on optimization instead of manual monitoring.' }
          ]}
        />
      </section>

      <CaseFooter slug="pipeline-observability" />
    </main>
  );
};

export default PipelineObservability;
