import { Phone } from "lucide-react";
import { InstagramIcon } from "@/components/shared/BrandIcons";
import { Emblem } from "@/components/shared/Emblem";
import { club, links, ui } from "@/data/kindergarten";

export function MobileFooter() {
  return (
    <footer className="relative mt-4 overflow-hidden rounded-t-[2.25rem] bg-deep pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-cream">
      <div aria-hidden="true" className="absolute -top-12 -right-10 h-32 w-32 rounded-full bg-turquoise/25" />
      <div className="m-container relative pt-9 text-center">
        <a href="#home" className="inline-flex flex-col items-center gap-2" aria-label={`${club.title} — ${ui.home}`}>
          <Emblem className="h-12 w-12" />
          <span className="font-display text-[1.15rem] font-semibold">{club.name}</span>
        </a>
        <p className="mt-1 text-sm text-cream/70">балалар клубы</p>

        <div className="mt-5 flex justify-center gap-2.5">
          <a href={links.call} className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2.5 text-sm font-bold">
            <Phone className="h-4 w-4 text-yellow" aria-hidden="true" />
            {club.phone.display}
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full bg-cream/10"
            aria-label={`Instagram ${club.instagram.handle} (${ui.newTab})`}
          >
            <InstagramIcon className="h-[1.1rem] w-[1.1rem] text-yellow" />
          </a>
        </div>
        <address className="mx-auto mt-4 max-w-[19rem] text-[0.85rem] leading-relaxed text-cream/80 not-italic">{club.address.full}</address>
        <p className="mt-6 border-t border-cream/12 pt-4 text-[0.75rem] text-cream/60">
          © {new Date().getFullYear()} {club.legalName}
        </p>
      </div>
    </footer>
  );
}
