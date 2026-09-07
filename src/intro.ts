// Shared hero-intro timing so the Navbar and NowPlaying can sync with the Hero.

/** ms from load until the intro settles (photo shrunk, UI revealed). */
export const INTRO_DURATION = 2000;

/** Play the intro once per tab session, and never for reduced-motion users. */
export function shouldPlayIntro(): boolean {
  if (typeof window === "undefined") return false;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const played = sessionStorage.getItem("heroIntroPlayed") === "1";
  return !prefersReduced && !played;
}
