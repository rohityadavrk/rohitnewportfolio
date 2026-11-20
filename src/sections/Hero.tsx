import type { PointerEvent } from "react";
import Navigation from "../components/Navigation";
import { resumeUrl } from "../data/portfolio";

const skills = ["Prototyping", "User Flows", "User Research", "Wireframing"];

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

function movePortraitLight(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType !== "mouse" || !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

  const frame = event.currentTarget;
  const { left, top, width, height } = frame.getBoundingClientRect();
  frame.style.setProperty("--portrait-light-x", `${((event.clientX - left) / width) * 100}%`);
  frame.style.setProperty("--portrait-light-y", `${((event.clientY - top) / height) * 100}%`);
}

function resetPortraitLight(event: PointerEvent<HTMLDivElement>) {
  event.currentTarget.style.removeProperty("--portrait-light-x");
  event.currentTarget.style.removeProperty("--portrait-light-y");
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="w-full shrink-0">
      <div className="hero-backdrop relative isolate left-1/2 w-screen -translate-x-1/2 pt-4 sm:pt-6">
        <Navigation />
        <div className="relative mx-auto grid w-[min(76rem,calc(100%-2.5rem))] items-center gap-y-10 py-12 sm:w-[min(76rem,calc(100%-5rem))] sm:py-16 min-[850px]:grid-cols-[1.25fr_1fr] min-[850px]:gap-x-12 min-[850px]:py-18">
          <div>
            <p className="hero-enter mb-3 text-sm font-semibold text-accent sm:text-base">
              UI/UX designer &amp; frontend developer
            </p>
            <h1 id="hero-heading" className="hero-enter hero-name w-fit leading-[0.99] font-bold tracking-[-0.075em] text-ink">
              Rohit Yadav
            </h1>
            <div className="hero-enter mt-4">
              <p className="text-[clamp(1.4rem,3vw,2.6rem)] leading-tight font-medium tracking-tight text-ink">
                Complex workflows.{" "}
                <em className="hero-highlight font-['Instrument_Serif:Regular',Georgia,serif] text-[1.2em] font-normal">
                  Clear interfaces.
                </em>
              </p>
              <p className="mt-4 max-w-[45ch] text-base leading-relaxed text-muted sm:text-lg">
                I design and build web and mobile tools for fleet tracking, warehouse operations, and recruitment.
              </p>
            </div>
            <div className="hero-enter mt-7 flex flex-wrap items-center gap-3">
              <a href="#work" className={`${focus} motion-action rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-strong`}>
                View my work
              </a>
              <a href={resumeUrl} download className={`${focus} motion-action rounded-full border border-line-strong bg-white/55 px-5 py-3 text-sm font-semibold text-ink hover:bg-white`}>
                Download Resume
              </a>
            </div>
          </div>
          <div
            onPointerMove={movePortraitLight}
            onPointerLeave={resetPortraitLight}
            className="hero-portrait hero-enter relative isolate mx-auto flex w-full max-w-[21rem] items-end justify-center min-[850px]:max-w-[27rem]"
          >
            <div aria-hidden="true" className="hero-portrait-backdrop absolute inset-x-[10%] top-[12%] bottom-0 -z-10 rounded-t-full rounded-b-2xl border border-line" />
            <img
              src="/assets/rohit-yadav-cutout.png"
              alt="Portrait of Rohit Yadav"
              width={852}
              height={900}
              fetchPriority="high"
              className="hero-portrait-image relative block h-auto w-full"
            />
          </div>
        </div>
      </div>

      <ul aria-label="Design skills" className="relative left-1/2 flex w-screen -translate-x-1/2 flex-wrap justify-center gap-x-6 gap-y-3 border-y border-line bg-wash px-5 py-4 text-muted sm:gap-x-10 sm:py-5">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-sm font-medium before:size-1.5 before:rounded-full before:bg-[#6e89b1] sm:text-base">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
