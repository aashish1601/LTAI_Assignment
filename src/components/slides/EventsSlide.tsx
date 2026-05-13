import { motion } from "framer-motion";
import { Eyebrow, Headline, GoldButton } from "./_shared";
import event from "@/assets/event.jpg";

const TYPES = [
  { i: "♪", l: "Concerts" },
  { i: "✦", l: "Product Launches" },
  { i: "◈", l: "Corporate Events" },
  { i: "▶", l: "Brand Activations" },
];

export function EventsSlide() {
  return (
    <section className="absolute inset-0">
      <div className="absolute inset-0">
        <img src={event} alt="" className="ken-burns h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/70 to-midnight/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-16 lg:px-24 pt-20 max-w-4xl">
        <Eyebrow>The Platform</Eyebrow>
        <Headline className="mt-3">
          <motion.span
            initial={{ scale: 1.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Where brands <span className="italic text-gold">become icons.</span>
          </motion.span>
        </Headline>
        <div className="mt-8 space-y-3 max-w-2xl">
          {[
            "American Dream is not just a venue — it's a stage with 40 million attendees a year.",
            "Concerts. Product launches. Celebrity activations. Brand campaigns.",
            "Convention hosting. We power them all.",
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.25, duration: 0.7 }}
              className="text-silver/80 text-lg md:text-xl"
            >
              {line}
            </motion.p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          {TYPES.map((t, i) => (
            <motion.div
              key={t.l}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.15 + Math.random() * 0.1, type: "spring", bounce: 0.5 }}
              className="flex items-center gap-3 border border-gold/30 px-4 py-2 backdrop-blur-sm bg-midnight/30"
            >
              <span className="text-gold text-lg">{t.i}</span>
              <span className="text-silver text-sm tracking-[0.2em] uppercase">{t.l}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} className="mt-10">
          <GoldButton>Book Your Event →</GoldButton>
        </motion.div>
      </div>
    </section>
  );
}
