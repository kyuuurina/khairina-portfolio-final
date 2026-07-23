import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#showcase", label: "Showcase" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Side tab */}
      <button
        onClick={() => go("#journal")}
        className="hidden sm:flex fixed right-0 top-1/3 z-40 flex-col items-center gap-3 bg-maroon-deep text-cream px-2.5 py-4 rounded-l-xl hover:pr-4 transition-all"
        aria-label="Jump to journal"
      >
        <span className="font-display font-bold text-sm">K.</span>
        <span
          className="text-[10px] font-semibold tracking-widest uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Journal
        </span>
      </button>

      {/* Floating menu pill */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-blue-light/90 backdrop-blur px-6 py-3 rounded-full font-semibold text-maroon-deep shadow-lg hover:bg-blue transition-colors"
      >
        Menu
        <span className="flex flex-col gap-1">
          <span className="w-4 h-0.5 bg-maroon-deep" />
          <span className="w-4 h-0.5 bg-maroon-deep" />
        </span>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-maroon-deep text-cream flex flex-col">
          <div className="flex justify-between items-center px-6 md:px-10 py-6">
            <span className="font-display font-bold text-lg">Khairina Atiqah</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full border border-cream/40 flex items-center justify-center hover:bg-cream/10 transition-colors"
            >
              ✕
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-6">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="font-display font-bold text-4xl sm:text-5xl uppercase hover:text-blue-light transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div className="text-center pb-8 text-sm text-cream/60">
            khairinahizar@gmail.com
          </div>
        </div>
      )}
    </>
  );
}
