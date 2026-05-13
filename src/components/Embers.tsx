export function Embers({ count = 60 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const dur = 8 + Math.random() * 14;
        const delay = Math.random() * 14;
        const size = 1 + Math.random() * 2.5;
        return (
          <span
            key={i}
            className="ember"
            style={{
              left: `${left}%`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      })}
    </div>
  );
}
