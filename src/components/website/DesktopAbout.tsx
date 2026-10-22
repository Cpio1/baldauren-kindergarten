import { Emblem } from "@/components/shared/Emblem";
import { Leaf, Squiggle, Star } from "@/components/shared/Decor";
import { MediaView } from "@/components/shared/MediaView";
import { Reveal } from "@/components/shared/Reveal";
import { SceneArt } from "@/components/shared/SceneArt";
import { about } from "@/data/kindergarten";
import type { Media } from "@/lib/media";

export function DesktopAbout({ media }: { media: Media | null }) {
  return (
    <section id="about" data-section aria-labelledby="d-about-title" className="d-section relative">
      <div className="d-container grid grid-cols-12 items-center gap-12">
        <Reveal className="relative col-span-5">
          <div aria-hidden="true" className="absolute -right-4 -bottom-4 h-full w-full rounded-[2.5rem_7rem_2.5rem_2.5rem] bg-coral-soft" />
          <div className="relative aspect-[5/4] max-h-[calc(100svh-10rem)] overflow-hidden rounded-[2.5rem_7rem_2.5rem_2.5rem] bg-yellow-soft shadow-card">
            {media ? (
              <MediaView media={media} alt="«Балдаурен» балалар клубындағы күн" sizes="(min-width: 1280px) 460px, 38vw" />
            ) : (
              <SceneArt variant="about" className="absolute inset-0" />
            )}
          </div>
          <Squiggle className="absolute -top-6 left-8 h-5 w-20 text-turquoise" />
          <Leaf className="animate-drift-slow absolute -bottom-7 -left-5 h-10 w-10 text-turquoise" />
        </Reveal>

        <div className="col-span-7 xl:pl-6">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 id="d-about-title" className="d-h2 mt-3 font-semibold text-ink">
              {about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="mt-5 space-y-3.5 text-[1.02rem] leading-relaxed text-ink-soft">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.12}>
            <figure className="relative mt-6 flex max-w-[34rem] items-center gap-4 rounded-[1.5rem_1.5rem_1.5rem_0.5rem] bg-turquoise-mist py-4 pr-6 pl-4">
              <Emblem className="h-12 w-12 shrink-0" />
              <blockquote className="font-display text-[1rem] leading-snug font-medium text-deep">{about.quote}</blockquote>
              <Star className="absolute -top-2.5 -right-2.5 h-6 w-6 text-yellow" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
