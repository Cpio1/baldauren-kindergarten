import { ImageResponse } from "next/og";
import { OgEmblem } from "@/components/shared/og-art";
import { club } from "@/data/kindergarten";

export const alt = "«Балдаурен» балабақшасы — Алматы, Қалқаман-2";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Google Fonts serves TTF to clients without a modern UA — the format Satori reads. */
async function loadFont(family: string, weight: number, text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const title = `«${club.name}»`;
  const subtitle = club.kind;
  const facts = ["2–5 жас", "4 топ", "5 мезгіл тамақтану", "Қазақ тілінде"];
  const place = "Алматы · Қалқаман-2 · Кенесбаев көшесі, 1";

  const [display, body] = await Promise.all([
    loadFont("Montserrat", 600, title + subtitle),
    loadFont("Nunito", 800, facts.join("") + place),
  ]);
  const fonts = [
    ...(display ? [{ name: "Montserrat", data: display, weight: 600 as const }] : []),
    ...(body ? [{ name: "Nunito", data: body, weight: 800 as const }] : []),
  ];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#FFF9ED", position: "relative", fontFamily: "Nunito" }}>
        <div style={{ position: "absolute", right: -120, top: -80, width: 560, height: 560, borderRadius: 999, background: "#D5F1ED", display: "flex" }} />
        <div style={{ position: "absolute", right: 120, bottom: -90, width: 240, height: 240, borderRadius: 999, background: "#FDF0C8", display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 30, color: "#28786E", fontWeight: 800 }}>{place}</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 22, fontFamily: "Montserrat" }}>
            <span style={{ fontSize: 76, color: "#28786E", lineHeight: 1.05 }}>{title}</span>
            <span style={{ fontSize: 64, color: "#1F3A37", lineHeight: 1.1 }}>{subtitle}</span>
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
            {facts.map((f) => (
              <span key={f} style={{ display: "flex", background: "#FFFFFF", color: "#1F3A37", borderRadius: 999, padding: "12px 24px", fontSize: 28, fontWeight: 800 }}>
                {f}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", right: 80, top: 60, display: "flex" }}>
          <OgEmblem size={230} />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
