import { buildPageMetadata, getRequestLocale } from "../seo/build-metadata";
import seoConfig from "../../../next-seo.config";

const seo = seoConfig.favoriteSpots;

export async function generateMetadata() {
  const lang = await getRequestLocale();
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    path: "/favorite-spots",
    image: "/og/barcelona-photographer.jpg",
    lang,
  });
}

export default function FavoriteSpotsLayout({ children }) {
  return children;
}
