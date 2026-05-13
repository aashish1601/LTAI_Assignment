import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import nick from "@/assets/nickelodeon.jpg";
import snow from "@/assets/bigsnow.jpg";
import water from "@/assets/waterpark.jpg";
import aquarium from "@/assets/aquarium.jpg";
import rink from "@/assets/rink.jpg";
import { Headline } from "./_shared";

const PORTALS = [
  { img: nick, name: "Nickelodeon Universe", stat: "35+ Rides", desc: "Western Hemisphere's largest indoor theme park." },
  { img: snow, name: "Big SNOW", stat: "365 Days", desc: "North America's only real indoor snow park." },
  { img: water, name: "DreamWorks Water Park", stat: "81°F Year-Round", desc: "North America's largest indoor water park." },
  { img: aquarium, name: "SEA LIFE Aquarium", stat: "1,000+ Species", desc: "Sharks, stingrays, and an immersive ocean tunnel." },
  { img: rink, name: "The Rink", stat: "NHL Size", desc: "Home of the NJ Metro Jets and signature ice events." },
];

export function AttractionsSlide() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="absolute inset-0 pt-24 px-6 md:px-14 flex flex-col items-center">
      <Headline className="text-center max-w-4xl">No one else <span className="italic text-gold">has this.</span></Headline>
      <p className="text-silver/60 mt-4 text-sm tracking-[0.2em] uppercase">Click a portal to expand</p>
      <div className="relative mt-12 w-full max-w-6xl flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {active === null ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
            >
              {PORTALS.map((p, i) => (
                <motion.button
                  key={p.name}
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.12, type: "spring", bounce: 0.5, duration: 0.9 }}
                  whileHover={{ scale: 1.08 }}
                  onClick={() => setActive(i)}
                  className="group relative h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden border-2 border-gold/40 hover:border-gold transition"
                  style={{ boxShadow: "0 0 40px rgba(201,168,76,0.15)" }}
                >
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-midnight/40 group-hover:bg-midnight/10 transition" />
                  <div className="absolute inset-x-0 bottom-3 text-center">
                    <span className="font-display text-white text-sm md:text-base">{p.name.split(" ")[0]}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-8px] rounded-full border border-gold/30 border-dashed"
                  />
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="active"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full"
            >
              <div className="relative aspect-square max-h-[60vh] mx-auto w-full max-w-md rounded-full overflow-hidden border-2 border-gold" style={{ boxShadow: "0 0 80px rgba(201,168,76,0.3)" }}>
                <img src={PORTALS[active].img} alt={PORTALS[active].name} className="h-full w-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] tracking-[0.4em] text-gold uppercase">Attraction</span>
                <h3 className="font-display text-4xl md:text-5xl text-white mt-3">{PORTALS[active].name}</h3>
                <div className="font-display text-2xl text-gold mt-3">{PORTALS[active].stat}</div>
                <p className="text-silver/70 mt-4 max-w-md">{PORTALS[active].desc}</p>
                <button onClick={() => setActive(null)} className="mt-8 text-[11px] tracking-[0.3em] text-gold border border-gold px-6 py-2 hover:bg-gold hover:text-midnight transition">← BACK TO ALL</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
