import { ArrowDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/BrandIcons";
import { Dot, Sparkle, Star } from "@/components/shared/Decor";
import { MediaView } from "@/components/shared/MediaView";
import { SceneArt } from "@/components/shared/SceneArt";
import { club, heroFacts, links, photos, ui } from "@/data/kindergarten";
import type { Media } from "@/lib/media";

const SIZES = "(min-width: 576px) 544px, calc(100vw - 2rem)";

/**
 * Mobile hero: text first, then an arch-framed photo with the three facts docked under it.
 * No scroll-reveal here — the first screen paints immediately.
 */
export function MobileHero({ media }: { media: Media | null }) {
  return (
    <section id="home" data-section aria-labelledby="m-hero-title" className="relative overflow-hidden pt-14">
      <div aria-hidden="true" className="absolute top-0 right-0 h-48 w-40 rounded-bl-[5rem] bg-turquoise-mist" />

      <div className="m-container relative pt-5 pb-10">
        <p className="eyebrow">{club.address.city} · Қалқаман-2</p>
        <h1 id="m-hero-title" className="m-h1 mt-3 font-semibold text-ink">
          <span className="text-deep">«{club.name}»</span>
          <br />
          балалар клубы
        </h1>
        <p className="mt-3 font-display text-[1rem] leading-snug font-medium text-ink">{club.slogan}</p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{club.lead}</p>

        <div className="mt-5 grid grid-cols-1 gap-2.5 min-[360px]:grid-cols-[1fr_auto]">
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-4">
            <WhatsAppIcon className="h-5 w-5" />
            {ui.contactUs}
            <span className="sr-only">({ui.newTab})</span>
          </a>
          <a href="#about" className="btn btn-ghost !px-4">
            {ui.more}
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative mx-auto mt-7 w-[min(100%,26rem)]">
          <div aria-hidden="true" className="absolute inset-x-5 -top-2.5 bottom-10 rounded-t-full bg-yellow/60" />
          <div className="relative aspect-[1/1] max-h-[56svh] w-full overflow-hidden rounded-t-full rounded-b-[2rem] bg-turquoise-soft shadow-card">
            {media ? <MediaView media={media} alt={photos.hero.alt} objectPosition={photos.hero.focus} sizes={SIZES} hero /> : <SceneArt variant="hero" className="absolute inset-0" />}
          </div>
          <ul className="relative -mt-8 mx-3 grid grid-cols-3 rounded-[1.25rem] bg-white py-2.5 shadow-card">
            {heroFacts.map((f, i) => (
              <li key={f.unit} className={`px-2 text-center ${i ? "border-l border-deep/10" : ""}`}>
                <p className="font-display text-[1.15rem] leading-none font-semibold text-deep">{f.value}</p>
                <p className="mt-1 text-[0.8rem] font-bold text-ink-soft">
                  {f.unit} {f.unit === "мезгіл" ? "тамақ" : ""}
                </p>
              </li>
            ))}
          </ul>
          <Star className="animate-drift absolute top-[8%] -left-1 h-6 w-6 text-coral" />
          <Sparkle className="absolute top-[30%] -right-1 h-4 w-4 text-turquoise" />
          <Dot className="absolute top-[4%] right-[16%] h-2.5 w-2.5 bg-deep/30" />
        </div>
      </div>
    </section>
  );
}
