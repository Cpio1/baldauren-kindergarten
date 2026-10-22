import Image from "next/image";
import type { Media } from "@/lib/media";

type Props = {
  media: Media;
  alt: string;
  sizes: string;
  /** cover keeps the frame filled; faces sit in the upper part, so we bias the crop upward */
  objectPosition?: string;
  className?: string;
  /**
   * Above the fold: high fetch priority. It stays `loading="lazy"` on purpose — both layouts are in
   * the server HTML, and lazy images inside the hidden one are never requested.
   */
  hero?: boolean;
};

/** A photo or a muted looping video filling its (shaped) parent. */
export function MediaView({ media, alt, sizes, objectPosition = "50% 32%", className = "", hero = false }: Props) {
  if (media.kind === "video") {
    return (
      <video
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
        style={{ objectPosition }}
        src={media.src}
        poster={media.poster?.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      />
    );
  }
  return (
    <Image
      src={media.src}
      alt={alt}
      fill
      sizes={sizes}
      fetchPriority={hero ? "high" : "auto"}
      className={`object-cover ${className}`}
      style={{ objectPosition }}
    />
  );
}
