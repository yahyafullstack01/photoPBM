"use client";

import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import { withLocale } from "../../utils/i18n";

/**
 * Minimal SEO heading band — sits under the hero, not above it.
 * Keeps “photographer in Barcelona” visible for Google without clutter.
 */
export default function SeoHomeIntro() {
  const { language } = useLanguage();

  const copy = {
    EN: {
      h1: "Photographer in Barcelona",
      lead: "Love stories, proposals, weddings and family sessions at Gothic Quarter, Sagrada Família, Barceloneta and beyond.",
      cta: "Book a session",
    },
    ES: {
      h1: "Fotógrafo en Barcelona",
      lead: "Historias de amor, propuestas, bodas y familia en el Barrio Gótico, Sagrada Família, Barceloneta y más.",
      cta: "Reservar sesión",
    },
    FR: {
      h1: "Photographe à Barcelone",
      lead: "Histoires d’amour, demandes en mariage, mariages et famille au Quartier Gothique, Sagrada Família, Barceloneta et plus.",
      cta: "Réserver une séance",
    },
    UA: {
      h1: "Фотограф у Барселоні",
      lead: "Love story, пропозиції, весілля та сімейні зйомки в Готичному кварталі, біля Саграда Фамілія, на Барселонеті та інших локаціях.",
      cta: "Забронювати",
    },
  };

  const t = copy[language] || copy.EN;

  return (
    <section
      aria-label={t.h1}
      className="relative mx-auto max-w-3xl px-6 py-14 sm:py-16 text-center"
    >
      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-rose-800/80 dark:text-rose-300/90">
        Pic Best Moments
      </p>
      <h1 className="mt-3 text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
        {t.h1}
      </h1>
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
        {t.lead}
      </p>
      <div className="mt-8">
        <Link
          href={withLocale("/contact", language)}
          className="inline-flex items-center justify-center border border-neutral-900 dark:border-white px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900 dark:text-white transition-colors hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900"
        >
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
