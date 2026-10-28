import { ArrowUpRight, FolderOpen } from "lucide-react";
import { DocStack } from "@/components/shared/DocStack";
import { Sparkle, Squiggle, Star } from "@/components/shared/Decor";
import { Reveal } from "@/components/shared/Reveal";
import { documentsCopy as d, links, ui } from "@/data/kindergarten";

/** One low banner: document art, heading with a short note, and the Google Drive button. */
export function DesktopDocuments() {
  return (
    <section id="documents" data-section aria-labelledby="d-docs-title" className="d-section relative">
      <div className="d-container">
        <Reveal className="relative flex items-center gap-10 overflow-hidden rounded-[2.5rem_2.5rem_6rem_2.5rem] bg-yellow-soft px-12 py-9">
          <div aria-hidden="true" className="absolute -bottom-20 -left-14 h-48 w-48 rounded-full bg-cream/70" />
          <DocStack className="h-28 w-28 shrink-0" />

          <div className="relative max-w-[34rem]">
            <p className="eyebrow">{d.eyebrow}</p>
            <h2 id="d-docs-title" className="d-h2 mt-2 font-semibold text-ink">
              {d.title}
            </h2>
            <p className="mt-2.5 text-[1rem] leading-relaxed text-ink-soft">{d.lead}</p>
          </div>

          <div className="relative ml-auto flex shrink-0 flex-col items-center gap-2">
            <a href={links.documents} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FolderOpen className="h-5 w-5" aria-hidden="true" />
              {d.open}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">({ui.newTab})</span>
            </a>
            <span className="text-[0.8rem] font-semibold text-ink-soft">{d.where}</span>
          </div>

          <Star className="animate-twinkle absolute top-6 right-[24%] h-5 w-5 text-yellow" />
          <Sparkle className="absolute bottom-6 left-[34%] h-4 w-4 text-coral" />
          <Squiggle className="absolute top-7 right-10 h-3 w-12 text-turquoise/60" />
        </Reveal>
      </div>
    </section>
  );
}
