"use client";

import { AnimatePresence, m } from "motion/react";
import { ChevronDown } from "lucide-react";
import { InstagramIcon } from "@/components/shared/BrandIcons";
import { Cloud, Star } from "@/components/shared/Decor";
import { GalleryTile } from "@/components/shared/GalleryTile";
import { Lightbox } from "@/components/shared/Lightbox";
import { Reveal } from "@/components/shared/Reveal";
import { club, galleryCopy as g, links, ui } from "@/data/kindergarten";
import { toRows, useGallery } from "@/hooks/useGallery";
import type { Media } from "@/lib/media";

const INITIAL = 6;

export function DesktopGallery({ items }: { items: Media[] }) {
  const gal = useGallery(items, INITIAL);

  if (items.length === 0) {
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
            <InstagramLink />
          </Reveal>
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
        </div>
      </section>
    );
  }

  // Heading column on the left, photo rows on the right: rows stay low enough that six photos
  // fit on a 1366 × 768 screen together with the heading.
  return (
    <section id="gallery" data-section aria-labelledby="d-gallery-title" className="d-section relative bg-white/60">
      <div className="d-container grid grid-cols-12 items-start gap-10">
        <Reveal className="sticky top-24 col-span-3">
          <p className="eyebrow">{g.eyebrow}</p>
          <h2 id="d-gallery-title" className="d-h2 mt-3 font-semibold text-ink">
            {g.title}
          </h2>
          <p className="mt-3 text-[1.02rem] text-ink-soft">{g.lead}</p>
          <div className="mt-6 flex flex-col items-start gap-2.5">
            {gal.canExpand && (
              <button type="button" onClick={gal.toggle} aria-expanded={gal.expanded} aria-controls="d-gallery-grid" className="btn btn-primary">
                {gal.expanded ? g.less : `${g.more} (${gal.hiddenCount})`}
                <ChevronDown className={`h-4 w-4 transition-transform ${gal.expanded ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            )}
            <InstagramLink />
          </div>
          <Star className="animate-drift mt-8 h-6 w-6 text-yellow" />
        </Reveal>

        <div id="d-gallery-grid" className="col-span-9 space-y-3.5">
          {toRows(gal.visible, 3, 3.2).map((row) => (
            <ul key={row.cells[0].item.src} className="flex gap-3.5">
              {row.spacer > 0 && <li aria-hidden="true" style={{ flex: `${row.spacer / 2} 1 0%` }} />}
              <AnimatePresence initial={false}>
                {row.cells.map(({ item, index, ratio }) => (
                  <m.li
                    key={item.src}
                    style={{ flex: `${ratio} 1 0%` }}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: index >= INITIAL ? (index - INITIAL) * 0.04 : 0 }}
                  >
                    <GalleryTile
                      item={item}
                      n={index + 1}
                      sizes="(min-width: 1280px) 400px, 32vw"
                      onOpen={() => gal.show(index)}
                      className={`shadow-soft ${["rounded-[1.5rem]", "rounded-[1.5rem_1.5rem_1.5rem_0.5rem]", "rounded-[0.5rem_1.5rem_1.5rem_1.5rem]"][index % 3]}`}
                    />
                  </m.li>
                ))}
              </AnimatePresence>
              {row.spacer > 0 && <li aria-hidden="true" style={{ flex: `${row.spacer / 2} 1 0%` }} />}
            </ul>
          ))}
        </div>
        <Lightbox items={items} index={gal.open} onClose={gal.close} onStep={gal.step} />
      </div>
    </section>
  );
}

function InstagramLink() {
  return (
    <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-10 !text-sm">
      <InstagramIcon className="h-4 w-4" />
      {club.instagram.handle}
      <span className="sr-only">({ui.newTab})</span>
    </a>
  );
}
