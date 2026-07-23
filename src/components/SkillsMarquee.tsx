import { skills } from "../data";

export default function SkillsMarquee() {
  const track = [...skills, ...skills];
  return (
    <section id="skills" className="relative py-12 md:py-16 bg-blue-light overflow-hidden border-y border-maroon-deep/15">
      <div className="flex whitespace-nowrap marquee-track">
        {track.map((s, i) => (
          <span
            key={i}
            className="font-display font-bold uppercase text-2xl sm:text-3xl md:text-4xl text-maroon-deep px-6 flex items-center gap-6"
          >
            {s}
            <span className="text-maroon">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
