"use client";

import { AnimatePresence, m } from "motion/react";
import { ChevronDown } from "lucide-react";
import { InstagramIcon } from "@/components/shared/BrandIcons";
import { Cloud, Star } from "@/components/shared/Decor";
import { GalleryTile } from "@/components/shared/GalleryTile";
import { Lightbox } from "@/components/shared/Lightbox";
import { Reveal } from "@/components/shared/Reveal";
import { club, galleryCopy as g, links, ui } from "@/data/kindergarten";
import { useGallery } from "@/hooks/useGallery";
import type { Media } from "@/lib/media";

const INITIAL = 6;

export function DesktopGallery({ items }: { items: Media[] }) {
  const gal = useGallery(items, INITIAL);

  return (
    <section id="gallery" data-section aria-labelledby="d-gallery-title" className="d-section relative bg-white/60">
      <div className="d-container">
        <Reveal className="flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow">{g.eyebrow}</p>
            <h2 id="d-gallery-title" className="d-h2 mt-3 font-semibold text-ink">
              {g.title}
            </h2>
          </div>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-10 !text-sm">
            <InstagramIcon className="h-4 w-4" />
            {club.instagram.handle}
            <span className="sr-only">({ui.newTab})</span>
          </a>
        </Reveal>

        {items.length === 0 ? (
          <Reveal className="relative mt-8 flex items-center gap-8 overflow-hidden rounded-[2rem] border-2 border-dashed border-turquoise/40 bg-turquoise-mist/60 px-10 py-9">
            <div className="grid shrink-0 grid-cols-3 gap-2" aria-hidden="true">
              {["bg-turquoise-soft", "bg-yellow-soft rounded-full", "bg-coral-soft", "bg-coral-soft rounded-full", "bg-white", "bg-turquoise-soft rounded-full"].map((c, i) => (
                <span key={i} className={`h-12 w-12 rounded-2xl ${c}`} />
              ))}
            </div>
            <div className="max-w-[30rem]">
              <h3 className="font-display text-[1.2rem] font-semibold text-ink">{g.emptyTitle}</h3>
              <p className="mt-2 text-ink-soft">{g.emptyText}</p>
            </div>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-auto">
              <InstagramIcon className="h-5 w-5" />
              Instagram
              <span className="sr-only">({ui.newTab})</span>
            </a>
            <Cloud className="absolute top-3 right-[30%] h-6 w-10 text-white" />
            <Star className="absolute bottom-4 left-[38%] h-5 w-5 text-yellow" />
          </Reveal>
        ) : (
          <>
            <ul className="mt-8 columns-3 gap-4 [&>li]:mb-4">
              <AnimatePresence initial={false}>
                {gal.visible.map((item, i) => (
                  <m.li
                    key={item.src}
                    className="break-inside-avoid"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: i >= INITIAL ? (i - INITIAL) * 0.04 : 0 }}
                  >
                    <GalleryTile
                      item={item}
                      n={i + 1}
                      sizes="(min-width: 1280px) 380px, 31vw"
                      onOpen={() => gal.show(i)}
                      className={`shadow-soft ${["rounded-[1.5rem]", "rounded-[1.5rem_1.5rem_1.5rem_0.5rem]", "rounded-[0.5rem_1.5rem_1.5rem_1.5rem]"][i % 3]}`}
                    />
                  </m.li>
                ))}
              </AnimatePresence>
            </ul>
            {gal.canExpand && (
              <div className="mt-4 flex justify-center">
                <button type="button" onClick={gal.toggle} aria-expanded={gal.expanded} className="btn btn-ghost">
                  {gal.expanded ? g.less : `${g.more} (${gal.hiddenCount})`}
                  <ChevronDown className={`h-4 w-4 transition-transform ${gal.expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
              </div>
            )}
            <Lightbox items={items} index={gal.open} onClose={gal.close} onStep={gal.step} />
          </>
        )}
      </div>
    </section>
  );
}
