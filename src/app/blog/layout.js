import { buildPageMetadata, getRequestLocale } from "../seo/build-metadata";

export async function generateMetadata() {
  const lang = await getRequestLocale();
  return buildPageMetadata({
    title: "Barcelona Photography Blog | Tips from a Photographer in Barcelona",
    description:
      "Photography tips for Barcelona: best photo spots, surprise proposal ideas, what to wear for a couple photoshoot, and how to book a photographer in Barcelona.",
    keywords: [
      "Barcelona photography blog",
      "photographer in Barcelona tips",
      "best photo spots Barcelona",
      "proposal photography Barcelona",
      "couple photoshoot Barcelona guide",
    ],
    path: "/blog",
    image: "/og/barcelona-photographer.jpg",
    lang,
  });
}

export default function BlogLayout({ children }) {
  return children;
}
