import strapseekerImg from "../assets/projects/strapseeker.jpg";
import craniomaxImg from "../assets/projects/craniomax.jpg";
import scholarspaceImg from "../assets/projects/scholarspace.jpg";
import { projects } from "../data";
import Reveal from "./Reveal";

const images: Record<string, string> = {
  strapseeker: strapseekerImg,
  craniomax: craniomaxImg,
  scholarspace: scholarspaceImg,
};

export default function Projects() {
  return (
    <section id="work" className="dot-grid relative py-20 md:py-28">
      <div className="framed max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-maroon mb-3">
            Curated Projects
          </p>
          <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl md:text-5xl text-maroon-deep">
            Selected Work
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 border-t border-l border-maroon-deep/15">
          {projects.map((p, idx) => {
            const Card = (
              <div className="group h-full border-r border-b border-maroon-deep/15 p-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-blue-light/40 reveal-img">
                  {p.image ? (
                    <img
                      src={images[p.image]}
                      alt={p.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-display font-bold text-6xl text-maroon-deep/20">
                        {p.fallbackLabel}
                      </span>
                    </div>
                  )}
                  <span className="absolute top-3 right-3 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-maroon-deep text-cream">
                    {p.year}
                  </span>
                </div>

                <div className="px-3 pt-5 pb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold uppercase tracking-wide text-maroon"
                      >
                        {t}{p.tags.indexOf(t) < p.tags.length - 1 ? " ·" : ""}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-maroon-deep mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-maroon-deep/70 leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-maroon group-hover:gap-2.5 transition-all">
                    {p.linkLabel}
                    {p.link && <span aria-hidden>→</span>}
                  </span>
                </div>
              </div>
            );

            return (
              <Reveal key={p.title} delay={(idx % 2) * 120}>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
