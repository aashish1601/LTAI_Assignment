import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SlideShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`absolute inset-0 pt-20 pb-10 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7 }}
      className="inline-block text-[10px] md:text-xs tracking-[0.4em] text-gold uppercase"
    >
      {children}
    </motion.span>
  );
}

export function Headline({ children, delay = 0.1, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function GoldRule({ delay = 0.4 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "left" }}
      className="h-px w-24 bg-gold my-6"
    />
  );
}

export function Body({ children, delay = 0.5, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`text-silver/70 text-base md:text-lg leading-relaxed max-w-xl ${className}`}
    >
      {children}
    </motion.p>
  );
}

export function GoldButton({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden border border-gold px-8 py-3 text-[11px] tracking-[0.3em] text-gold uppercase transition-colors hover:bg-gold hover:text-midnight"
    >
      <span className="relative z-10">{children}</span>
      <span className="gold-shimmer absolute inset-0 opacity-30" />
    </button>
  );
}
