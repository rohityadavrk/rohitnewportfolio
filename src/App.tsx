import ProjectPage from "./pages/ProjectPage";
import { useEffect } from "react";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import About from "./sections/About";

export default function App() {
  const projectRoute = window.location.pathname.match(/^\/projects(?:\/([^/]+))?\/?$/);
  return projectRoute ? <ProjectPage slug={projectRoute[1]} /> : <HomePage />;
}

function HomePage() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio bg-paper flex justify-center w-full min-h-screen overflow-x-clip">
      <div className="bg-paper content-stretch flex flex-col items-start relative w-[1440px] shrink-0">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col h-auto items-center relative shrink-0 w-full">
            <Hero />
            <Work />
            <Experience />
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}
