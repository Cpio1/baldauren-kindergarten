/** Small decorative shapes. Purely visual: always aria-hidden, sized by the caller. */
type P = { className?: string; style?: React.CSSProperties };

export function Star({ className, style }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path
        d="M12 1.5c.7 0 1.1.5 1.4 1.2l2.1 5 5.4.5c1.5.1 2 1.9.9 2.9l-4.1 3.5 1.2 5.3c.3 1.4-1.2 2.5-2.5 1.7L12 18.8l-4.4 2.8c-1.3.8-2.8-.3-2.5-1.7l1.2-5.3-4.1-3.5c-1.1-1-.6-2.8.9-2.9l5.4-.5 2.1-5c.3-.7.7-1.2 1.4-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sparkle({ className, style }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 0c.9 6.3 5.7 11.1 12 12-6.3.9-11.1 5.7-12 12-.9-6.3-5.7-11.1-12-12C6.3 11.1 11.1 6.3 12 0Z" fill="currentColor" />
    </svg>
  );
}

export function Cloud({ className, style }: P) {
  return (
    <svg viewBox="0 0 64 36" className={className} style={style} aria-hidden="true">
      <path
        d="M16 35h34c7.2 0 13-5.4 13-12.2 0-6.5-5.3-11.8-12-12.2C48.6 4.6 42.8 1 36 1c-7.6 0-14 4.6-16.2 11C9.2 12.3 1 18 1 24.6 1 30.4 7.6 35 16 35Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Dot({ className, style }: P) {
  return <span aria-hidden="true" className={`block rounded-full ${className ?? ""}`} style={style} />;
}

export function Ring({ className, style }: P) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden="true">
      <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="4 7" strokeLinecap="round" />
    </svg>
  );
}

export function Squiggle({ className, style }: P) {
  return (
    <svg viewBox="0 0 80 20" className={className} style={style} aria-hidden="true">
      <path d="M3 13c8-10 14-10 18 0s10 10 18 0 14-10 18 0 10 10 18 0" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export function HalfSun({ className, style }: P) {
  return (
    <svg viewBox="0 0 60 34" className={className} style={style} aria-hidden="true">
      <path d="M8 32a22 22 0 0 1 44 0Z" fill="currentColor" />
      {[-60, -30, 0, 30, 60].map((r) => (
        <rect key={r} x="28.5" y="0" width="3" height="6" rx="1.5" fill="currentColor" transform={`rotate(${r} 30 32)`} />
      ))}
    </svg>
  );
}

export function Leaf({ className, style }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} style={style} aria-hidden="true">
      <path d="M4 28C4 13 13 4 28 4c0 15-9 24-24 24Z" fill="currentColor" />
      <path d="M6 26 22 10" stroke="#FFF9ED" strokeOpacity="0.7" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
