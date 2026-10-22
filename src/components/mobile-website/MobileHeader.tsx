"use client";

import { AnimatePresence, m } from "motion/react";
import { ArrowUpRight, Clock, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { InstagramIcon, WhatsAppIcon } from "@/components/shared/BrandIcons";
import { Sparkle, Star } from "@/components/shared/Decor";
import { Emblem } from "@/components/shared/Emblem";
import { club, links, nav, ui } from "@/data/kindergarten";
import { useBodyLock } from "@/hooks/useBodyLock";
import { useScrolled } from "@/hooks/useScrolled";

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(8);
  useBodyLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-20 transition-[background-color,box-shadow] duration-300 ${
          scrolled || open ? "bg-cream/95 shadow-[0_1px_0_rgb(40_120_110/0.08)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="m-container flex h-14 items-center justify-between gap-3">
          <a href="#home" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-2" aria-label={`${club.title} — ${ui.home}`}>
            <Emblem className="h-9 w-9 shrink-0" />
            <span className="min-w-0 leading-none">
              <span className="block font-display text-[0.98rem] font-semibold text-deep">{club.name}</span>
              <span className="mt-0.5 block text-[0.68rem] font-bold text-ink-soft">балалар клубы</span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-turquoise-soft text-deep"
              aria-label={`WhatsApp (${ui.newTab})`}
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="m-menu"
              aria-label={open ? ui.closeMenu : ui.menu}
              className="grid h-10 w-10 place-items-center rounded-full bg-deep text-cream"
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="m-menu"
            key="menu"
            className="absolute inset-x-0 top-0 z-10 h-[100dvh] overflow-y-auto bg-cream pt-14"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="m-container relative flex min-h-full flex-col pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <Star className="absolute right-8 bottom-44 h-6 w-6 text-yellow" />
              <Sparkle className="absolute right-20 bottom-56 h-4 w-4 text-coral" />
              <nav aria-label="Мобильді мәзір">
                <ul>
                  {nav.map((item, i) => (
                    <li key={item.id} className="border-b border-deep/8">
                      <a href={`#${item.id}`} onClick={() => setOpen(false)} className="flex items-center gap-4 py-3.5">
                        <span className="w-6 font-display text-sm font-semibold text-turquoise">0{i + 1}</span>
                        <span className="font-display text-[1.25rem] font-semibold text-ink">{item.label}</span>
                        <ArrowUpRight className="ml-auto h-5 w-5 text-deep/40" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto pt-8">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink-soft">
                  <Clock className="h-4 w-4 text-deep" aria-hidden="true" />
                  {club.hours.label}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <a href={links.call} className="btn btn-yellow">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Қоңырау
                  </a>
                  <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    <InstagramIcon className="h-4 w-4" />
                    Instagram
                    <span className="sr-only">({ui.newTab})</span>
                  </a>
                </div>
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2.5 w-full">
                  <WhatsAppIcon className="h-5 w-5" />
                  {ui.contactUs}
                  <span className="sr-only">({ui.newTab})</span>
                </a>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
