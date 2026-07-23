import { useEffect, useRef, useState } from "react";
import strapseekerImg from "../assets/projects/strapseeker.jpg";
import craniomaxImg from "../assets/projects/craniomax.jpg";
import scholarspaceImg from "../assets/projects/scholarspace.jpg";
import { showcaseCategories } from "../data";

const images: Record<string, string> = {
  strapseeker: strapseekerImg,
  craniomax: craniomaxImg,
  scholarspace: scholarspaceImg,
};

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      const idx = Math.min(
        showcaseCategories.length - 1,
        Math.floor(progress * showcaseCategories.length)
      );
      setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="showcase" ref={sectionRef} className="dot-grid relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="framed max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-maroon-deep/60 mb-6">
                Building experiences across
              </p>
              <div className="space-y-2">
                {showcaseCategories.map((c, i) => (
                  <h3
                    key={c.label}
                    className={`font-display font-bold uppercase text-3xl sm:text-4xl md:text-5xl transition-colors duration-300 ${
                      i === active ? "text-maroon-deep" : "text-maroon-deep/25"
                    }`}
                  >
                    {c.label}
                  </h3>
                ))}
              </div>
              <p className="mt-8 text-sm text-maroon-deep/60 max-w-sm">
                {showcaseCategories[active].caption}
              </p>
            </div>

            <div className="relative h-72 sm:h-96 md:h-[26rem]">
              {showcaseCategories.map((c, i) => (
                <div
                  key={c.label}
                  className="absolute inset-0 rounded-3xl overflow-hidden border border-maroon-deep/15 shadow-xl bg-cream transition-all duration-500"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: `rotate(${i === active ? 0 : 3}deg) scale(${i === active ? 1 : 0.96})`,
                    zIndex: i === active ? 10 : 0,
                  }}
                >
                  <img src={images[c.image]} alt={c.caption} className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
