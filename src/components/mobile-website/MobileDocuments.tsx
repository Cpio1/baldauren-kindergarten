import { ArrowUpRight, FolderOpen } from "lucide-react";
import { DocStack } from "@/components/shared/DocStack";
import { Sparkle, Star } from "@/components/shared/Decor";
import { Reveal } from "@/components/shared/Reveal";
import { documentsCopy as d, links, ui } from "@/data/kindergarten";

/** A single yellow card: document art beside the heading, a short note and a full-width button. */
export function MobileDocuments() {
  return (
    <section id="documents" data-section aria-labelledby="m-docs-title" className="m-section relative">
      <div className="m-container">
        <Reveal y={12} className="relative overflow-hidden rounded-[1.75rem_1.75rem_3.5rem_1.75rem] bg-yellow-soft p-5">
          <div aria-hidden="true" className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-cream/70" />
          <div className="relative flex items-center gap-4">
            <DocStack className="h-[4.5rem] w-[4.5rem] shrink-0" />
            <div>
              <p className="eyebrow">{d.eyebrow}</p>
              <h2 id="m-docs-title" className="m-h2 mt-1.5 font-semibold text-ink">
                {d.title}
              </h2>
            </div>
          </div>
          <p className="relative mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{d.lead}</p>
          <a href={links.documents} target="_blank" rel="noopener noreferrer" className="btn btn-primary relative mt-4 w-full">
            <FolderOpen className="h-5 w-5" aria-hidden="true" />
            {d.open}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">({ui.newTab})</span>
          </a>
          <Star className="absolute top-5 right-6 h-4 w-4 text-yellow" />
          <Sparkle className="absolute right-12 top-12 h-3 w-3 text-coral" />
        </Reveal>
      </div>
    </section>
  );
}
