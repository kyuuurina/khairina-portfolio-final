import { awards } from "../data";
import Reveal from "./Reveal";

export default function Awards() {
  return (
    <section id="awards" className="dot-grid relative py-20 md:py-28">
      <div className="framed max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-maroon mb-3">
            Awards & Achievements
          </p>
          <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl md:text-5xl text-maroon-deep">
            Recognition Along the Way
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((a, idx) => (
            <Reveal
              key={a.title}
              delay={(idx % 2) * 120}
              className="rounded-3xl bg-maroon-deep text-cream p-8 flex flex-col gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-light">
                {a.org}
              </span>
              <h3 className="font-display font-bold text-2xl">{a.title}</h3>
              <p className="text-sm md:text-base text-cream/75 leading-relaxed">
                {a.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
