import { MobileWebsite } from "@/components/mobile-website/MobileWebsite";
import { LayoutSwitch } from "@/components/shared/LayoutSwitch";
import { SkipLink } from "@/components/shared/SkipLink";
import { Website } from "@/components/website/Website";
import { getSiteMedia } from "@/lib/media";

export default function Home() {
  // Read at build time: add photos to public/images and redeploy.
  const media = getSiteMedia();
  return (
    <>
      <SkipLink />
      <LayoutSwitch website={<Website media={media} />} mobile={<MobileWebsite media={media} />} />
    </>
  );
}
