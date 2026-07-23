import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="dot-grid relative pt-10">
      <div className="framed max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="pt-16 pb-10 flex justify-center rise" style={{ animationDelay: "0ms" }}>
          <svg width="130" height="46" viewBox="0 0 130 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 34C20 10 34 4 48 18C60 30 70 6 84 14C96 20.5 104 8 126 12"
              stroke="var(--color-maroon)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative border-t border-b border-maroon-deep/15 py-6 md:py-10 rise" style={{ animationDelay: "120ms" }}>
          <div className="flex items-center justify-between mb-4 md:absolute md:inset-0 md:mb-0 md:pointer-events-none">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-maroon-deep/70">
              {profile.role}
            </span>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-maroon-deep/70 text-right">
              {profile.location}
            </span>
          </div>

          <h1 className="font-display font-bold uppercase text-maroon-deep leading-[0.92] text-center text-[15vw] sm:text-[10vw] md:text-[6.6vw]">
            Khairina
            <br />
            Atiqah
          </h1>
        </div>

        <div className="flex justify-center py-10 md:py-14 rise" style={{ animationDelay: "260ms" }}>
          <a
            href="#work"
            className="px-7 py-4 rounded-full bg-blue-light text-maroon-deep font-semibold hover:bg-blue transition-colors"
          >
            {profile.tagline}!
          </a>
        </div>
      </div>
    </section>
  );
}
