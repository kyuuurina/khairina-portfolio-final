import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/audio/audio.mp3";
const TRACK = "Sweet Boy";
const ARTIST = "Malcolm Todd";

// Play for this long, then slowly fade out.
const PLAY_MS = 15000;
const FADE_STEP_MS = 100;
const FADE_STEP = 0.04; // ~2.5s fade to silence

export default function NowPlaying({ autostart = false }: { autostart?: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const startedRef = useRef(false);
  const fadeTimeout = useRef<number | undefined>(undefined);
  const fadeInterval = useRef<number | undefined>(undefined);

  const clearFade = () => {
    if (fadeTimeout.current) window.clearTimeout(fadeTimeout.current);
    if (fadeInterval.current) window.clearInterval(fadeInterval.current);
    fadeTimeout.current = undefined;
    fadeInterval.current = undefined;
  };

  // After PLAY_MS, ramp the volume down to silence, then stop.
  const scheduleFade = (a: HTMLAudioElement) => {
    clearFade();
    fadeTimeout.current = window.setTimeout(() => {
      fadeInterval.current = window.setInterval(() => {
        const next = a.volume - FADE_STEP;
        if (next <= 0) {
          a.pause();
          a.volume = 1;
          setPlaying(false);
          clearFade();
        } else {
          a.volume = next;
        }
      }, FADE_STEP_MS);
    }, PLAY_MS);
  };

  const start = (a: HTMLAudioElement) => {
    clearFade();
    a.volume = 1;
    return a.play().then(() => {
      setPlaying(true);
      scheduleFade(a);
    });
  };

  const stop = (a: HTMLAudioElement) => {
    a.pause();
    a.volume = 1;
    setPlaying(false);
    clearFade();
  };

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) stop(a);
    else start(a).catch(() => setPlaying(false));
  };

  // When the intro finishes, start playing. Browsers block gesture-less autoplay,
  // so if it's rejected we start on the viewer's first interaction instead.
  useEffect(() => {
    if (!autostart || startedRef.current) return;
    startedRef.current = true;
    const a = audioRef.current;
    if (!a) return;

    start(a).catch(() => {
      const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
      const kick = () => {
        start(a).catch(() => {});
        events.forEach((e) => window.removeEventListener(e, kick));
      };
      events.forEach((e) => window.addEventListener(e, kick, { passive: true }));
    });
  }, [autostart]);

  // Clean up timers on unmount.
  useEffect(() => clearFade, []);

  return (
    <div className="hero-ui absolute inset-x-0 bottom-0 z-10 px-5 md:px-10 pb-5 md:pb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between text-maroon-deep">
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
      />

      {/* Now playing */}
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="flex items-center gap-3 text-left shrink-0"
      >
        <span className={`eq ${playing ? "playing" : ""}`} aria-hidden>
          <span />
          <span />
          <span />
          <span />
        </span>
        <span>
          <span className="block text-[10px] uppercase tracking-widest text-maroon-deep/45">
            Now playing
          </span>
          <span className="block text-sm font-semibold">
            {TRACK} <span className="text-maroon-deep/50">— {ARTIST}</span>
          </span>
        </span>
      </button>

      {/* Statement */}
      <p className="max-w-md text-xs sm:text-sm leading-relaxed text-maroon-deep/70 sm:text-center">
        Delivers real results for the people I build with — but I'm really here
        because it's fun. Tech holds endless ways to help the world, and I care
        about building the insanely cool stuff, not the forgettable kind.
      </p>

      {/* Sound toggle */}
      <button
        onClick={toggle}
        className="self-start sm:self-auto shrink-0 text-sm font-semibold uppercase tracking-wide hover:text-maroon transition-colors"
      >
        Sound {playing ? "On" : "Off"}
      </button>
    </div>
  );
}
