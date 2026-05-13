import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import d1 from "@/assets/dining1.jpg";
import d2 from "@/assets/dining2.jpg";
import d3 from "@/assets/dining3.jpg";
import luxury from "@/assets/luxury.jpg";

const COLS = [
  { img: d1, label: "Yard House", kb: "kb-tl" },
  { img: luxury, label: "Fine Dining", kb: "kb-br" },
  { img: d2, label: "Food Hall", kb: "kb-tr" },
  { img: d3, label: "Dining Terrace", kb: "kb-bl" },
  { img: d1, label: "Carpaccio", kb: "kb-tl" },
];

// Center-outward stagger order: index -> delay
const ORDER = [0.45, 0.25, 0.05, 0.25, 0.45];

export function DiningSlide() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setN(Math.floor(p * 125));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const flexFor = (i: number) => {
    if (hover === null) return 1;
    if (hover === i) return 2; // ~40% of 5 cols total
    return 0.75;
  };

  return (
    <section className="absolute inset-0 overflow-hidden bg-black">
      {/* Columns */}
      <div className="absolute inset-0 flex">
        {COLS.map((c, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: ORDER[i], duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "center", flex: flexFor(i) }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="relative h-full overflow-hidden cursor-pointer transition-[flex] duration-500 ease-out"
          >
            <div className={`absolute inset-0 ${c.kb} ${hover !== null && hover !== i ? "saturate-[0.6]" : ""} transition-[filter] duration-500`}>
              <img src={c.img} alt={c.label} className="h-full w-full object-cover" />
            </div>
            {/* base darken so headline reads */}
            <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/20 to-midnight/80" />
            {/* hover gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent transition-opacity duration-500 ${hover === i ? "opacity-100" : "opacity-0"}`} />
            {/* column label */}
            <div className="absolute inset-x-0 bottom-6 flex flex-col items-center text-center px-3">
              <span className={`text-white text-[10px] tracking-[0.35em] uppercase transition-opacity duration-300 ${hover === i ? "opacity-100" : "opacity-60"}`}>
                {c.label}
              </span>
              {hover === i && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-3 text-gold text-[11px] tracking-[0.3em] uppercase border-b border-gold/60"
                >
                  Explore Dining →
                </motion.span>
              )}
            </div>
            {/* shimmer sweep */}
            <div className="pointer-events-none absolute inset-0 gold-shimmer opacity-10" />
          </motion.div>
        ))}
      </div>

      {/* Headline overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-[14%] flex flex-col items-center text-center px-6 z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight"
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.85), 0 2px 8px rgba(0,0,0,0.9)" }}
        >
          70+ <span className="italic text-gold">Dining</span> Experiences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-5 italic text-silver/90 text-base md:text-lg max-w-2xl font-light"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9)" }}
        >
          From street food to fine dining — food is the reason people stay longer.
        </motion.p>
      </div>

      {/* Bottom dwell-time pill */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 rounded-full border border-gold/60 bg-midnight/80 backdrop-blur px-6 py-3"
      >
        <span className="text-gold text-sm">◷</span>
        <span className="font-display text-2xl text-gold">
          <span ref={ref}>{n}</span>-min
        </span>
        <span className="text-silver/80 text-[10px] tracking-[0.3em] uppercase">Average Dwell Time</span>
      </motion.div>
    </section>
  );
}
