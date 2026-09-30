import Layout from "./components/Layout";
import Home from "./home";
import {
  buildPageMetadata,
  getRequestLocale,
} from "./seo/build-metadata";

export async function generateMetadata() {
  const lang = await getRequestLocale();
  return buildPageMetadata({
    title:
      "Photographer in Barcelona | Photoshoot, Love Story & Wedding | Pic Best Moments",
    description:
      "Photographer in Barcelona for love story, couple, engagement, proposal, wedding, family and portrait photoshoots. Book a professional photo session at Gothic Quarter, Sagrada Família, Barceloneta, Park Güell & Ciutadella.",
    keywords: [
      "photographer in Barcelona",
      "Barcelona photographer",
      "fotógrafo en Barcelona",
      "photographe à Barcelone",
      "love story photography Barcelona",
      "couple photoshoot Barcelona",
    ],
    path: "/",
    image: "/og/barcelona-photographer.jpg",
    lang,
  });
}

export default function Page() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
