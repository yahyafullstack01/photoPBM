import { buildPageMetadata, getRequestLocale } from "../seo/build-metadata";
import seoConfig from "../../../next-seo.config";

const seo = seoConfig.conditions;

export async function generateMetadata() {
  const lang = await getRequestLocale();
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/Conditions",
    image: "/og/barcelona-photographer.jpg",
    lang,
  });
}

export default function ConditionsLayout({ children }) {
  return children;
}
