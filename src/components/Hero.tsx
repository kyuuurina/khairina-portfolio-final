import { useEffect, useRef, useState } from "react";
import { profile } from "../data";
import NowPlaying from "./NowPlaying";
import { shouldPlayIntro } from "../intro";

// Drop your hero photo here (or change this path to match your filename).
const HERO_IMAGE = "/images/hero.jpeg";

type Phase = "full" | "center" | "final";

export default function Hero() {
  // Sequence: full-screen photo → shrink to centred name → slide left + labels fly in.
  const playRef = useRef(shouldPlayIntro());
  const [phase, setPhase] = useState<Phase>(playRef.current ? "full" : "final");

  useEffect(() => {
    if (!playRef.current) return;
    try {
      sessionStorage.setItem("heroIntroPlayed", "1");
    } catch {
      /* sessionStorage may be unavailable; the intro still plays this once */
    }
    // Hold the full-screen photo, shrink it to the centred name, then slide left + fly in.
    const toCenter = setTimeout(() => setPhase("center"), 700);
    const toFinal = setTimeout(() => setPhase("final"), 2000);
    return () => {
      clearTimeout(toCenter);
      clearTimeout(toFinal);
    };
  }, []);

  const nameClass =
    "hero-name font-display font-bold text-maroon-deep leading-none whitespace-nowrap tracking-[-0.04em] text-[19vw] sm:text-[14vw] md:text-[10.5vw]";

  return (
    <section
      id="top"
      data-phase={phase}
      className="hero dot-grid relative overflow-hidden min-h-[100svh]"
    >
      <h1 className="hero-wordmark">
        <span className={nameClass}>Khairina</span>
        <span className="hero-photo bg-blue-light/40 shadow-xl" aria-hidden>
          <img src={HERO_IMAGE} alt="" />
        </span>
        <span className={nameClass}>Hizar</span>
        <span className="hero-ui hero-role font-semibold uppercase tracking-widest text-maroon-deep/70 text-[10px] sm:text-xs md:text-sm">
          {profile.role}
        </span>
      </h1>

      <NowPlaying autostart={phase === "final"} />
    </section>
  );
}
