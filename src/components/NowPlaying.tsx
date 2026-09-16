import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/audio/audio.mp3";
const TRACK = "Sweet Boy";
const ARTIST = "Malcolm Todd";

// Pause each playback after ten seconds.
const PLAY_MS = 10000;

export default function NowPlaying({ autostart = false }: { autostart?: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const pauseTimeout = useRef<number | undefined>(undefined);

  const clearPauseTimer = () => {
    if (pauseTimeout.current !== undefined) window.clearTimeout(pauseTimeout.current);
    pauseTimeout.current = undefined;
  };

  const schedulePause = (a: HTMLAudioElement) => {
    clearPauseTimer();
    pauseTimeout.current = window.setTimeout(() => {
      a.pause();
      setPlaying(false);
      clearPauseTimer();
    }, PLAY_MS);
  };

  const start = (a: HTMLAudioElement) => {
    clearPauseTimer();
    a.volume = 1;
    return a.play().then(() => {
      setPlaying(true);
      schedulePause(a);
    });
  };

  const stop = (a: HTMLAudioElement) => {
    a.pause();
    a.volume = 1;
    setPlaying(false);
    clearPauseTimer();
  };

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    setError(false);
    if (!a.paused) stop(a);
    else start(a).catch(() => {
      setPlaying(false);
      setError(true);
    });
  };

  // A scroll does not unlock audio. Keep listening for a real gesture until
  // playback succeeds, and let the music buttons handle their own clicks.
  useEffect(() => {
    if (!autostart) return;
    const a = audioRef.current;
    if (!a) return;
    let disposed = false;
    const events = ["pointerdown", "keydown"] as const;
    const removeListeners = () => {
      events.forEach((event) => window.removeEventListener(event, kick));
    };
    const kick = (event: Event) => {
      if (event.target instanceof Element && event.target.closest("button, a, input, textarea, select")) return;
      if (!a.paused) {
        removeListeners();
        return;
      }
      start(a).then(removeListeners).catch(() => {
        // A rejected attempt must not consume the next valid gesture.
      });
    };
    start(a).catch(() => {
      if (!disposed) {
        events.forEach((event) => window.addEventListener(event, kick, { passive: true }));
      }
    });
    a.addEventListener("playing", removeListeners);
    return () => {
      disposed = true;
      removeListeners();
      a.removeEventListener("playing", removeListeners);
      clearPauseTimer();
      a.pause();
    };
  }, [autostart]);

  // Clean up timers on unmount.
  useEffect(() => clearPauseTimer, []);

  return (
    <div className="hero-controls hero-ui absolute inset-x-0 bottom-0 z-10 px-5 md:px-10 pb-5 md:pb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between text-maroon-deep">
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="none"
        onPlaying={() => { setPlaying(true); setError(false); }}
        onPause={() => { setPlaying(false); clearPauseTimer(); }}
        onError={() => { setPlaying(false); setError(true); clearPauseTimer(); }}
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
            {error ? "Audio unavailable — tap to retry" : playing ? "Now playing" : "Play music"}
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
