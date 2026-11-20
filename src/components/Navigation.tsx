import { resumeUrl } from "../data/portfolio";

const links = [
  { label: "Work", href: "#work" },
  { label: "About Me", href: "#about" },
  { label: "Resume", href: resumeUrl },
];

export default function Navigation() {
  return (
    <nav aria-label="Main navigation" className="relative z-10 mx-auto flex w-fit max-w-[calc(100%-2rem)] flex-wrap justify-center gap-1 rounded-full border border-line bg-white/75 p-1.5 shadow-[0_6px_24px_rgba(31,40,53,0.08)] backdrop-blur-sm">
      {links.map(({ label, href }) => (
        <a key={label} href={href} className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink hover:bg-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-6">
          {label}
        </a>
      ))}
    </nav>
  );
}
