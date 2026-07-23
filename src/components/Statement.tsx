import { useEffect, useRef } from "react";

const text = "2+ years shipping products, platforms, and the occasional self-taught 3D engine that actually hold up.";

export default function Statement() {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll<HTMLSpanElement>(".reveal-word");
    if (!words) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { rootMargin: "0px 0px -45% 0px", threshold: 0 }
    );

    words.forEach((w) => observer.observe(w));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="dot-grid-dark bg-maroon-deep relative py-24 md:py-36">
      <div className="framed max-w-[1400px] mx-auto px-6 md:px-10">
        <p
          ref={containerRef}
          className="font-display font-bold text-3xl sm:text-4xl md:text-6xl leading-tight max-w-5xl mx-auto text-center"
        >
          {text.split(" ").map((word, i) => (
            <span key={i} className="reveal-word">
              {word}{" "}
            </span>
          ))}
        </p>

        <div className="flex justify-center mt-14">
          <div className="w-16 h-16 rounded-2xl border-2 border-blue-light flex items-center justify-center">
            <span className="font-display font-bold text-blue-light text-lg">{"</>"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
