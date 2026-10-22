"use client";

import { AnimatePresence, m } from "motion/react";
import { ChevronDown } from "lucide-react";
import { InstagramIcon } from "@/components/shared/BrandIcons";
import { GalleryTile } from "@/components/shared/GalleryTile";
import { Lightbox } from "@/components/shared/Lightbox";
import { Reveal } from "@/components/shared/Reveal";
import { club, galleryCopy as g, links, ui } from "@/data/kindergarten";
import { toRows, useGallery } from "@/hooks/useGallery";
import type { Media } from "@/lib/media";

const INITIAL = 4;

/** Two photos per row, each at its own proportions (justified rows): nothing cropped, nothing oversized. */
export function MobileGallery({ items }: { items: Media[] }) {
  const gal = useGallery(items, INITIAL);

  return (
    <section id="gallery" data-section aria-labelledby="m-gallery-title" className="m-section relative bg-white/60">
      <div className="m-container">
        <Reveal y={12}>
          <p className="eyebrow">{g.eyebrow}</p>
          <h2 id="m-gallery-title" className="m-h2 mt-2 font-semibold text-ink">
            {g.title}
          </h2>
        </Reveal>

        {items.length === 0 ? (
          <Reveal y={12} className="mt-5 rounded-[1.5rem] border-2 border-dashed border-turquoise/40 bg-turquoise-mist/60 p-5 text-center">
            <div className="mx-auto grid w-max grid-cols-3 gap-1.5" aria-hidden="true">
              {["bg-turquoise-soft", "bg-yellow-soft rounded-full", "bg-coral-soft", "bg-coral-soft rounded-full", "bg-white", "bg-turquoise-soft rounded-full"].map((c, i) => (
                <span key={i} className={`h-8 w-8 rounded-xl ${c}`} />
              ))}
            </div>
            <h3 className="mt-4 font-display text-[1.02rem] font-semibold text-ink">{g.emptyTitle}</h3>
            <p className="mt-1.5 text-[0.9rem] text-ink-soft">{g.emptyText}</p>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
              <InstagramIcon className="h-5 w-5" />
              {club.instagram.handle}
              <span className="sr-only">({ui.newTab})</span>
            </a>
          </Reveal>
        ) : (
          <>
            <div className="mt-5 space-y-2.5">
              {toRows(gal.visible, 2, 1.7).map((row) => (
                <ul key={row.cells[0].item.src} className="flex gap-2.5">
                  {row.spacer > 0 && <li aria-hidden="true" style={{ flex: `${row.spacer / 2} 1 0%` }} />}
                  <AnimatePresence initial={false}>
                    {row.cells.map(({ item, index, ratio }) => (
                      <m.li
                        key={item.src}
                        style={{ flex: `${ratio} 1 0%` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <GalleryTile
                          item={item}
                          n={index + 1}
                          sizes="(min-width: 576px) 360px, 62vw"
                          onOpen={() => gal.show(index)}
                          className="rounded-[1.1rem]"
                        />
                      </m.li>
                    ))}
                  </AnimatePresence>
                  {row.spacer > 0 && <li aria-hidden="true" style={{ flex: `${row.spacer / 2} 1 0%` }} />}
                </ul>
              ))}
            </div>
            {gal.canExpand && (
              <button type="button" onClick={gal.toggle} aria-expanded={gal.expanded} className="btn btn-ghost mt-2 w-full">
                {gal.expanded ? g.less : `${g.more} (${gal.hiddenCount})`}
                <ChevronDown className={`h-4 w-4 transition-transform ${gal.expanded ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            )}
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 py-2 text-sm font-bold text-deep">
              <InstagramIcon className="h-4 w-4" />
              {club.instagram.handle}
              <span className="sr-only">({ui.newTab})</span>
            </a>
            <Lightbox items={items} index={gal.open} onClose={gal.close} onStep={gal.step} />
          </>
        )}
      </div>
    </section>
  );
}
