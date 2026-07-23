import { profile } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="dot-grid-dark relative bg-blue-light pt-16 md:pt-20 overflow-hidden">
      <div className="framed max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal className="relative text-center select-none pointer-events-none mb-6">
          <h2 className="font-display font-bold uppercase text-maroon-deep/15 leading-[0.85] text-[15vw] sm:text-[10vw] md:text-[7vw]">
            Khairina
            <br />
            Atiqah
          </h2>
        </Reveal>

        <div className="relative border-t border-maroon-deep/20 py-10 md:py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sm font-semibold text-maroon-deep/70 mb-2">Let's build something</p>
            <h3 className="font-display font-bold uppercase text-3xl sm:text-4xl md:text-5xl text-maroon-deep leading-[1.05]">
              Worth Shipping
            </h3>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-maroon-deep/60">
              Reach out
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="w-11 h-11 rounded-full border border-maroon-deep/30 flex items-center justify-center hover:bg-maroon-deep hover:text-cream text-maroon-deep transition-colors"
              >
                @
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-maroon-deep/30 flex items-center justify-center hover:bg-maroon-deep hover:text-cream text-maroon-deep transition-colors font-semibold text-sm"
              >
                in
              </a>
            </div>
            <span className="text-sm text-maroon-deep/70">{profile.phone}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs text-maroon-deep/50 border-t border-maroon-deep/20 py-6">
          <span>© {new Date().getFullYear()} {profile.fullName}</span>
          <span>Built with Vite + React + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
