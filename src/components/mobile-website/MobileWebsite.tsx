import type { SiteMedia } from "@/lib/media";
import { MobileAbout } from "./MobileAbout";
import { MobileActionBar } from "./MobileActionBar";
import { MobileAdvantages } from "./MobileAdvantages";
import { MobileContacts } from "./MobileContacts";
import { MobileFooter } from "./MobileFooter";
import { MobileGallery } from "./MobileGallery";
import { MobileGroups } from "./MobileGroups";
import { MobileHeader } from "./MobileHeader";
import { MobileHero } from "./MobileHero";
import { MobileNutrition } from "./MobileNutrition";

/** Mobile composition (< 1024px): its own order of shapes, photos and text — not a scaled desktop. */
export function MobileWebsite({ media }: { media: SiteMedia }) {
  return (
    <>
      <MobileHeader />
      <main id="main">
        <MobileHero media={media.hero} />
        <MobileAbout media={media.about} />
        <MobileAdvantages />
        <MobileGroups />
        <MobileNutrition />
        <MobileGallery items={media.gallery} />
        <MobileContacts />
      </main>
      <MobileFooter />
      <MobileActionBar />
    </>
  );
}
