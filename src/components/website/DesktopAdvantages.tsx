import { AdvantageIcon } from "@/components/shared/AdvantageIcon";
import { Dot, Sparkle } from "@/components/shared/Decor";
import { Reveal } from "@/components/shared/Reveal";
import { advantages } from "@/data/kindergarten";

/** Four tiles, each with its own tint, corner shape and offset — a loose row rather than a grid. */
const looks = [
  { box: "bg-turquoise-mist rounded-[2rem_2rem_2rem_0.6rem]", shift: "" },
  { box: "bg-yellow-soft rounded-[0.6rem_2rem_2rem_2rem]", shift: "lg:translate-y-6" },
  { box: "bg-white shadow-soft rounded-[2rem]", shift: "" },
  { box: "bg-coral-soft rounded-[2rem_0.6rem_2rem_2rem]", shift: "lg:translate-y-6" },
];

export function DesktopAdvantages() {
  return (
    <section id="advantages" data-section aria-labelledby="d-adv-title" className="d-section relative !pt-4">
      <div className="d-container">
        <Reveal className="flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Неліктен біз</p>
            <h2 id="d-adv-title" className="d-h2 mt-3 font-semibold text-ink">
              Біздің артықшылықтар
            </h2>
          </div>
          <Sparkle className="animate-twinkle mb-2 h-6 w-6 text-yellow" />
        </Reveal>

        <ul className="mt-8 grid grid-cols-4 gap-5 pb-6">
          {advantages.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 0.06} className={looks[i].shift}>
              <article className={`group relative h-full p-5 transition-transform duration-300 hover:-translate-y-1 ${looks[i].box}`}>
                <AdvantageIcon kind={a.icon} className="h-11 w-11" />
                <h3 className="mt-4 font-display text-[1.02rem] leading-snug font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">{a.text}</p>
                <Dot className="absolute top-5 right-5 h-2.5 w-2.5 bg-deep/15" />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
