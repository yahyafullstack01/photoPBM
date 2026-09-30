import { buildPageMetadata, getRequestLocale } from "../seo/build-metadata";
import seoConfig from "../../../next-seo.config";

const seo = seoConfig.loveStory;

export async function generateMetadata() {
  const lang = await getRequestLocale();
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    path: "/love-story",
    image: "/og/proposal-barcelona.jpg",
    lang,
  });
}

export default function LoveStoryLayout({ children }) {
  return children;
}
