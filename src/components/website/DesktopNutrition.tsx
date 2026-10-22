import { MessageCircle } from "lucide-react";
import { Leaf, Sparkle } from "@/components/shared/Decor";
import { Reveal } from "@/components/shared/Reveal";
import { club, nutrition as n, ui, whatsappLink } from "@/data/kindergarten";

const dotColors = ["bg-turquoise", "bg-yellow", "bg-coral", "bg-turquoise", "bg-yellow"];

/** Five small plates orbiting a centre «5» — one per meal of the day. */
function MealsOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-[min(100%,19rem)]">
      <div aria-hidden="true" className="absolute inset-[9%] rounded-full border-2 border-dashed border-deep/15" />
      <div className="absolute inset-[24%] grid place-items-center rounded-full bg-white shadow-card">
        <div className="text-center">
          <span className="block font-display text-[3.4rem] leading-none font-semibold text-deep">{club.mealsPerDay}</span>
          <span className="mt-1 block text-[0.85rem] font-bold text-ink-soft">мезгіл</span>
        </div>
      </div>
      {Array.from({ length: club.mealsPerDay }, (_, i) => {
        const angle = (i / club.mealsPerDay) * 2 * Math.PI - Math.PI / 2;
        return (
          <span
            key={i}
            aria-hidden="true"
            className="absolute grid h-[19%] w-[19%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-soft"
            style={{ left: `${50 + 41 * Math.cos(angle)}%`, top: `${50 + 41 * Math.sin(angle)}%` }}
          >
            <span className={`grid h-[62%] w-[62%] place-items-center rounded-full font-display text-[0.85rem] font-semibold text-ink ${dotColors[i]}`}>{i + 1}</span>
          </span>
        );
      })}
    </div>
  );
}

export function DesktopNutrition() {
  return (
    <section id="nutrition" data-section aria-labelledby="d-food-title" className="d-section relative">
      <div className="d-container">
        <div className="relative grid grid-cols-12 items-center gap-10 overflow-hidden rounded-[2.75rem_2.75rem_2.75rem_6rem] bg-turquoise-mist px-12 py-[clamp(2.25rem,6vh,3.5rem)]">
          <div aria-hidden="true" className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-yellow-soft" />
          <Reveal className="relative col-span-5 col-start-1">
            <MealsOrbit />
          </Reveal>

          <div className="relative col-span-7">
            <Reveal>
              <p className="eyebrow">{n.eyebrow}</p>
              <h2 id="d-food-title" className="d-h2 mt-3 font-semibold text-ink">
                {n.title}
              </h2>
              <p className="mt-2 inline-flex rounded-full bg-deep px-3.5 py-1 font-display text-[0.95rem] font-semibold text-cream">{n.highlight}</p>
              <p className="mt-4 max-w-[34rem] text-[1.02rem] leading-relaxed text-ink-soft">{n.lead}</p>
            </Reveal>
            <ul className="mt-5 grid grid-cols-3 gap-3">
              {n.points.map((p, i) => (
                <Reveal as="li" key={p.title} delay={0.05 * i} className="rounded-[1.25rem] bg-white/85 p-4">
                  <h3 className="font-display text-[0.92rem] font-semibold text-deep">{p.title}</h3>
                  <p className="mt-1.5 text-[0.86rem] leading-snug text-ink-soft">{p.text}</p>
                </Reveal>
              ))}
            </ul>
            <a href={whatsappLink(n.askMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-5">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {n.ask}
              <span className="sr-only">({ui.newTab})</span>
            </a>
          </div>
          <Leaf className="animate-drift-slow absolute bottom-6 left-[40%] h-8 w-8 text-turquoise" />
          <Sparkle className="absolute top-8 left-10 h-5 w-5 text-coral" />
        </div>
      </div>
    </section>
  );
}
