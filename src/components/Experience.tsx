import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="dot-grid relative py-20 md:py-28">
      <div className="framed max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-maroon mb-3">
            Experience
          </p>
          <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl md:text-5xl text-maroon-deep">
            Where I've Shipped Things
          </h2>
        </Reveal>

        <div className="max-w-3xl mx-auto divide-y divide-maroon-deep/15 border-t border-b border-maroon-deep/15">
          {experience.map((e) => (
            <Reveal key={`${e.org}-${e.role}`} className="py-8 grid sm:grid-cols-[1fr_2fr] gap-4 sm:gap-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-maroon-deep/50">
                  {e.period}
                </span>
                <h3 className="font-display font-bold text-lg md:text-xl text-maroon-deep mt-1">
                  {e.role}
                </h3>
                <p className="text-sm text-maroon-deep/60">{e.org}</p>
                <p className="text-xs text-maroon-deep/45">{e.location}</p>
              </div>
              <ul className="space-y-2">
                {e.bullets.map((b, i) => (
                  <li key={i} className="text-sm md:text-base text-maroon-deep/75 leading-relaxed flex gap-2">
                    <span className="text-maroon mt-1.5 shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
