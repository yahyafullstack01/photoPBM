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
    <article className="blog-readable mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <Link
        href={withLocale("/blog", language)}
        className="text-sm font-semibold text-rose-800 hover:text-rose-900"
      >
        ← Blog
      </Link>

      <header className="mt-6 mb-8">
        <p className="blog-meta text-xs uppercase tracking-wider font-bold text-rose-800">
          {localized.date} · {localized.readTime}
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          {localized.title}
        </h1>
        <p className="blog-body mt-4 text-lg leading-relaxed">
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
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-3">
              {section.heading}
            </h2>
            <p className="blog-body text-base sm:text-lg leading-relaxed">
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
            className="blog-chip rounded-md border border-neutral-800 px-4 py-2 text-sm font-bold text-neutral-900 hover:bg-neutral-900 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-neutral-900 p-8 text-center text-white">
        <h2 className="blog-cta-title text-2xl font-extrabold tracking-tight text-white">
          {localized.cta}
        </h2>
        <Link
          href={withLocale("/contact", language)}
          className="inline-block mt-5 rounded-md bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-neutral-900 hover:bg-rose-50"
        >
          {localized.ctaButton}
        </Link>
      </div>
    </article>
  );
}
