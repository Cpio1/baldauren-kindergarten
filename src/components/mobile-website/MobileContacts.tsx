import { Clock, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/shared/BrandIcons";
import { Reveal } from "@/components/shared/Reveal";
import { TwoGisMap } from "@/components/shared/TwoGisMap";
import { club, contactsCopy as c, links, ui } from "@/data/kindergarten";

export function MobileContacts() {
  return (
    <section id="contacts" data-section aria-labelledby="m-contacts-title" className="m-section relative">
      <div className="m-container">
        <Reveal y={12}>
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 id="m-contacts-title" className="m-h2 mt-2 font-semibold text-ink">
            {c.title}
          </h2>
          <p className="mt-2 text-[0.95rem] text-ink-soft">{c.lead}</p>
        </Reveal>

        <Reveal y={12}>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <a href={links.call} className="flex flex-col items-center gap-1.5 rounded-[1.25rem] bg-yellow py-3 text-[0.82rem] font-bold text-ink">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Қоңырау
            </a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 rounded-[1.25rem] bg-deep py-3 text-[0.82rem] font-bold text-cream">
              <WhatsAppIcon className="h-5 w-5" />
              {c.whatsapp}
              <span className="sr-only">({ui.newTab})</span>
            </a>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 rounded-[1.25rem] bg-coral-soft py-3 text-[0.82rem] font-bold text-ink">
              <InstagramIcon className="h-5 w-5" />
              {c.instagram}
              <span className="sr-only">({ui.newTab})</span>
            </a>
          </div>

          <dl className="mt-4 space-y-3 rounded-[1.5rem] bg-white p-4 shadow-soft">
            <div className="flex gap-3">
              <dt className="grid h-9 w-9 shrink-0 place-items-center rounded-[0.8rem] bg-turquoise-soft text-deep">
                <MapPin className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                <span className="sr-only">{c.addressLabel}</span>
              </dt>
              <dd className="text-[0.92rem] leading-snug font-semibold text-ink">{club.address.full}</dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="grid h-9 w-9 shrink-0 place-items-center rounded-[0.8rem] bg-turquoise-soft text-deep">
                <Phone className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                <span className="sr-only">{c.phoneLabel}</span>
              </dt>
              <dd>
                <a href={links.call} className="text-[0.95rem] font-bold text-ink">
                  {club.phone.display}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="grid h-9 w-9 shrink-0 place-items-center rounded-[0.8rem] bg-turquoise-soft text-deep">
                <Clock className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                <span className="sr-only">{c.hoursLabel}</span>
              </dt>
              <dd className="text-[0.95rem] font-bold text-ink">{club.hours.label}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal y={12}>
          <div className="mt-4 rounded-[1.75rem] bg-white p-2 shadow-soft">
            <TwoGisMap touchGuard lift={0.0016} className="h-[clamp(20rem,52svh,26rem)] rounded-[1.4rem]" />
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <a href={links.twoGisCard} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-11 !px-3 !text-[0.85rem]">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {c.openIn2gis}
              <span className="sr-only">({ui.newTab})</span>
            </a>
            <a href={links.twoGisRoute} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-11 !px-3 !text-[0.85rem]">
              <Navigation className="h-4 w-4" aria-hidden="true" />
              {c.route}
              <span className="sr-only">({ui.newTab})</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
