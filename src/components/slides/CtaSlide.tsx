import { motion } from "framer-motion";
import { Embers } from "../Embers";

const ACTIONS = [
  { i: "▰", l: "Explore Retail Leasing", s: "For brands ready to anchor their tri-state presence." },
  { i: "◈", l: "Start a Sponsorship Conversation", s: "Reach 40M touchpoints with a category-exclusive platform." },
  { i: "♪", l: "Book a Venue", s: "Concerts, launches, conventions, and brand activations." },
];

export function CtaSlide() {
  return (
    <section className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
      <Embers count={120} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.12), transparent 60%)" }} />
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight">
          {["Your", "brand", "belongs", "here."].map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -120 : 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block mr-4 ${i === 3 ? "italic text-gold" : ""}`}
            >
              {w}
            </motion.span>
          ))}
        </h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }} className="mt-8 text-silver/70 text-lg md:text-xl max-w-2xl mx-auto">
          Join the property that's redefining what a destination can be.
        </motion.p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {ACTIONS.map((a, i) => (
            <motion.button
              key={a.l}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.18, duration: 0.7 }}
              className="group relative overflow-hidden border border-gold/40 hover:border-gold bg-midnight/60 backdrop-blur-sm p-6 text-left transition hover:-translate-y-1"
            >
              <span className="text-2xl text-gold">{a.i}</span>
              <div className="font-display text-xl text-white mt-3">{a.l}</div>
              <p className="text-silver/60 text-sm mt-2">{a.s}</p>
              <span className="gold-shimmer absolute inset-0 opacity-0 group-hover:opacity-30 transition pointer-events-none" />
            </motion.button>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="mt-14 text-silver/50 text-sm">
          <p>Commercial Team · <a href="mailto:partnerships@americandream.com" className="text-gold hover:underline">partnerships@americandream.com</a> · +1 (201) 555-0199</p>
          <p className="text-[10px] tracking-[0.4em] text-silver/30 mt-3">AMERICAN DREAM · EAST RUTHERFORD, NEW JERSEY</p>
        </motion.div>
      </div>
    </section>
  );
}
