"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import { withLocale } from "../../utils/i18n";
import { getLocalizedPost } from "../../data/blogPosts";

export default function BlogArticle({ post }) {
  const { language } = useLanguage();
  const localized = getLocalizedPost(post, language);

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <Link
        href={withLocale("/blog", language)}
        className="text-sm font-semibold text-rose-700 hover:text-rose-800 dark:text-rose-400"
      >
        ← Blog
      </Link>

      <header className="mt-6 mb-8">
        <p className="text-xs uppercase tracking-wider text-rose-700 dark:text-rose-400 font-semibold">
          {localized.date} · {localized.readTime}
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
          {localized.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {localized.excerpt}
        </p>
      </header>

      <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden mb-10">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <div className="space-y-8">
        {localized.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
              {section.heading}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {post.relatedLinks.map((link) => (
          <Link
            key={link.href}
            href={withLocale(link.href, language)}
            className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-gradient-to-r from-rose-700 to-purple-800 p-8 text-center text-white">
        <h2 className="text-2xl font-extrabold tracking-tight">{localized.cta}</h2>
        <Link
          href={withLocale("/contact", language)}
          className="inline-block mt-5 rounded-md bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-rose-800 hover:bg-rose-50"
        >
          {localized.ctaButton}
        </Link>
      </div>
    </article>
  );
}
