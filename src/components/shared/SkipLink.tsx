import { ui } from "@/data/kindergarten";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-deep focus:px-5 focus:py-2.5 focus:font-bold focus:text-cream"
    >
      {ui.skip}
    </a>
  );
}
