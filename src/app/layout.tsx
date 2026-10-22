import type { Metadata, Viewport } from "next";
import { Nunito, Unbounded } from "next/font/google";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { club, seo } from "@/data/kindergarten";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

// cyrillic-ext carries the Kazakh letters Ә Ғ Қ Ң Ө Ұ Ү Һ І.
const heading = Unbounded({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500", "600"],
  variable: "--font-heading",
  display: "swap",
});
const body = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: club.title,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    url: "/",
    siteName: club.title,
    title: seo.title,
    description: seo.description,
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#FFF9ED",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: club.title,
  legalName: club.legalName,
  url: SITE_URL,
  telephone: club.phone.tel,
  sameAs: [club.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: club.address.street,
    addressLocality: club.address.city,
    addressRegion: club.address.area,
    addressCountry: "KZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: club.twoGis.lat, longitude: club.twoGis.lng },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", opens: club.hours.opens, closes: club.hours.closes },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={`${heading.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
