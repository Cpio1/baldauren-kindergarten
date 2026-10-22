import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { Cloud, HalfSun, Leaf, Star } from "@/components/shared/Decor";
import { Reveal } from "@/components/shared/Reveal";
import { club, groups, groupsCopy as g, ui, whatsappLink } from "@/data/kindergarten";

const tints = [
  { card: "bg-turquoise-soft", num: "text-deep", Art: Cloud, art: "text-white h-7 w-12" },
  { card: "bg-yellow-soft", num: "text-deep", Art: HalfSun, art: "text-yellow h-7 w-12" },
  { card: "bg-coral-soft", num: "text-deep", Art: Star, art: "text-coral h-8 w-8" },
  { card: "bg-white shadow-soft", num: "text-deep", Art: Leaf, art: "text-turquoise h-8 w-8" },
];

export function DesktopGroups() {
  return (
    <section id="groups" data-section aria-labelledby="d-groups-title" className="d-section relative bg-white/60">
      <div className="d-container grid grid-cols-12 items-center gap-10">
        <Reveal className="col-span-5">
          <p className="eyebrow">{g.eyebrow}</p>
          <h2 id="d-groups-title" className="d-h2 mt-3 font-semibold text-ink">
            {g.title}
          </h2>
          <p className="mt-4 max-w-[28rem] text-[1.02rem] leading-relaxed text-ink-soft">{g.lead}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {[`${club.groupsCount} топ`, club.ages.label, "Қазақ тілінде"].map((t) => (
              <li key={t} className="rounded-full bg-turquoise-mist px-3.5 py-1.5 text-sm font-bold text-deep">
                {t}
              </li>
            ))}
          </ul>
          <a href={whatsappLink(g.askMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-yellow mt-7">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {g.ask}
            <span className="sr-only">({ui.newTab})</span>
          </a>
        </Reveal>

        <ol className="col-span-7 grid grid-cols-2 gap-4">
          {groups.map((group, i) => {
            const t = tints[i % tints.length];
            return (
              <Reveal as="li" key={group.number} delay={i * 0.06} className={i % 2 ? "translate-y-5" : ""}>
                <article className={`relative flex h-full min-h-[8.5rem] flex-col overflow-hidden rounded-[1.75rem] p-5 ${t.card}`}>
                  {group.photo && (
                    <div className="relative -mx-5 -mt-5 mb-4 aspect-[16/9]">
                      <Image src={group.photo} alt={group.name ?? `${group.number}-топ`} fill sizes="300px" className="object-cover" />
                    </div>
                  )}
                  <div className="flex items-start justify-between">
                    <h3>
                      <span className="flex items-baseline">
                        <span className={`font-display text-[2.4rem] leading-none font-semibold ${t.num}`}>{group.number}</span>
                        <span className="font-display text-[1.05rem] font-semibold text-ink">-топ</span>
                      </span>
                      {group.name && <span className="mt-1 block font-display text-[1rem] font-semibold text-ink">{group.name}</span>}
                    </h3>
                    <t.Art className={`shrink-0 ${t.art}`} />
                  </div>
                  {group.note ? (
                    <p className="mt-auto pt-4 text-[0.85rem] leading-snug font-semibold text-ink-soft">{group.note}</p>
                  ) : (
                    <span aria-hidden="true" className="mt-auto pt-4 flex gap-1">
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
      </div>
    </section>
  );
}
