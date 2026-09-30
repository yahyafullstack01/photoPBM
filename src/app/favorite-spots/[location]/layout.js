import {
  buildPageMetadata,
  getRequestLocale,
} from "../../seo/build-metadata";
import locationData from "../../data/location";
import { locationToSlug } from "../../utils/slugs";

function findLocationBySlug(slug) {
  return locationData.find((loc) => locationToSlug(loc.location) === slug);
}

export async function generateMetadata({ params }) {
  const { location: locationSlug } = await params;
  const lang = await getRequestLocale();
  const location = findLocationBySlug(locationSlug);
  const name = location?.location || locationSlug;

  return buildPageMetadata({
    title: `${name} Photography Barcelona | Photo Location Guide`,
    description: `Professional photoshoot location guide for ${name} in Barcelona. View real photo examples, tips, and recommendations for your Barcelona photography session.`,
    keywords: [
      `${name} photoshoot`,
      `${name} photography Barcelona`,
      "Barcelona photo locations",
      "photoshoot spots Barcelona",
      "photographer in Barcelona",
    ],
    path: `/favorite-spots/${locationSlug}`,
    image:
      location?.banner ||
      location?.images?.[0] ||
      "/og/barcelona-photographer.jpg",
    type: "article",
    lang,
  });
}

export default function LocationLayout({ children }) {
  return children;
}
