import { profile, stats } from "../data";
import Reveal from "./Reveal";

export default function QuoteBlock() {
  return (
    <section id="about" className="dot-grid-dark bg-maroon relative py-20 md:py-28">
      <div className="framed max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-display font-bold text-cream leading-tight text-3xl sm:text-4xl md:text-5xl max-w-4xl mx-auto text-center">
            "{profile.bio}"
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, idx) => (
            <Reveal
              key={s.label}
              delay={idx * 100}
              className="rounded-2xl bg-cream/10 border border-cream/20 p-5 text-center"
            >
              <div className="font-display font-bold text-2xl md:text-3xl text-cream">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-cream/70 mt-1 leading-snug">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
