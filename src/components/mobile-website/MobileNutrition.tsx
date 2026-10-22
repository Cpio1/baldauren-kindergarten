import { MessageCircle } from "lucide-react";
import { Leaf } from "@/components/shared/Decor";
import { Reveal } from "@/components/shared/Reveal";
import { club, nutrition as n, ui, whatsappLink } from "@/data/kindergarten";

const plate = ["bg-turquoise", "bg-yellow", "bg-coral", "bg-turquoise", "bg-yellow"];

/** A turquoise card: big «5» beside a row of five numbered plates, then short points. */
export function MobileNutrition() {
  return (
    <section id="nutrition" data-section aria-labelledby="m-food-title" className="m-section relative">
      <div className="m-container">
        <Reveal y={12}>
          <p className="eyebrow">{n.eyebrow}</p>
          <h2 id="m-food-title" className="m-h2 mt-2 font-semibold text-ink">
            {n.title}
          </h2>
        </Reveal>

        <Reveal y={12}>
          <div className="relative mt-5 overflow-hidden rounded-[1.75rem_1.75rem_1.75rem_3.5rem] bg-deep p-5 text-cream">
            <div aria-hidden="true" className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-turquoise/30" />
            <div className="relative flex items-center gap-4">
              <span className="font-display text-[3.4rem] leading-none font-semibold text-yellow">{club.mealsPerDay}</span>
              <span className="font-display text-[1.05rem] leading-tight font-semibold">
                мезгіл
                <br />
                тамақтану
              </span>
            </div>
            <ol className="relative mt-4 flex justify-between" aria-label={n.highlight}>
              {plate.map((c, i) => (
                <li key={i} className="grid h-11 w-11 place-items-center rounded-full bg-cream/12">
                  <span className={`grid h-7 w-7 place-items-center rounded-full font-display text-[0.8rem] font-semibold text-ink ${c}`}>{i + 1}</span>
                </li>
              ))}
            </ol>
            <Leaf className="absolute right-4 bottom-[45%] h-6 w-6 text-turquoise" />
          </div>
        </Reveal>

        <Reveal y={12}>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">{n.lead}</p>
          <ul className="mt-4 space-y-2.5">
            {n.points.map((p) => (
              <li key={p.title} className="rounded-[1.1rem] bg-turquoise-mist px-4 py-3">
                <h3 className="font-display text-[0.9rem] font-semibold text-deep">{p.title}</h3>
                <p className="mt-0.5 text-[0.87rem] leading-snug text-ink-soft">{p.text}</p>
              </li>
            ))}
          </ul>
          <a href={whatsappLink(n.askMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-4 w-full">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {n.ask}
            <span className="sr-only">({ui.newTab})</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
