import { motion } from "framer-motion";
import hero from "@/assets/hero-aerial.jpg";

export function OverviewSlide() {
  return (
    <section className="absolute inset-0">
      <div className="absolute inset-0">
        <img src={hero} alt="American Dream aerial" className="ken-burns h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-midnight/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-midnight/40" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end px-8 md:px-16 lg:px-24 pb-24">
        <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-[10px] md:text-xs tracking-[0.5em] text-gold uppercase">East Rutherford · New Jersey</motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-white mt-4 leading-[0.9]"
        >
          Not just a mall.<br/>
          <span className="italic text-gold">A world.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 max-w-2xl text-silver/80 text-lg md:text-xl"
        >
          3 million square feet of retail, entertainment, dining, and live experience — fifteen minutes from Manhattan.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="mt-12 flex items-center gap-3 text-[11px] tracking-[0.3em] text-silver/50">
          <span>USE ARROWS OR THE MENU TO EXPLORE</span>
          <motion.span animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>→</motion.span>
        </motion.div>
      </div>
    </section>
  );
}
