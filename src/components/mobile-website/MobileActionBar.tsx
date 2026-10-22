"use client";

import { AnimatePresence, m } from "motion/react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/BrandIcons";
import { links, ui } from "@/data/kindergarten";
import { useScrolled } from "@/hooks/useScrolled";

/** Call / WhatsApp always within thumb reach once the visitor has scrolled past the first screen. */
export function MobileActionBar() {
  const shown = useScrolled(520);
  return (
    <AnimatePresence>
      {shown && (
        <m.div
          className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="mx-auto grid max-w-[34rem] grid-cols-[auto_1fr] gap-2 rounded-full bg-white/95 p-1.5 shadow-card backdrop-blur">
            <a href={links.call} className="btn btn-yellow !min-h-11 !px-4" aria-label="Қоңырау шалу">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-11">
              <WhatsAppIcon className="h-5 w-5" />
              {ui.contactUs}
              <span className="sr-only">({ui.newTab})</span>
            </a>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
