import { motion } from "framer-motion";
import { useState } from "react";
import nick from "@/assets/nickelodeon.jpg";
import snow from "@/assets/bigsnow.jpg";
import water from "@/assets/waterpark.jpg";

const PANELS = [
  { img: nick, eyebrow: "Entertainment First", title: "Nickelodeon Universe", sub: "Western Hemisphere's largest indoor theme park · 35+ rides" },
  { img: snow, eyebrow: "Year-Round Draw", title: "Big SNOW", sub: "North America's only indoor real-snow ski park · Open 365 days" },
  { img: water, eyebrow: "Water World", title: "DreamWorks Water Park", sub: "North America's largest indoor water park · 81°F year-round" },
];

export function PropertySlide() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section className="absolute inset-0 pt-20 flex">
      {PANELS.map((p, i) => {
        const isHover = hover === i;
        const isOther = hover !== null && hover !== i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: i === 1 ? -50 : 0, x: i === 0 ? -60 : i === 2 ? 60 : 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="relative cursor-pointer overflow-hidden transition-all duration-700"
            style={{ flex: isHover ? 2 : isOther ? 0.6 : 1 }}
          >
            <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700" style={{ transform: isHover ? "scale(1.06)" : "scale(1)" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
            <div className={`absolute inset-0 transition-opacity duration-500 ${isHover ? "bg-gold/10" : ""}`} />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <span className="text-[10px] tracking-[0.4em] text-gold uppercase">{p.eyebrow}</span>
              <h3 className="font-display text-3xl md:text-4xl text-white mt-3">{p.title}</h3>
              <p className={`text-silver/70 text-sm mt-3 max-w-xs transition-opacity duration-500 ${isHover ? "opacity-100" : "opacity-70"}`}>{p.sub}</p>
            </div>
            <div className="absolute top-1/2 right-0 h-px w-0 bg-gold transition-all duration-700" style={{ width: isHover ? "40px" : "0" }} />
          </motion.div>
        );
      })}
    </section>
  );
}
