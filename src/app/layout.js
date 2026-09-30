import Script from "next/script";
import { siteJsonLd, organizationJsonLd } from "./seo/loyout-jsonld";
import { faqJsonLd } from "./seo/faq-jsonld";
import "./globals.css";
import AppProviders from "./components/AppProviders";
import { languageAlternates } from "./utils/i18n";
import {
  DEFAULT_OG_IMAGE,
  getRequestLocale,
  SITE_URL,
} from "./seo/build-metadata";

const LANG_HTML = { EN: "en", ES: "es", FR: "fr", UA: "uk" };

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Photographer in Barcelona | Photoshoot, Love Story & Wedding | Pic Best Moments",
    template: "%s | Pic Best Moments",
  },
  description:
    "Photographer in Barcelona for love story, couple, engagement, proposal, wedding, family and portrait photoshoots. Book a professional photo session at Gothic Quarter, Sagrada Família, Barceloneta, Park Güell & Ciutadella. English, Spanish, French & Ukrainian.",

  verification: {
    google: "Ym-lDSsvY4ph2BQ0M7nKfXEBTvyBK2GtZVov3YvwnsU",
  },

  applicationName: "Pic Best Moments",
  keywords: [
    "photographer in Barcelona",
    "Barcelona photographer",
    "photographer Barcelona",
    "professional photographer Barcelona",
    "best photographer in Barcelona",
    "hire photographer Barcelona",
    "book photographer Barcelona",
    "photo session Barcelona",
    "photoshoot Barcelona",
    "Barcelona photoshoot",
    "photography in Barcelona",
    "Barcelona photography",
    "tourist photographer Barcelona",
    "vacation photographer Barcelona",
    "personal photographer Barcelona",
    "love story photographer Barcelona",
    "love story photography Barcelona",
    "love story photoshoot Barcelona",
    "couple photographer Barcelona",
    "couple photoshoot Barcelona",
    "couple photos Barcelona",
    "engagement photographer Barcelona",
    "engagement photos Barcelona",
    "proposal photographer Barcelona",
    "proposal photography Barcelona",
    "romantic photoshoot Barcelona",
    "family photographer Barcelona",
    "family photos Barcelona",
    "wedding photographer Barcelona",
    "wedding photos Barcelona",
    "portrait photographer Barcelona",
    "portrait photoshoot Barcelona",
    "Gothic Quarter photoshoot",
    "Barrio Gotico photographer",
    "Sagrada Familia photoshoot",
    "Sagrada Família photography",
    "Barceloneta beach photoshoot",
    "Park Guell photoshoot",
    "Park Güell photographer",
    "Ciutadella Park photoshoot",
    "Montjuic photography Barcelona",
    "best photo spots Barcelona",
    "Barcelona photoshoot locations",
    "fotógrafo en Barcelona",
    "fotógrafo Barcelona",
    "fotografo Barcelona",
    "sesión de fotos Barcelona",
    "sesión fotográfica Barcelona",
    "fotografía de pareja Barcelona",
    "fotógrafo de bodas Barcelona",
    "fotos de compromiso Barcelona",
    "fotógrafo turistas Barcelona",
    "photographe à Barcelone",
    "photographe Barcelone",
    "séance photo Barcelone",
    "photographe couple Barcelone",
    "photographe mariage Barcelone",
    "фотограф Барселона",
    "фотограф у Барселоні",
    "фотосесія Барселона",
    "Pic Best Moments",
    "PBM photographer Barcelona",
  ],
  authors: [{ name: "Pic Best Moments", url: SITE_URL }],
  creator: "Pic Best Moments",
  publisher: "Pic Best Moments",

  other: {
    "geo.region": "ES-CT",
    "geo.placename": "Barcelona",
    "geo.position": "41.3851;2.1734",
    ICBM: "41.3851, 2.1734",
  },

  alternates: {
    canonical: SITE_URL,
    languages: languageAlternates("/"),
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Pic Best Moments",
    title:
      "Photographer in Barcelona | Photoshoot, Love Story & Wedding | Pic Best Moments",
    description:
      "Photographer in Barcelona for love story, couple, engagement, proposal, wedding, family and portrait photoshoots. Book your session at Gothic Quarter, Sagrada Família, Barceloneta & more.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 628,
        alt: "Photographer in Barcelona — Pic Best Moments love story and couple photography",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    alternateLocale: ["es_ES", "fr_FR", "uk_UA"],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Photographer in Barcelona | Photoshoot, Love Story & Wedding | Pic Best Moments",
    description:
      "Hire a photographer in Barcelona for love stories, couples, engagements, weddings and family photos at iconic city locations.",
    images: [DEFAULT_OG_IMAGE],
    creator: "@picbestmoments",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/Logo.webp", sizes: "32x32", type: "image/webp" },
      { url: "/Logo.webp", sizes: "16x16", type: "image/webp" },
    ],
    apple: [{ url: "/Logo.webp", sizes: "180x180", type: "image/webp" }],
  },

  category: "Photography Services",
};

export default async function RootLayout({ children }) {
  const locale = await getRequestLocale();
  const htmlLang = LANG_HTML[locale] || "en";

  return (
    <html lang={htmlLang} className="h-full">
      <body className="h-full min-h-screen transition-colors">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-KGLK5J3JEE"
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-KGLK5J3JEE');
              `}
            </Script>
          </>
        )}

        <AppProviders initialLanguage={locale}>{children}</AppProviders>
      </body>
    </html>
  );
}
