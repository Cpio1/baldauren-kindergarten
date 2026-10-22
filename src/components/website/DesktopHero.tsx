import { ArrowDown, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/BrandIcons";
import { Cloud, Dot, Ring, Sparkle, Star } from "@/components/shared/Decor";
import { MediaView } from "@/components/shared/MediaView";
import { Reveal } from "@/components/shared/Reveal";
import { SceneArt } from "@/components/shared/SceneArt";
import { club, heroFacts, links, photos, ui } from "@/data/kindergarten";
import type { Media } from "@/lib/media";

const SIZES = "(min-width: 1280px) 420px, 34vw";

export function DesktopHero({ media }: { media: Media | null }) {
  return (
    <section id="home" data-section aria-labelledby="d-hero-title" className="relative overflow-hidden pt-16">
      {/* soft wash behind the composition */}
      <div aria-hidden="true" className="absolute top-0 -right-24 h-[88%] w-[52%] rounded-bl-[12rem] bg-turquoise-mist" />

      <div className="d-container relative grid grid-cols-12 items-center gap-8 py-[clamp(1.75rem,5vh,3.5rem)]">
        <div className="col-span-7">
          <Reveal>
            <p className="eyebrow">{club.address.city} · Қалқаман-2</p>
            <h1 id="d-hero-title" className="d-h1 mt-4 font-semibold text-ink">
              <span className="text-deep">«{club.name}»</span>
              <br />
              балалар клубы
            </h1>
            <p className="mt-4 max-w-[30rem] font-display text-[clamp(1.05rem,0.7rem+0.6vw,1.3rem)] leading-snug font-medium text-ink">
              {club.slogan}
            </p>
            <p className="mt-3 max-w-[31rem] text-[1.02rem] leading-relaxed text-ink-soft">{club.lead}</p>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 flex flex-wrap items-center gap-3">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="h-5 w-5" />
              {ui.contactUs}
              <span className="sr-only">({ui.newTab})</span>
            </a>
            <a href="#about" className="btn btn-ghost">
              {ui.more}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="mt-[clamp(1.5rem,4vh,2.5rem)] flex max-w-[32rem] items-stretch divide-x divide-deep/12 rounded-[1.5rem] bg-white/80 py-3 shadow-soft">
              {heroFacts.map((f) => (
                <li key={f.unit} className="flex-1 px-5">
                  <p className="flex items-baseline gap-1.5">
                    <span className="font-display text-[1.6rem] leading-none font-semibold text-deep">{f.value}</span>
                    <span className="font-bold text-ink">{f.unit}</span>
                  </p>
                  <p className="mt-1 text-[0.8rem] font-semibold text-ink-soft">{f.label}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* photo composition */}
        <div className="relative col-span-5">
          <Reveal delay={0.1} className="relative mx-auto w-[min(100%,25rem)]">
            <div
              aria-hidden="true"
              className="absolute -top-3 -left-5 h-[92%] w-[94%] rotate-[-5deg] rounded-[46%_54%_42%_58%/52%_44%_56%_48%] bg-yellow/70"
            />
            <div className="relative aspect-[4/5] max-h-[calc(100svh-12rem)] min-h-[20rem] overflow-hidden rounded-[44%_56%_48%_52%/40%_42%_58%_60%] bg-turquoise-soft shadow-card">
              {media ? (
                <MediaView media={media} alt={photos.hero.alt} objectPosition={photos.hero.focus} sizes={SIZES} hero />
              ) : (
                <SceneArt variant="hero" className="absolute inset-0" />
              )}
            </div>

            <div className="absolute top-[12%] -right-6 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-card">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-coral-soft text-deep">
                <Clock className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.7rem] font-bold text-ink-soft">Жұмыс уақыты</span>
                <span className="block font-display text-[0.9rem] font-semibold text-ink">{club.hours.label}</span>
              </span>
            </div>
            <div className="absolute bottom-[9%] -left-8 rounded-[1.25rem_1.25rem_1.25rem_0.4rem] bg-deep px-4 py-2.5 text-cream shadow-deep">
              <span className="block text-[0.7rem] font-bold text-cream/75">Тәрбие тілі</span>
              <span className="block font-display text-[0.95rem] font-semibold">Қазақ тілі</span>
            </div>

            <Star className="animate-drift absolute -top-4 right-10 h-7 w-7 text-coral" />
            <Sparkle className="animate-twinkle absolute top-[44%] -right-10 h-5 w-5 text-turquoise" />
            <Ring className="absolute -bottom-3 right-6 h-10 w-10 text-turquoise" />
            <Dot className="absolute bottom-[30%] -left-10 h-3 w-3 bg-coral" />
          </Reveal>
          <Cloud className="animate-drift-slow absolute top-2 left-0 h-8 w-14 text-white" />
        </div>
      </div>
    </section>
  );
}
