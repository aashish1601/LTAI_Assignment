import { motion } from "framer-motion";
import { Headline, Eyebrow } from "./_shared";

const TIERS = [
  { tag: "Title Partner", body: "Premium naming rights across key zones. Digital, physical, and experiential integration.", price: "Anchor presence" },
  { tag: "Presenting Sponsor", body: "Category-exclusive sponsorship tied to a specific attraction or event series.", price: "Category exclusive" },
  { tag: "Activation Partner", body: "Pop-up activations, product sampling, and immersive brand experiences in high-traffic zones.", price: "Flexible terms" },
];

const STATS = [
  { v: "$125K+", l: "HHI" },
  { v: "68%", l: "Millennials + Gen Z" },
  { v: "40M", l: "Annual Touchpoints" },
  { v: "125 min", l: "Avg Dwell" },
];

export function SponsorshipSlide() {
  return (
    <section className="absolute inset-0 pt-24 px-8 md:px-14 flex flex-col">
      <div>
        <Eyebrow>Partnerships</Eyebrow>
        <Headline className="mt-3">Partner <span className="italic text-gold">at scale.</span></Headline>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-silver/60 mt-4 max-w-xl">
          40 million touchpoints annually. Choose your platform.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 flex-1">
        {TIERS.map((t, i) => {
          const dirs = [{ x: -60, y: 0 }, { x: 0, y: 60 }, { x: 60, y: 0 }];
          return (
            <motion.div
              key={t.tag}
              initial={{ opacity: 0, ...dirs[i] }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-white/10 bg-charcoal/40 p-8 flex flex-col hover:border-gold transition"
            >
              <span className="text-[10px] tracking-[0.4em] text-gold uppercase">Tier {String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-3xl text-white mt-3">{t.tag}</h3>
              <p className="text-silver/60 text-sm mt-4 flex-1 leading-relaxed">{t.body}</p>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase">
                <span className="text-silver/40">{t.price}</span>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition">Let's talk →</span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.7 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10"
      >
        {STATS.map((s) => (
          <div key={s.l} className="bg-midnight px-6 py-5 text-center">
            <div className="font-display text-2xl text-gold">{s.v}</div>
            <div className="text-[10px] tracking-[0.25em] text-silver/50 uppercase mt-1">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
