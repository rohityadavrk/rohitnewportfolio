import {
  challenges,
  dashboardHierarchy,
  designExploration,
  findings,
  futureImprovements,
  mobileDecisions,
  objectives,
  outcomes,
  researchGoals,
  researchMethods,
  typography,
  webDecisions,
} from "../data/myEicher";

const sectionTitle = "text-2xl font-bold tracking-tight text-ink sm:text-3xl";
const subheading = "mt-6 text-lg font-bold text-ink";
const body = "mt-3 max-w-[68ch] text-base leading-relaxed text-muted";
const list = "mt-3 space-y-2 pl-5 text-muted leading-relaxed marker:text-accent";
const sections = [
  ["overview", "Overview"],
  ["research", "Research"],
  ["exploration", "Design exploration"],
  ["solution", "Final solution"],
  ["design-system", "Design system"],
  ["outcomes", "Outcomes"],
];

function BulletList({ items }: { items: string[] }) {
  return <ul className={`${list} list-disc`}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function DetailTable({ label, columns, rows }: { label: string; columns: string[]; rows: string[][] }) {
  return (
    <table aria-label={label} className="mt-4 w-full table-fixed border-collapse bg-white text-left text-sm leading-relaxed text-muted">
      <thead className="bg-wash text-ink">
        <tr>
          {columns.map((column) => (
            <th className="px-2 py-3 align-top break-words sm:px-4" key={column} scope="col">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([title, ...details]) => (
          <tr key={title} className="border-b border-line">
            <th className="px-2 py-3 align-top font-semibold break-words sm:px-4" scope="row">{title}</th>
            {details.map((detail) => <td key={detail} className="px-2 py-3 align-top break-words sm:px-4">{detail}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function StudyImage({ name, width, height, caption, alt, cover = false }: {
  name: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
  cover?: boolean;
}) {
  const src = `${import.meta.env.BASE_URL}assets/my-eicher/${name}.jpg`;

  return (
    <figure className="mt-5">
      <a href={src} aria-label={`View full-size image: ${caption}`} className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        <img className="w-full rounded-xl" src={src} width={width} height={height} alt={alt} loading={cover ? "eager" : "lazy"} />
      </a>
      <figcaption className="mt-2 text-sm leading-relaxed text-subtle">{caption}</figcaption>
    </figure>
  );
}

export default function MyEicherCaseStudy() {
  return (
    <>
      <header className="drafting-surface rounded-2xl border border-line px-6 py-7 text-ink sm:px-9 sm:py-9">
        <p className="mb-2 text-sm font-semibold text-accent">UI/UX redesign case study</p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">My Eicher</h1>
        <p className="mt-3 max-w-[55ch] text-lg leading-relaxed text-muted">
          Modernising an established fleet-management experience across web and mobile.
        </p>
        <dl className="mt-5 grid gap-x-8 gap-y-3 border-t border-line pt-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-subtle">Platform</dt>
            <dd className="mt-0.5 font-medium">Web portal and mobile app</dd>
          </div>
          <div>
            <dt className="text-subtle">My role</dt>
            <dd className="mt-0.5 font-medium">UI/UX and product redesign</dd>
          </div>
        </dl>
      </header>

      <StudyImage name="redesigned-dashboard" width={1275} height={895} cover
        alt="Redesigned My Eicher fleet overview on a phone and the fleet dashboard on a laptop"
        caption="After · Redesigned fleet overview on mobile and dashboard on web." />

      <nav aria-label="On this page" className="mt-6 border-y border-line py-4">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-accent">
          {sections.map(([id, title]) => (
            <li key={id}><a className="underline-offset-4 hover:underline" href={`#${id}`}>{title}</a></li>
          ))}
        </ul>
      </nav>

      <div className="space-y-10 py-9 sm:space-y-14 sm:py-12">
        <section id="overview">
          <h2 className={sectionTitle}>Project overview</h2>
          <p className={body}>
            My Eicher helps commercial fleet teams monitor vehicles, operations, and connected services. It brings
            together fleet tracking, vehicle health, fuel and energy, uptime, alerts, reports, service management,
            and connected-vehicle tools.
          </p>
          <p className={body}>
            I redesigned selected screens in the existing web portal and mobile app. The scope covered visual
            hierarchy, navigation, and consistency across platforms, with the established fleet workflows as
            the starting point.
          </p>
          <h3 className={subheading}>Objectives</h3>
          <BulletList items={objectives} />

          <h3 className={subheading}>The problem</h3>
          <p className={body}>
            Operational metrics, service areas, and actions shared similar visual weight. In daily work, fleet
            users move between tracking, vehicle status, fuel, uptime, reports, and services. Finding exceptions
            or choosing the next action required extra scanning and navigation.
          </p>

          <StudyImage name="legacy-dashboard" width={1275} height={530}
            alt="Original My Eicher app and portal with many metrics and shortcuts visible at once"
            caption="Before · The original mobile home screen and web dashboard." />
        </section>

        <section id="research">
          <h2 className={sectionTitle}>Research and audit</h2>
          <h3 className={subheading}>Process</h3>
          <ol className="mt-3 flex flex-wrap gap-2 text-sm font-medium text-ink">
            {["Empathise", "Define", "Ideate", "Prototype", "Test"].map((step, index) => (
              <li key={step} className="rounded-lg bg-wash px-3 py-2">{index + 1}. {step}</li>
            ))}
          </ol>
          <h3 className={subheading}>Research goals</h3>
          <BulletList items={researchGoals} />
          <h3 className={subheading}>Methods and outputs</h3>
          <DetailTable label="Research methods and outputs" columns={["Method", "Purpose", "Output"]} rows={researchMethods} />
          <h3 className={subheading}>Pain points</h3>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {findings.map(([title, detail]) => (
              <div key={title} className="rounded-xl border border-line bg-white p-5">
                <dt className="font-bold text-ink">{title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="exploration">
          <h2 className={sectionTitle}>Design exploration</h2>
          <p className={body}>I explored ways to clarify the existing fleet experience across both platforms.</p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {designExploration.map(([title, detail]) => (
              <div key={title} className="rounded-xl bg-wash p-4">
                <dt className="font-bold text-ink">{title}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{detail}</dd>
              </div>
            ))}
          </dl>
          <StudyImage name="dashboard-wireframe" width={1150} height={583}
            alt="Early dashboard wireframe with zones for live tracking, uptime, fuel, and utilisation"
            caption="Early web dashboard layout · Live tracking, uptime, fuel, and utilisation." />
        </section>

        <section id="solution">
          <h2 className={sectionTitle}>Final solution</h2>
          <p className={body}>
            The redesign uses modular layouts to make fleet information easier to scan and to group familiar tools by task.
          </p>
          <h3 className={subheading}>Web portal</h3>
          <BulletList items={webDecisions} />
          <h3 className={subheading}>Dashboard information hierarchy</h3>
          <ol className={`${list} list-decimal`}>
            {dashboardHierarchy.map((item) => <li key={item}>{item}</li>)}
          </ol>
          <StudyImage name="web-flows" width={1160} height={1000}
            alt="Redesigned web portal screens showing grouped services, live vehicle tracking, and shortcut editing"
            caption="Web designs · Service catalogue, live tracking, and quick-access settings." />

          <h3 className={subheading}>Mobile app</h3>
          <BulletList items={mobileDecisions} />
          <StudyImage name="mobile-flows" width={1160} height={775}
            alt="Three redesigned mobile screens showing grouped services, vehicle tools, and live tracking on a map"
            caption="Mobile designs · Service catalogue, vehicle tools, and live tracking." />
        </section>

        <section id="design-system">
          <h2 className={sectionTitle}>Design system</h2>
          <h3 className={subheading}>Colour palette</h3>
          <StudyImage name="colour-palette" width={1238} height={2205}
            alt="My Eicher colour palette showing neutral, blue, secondary, and brand red scales"
            caption="Colour scales from the My Eicher design system." />
          <h3 className={subheading}>Product typography</h3>
          <DetailTable label="Product typography by platform" columns={["Platform", "Typeface", "Use"]} rows={typography} />
        </section>

        <section id="outcomes" className="border-t border-line pt-7">
          <h2 className={sectionTitle}>Outcomes and next steps</h2>
          <h3 className={subheading}>Design challenges</h3>
          <BulletList items={challenges} />
          <h3 className={subheading}>Design outcomes</h3>
          <BulletList items={outcomes} />
          <h3 className={subheading}>Future improvements</h3>
          <DetailTable label="Future improvements" columns={["Improvement", "Opportunity"]} rows={futureImprovements} />
        </section>
      </div>
    </>
  );
}
