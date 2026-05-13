import { motion } from "framer-motion";
import { Headline, GoldButton, Eyebrow } from "./_shared";

const BRANDS = ["SAKS FIFTH AVENUE", "HERMÈS", "LULULEMON", "APPLE", "H&M", "PRIMARK", "ZARA", "UNIQLO", "SEPHORA", "TIFFANY & CO.", "TOYS\u2019R\u2019US", "BEST BUY", "ARMANI EXCHANGE", "MONCLER"];
const CARDS = [
  { tag: "Luxury", title: "Premium Wing", body: "An elevated corridor designed for premium brands. Champagne service, personal shoppers, white-glove experience." },
  { tag: "Flagship", title: "Largest Format", body: "Your largest store in the tri-state region. Millions of qualified shoppers walk by your door." },
  { tag: "Pop-Up", title: "Flexible Activation", body: "Short-term spaces to test a market, launch a product, or build a fanbase." },
];

export function RetailSlide() {
  return (
    <section className="absolute inset-0 pt-24 px-8 md:px-14 flex flex-col">
      <div className="text-center">
        <Eyebrow>Retail Leasing</Eyebrow>
        <Headline className="mt-3 text-center">Join the brands that <span className="italic text-gold">moved first.</span></Headline>
      </div>

      {/* Ticker */}
      <div className="relative my-10 overflow-hidden border-y border-white/5 py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap text-sm tracking-[0.3em] text-silver/50"
        >
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="hover:text-gold transition-colors">{b}</span>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-midnight to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-midnight to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        {CARDS.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden border border-white/10 bg-charcoal/40 p-8 transition-all hover:border-gold hover:bg-charcoal/60 hover:-translate-y-1"
          >
            <span className="text-[10px] tracking-[0.4em] text-gold uppercase">{c.tag}</span>
            <h3 className="font-display text-3xl text-white mt-4">{c.title}</h3>
            <p className="text-silver/60 text-sm mt-4 leading-relaxed">{c.body}</p>
            <div className="mt-8 flex items-center gap-2 text-[11px] tracking-[0.3em] text-gold opacity-60 group-hover:opacity-100 transition">
              <span>LEARN MORE</span><span>→</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <GoldButton>Explore Leasing →</GoldButton>
      </div>
    </section>
  );
}
