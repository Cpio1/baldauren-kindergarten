/** Emblem markup for next/og (Satori renders inline SVG). */
export function OgEmblem({ size }: { size: number }) {
  const colors = ["#57C9BD", "#F1A7A0", "#57C9BD", "#F8D77B", "#57C9BD"];
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <rect x="2" y="2" width="60" height="60" rx="22" fill="#FFF9ED" />
      {/* Satori ignores rotate(), so petals are round and pre-positioned */}
      {colors.map((c, i) => {
        const a = (i * 72 * Math.PI) / 180;
        return <circle key={i} cx={32 + 12 * Math.sin(a)} cy={32 - 12 * Math.cos(a)} r="8.6" fill={c} />;
      })}
      <circle cx="32" cy="32" r="7.4" fill="#28786E" />
      <circle cx="32" cy="32" r="3.2" fill="#F8D77B" />
    </svg>
  );
}
