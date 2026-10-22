import { AdvantageIcon } from "@/components/shared/AdvantageIcon";
import { Sparkle } from "@/components/shared/Decor";
import { Reveal } from "@/components/shared/Reveal";
import { advantages } from "@/data/kindergarten";

const tints = ["bg-turquoise-mist", "bg-yellow-soft", "bg-coral-soft", "bg-turquoise-mist"];

/** A single soft card with icon rows — denser than tiles and easy to scan with a thumb. */
export function MobileAdvantages() {
  return (
    <section id="advantages" data-section aria-labelledby="m-adv-title" className="m-section relative">
      <div className="m-container">
        <Reveal y={12} className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Неліктен біз</p>
            <h2 id="m-adv-title" className="m-h2 mt-2 font-semibold text-ink">
              Біздің артықшылықтар
            </h2>
          </div>
          <Sparkle className="mb-1.5 h-5 w-5 text-yellow" />
        </Reveal>

        <Reveal y={12}>
          <ul className="mt-5 divide-y divide-deep/8 rounded-[1.75rem] bg-white px-4 shadow-soft">
            {advantages.map((a, i) => (
              <li key={a.title} className="flex items-start gap-3.5 py-4">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-[1rem] ${tints[i]}`}>
                  <AdvantageIcon kind={a.icon} className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="font-display text-[0.95rem] leading-snug font-semibold text-ink">{a.title}</h3>
                  <p className="mt-1 text-[0.88rem] leading-snug text-ink-soft">{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
