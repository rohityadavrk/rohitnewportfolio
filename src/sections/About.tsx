import { imgImage1525 } from "../data/assets";
import { resumeUrl } from "../data/portfolio";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
const secondaryLink = `${focus} motion-action rounded-full border border-line-strong bg-white/80 px-4 py-2.5 text-sm font-semibold text-ink hover:bg-accent-soft`;

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="w-full shrink-0 border-t border-line bg-wash px-4 py-16 sm:px-8 sm:py-24">
      <div className="drafting-surface mx-auto grid max-w-[min(68rem,calc(100vw-2rem))] items-start gap-8 rounded-[1.75rem] border border-line p-5 shadow-surface sm:p-9 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-10">
        <div className="reveal min-w-0 md:order-2">
          <h2 id="about-heading" className="text-[clamp(2rem,5vw,3.25rem)] leading-tight font-bold tracking-[-0.055em] text-ink">About me</h2>
          <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">
            I’m a UI/UX designer and frontend developer. I enjoy making everyday tasks easier to understand, from finding a vehicle to following a job application.
          </p>
          <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">
            I map user flows, sketch wireframes, and test prototypes in Figma and FigJam. I build responsive interfaces with HTML, CSS, JavaScript, and Bootstrap.
          </p>
          <div className="mt-7 border-t border-line pt-5">
            <h3 className="text-xl font-bold tracking-tight text-ink">Get in touch</h3>
            <a href="mailto:rohityadavrk99@gmail.com" className={`${focus} mt-2 inline-block rounded-sm break-all text-sm font-medium text-accent underline-offset-4 hover:underline`}>
              rohityadavrk99@gmail.com
            </a>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="mailto:rohityadavrk99@gmail.com" className={`${focus} motion-action rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-strong`}>Email me</a>
              <a href="https://www.linkedin.com/in/rohityadav28" className={secondaryLink}>LinkedIn</a>
              <a href={resumeUrl} download className={secondaryLink}>Download CV</a>
            </div>
          </div>
        </div>

        <figure className="reveal about-portrait motion-card mx-auto w-full max-w-[22rem] overflow-hidden rounded-2xl border border-line bg-panel p-2.5 shadow-surface md:order-1">
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-wash">
            <img
              src={imgImage1525}
              alt="Rohit Yadav seated in a café"
              width={768}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover object-[center_30%]"
            />
          </div>
          <figcaption className="px-2 pt-3 pb-2">
            <p className="font-semibold text-ink">Rohit Yadav</p>
            <p className="mt-1 text-sm text-muted">Gurugram, Haryana</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
