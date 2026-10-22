import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { Cloud, HalfSun, Leaf, Star } from "@/components/shared/Decor";
import { Reveal } from "@/components/shared/Reveal";
import { groups, groupsCopy as g, ui, whatsappLink } from "@/data/kindergarten";

const tints = [
  { card: "bg-turquoise-soft", Art: Cloud, art: "h-5 w-9 text-white" },
  { card: "bg-yellow-soft", Art: HalfSun, art: "h-5 w-9 text-yellow" },
  { card: "bg-coral-soft", Art: Star, art: "h-6 w-6 text-coral" },
  { card: "bg-white shadow-soft", Art: Leaf, art: "h-6 w-6 text-turquoise" },
];

/** Compact 2 × 2 tiles (~7rem tall) so all four groups fit on one phone screen. */
export function MobileGroups() {
  return (
    <section id="groups" data-section aria-labelledby="m-groups-title" className="m-section relative bg-white/60">
      <div className="m-container">
        <Reveal y={12}>
          <p className="eyebrow">{g.eyebrow}</p>
          <h2 id="m-groups-title" className="m-h2 mt-2 font-semibold text-ink">
            {g.title}
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{g.lead}</p>
        </Reveal>

        <ol className="mt-5 grid grid-cols-2 gap-3">
          {groups.map((group, i) => {
            const t = tints[i % tints.length];
            return (
              <Reveal as="li" y={10} key={group.number} delay={(i % 2) * 0.05}>
                <article className={`relative flex h-full min-h-[7rem] flex-col overflow-hidden rounded-[1.4rem] p-3.5 ${t.card}`}>
                  {group.photo && (
                    <div className="relative -mx-3.5 -mt-3.5 mb-3 aspect-[4/3]">
                      <Image src={group.photo} alt={group.name ?? `${group.number}-топ`} fill sizes="45vw" className="object-cover" />
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-2">
                    <h3>
                      <span className="flex items-baseline">
                        <span className="font-display text-[1.9rem] leading-none font-semibold text-deep">{group.number}</span>
                        <span className="font-display text-[0.95rem] font-semibold text-ink">-топ</span>
                      </span>
                      {group.name && <span className="mt-1 block font-display text-[0.9rem] font-semibold text-ink">{group.name}</span>}
                    </h3>
                    <t.Art className={`shrink-0 ${t.art}`} />
                  </div>
                  {group.note ? (
                    <p className="mt-auto pt-3 text-[0.85rem] leading-snug font-semibold text-ink-soft">{group.note}</p>
                  ) : (
                    <span aria-hidden="true" className="mt-auto pt-3 flex gap-1">
                      {Array.from({ length: group.number }, (_, k) => (
                        <span key={k} className="h-1.5 w-1.5 rounded-full bg-deep/35" />
                      ))}
                    </span>
                  )}
                </article>
              </Reveal>
            );
          })}
        </ol>

        <Reveal y={10}>
          <a href={whatsappLink(g.askMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-yellow mt-5 w-full">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {g.ask}
            <span className="sr-only">({ui.newTab})</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
