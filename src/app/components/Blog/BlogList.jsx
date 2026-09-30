"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import { withLocale } from "../../utils/i18n";
import { getAllBlogPosts, getLocalizedPost } from "../../data/blogPosts";

const ui = {
  EN: {
    title: "Barcelona Photography Blog",
    subtitle:
      "Tips from a photographer in Barcelona — photo spots, proposals, outfits and how to plan your session.",
    readMore: "Read article",
  },
  ES: {
    title: "Blog de fotografía en Barcelona",
    subtitle:
      "Consejos de un fotógrafo en Barcelona — lugares, propuestas, outfits y cómo planear tu sesión.",
    readMore: "Leer artículo",
  },
  FR: {
    title: "Blog photo à Barcelone",
    subtitle:
      "Conseils d’un photographe à Barcelone — lieux, demandes en mariage, tenues et organisation de séance.",
    readMore: "Lire l’article",
  },
  UA: {
    title: "Блог про фотографію в Барселоні",
    subtitle:
      "Поради фотографа в Барселоні — локації, пропозиції, образи та як спланувати зйомку.",
    readMore: "Читати статтю",
  },
};

export default function BlogList() {
  const { language } = useLanguage();
  const t = ui[language] || ui.EN;
  const posts = getAllBlogPosts().map((post) => getLocalizedPost(post, language));

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {t.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {t.subtitle}
        </p>
      </header>

      <div className="grid gap-10">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="grid md:grid-cols-[280px_1fr] gap-6 items-center border-b border-gray-200 dark:border-gray-700 pb-10"
          >
            <Link
              href={withLocale(`/blog/${post.slug}`, language)}
              className="relative block h-52 md:h-44 w-full overflow-hidden rounded-lg"
            >
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </Link>
            <div>
              <p className="text-xs uppercase tracking-wider text-rose-700 dark:text-rose-400 font-semibold">
                {post.date} · {post.readTime}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                <Link href={withLocale(`/blog/${post.slug}`, language)}>
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={withLocale(`/blog/${post.slug}`, language)}
                className="inline-block mt-4 font-bold text-rose-700 hover:text-rose-800 dark:text-rose-400"
              >
                {t.readMore} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
