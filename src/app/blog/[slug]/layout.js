import {
  buildPageMetadata,
  getRequestLocale,
} from "../../seo/build-metadata";
import { getBlogPost, getBlogSlugs } from "../../data/blogPosts";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lang = await getRequestLocale();
  const post = getBlogPost(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Blog | Pic Best Moments",
      description: "Barcelona photography tips and guides.",
      path: "/blog",
      lang,
    });
  }

  const t = post.translations.EN;

  return buildPageMetadata({
    title: `${t.title} | Pic Best Moments`,
    description: t.excerpt,
    keywords: post.keywords,
    path: `/blog/${slug}`,
    image: post.image,
    type: "article",
    lang,
  });
}

export default function BlogPostLayout({ children }) {
  return children;
}
