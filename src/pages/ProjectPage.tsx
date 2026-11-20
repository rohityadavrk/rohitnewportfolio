import { useEffect } from "react";
import { projects } from "../data/portfolio";
import MyEicherCaseStudy from "./MyEicherCaseStudy";
import MyEicherPreviewGate from "./MyEicherPreviewGate";

const page = "min-h-screen bg-paper font-['Helvetica_Neue',sans-serif] text-ink";
const heading = "mb-2 text-xl font-bold tracking-tight text-ink";
const copy = "max-w-[58ch] text-base leading-relaxed text-muted";
const link = "rounded-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4";

export default function ProjectPage({ slug }: { slug?: string }) {
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    document.title = `${project?.title ?? "Project unavailable"} | Rohit Yadav`;
  }, [project]);

  if (!project) {
    return (
      <main className={`${page} px-6 py-20 text-center`}>
        <h1 className="mb-4 text-3xl font-bold">Project unavailable</h1>
        <a href="/#work" className={link}>Back to projects</a>
      </main>
    );
  }

  const study = project.caseStudy;
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main className={page}>
      <article className="mx-auto max-w-4xl px-5 sm:px-10">
        <nav aria-label="Case study navigation" className="py-5 text-sm">
          <a href="/#work" className={link}>← Back to projects</a>
        </nav>

        {project.slug === "my-eicher" ? (
          <MyEicherPreviewGate>
            <MyEicherCaseStudy />
          </MyEicherPreviewGate>
        ) : (
          <>
            <header className="drafting-surface rounded-2xl border border-line px-6 py-7 text-ink sm:px-9 sm:py-9">
              <p className="mb-2 text-sm font-semibold text-accent">
                {study.kind === "redesign" ? "Redesign concept" : "New project"}
              </p>
              <h1 className="text-pretty text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{project.title}</h1>
              <p className="mt-3 max-w-[55ch] text-base leading-relaxed text-muted">{project.overview}</p>
              <dl className="mt-5 grid gap-3 border-t border-line pt-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-subtle">Platform</dt>
                  <dd className="mt-0.5 font-medium">{project.platform}</dd>
                </div>
                <div>
                  <dt className="text-subtle">My role</dt>
                  <dd className="mt-0.5 font-medium">{project.role}</dd>
                </div>
              </dl>
            </header>

            <div className="space-y-6 py-7 sm:space-y-7 sm:py-9">
              {study.kind === "new" ? (
                <>
                  <section>
                    <h2 className={heading}>The problem</h2>
                    <p className={copy}>{study.challenge}</p>
                  </section>
                  <section>
                    <h2 className={heading}>Design decision</h2>
                    <p className={copy}>{study.approach}</p>
                  </section>
                </>
              ) : (
                <section className="grid overflow-hidden rounded-xl border border-line bg-white sm:grid-cols-2">
                  <div className="p-5">
                    <h2 className={heading}>Before · What to review</h2>
                    <p className={copy}>{study.before}</p>
                  </div>
                  <div className="bg-wash p-5">
                    <h2 className={heading}>After · Proposed change</h2>
                    <p className={copy}>{study.after}</p>
                  </div>
                </section>
              )}

              <section className="rounded-xl border border-line bg-white p-5">
                <h2 className={heading}>{study.kind === "redesign" ? "Proposed flow" : "Key user flow"}</h2>
                <ol className="grid list-inside list-decimal gap-2 text-sm font-medium text-muted marker:text-accent sm:grid-cols-3">
                  {project.workflow.map((step) => (
                    <li key={step} className="rounded-lg bg-wash px-3 py-2">{step}</li>
                  ))}
                </ol>
              </section>

              {study.kind === "redesign" && (
                <section>
                  <h2 className={heading}>How to test it</h2>
                  <p className={copy}>{study.validation}</p>
                </section>
              )}
            </div>
          </>
        )}

        <footer className="border-t border-line py-4 text-sm">
          <a href={`/projects/${nextProject.slug}`} className={link}>Next project · {nextProject.title}</a>
        </footer>
      </article>
    </main>
  );
}
