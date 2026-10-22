"use client";

import { Hand, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { club, contactsCopy as c } from "@/data/kindergarten";

/**
 * Official keyless 2GIS widget with the club's confirmed 2GIS card. The widget opens the card's
 * popup above the marker, so the view is centred a little north (`lift`, in degrees) to keep
 * the marker low in the frame and the popup inside it.
 */
function widgetUrl(lift: number) {
  const options = {
    pos: { lat: club.twoGis.lat + lift, lon: club.twoGis.lng, zoom: 16 },
    opt: { city: "almaty" },
    org: club.twoGis.firmId,
  };
  return `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(JSON.stringify(options))}`;
}

/**
 * Interactive 2GIS map. The iframe is created only when the map approaches the viewport,
 * so it costs nothing on first load. With `touchGuard` (phones) a transparent layer lets
 * one-finger swipes keep scrolling the page until the visitor taps the map.
 */
export function TwoGisMap({ className = "", touchGuard = false, lift = 0.0012 }: { className?: string; touchGuard?: boolean; lift?: number }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [armed, setArmed] = useState(!touchGuard);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setLoad(true);
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(box);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={boxRef} className={`relative isolate overflow-hidden bg-turquoise-mist ${className}`}>
      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center" aria-hidden="true">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-deep shadow-soft">
            <MapPin className="h-6 w-6" />
          </span>
          <span className="text-sm font-semibold text-ink-soft">{c.mapLoading}</span>
        </div>
      )}
      {load && (
        <iframe
          title={c.mapTitle}
          src={widgetUrl(lift)}
          loading="lazy"
          onLoad={() => setReady(true)}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
        />
      )}
      {touchGuard && !armed && (
        <button type="button" onClick={() => setArmed(true)} className="absolute inset-0 z-10 flex items-end justify-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-ink/75 px-3.5 py-2 text-sm font-semibold text-white">
            <Hand className="h-4 w-4" aria-hidden="true" />
            {c.mapTap}
          </span>
        </button>
      )}
    </div>
  );
}
