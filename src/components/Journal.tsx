import { articles, slugify } from "../data";
import { navigate } from "../router";
import Reveal from "./Reveal";

export default function Journal() {
  return (
    <section id="journal" className="dot-grid relative py-20 md:py-28">
      <div className="framed max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-maroon mb-3">
            From the Journal
          </p>
          <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl md:text-5xl text-maroon-deep">
            Words & Work Notes
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((a, idx) => {
            const Card = (
              <div className="group h-full flex flex-col">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-blue-light/40 reveal-img">
                  {a.images?.[0] ? (
                    <img
                      src={a.images[0]}
                      alt={a.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-display font-bold text-6xl text-maroon-deep/20">
                        {a.fallbackLabel}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3 text-[11px] font-semibold uppercase tracking-wide text-maroon">
                    <span>{a.category}</span>
                    <span className="text-maroon-deep/30" aria-hidden>
                      ·
                    </span>
                    <span className="text-maroon-deep/50">{a.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-maroon-deep mb-2 leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-sm text-maroon-deep/70 leading-relaxed line-clamp-3">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-maroon group-hover:gap-2.5 transition-all">
                    Read more
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            );

            const href = `/journal/${a.slug ?? slugify(a.title)}`;

            return (
              <Reveal key={a.title} delay={(idx % 3) * 120}>
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(href);
                  }}
                  className="block h-full"
                >
                  {Card}
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
