import type { AdvantageIcon as Kind } from "@/data/kindergarten";

/** Duotone icons drawn for the club: a speech bubble with «Ә», a growing child, four houses, a plate. */
export function AdvantageIcon({ kind, className = "h-10 w-10" }: { kind: Kind; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {kind === "language" && (
        <>
          <path d="M8 10h32a5 5 0 0 1 5 5v15a5 5 0 0 1-5 5H22l-8 7v-7H8a5 5 0 0 1-5-5V15a5 5 0 0 1 5-5Z" fill="#D5F1ED" />
          <path d="M8 10h32a5 5 0 0 1 5 5v15a5 5 0 0 1-5 5H22l-8 7v-7H8a5 5 0 0 1-5-5V15a5 5 0 0 1 5-5Z" fill="none" stroke="#28786E" strokeWidth="2.4" strokeLinejoin="round" />
          <text x="24" y="29.5" textAnchor="middle" fontSize="16" fontWeight="800" fill="#28786E" fontFamily="system-ui, sans-serif">Әә</text>
        </>
      )}
      {kind === "age" && (
        <>
          <rect x="5" y="30" width="38" height="12" rx="6" fill="#FDF0C8" />
          <circle cx="17" cy="15" r="5.5" fill="#F1A7A0" />
          <path d="M10 31c0-5 3.2-8.5 7-8.5s7 3.5 7 8.5" fill="#F1A7A0" />
          <circle cx="32" cy="11" r="6.5" fill="#57C9BD" />
          <path d="M23.5 31c0-6.5 3.8-11 8.5-11s8.5 4.5 8.5 11" fill="#57C9BD" />
          <path d="M8 36h32" stroke="#28786E" strokeWidth="2.4" strokeLinecap="round" />
        </>
      )}
      {kind === "groups" && (
        <>
          {[
            [5, 22, "#57C9BD"],
            [25, 22, "#F8D77B"],
            [5, 6, "#F1A7A0"],
            [25, 6, "#D5F1ED"],
          ].map(([x, y, c]) => (
            <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
              <path d="M2 9 9 2l7 7v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" fill={c as string} />
              <path d="M2 9 9 2l7 7v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" fill="none" stroke="#28786E" strokeWidth="1.8" strokeLinejoin="round" />
            </g>
          ))}
        </>
      )}
      {kind === "meals" && (
        <>
          <circle cx="24" cy="25" r="17" fill="#FDE4E1" />
          <circle cx="24" cy="25" r="11" fill="#fff" stroke="#28786E" strokeWidth="2.4" />
          {[0, 72, 144, 216, 288].map((r) => (
            <circle key={r} cx="24" cy="18.5" r="2" fill="#57C9BD" transform={`rotate(${r} 24 25)`} />
          ))}
          <path d="M5 8v8m-2-8v5a2 2 0 0 0 4 0V8M43 8c-2 1-3 4-3 7h3v10" fill="none" stroke="#28786E" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
