import { buildPageMetadata, getRequestLocale } from "../seo/build-metadata";
import seoConfig from "../../../next-seo.config";

const seo = seoConfig.gallery;

export async function generateMetadata() {
  const lang = await getRequestLocale();
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    path: "/Gallery",
    image: "/og/barcelona-photographer.jpg",
    lang,
  });
}

export default function GalleryLayout({ children }) {
  return children;
}
