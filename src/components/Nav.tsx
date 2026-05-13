import { SLIDES } from "./slides";
import { useState } from "react";

export function Nav({ index, go }: { index: number; go: (i: number) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 backdrop-blur-md bg-midnight/30 border-b border-white/5">
        <button onClick={() => go(0)} className="flex items-center gap-2 text-left">
          <span className="font-display text-xl md:text-2xl tracking-wider text-white">American <span className="text-gold italic">Dream</span></span>
        </button>
        <nav className="hidden lg:flex items-center gap-7 text-[11px] tracking-[0.25em] text-silver/70">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              className={`uppercase transition-colors hover:text-gold ${index === i ? "text-gold" : ""}`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-silver" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
        <span className="hidden lg:block text-[10px] tracking-[0.3em] text-silver/40">{String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}</span>
      </header>
      {open && (
        <div className="absolute inset-0 z-40 bg-midnight/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 lg:hidden">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { go(i); setOpen(false); }}
              className={`font-display text-2xl ${index === i ? "text-gold" : "text-silver"}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
