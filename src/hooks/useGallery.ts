"use client";

import { useCallback, useState } from "react";
import type { Media } from "@/lib/media";

/** Collapsed/expanded grid + which item is open in the lightbox. */
export function useGallery(items: Media[], initial: number) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const canExpand = items.length > initial;
  const visible = expanded || !canExpand ? items : items.slice(0, initial);
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );
  const close = useCallback(() => setOpen(null), []);
  return {
    visible,
    expanded,
    canExpand,
    hiddenCount: items.length - initial,
    toggle: () => setExpanded((v) => !v),
    open,
    show: (i: number) => setOpen(i),
    close,
    step,
  };
}
