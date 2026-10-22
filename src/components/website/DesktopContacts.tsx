import { Clock, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/shared/BrandIcons";
import { Sparkle, Star } from "@/components/shared/Decor";
import { Reveal } from "@/components/shared/Reveal";
import { TwoGisMap } from "@/components/shared/TwoGisMap";
import { club, contactsCopy as c, links, ui } from "@/data/kindergarten";

export function DesktopContacts() {
  const rows = [
    { Icon: MapPin, label: c.addressLabel, value: club.address.full, href: links.twoGisCard, external: true },
    { Icon: Phone, label: c.phoneLabel, value: club.phone.display, href: links.call, external: false },
    { Icon: Clock, label: c.hoursLabel, value: club.hours.label, href: null, external: false },
  ];

  return (
    <section id="contacts" data-section aria-labelledby="d-contacts-title" className="d-section relative">
      <div className="d-container grid grid-cols-12 items-stretch gap-8">
        <Reveal className="col-span-5 flex flex-col">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 id="d-contacts-title" className="d-h2 mt-3 font-semibold text-ink">
            {c.title}
          </h2>
          <p className="mt-3 text-[1.02rem] text-ink-soft">{c.lead}</p>

          <ul className="mt-6 space-y-3">
            {rows.map(({ Icon, label, value, href, external }) => {
              const body = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[0.9rem] bg-turquoise-soft text-deep">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[0.78rem] font-bold text-ink-soft">{label}</span>
                    <span className="mt-0.5 block font-semibold text-ink">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-start gap-3.5 rounded-[1.25rem] p-2 transition-colors hover:bg-white"
                    >
                      {body}
                      {external && <span className="sr-only">({ui.newTab})</span>}
                    </a>
                  ) : (
                    <div className="flex items-start gap-3.5 p-2">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="h-5 w-5" />
              {c.whatsapp}
              <span className="sr-only">({ui.newTab})</span>
            </a>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <InstagramIcon className="h-5 w-5" />
              {c.instagram}
              <span className="sr-only">({ui.newTab})</span>
            </a>
            <a href={links.call} className="btn btn-yellow">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {c.call}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative col-span-7 flex flex-col">
          <div className="relative flex-1 rounded-[2.25rem_2.25rem_2.25rem_0.75rem] bg-white p-2.5 shadow-card">
            <TwoGisMap className="h-full min-h-[clamp(18rem,52vh,26rem)] rounded-[1.75rem_1.75rem_1.75rem_0.5rem]" />
          </div>
          <div className="mt-3 flex justify-end gap-2">
            <a href={links.twoGisCard} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold text-deep hover:bg-white">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {c.openIn2gis}
              <span className="sr-only">({ui.newTab})</span>
            </a>
            <a href={links.twoGisRoute} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold text-deep hover:bg-white">
              <Navigation className="h-4 w-4" aria-hidden="true" />
              {c.route}
              <span className="sr-only">({ui.newTab})</span>
            </a>
          </div>
          <Star className="absolute -top-3 -left-3 h-7 w-7 text-yellow" />
          <Sparkle className="absolute top-1/3 -right-4 h-5 w-5 text-coral" />
        </Reveal>
      </div>
    </section>
  );
}
