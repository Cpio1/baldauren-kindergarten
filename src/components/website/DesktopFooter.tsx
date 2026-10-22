import { MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/shared/BrandIcons";
import { Emblem } from "@/components/shared/Emblem";
import { club, links, nav, ui } from "@/data/kindergarten";

export function DesktopFooter() {
  return (
    <footer className="relative mt-6 overflow-hidden rounded-t-[3rem] bg-deep text-cream">
      <div aria-hidden="true" className="absolute -top-20 right-[12%] h-48 w-48 rounded-full bg-turquoise/25" />
      <div className="d-container relative grid grid-cols-12 gap-8 py-12">
        <div className="col-span-4">
          <a href="#home" className="inline-flex items-center gap-3" aria-label={`${club.title} — ${ui.home}`}>
            <Emblem className="h-12 w-12" />
            <span>
              <span className="block font-display text-[1.2rem] font-semibold">{club.name}</span>
              <span className="block text-sm font-semibold text-cream/70">{club.kind}</span>
            </span>
          </a>
          <p className="mt-4 max-w-[18rem] text-sm leading-relaxed text-cream/75">{club.slogan}</p>
        </div>

        <nav aria-label="Төменгі мәзір" className="col-span-3">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-cream/80 transition-colors hover:text-yellow">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="col-span-5 space-y-3 text-sm">
          <li>
            <a href={links.call} className="inline-flex items-center gap-2.5 font-bold hover:text-yellow">
              <Phone className="h-4 w-4 text-yellow" aria-hidden="true" />
              {club.phone.display}
            </a>
          </li>
          <li>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-bold hover:text-yellow">
              <InstagramIcon className="h-4 w-4 text-yellow" />
              {club.instagram.handle}
              <span className="sr-only">({ui.newTab})</span>
            </a>
          </li>
          <li className="flex items-start gap-2.5 text-cream/85">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow" aria-hidden="true" />
            <address className="not-italic">{club.address.full}</address>
          </li>
        </ul>
      </div>
      <div className="d-container relative flex justify-between border-t border-cream/12 py-5 text-xs text-cream/65">
        <p>
          © {new Date().getFullYear()} {club.legalName}. {ui.rights}
        </p>
        <p>{club.hours.label}</p>
      </div>
    </footer>
  );
}
