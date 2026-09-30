"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import { withLocale } from "../../utils/i18n";
import { getAllBlogPosts, getLocalizedPost } from "../../data/blogPosts";

const ui = {
  EN: {
    title: "From the blog",
    subtitle: "Tips to plan your Barcelona photoshoot",
    viewAll: "View all articles",
  },
  ES: {
    title: "Del blog",
    subtitle: "Consejos para tu sesión en Barcelona",
    viewAll: "Ver todos los artículos",
  },
  FR: {
    title: "Du blog",
    subtitle: "Conseils pour votre séance à Barcelone",
    viewAll: "Voir tous les articles",
  },
  UA: {
    title: "З блогу",
    subtitle: "Поради для фотосесії в Барселоні",
    viewAll: "Усі статті",
  },
};

export default function BlogTeaser() {
  const { language } = useLanguage();
  const t = ui[language] || ui.EN;
  const posts = getAllBlogPosts()
    .slice(0, 3)
    .map((post) => getLocalizedPost(post, language));

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {t.title}
        </h2>
        <p className="mt-3 text-neutral-800 dark:text-neutral-200">{t.subtitle}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={withLocale(`/blog/${post.slug}`, language)}
            className="group block"
          >
            <div className="relative h-44 w-full overflow-hidden rounded-lg mb-3">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-extrabold text-neutral-900 dark:text-white tracking-tight group-hover:text-rose-800 dark:group-hover:text-rose-400">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-800 dark:text-neutral-200 line-clamp-3">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href={withLocale("/blog", language)}
          className="inline-block font-bold text-rose-700 hover:text-rose-800 dark:text-rose-400"
        >
          {t.viewAll} →
        </Link>
      </div>
    </section>
  );
}
