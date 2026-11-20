import { journey } from "../data/portfolio";
import MagnifyText from "../components/MagnifyText";

export default function Experience() {
  return (
    <div className="experience-section content-stretch flex flex-col items-center min-h-[900px] py-[96px] relative shrink-0 w-full">
      <div className="experience-container content-stretch flex flex-col gap-[80px] items-start max-w-[960px] px-[24px] relative shrink-0 w-[960px]">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="[word-break:break-word] flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-ink text-[clamp(1.75rem,5vw,3rem)] tracking-tight text-center">
            <h2 className="leading-tight"><MagnifyText text="Professional journey" /></h2>
          </div>
        </div>
        <ol className="experience-list reveal w-full px-8">
          {journey.map(([dates, title, organization, description]) => (
            <li key={title} className="relative border-l-2 border-line pb-10 pl-8 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[9px] top-1 size-4 rounded-full border-2 border-white bg-accent" />
              <p className="text-sm text-subtle">{dates}</p>
              <h3 className="my-3 text-xl font-semibold text-ink"><MagnifyText text={title} radius={50} maxScale={1.5} /></h3>
              <p className="font-medium text-muted">{organization}</p>
              {description && <p className="mt-3 max-w-2xl leading-7 text-muted">{description}</p>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
