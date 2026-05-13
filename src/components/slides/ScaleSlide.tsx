import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero-aerial.jpg";
import { Headline, GoldRule } from "./_shared";

function Counter({ end, suffix = "", duration = 1.6 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0; const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

const STATS = [
  { icon: "▰", value: 3, suffix: "M sq ft", label: "Five floors of immersive destination" },
  { icon: "↑", value: 40, suffix: "M+", label: "Projected annual visitors" },
  { icon: "◆", value: 450, suffix: "+", label: "Retail & entertainment tenants" },
  { icon: "✦", value: 55, suffix: "%", label: "Entertainment / 45% retail — unmatched" },
];

export function ScaleSlide() {
  return (
    <section className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pt-20">
      <div className="relative h-64 lg:h-full overflow-hidden">
        <img src={hero} alt="" className="ken-burns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/40 to-midnight/80 lg:to-midnight" />
      </div>
      <div className="relative flex flex-col justify-center px-8 md:px-14 py-10 lg:py-0">
        <Headline>Not just a mall.<br/><span className="italic text-gold">A world.</span></Headline>
        <GoldRule />
        <div className="mt-4 space-y-7">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-5 border-l border-gold/40 pl-5"
            >
              <span className="text-gold text-2xl">{s.icon}</span>
              <div>
                <div className="font-display text-4xl md:text-5xl text-white">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-silver/60 text-sm tracking-wide mt-1">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
