/**
 * Illustrated stand-in shown where a photo of the club will go (main-page / main-page2).
 * Deliberately abstract — no invented pictures of children.
 */
export function SceneArt({ variant = "hero", className = "" }: { variant?: "hero" | "about"; className?: string }) {
  if (variant === "about") {
    return (
      <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" className={`h-full w-full ${className}`} aria-hidden="true">
        <rect width="400" height="320" fill="#FDF0C8" />
        <circle cx="318" cy="70" r="38" fill="#F8D77B" />
        <path d="M0 230c70-40 140-48 210-20s130 30 190-10v120H0Z" fill="#D5F1ED" />
        <path d="M0 262c80-26 150-20 220 4s120 16 180-8v62H0Z" fill="#57C9BD" />
        {/* building blocks */}
        <g transform="translate(92 150)">
          <rect x="0" y="40" width="56" height="56" rx="12" fill="#F1A7A0" />
          <rect x="62" y="40" width="56" height="56" rx="12" fill="#FFF9ED" />
          <rect x="31" y="-20" width="56" height="56" rx="12" fill="#28786E" />
          <text x="28" y="78" textAnchor="middle" fontSize="30" fontWeight="800" fill="#FFF9ED" fontFamily="system-ui, sans-serif">Ә</text>
          <text x="90" y="78" textAnchor="middle" fontSize="30" fontWeight="800" fill="#28786E" fontFamily="system-ui, sans-serif">Б</text>
          <text x="59" y="18" textAnchor="middle" fontSize="30" fontWeight="800" fill="#F8D77B" fontFamily="system-ui, sans-serif">Қ</text>
        </g>
        <path d="M286 186c0-18 12-30 26-30s26 12 26 30" fill="none" stroke="#28786E" strokeWidth="6" strokeLinecap="round" />
        <circle cx="312" cy="148" r="10" fill="#F1A7A0" />
        <path d="M40 84c10-12 22-12 30 0s20 12 30 0" fill="none" stroke="#FFF9ED" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" className={`h-full w-full ${className}`} aria-hidden="true">
      <rect width="400" height="480" fill="#D5F1ED" />
      <circle cx="288" cy="120" r="56" fill="#F8D77B" />
      <circle cx="288" cy="120" r="78" fill="none" stroke="#F8D77B" strokeOpacity="0.45" strokeWidth="6" strokeDasharray="2 14" strokeLinecap="round" />
      <path d="M58 132h70c14 0 25-10 25-23s-11-22-24-22c-4-14-16-22-30-22-17 0-30 11-32 26-13 1-22 10-22 21 0 11 6 20 13 20Z" fill="#FFF9ED" />
      <path d="M0 330c80-56 160-62 240-26s120 30 160 4v172H0Z" fill="#57C9BD" />
      <path d="M0 380c90-30 170-26 250 4s110 22 150 4v92H0Z" fill="#28786E" />
      {/* the flower from the emblem, growing on the hill */}
      <path d="M150 352c0-40 6-70 18-96" fill="none" stroke="#FFF9ED" strokeWidth="6" strokeLinecap="round" />
      <path d="M156 318c-20-4-32-16-36-34 20 2 32 14 36 34Z" fill="#FFF9ED" />
      <g transform="translate(170 228)">
        {[0, 72, 144, 216, 288].map((r, i) => (
          <ellipse key={r} cx="0" cy="-20" rx="12" ry="18" fill={["#F1A7A0", "#FFF9ED", "#F8D77B", "#FFF9ED", "#F1A7A0"][i]} transform={`rotate(${r})`} />
        ))}
        <circle r="12" fill="#28786E" />
        <circle r="5" fill="#F8D77B" />
      </g>
      <circle cx="300" cy="300" r="14" fill="#F1A7A0" />
      <circle cx="330" cy="330" r="8" fill="#FFF9ED" />
    </svg>
  );
}
