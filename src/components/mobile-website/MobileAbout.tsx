import { Emblem } from "@/components/shared/Emblem";
import { Squiggle } from "@/components/shared/Decor";
import { MediaView } from "@/components/shared/MediaView";
import { Reveal } from "@/components/shared/Reveal";
import { SceneArt } from "@/components/shared/SceneArt";
import { about } from "@/data/kindergarten";
import type { Media } from "@/lib/media";

export function MobileAbout({ media }: { media: Media | null }) {
  return (
    <section id="about" data-section aria-labelledby="m-about-title" className="m-section relative bg-white/60">
      <div className="m-container">
        <Reveal y={12}>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 id="m-about-title" className="m-h2 mt-2 font-semibold text-ink">
            {about.title}
          </h2>
        </Reveal>

        <Reveal y={12} className="relative mt-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem_4rem_1.75rem_1.75rem] bg-yellow-soft shadow-soft">
            {media ? (
              <MediaView media={media} alt="«Балдаурен» балалар клубындағы күн" sizes="(min-width: 576px) 544px, calc(100vw - 2rem)" />
            ) : (
              <SceneArt variant="about" className="absolute inset-0" />
            )}
          </div>
          <Squiggle className="absolute -bottom-3 left-6 h-4 w-16 text-coral" />
        </Reveal>

        <Reveal y={12} className="mt-6 space-y-3 text-[0.97rem] leading-relaxed text-ink-soft">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal y={12}>
          <figure className="mt-5 flex items-center gap-3 rounded-[1.25rem_1.25rem_1.25rem_0.4rem] bg-turquoise-mist p-3.5">
            <Emblem className="h-10 w-10 shrink-0" />
            <blockquote className="font-display text-[0.92rem] leading-snug font-medium text-deep">{about.quote}</blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
