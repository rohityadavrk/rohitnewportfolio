import type { CSSProperties } from "react";
import MagnifyText from "../components/MagnifyText";
import { imgProjectImgCfJ2I4CoPng } from "../data/assets";
import { projects } from "../data/portfolio";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="w-full shrink-0 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto w-[min(68rem,calc(100vw-2rem))]">
        <h2 id="work-heading" className="mb-10 text-center text-[clamp(1.75rem,5vw,3rem)] font-bold tracking-tight text-ink sm:mb-14">
          <MagnifyText text="Selected projects" />
        </h2>
        <div className="project-stack relative isolate grid gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="project-card min-w-0 rounded-2xl border border-line bg-panel p-3 shadow-surface sm:rounded-3xl sm:p-5"
              style={{ "--stack-offset": `${index * 12}px` } as CSSProperties}
            >
              <header className="grid items-center gap-x-6 gap-y-3 px-1 pb-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:px-2 sm:pb-4">
                <div>
                  <h3 className="text-xl leading-snug font-bold text-ink sm:text-2xl">{project.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-muted">{project.overview}</p>
                </div>
                <a
                  href={`/projects/${project.slug}`}
                  aria-label={`View project: ${project.title}`}
                  className="justify-self-start rounded-full bg-accent-soft px-4 py-2 text-sm font-semibold whitespace-nowrap text-accent hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  View project
                </a>
              </header>

              <img
                src={imgProjectImgCfJ2I4CoPng}
                alt=""
                width={512}
                height={512}
                loading="lazy"
                decoding="async"
                className="project-card-image block w-full rounded-xl object-cover object-[center_65%] grayscale sm:rounded-2xl"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
