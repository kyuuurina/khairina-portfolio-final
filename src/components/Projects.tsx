import { projects } from "../data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="projects-editorial">
      <div className="projects-editorial__inner">
        <Reveal className="projects-editorial__heading">
          <p className="projects-editorial__eyebrow">A selection of things I've made</p>
          <h2>Selected <span>Work.</span></h2>
          <p className="projects-editorial__note">Built with curiosity. Made for people.</p>
        </Reveal>
        <div className="projects-editorial__collection">
          {projects.map((project, index) => (
            <div key={project.title} className={`project-feature project-feature--${index % 2 ? "right" : "left"}`}>
              <article>
                <Reveal className="project-feature__meta">
                  <span>{String(index + 1).padStart(2, "0")} / {project.tags.join(" · ")}</span>
                  <span>{project.year}</span>
                </Reveal>
                <Reveal className="project-image-entrance">
                <a className="project-feature__image" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>
                  {project.image ? <img src={project.image} alt={`${project.title} website`} loading="lazy" /> : <span>{project.fallbackLabel}</span>}
                </a>
                </Reveal>
                <div className="project-feature__caption">
                  <Reveal><h3>{project.title}</h3></Reveal>
                  <Reveal delay={120}>
                    <p>{project.description}</p>
                    {project.link && <a className="project-feature__link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <span aria-hidden="true">↗</span></a>}
                  </Reveal>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
