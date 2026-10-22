/** Club emblem: a five-petal «балдаурен» flower — one petal per meal, a sun in the middle. */
export function Emblem({ className = "h-10 w-10", title }: { className?: string; title?: string }) {
  const petals = [0, 72, 144, 216, 288];
  const colors = ["#57C9BD", "#F1A7A0", "#57C9BD", "#F8D77B", "#57C9BD"];
  return (
    <svg viewBox="0 0 64 64" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <rect x="2" y="2" width="60" height="60" rx="22" fill="#FFF9ED" />
      <g transform="translate(32 32)">
        {petals.map((deg, i) => (
          <ellipse key={deg} cx="0" cy="-12.5" rx="7.6" ry="11" fill={colors[i]} transform={`rotate(${deg})`} />
        ))}
        <circle r="7.4" fill="#28786E" />
        <circle r="3.2" fill="#F8D77B" />
      </g>
      <rect x="2" y="2" width="60" height="60" rx="22" fill="none" stroke="#28786E" strokeOpacity="0.14" strokeWidth="2" />
    </svg>
  );
}
