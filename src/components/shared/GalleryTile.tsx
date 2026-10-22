import { Play } from "lucide-react";
import Image from "next/image";
import { galleryCopy as g } from "@/data/kindergarten";
import type { Media } from "@/lib/media";

/**
 * A gallery thumbnail at the photo's own aspect ratio (masonry), so nothing is cropped away.
 * Videos show their poster (or first frame) with a play badge.
 */
export function GalleryTile({ item, n, sizes, onOpen, className = "" }: { item: Media; n: number; sizes: string; onOpen: () => void; className?: string }) {
  const ratio = item.kind === "image" ? item.width / item.height : item.poster ? item.poster.width / item.poster.height : 4 / 5;
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${g.open}: ${item.kind === "image" ? g.photoAlt(n) : g.videoLabel(n)}`}
      className={`group relative block w-full overflow-hidden bg-turquoise-mist ${className}`}
      style={{ aspectRatio: String(ratio) }}
    >
      {item.kind === "image" ? (
        <Image src={item.src} alt="" fill sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      ) : item.poster ? (
        <Image src={item.poster.src} alt="" fill sizes={sizes} className="object-cover" />
      ) : (
        <video className="absolute inset-0 h-full w-full object-cover" src={`${item.src}#t=0.1`} muted playsInline preload="metadata" />
      )}
      {item.kind === "video" && (
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-deep shadow-soft">
            <Play className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden="true" />
          </span>
        </span>
      )}
    </button>
  );
}
