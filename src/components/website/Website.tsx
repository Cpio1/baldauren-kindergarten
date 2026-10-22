import type { SiteMedia } from "@/lib/media";
import { DesktopAbout } from "./DesktopAbout";
import { DesktopAdvantages } from "./DesktopAdvantages";
import { DesktopContacts } from "./DesktopContacts";
import { DesktopFooter } from "./DesktopFooter";
import { DesktopGallery } from "./DesktopGallery";
import { DesktopGroups } from "./DesktopGroups";
import { DesktopHeader } from "./DesktopHeader";
import { DesktopHero } from "./DesktopHero";
import { DesktopNutrition } from "./DesktopNutrition";

/** Desktop composition (≥ 1024px): laptops and computers, tuned for 1366 × 768. */
export function Website({ media }: { media: SiteMedia }) {
  return (
    <>
      <DesktopHeader />
      <main id="main">
        <DesktopHero media={media.hero} />
        <DesktopAbout media={media.about} />
        <DesktopAdvantages />
        <DesktopGroups />
        <DesktopNutrition />
        <DesktopGallery items={media.gallery} />
        <DesktopContacts />
      </main>
      <DesktopFooter />
    </>
  );
}
