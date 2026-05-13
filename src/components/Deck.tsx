import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SLIDES } from "./slides";
import { Nav } from "./Nav";
import { Embers } from "./Embers";

export function Deck() {
  const [index, setIndex] = useState(0);
  const [entered, setEntered] = useState(false);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(Math.max(0, Math.min(SLIDES.length - 1, next)));
  }, [index]);

  useEffect(() => {
    if (!entered) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key === "Escape") setIndex(0);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, entered, go]);

  if (!entered) {
    return <Splash onEnter={() => setEntered(true)} />;
  }

  const Current = SLIDES[index].component;

  return (
    <div className="fixed inset-0 bg-midnight overflow-hidden">
      <Nav index={index} go={go} />
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Current />
        </motion.div>
      </AnimatePresence>

      {/* Side arrows */}
      {index > 0 && (
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous slide"
          className="group absolute left-4 top-1/2 z-40 -translate-y-1/2 p-3 text-silver/40 hover:text-gold transition"
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      )}
      {index < SLIDES.length - 1 && (
        <button
          onClick={() => go(index + 1)}
          aria-label="Next slide"
          className="group absolute right-4 top-1/2 z-40 -translate-y-1/2 p-3 text-silver/40 hover:text-gold transition"
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      )}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-40 flex h-[3px] gap-[2px] px-6 pb-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-[2px] flex-1 transition-all ${i <= index ? "bg-gold" : "bg-silver/15"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Splash({ onEnter }: { onEnter: () => void }) {
  const word = "AMERICAN DREAM";
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-black">
      <Embers count={80} />
      {/* Shooting star */}
      <motion.div
        initial={{ x: "-20vw", y: "30vh", opacity: 0 }}
        animate={{ x: "60vw", y: "-10vh", opacity: [0, 1, 0] }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute h-[2px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent"
        style={{ filter: "blur(0.5px)" }}
      />
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-[0.15em] flex flex-wrap justify-center max-w-5xl px-6">
        {word.split("").map((c, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={c === " " ? "w-4 md:w-6" : ""}
          >
            {c}
          </motion.span>
        ))}
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="mt-8 text-silver/70 tracking-[0.4em] text-xs md:text-sm uppercase"
      >
        The Western Hemisphere's Greatest Destination
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 0.8 }}
        onClick={onEnter}
        className="gold-pulse mt-16 border border-gold px-10 py-4 text-gold tracking-[0.3em] text-xs hover:bg-gold hover:text-midnight transition-colors duration-300"
      >
        ENTER EXPERIENCE
      </motion.button>
      <p className="absolute bottom-6 text-[10px] tracking-[0.3em] text-silver/30">USE ← → TO NAVIGATE</p>
    </div>
  );
}
