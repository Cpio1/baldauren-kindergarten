"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/BrandIcons";
import { Emblem } from "@/components/shared/Emblem";
import { club, links, nav, ui } from "@/data/kindergarten";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";

const ids = nav.map((n) => n.id);

export function DesktopHeader() {
  const scrolled = useScrolled();
  const active = useActiveSection(ids);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? "bg-cream/85 shadow-[0_1px_0_rgb(40_120_110/0.08),0_10px_30px_-20px_rgb(31_58_55/0.3)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="d-container flex h-16 items-center gap-6">
        <a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label={`${club.title} — ${ui.home}`}>
          <Emblem className="h-10 w-10" />
          <span className="leading-none">
            <span className="block font-display text-[1.05rem] font-semibold text-deep">{club.name}</span>
            <span className="mt-1 block text-[0.72rem] font-bold text-ink-soft">балалар клубы</span>
          </span>
        </a>

        <nav aria-label="Негізгі мәзір" className="mx-auto">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-[0.92rem] font-bold transition-colors ${
                      isActive ? "bg-turquoise-soft text-deep" : "text-ink-soft hover:text-deep"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a href={links.call} className="hidden items-center gap-2 text-[0.92rem] font-bold text-ink xl:inline-flex">
            <Phone className="h-4 w-4 text-deep" aria-hidden="true" />
            {club.phone.display}
          </a>
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-10 !px-4 !py-2 !text-sm">
            <WhatsAppIcon className="h-4 w-4" />
            {ui.contactUs}
            <span className="sr-only">({ui.newTab})</span>
          </a>
        </div>
      </div>
    </header>
  );
}
