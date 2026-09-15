import { useEffect, useState } from "react";
import { shouldPlayIntro, INTRO_DURATION } from "../intro";

const links = [
  { href: "#work", label: "Work" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Let’s talk" },
];

export default function Navbar() {
  // Stay hidden while the full-screen intro plays, then fade in with the rest of the UI.
  const [revealed, setRevealed] = useState(() => !shouldPlayIntro());

  useEffect(() => {
    if (revealed) return;
    const t = setTimeout(() => setRevealed(true), INTRO_DURATION);
    return () => clearTimeout(t);
  }, [revealed]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-opacity duration-500 ${
        revealed ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-4 md:px-6 h-11 flex items-center justify-end">
        <ul className="flex items-center gap-5 md:gap-7 rounded-full bg-cream/95 px-4 py-1.5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-maroon-deep/80 hover:text-maroon transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
