import { motion } from "framer-motion";
import { Headline, Eyebrow, GoldRule } from "./_shared";
import luxury from "@/assets/luxury.jpg";

const PERKS = ["Private shopping suites", "Champagne service", "Curated tenant adjacencies", "Exclusive event programming"];
const BRANDS = ["Hermès", "Tiffany & Co.", "Dolce & Gabbana", "Moncler", "Watches of Switzerland"];

export function LuxurySlide() {
  return (
    <section className="absolute inset-0 pt-20 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-8 md:px-14 py-10">
        <Eyebrow>The Luxury Wing</Eyebrow>
        <Headline className="mt-3">Where prestige <br/><span className="italic text-gold">meets scale.</span></Headline>
        <GoldRule />
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.9 }}
          className="text-silver/70 text-base md:text-lg leading-relaxed max-w-xl"
        >
          A dedicated luxury corridor brings the world's most coveted brands together — steps from 40 million annual visitors who come to spend, to experience, and to indulge.
        </motion.p>
        <ul className="mt-8 space-y-3">
          {PERKS.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.15, duration: 0.6 }}
              className="flex items-center gap-4 text-silver"
            >
              <motion.span
                initial={{ width: 0 }} animate={{ width: 24 }}
                transition={{ delay: 0.9 + i * 0.15, duration: 0.5 }}
                className="block h-px bg-gold"
              />
              <span className="text-sm">{p}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {BRANDS.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.6 + i * 0.12, duration: 0.6 }}
              className="font-display italic text-gold-soft text-lg"
            >
              {b}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden">
        <motion.img
          src={luxury} alt="Luxury wing"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 70% 30%, transparent 0%, rgba(10,14,26,0.4) 80%)" }} />
        {/* gold geometric accent */}
        <motion.div
          animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 border border-gold/30 rotate-45"
        />
      </div>
    </section>
  );
}
