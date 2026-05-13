import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aerial from "@/assets/hero-aerial.jpg";

const RINGS = [
  { r: 70, time: "30 MIN", pop: "8M", delay: 1.0 },
  { r: 130, time: "60 MIN", pop: "23M", delay: 1.8 },
  { r: 200, time: "2 HRS", pop: "60M", delay: 2.6 },
];

const STATS = [
  { value: 3_000_000, suffix: "", label: "SQ FT OF DESTINATION", format: (n: number) => n.toLocaleString() },
  { value: 40_000_000, suffix: "+", label: "ANNUAL VISITORS", format: (n: number) => n.toLocaleString() },
  { value: 5, suffix: "B", label: "INVESTED", prefix: "$", format: (n: number) => n.toString() },
];

function Counter({ to, duration = 1500, format }: { to: number; duration?: number; format: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{format(n)}</span>;
}

export function LocationSlide() {
  const [side, setSide] = useState<"left" | "right" | null>(null);
  const tilt = side === "left" ? -2 : side === "right" ? 2 : 0;

  // Diagonal cut: top at 45%, bottom at 55%
  const leftClip = `polygon(0 0, calc(45% + ${tilt}%) 0, calc(55% + ${tilt}%) 100%, 0 100%)`;
  const rightClip = `polygon(calc(45% + ${tilt}%) 0, 100% 0, 100% 100%, calc(55% + ${tilt}%) 100%)`;

  return (
    <section className="absolute inset-0 overflow-hidden bg-midnight">
      {/* RIGHT SIDE — Aerial image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onMouseEnter={() => setSide("right")}
        onMouseLeave={() => setSide(null)}
        className="absolute inset-0 transition-[clip-path] duration-500 ease-out"
        style={{ clipPath: rightClip, WebkitClipPath: rightClip }}
      >
        <motion.img
          src={aerial}
          alt="American Dream aerial"
          initial={{ filter: "blur(14px) scale(1.1)" }}
          animate={{ filter: side === "right" ? "blur(0px) brightness(1.1) scale(1.02)" : "blur(0px) brightness(1) scale(1)" }}
          transition={{ duration: 1 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-midnight/40 via-midnight/20 to-midnight/70" />

        {/* Content right */}
        <div className="absolute inset-0 flex flex-col justify-between items-end text-right p-10 md:p-16 pl-[55%]">
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase"
          >
            15 min from Midtown Manhattan
          </motion.span>

          <div className="space-y-6 w-full max-w-sm">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.3, duration: 0.7 }}
                className="border-t border-gold/40 pt-3"
              >
                <div className={`font-display text-3xl md:text-5xl ${side === "right" ? "text-gold" : "text-white"} transition-colors duration-300`}>
                  {s.prefix ?? ""}<Counter to={s.value} format={s.format} />{s.suffix}
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-silver/60 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.7 }}
            className="rounded-full border border-gold bg-midnight/70 backdrop-blur px-6 py-3 text-gold text-[10px] tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
          >
            Explore the Property →
          </motion.button>
        </div>
      </motion.div>

      {/* LEFT SIDE — Map */}
      <motion.div
        initial={{ x: "-30%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setSide("left")}
        onMouseLeave={() => setSide(null)}
        className="absolute inset-0 transition-[clip-path] duration-500 ease-out"
        style={{ clipPath: leftClip, WebkitClipPath: leftClip }}
      >
        {/* Dark map background */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 35% 50%, rgba(201,168,76,0.08), transparent 55%), linear-gradient(180deg, #0a1322 0%, #06101c 100%)",
        }} />
        <svg className="absolute inset-0 h-full w-full opacity-25" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid-loc" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0H0V44" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-loc)" />
        </svg>
        {/* Stylized roads / coast */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
          <path d="M40 600 C 160 540, 240 660, 340 580 S 520 520, 600 580" stroke="rgba(201,168,76,0.3)" fill="none" strokeWidth="1" />
          <path d="M120 120 C 220 200, 280 140, 380 240 S 520 320, 600 260" stroke="rgba(201,168,76,0.18)" fill="none" strokeWidth="1" />
          <path d="M0 400 L 600 380" stroke="rgba(232,232,240,0.08)" strokeWidth="1" />
          <path d="M180 0 L 220 800" stroke="rgba(232,232,240,0.06)" strokeWidth="1" />
        </svg>

        {/* Pulse rings centered on pin */}
        <svg viewBox="0 0 600 800" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
          {RINGS.map((r, i) => (
            <g key={i}>
              <motion.circle
                cx="280" cy="430" r={r.r}
                fill="none" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.05, 1], opacity: [0, 0.85, 0.5] }}
                transition={{
                  delay: r.delay, duration: 1.6, ease: "easeOut",
                  repeat: Infinity, repeatDelay: 3,
                }}
                style={{ transformOrigin: "280px 430px" }}
              />
              <motion.text
                x={280 + r.r + 6} y={430}
                fill="#C9A84C" fontSize="10" letterSpacing="1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ delay: r.delay + 0.4, duration: 0.6 }}
              >
                {r.pop} · {r.time}
              </motion.text>
            </g>
          ))}
          <motion.g
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7, type: "spring", bounce: 0.4 }}
          >
            <circle cx="280" cy="430" r="7" fill="#C9A84C" />
            <circle cx="280" cy="430" r="13" fill="none" stroke="#C9A84C" strokeWidth="1.5" />
            <text x="296" y="426" fill="#FFFFFF" fontSize="12" fontFamily="Cormorant Garamond" fontStyle="italic">American Dream</text>
            <text x="296" y="442" fill="rgba(232,232,240,0.55)" fontSize="9" letterSpacing="2">MEADOWLANDS · NJ</text>
          </motion.g>
          <text x="180" y="370" fill="rgba(232,232,240,0.4)" fontSize="9" letterSpacing="1.5">NYC</text>
        </svg>

        {/* Headline */}
        <div className="absolute inset-0 p-10 md:p-16 pr-[50%] flex flex-col justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-[10px] tracking-[0.4em] uppercase text-gold"
            >
              Position
            </motion.span>
            <h2 className="font-display text-4xl md:text-6xl text-white leading-[0.95] mt-4 tracking-tight">
              {["Positioned at", "the center of", "the world."].map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.85 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {i === 2 ? <em className="text-gold not-italic font-display italic">{line}</em> : line}
                </motion.span>
              ))}
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.7 }}
            className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] tracking-[0.25em] uppercase text-silver/60"
          >
            <span>↗ Route 3</span><span>◷ NJ Transit</span><span>⛴ NY Waterway</span><span>✈ 3 Helipads</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Diagonal glowing line */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
        <motion.line
          x1={45 + tilt} y1="0" x2={55 + tilt} y2="100"
          stroke="#C9A84C" strokeWidth="0.25" vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ filter: "drop-shadow(0 0 6px rgba(201,168,76,0.9)) drop-shadow(0 0 14px rgba(201,168,76,0.5))" }}
        />
      </svg>
    </section>
  );
}
