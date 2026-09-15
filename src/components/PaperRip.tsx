import { useEffect, useId, useRef } from "react";

// A torn sheet lifts with scroll, exposing a rough, fibrous paper edge.
export default function PaperRip({ reverse = false }: { reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const foldRef = useRef<SVGPathElement>(null);
  const flapRef = useRef<SVGPathElement>(null);
  const shadeRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);
  const textureId = useId();
  const curlId = useId();

  useEffect(() => {
    const el = ref.current;
    const sheet = sheetRef.current;
    const fold = foldRef.current;
    if (!el || !sheet || !fold) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    const update = () => {
      raf = 0;
      if (motion.matches) {
        sheet.style.clipPath = "none";
        sheet.inert = false;
        return;
      }
      const rect = el.getBoundingClientRect();
      const height = sheet.clientHeight;
      const width = sheet.clientWidth;
      // Peel continuously as the smaller divider travels through the viewport.
      // The following section stays in normal flow and enters during the peel.
      const entry = window.innerHeight * 0.5;
      const distance = Math.max(1, entry + height * 0.2);
      const progress = Math.max(0, Math.min(1, (entry - rect.top) / distance));
      const pull = progress;
      const tipX = width * (1 - pull * 1.82);
      const slope = height * 0.48;
      const baseline = height * 0.62;
      const seam = (x: number) => {
        const n = x / width * 240;
        return baseline - slope * x / width + Math.sin(n * 0.61) * 1.8
          + Math.sin(n * 0.19) * 3.5 + Math.sin(n * 1.73) * 0.7;
      };
      const tipY = seam(tipX);
      const upper: string[] = [];
      const lower: string[] = [];
      const clip: string[] = ["0px 0px", `${width}px 0px`];
      // The fibrous seam and broad folded underside are separate surfaces.
      for (let i = 0; i <= 320; i++) {
        const x = width - (width - Math.min(width, tipX)) * i / 320;
        const y = seam(x);
        const across = Math.max(0, Math.min(1, x / width));
        const thickness = (10 + Math.min(110, width * 0.11) * across ** 1.2) *
          (0.85 + 0.1 * Math.sin(x * 0.043) + 0.05 * Math.sin(x * 0.11));
        upper.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
        lower.unshift(`${x.toFixed(1)} ${(y + thickness).toFixed(1)}`);
        clip.push(`${x.toFixed(1)}px ${y.toFixed(1)}px`);
      }
      // Roll the free edge out through the left side before the divider ends.
      // This avoids clipping the sheet and flap against a horizontal box edge.
      const bottom = height - 16;
      const depth = Math.max(0, bottom - tipY);
      const curl = Math.min(120, width * 0.15) * Math.sin(Math.PI * pull);
      const side: string[] = [];
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const y = tipY + t * depth;
        const sweep = t ** 8;
        const x = tipX * (1 - sweep) - 40 * sweep
          + Math.sin(t * Math.PI) * curl + Math.sin(t * 46) * 1.4;
        side.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
        clip.push(`${x.toFixed(1)}px ${y.toFixed(1)}px`);
      }
      clip.push(`-40px ${bottom}px`);
      sheet.style.clipPath = progress === 0 ? "none" : `polygon(${clip.join(",")})`;
      sheet.inert = progress >= 0.99;
      fold.setAttribute("d", progress === 0 ? "" : `M ${upper.join(" L ")} L ${lower.join(" L ")} Z`);
      // The underside folds back to the right of the travelling tear tip.
      const flapWidth = Math.min(460, width * 0.48) * (1 - pull * 0.82);
      const flap = progress === 0 ? "" : `M ${side.join(" L ")}
        Q ${tipX + flapWidth * 1.1} ${bottom + 8}
          ${tipX + flapWidth * 0.72} ${tipY + depth * 0.72}
        Q ${tipX + flapWidth * 0.34} ${tipY + depth * 0.3} ${tipX} ${tipY} Z`;
      flapRef.current?.setAttribute("d", flap);
      shadeRef.current?.setAttribute("d", flap);
      const gradient = gradientRef.current;
      if (gradient) {
        gradient.setAttribute("x1", String(tipX));
        gradient.setAttribute("y1", String(tipY));
        gradient.setAttribute("x2", String(tipX + flapWidth));
        gradient.setAttribute("y2", String(tipY + 30));
      }
      el.style.setProperty("--paper-lift", "12px");
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const resize = new ResizeObserver(schedule);
    resize.observe(el);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    update();
    return () => {
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`paper-peel${reverse ? " paper-peel--reverse" : ""}`}>
      <div className="paper-peel__stage">
        <div className="paper-peel__underlay" aria-hidden="true" />
        <div
          ref={sheetRef}
          className={`paper-peel__sheet${reverse ? "" : " dot-grid"}`}
          aria-hidden="true"
        />
        <svg className="paper-peel__fold" aria-hidden="true" width="100%" height="100%">
          <defs>
            <linearGradient ref={gradientRef} id={curlId} gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#3b3027" stopOpacity="0.48" />
              <stop offset="0.16" stopColor="#736052" stopOpacity="0.2" />
              <stop offset="0.48" stopColor="#fffdf7" stopOpacity="0.5" />
              <stop offset="0.7" stopColor="#fffdf7" stopOpacity="0.18" />
              <stop offset="1" stopColor="#47372b" stopOpacity="0.4" />
            </linearGradient>
            <filter id={textureId} x="-5%" y="-20%" width="110%" height="140%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.19" numOctaves="3" seed="12" result="grain" />
              <feColorMatrix in="grain" type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0" intercept="1" />
                <feFuncR type="linear" slope="0.25" intercept="0.72" />
                <feFuncG type="linear" slope="0.25" intercept="0.71" />
                <feFuncB type="linear" slope="0.25" intercept="0.69" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
          <path ref={foldRef} fill="#f3eee8" filter={`url(#${textureId})`} />
          <path ref={flapRef} fill="#f3eee8" filter={`url(#${textureId})`} />
          <path ref={shadeRef} fill={`url(#${curlId})`} />
        </svg>
      </div>
    </div>
  );
}
