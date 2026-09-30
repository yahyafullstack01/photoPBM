"use client";

import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import { withLocale } from "../../utils/i18n";

/**
 * Crawlable homepage intro with the search phrases people use
 * to find a photographer in Barcelona.
 */
export default function SeoHomeIntro() {
  const { language } = useLanguage();

  const copy = {
    EN: {
      h1: "Photographer in Barcelona",
      lead: "Looking for a professional photographer in Barcelona? Pic Best Moments captures love stories, couples, engagements, proposals, weddings, family photos and portraits at the city's best photo spots.",
      points: [
        "Couple & love story photoshoot in Barcelona",
        "Engagement and proposal photography",
        "Family and wedding photographer in Barcelona",
        "Sessions at Gothic Quarter, Sagrada Família, Barceloneta, Park Güell & Ciutadella",
      ],
      cta: "Book your Barcelona photoshoot",
    },
    ES: {
      h1: "Fotógrafo en Barcelona",
      lead: "¿Buscas un fotógrafo profesional en Barcelona? Pic Best Moments captura historias de amor, parejas, compromisos, propuestas, bodas, fotos familiares y retratos en los mejores lugares de la ciudad.",
      points: [
        "Sesión de pareja e historia de amor en Barcelona",
        "Fotografía de compromiso y propuesta de matrimonio",
        "Fotógrafo de familia y bodas en Barcelona",
        "Sesiones en Barrio Gótico, Sagrada Família, Barceloneta, Park Güell y Ciutadella",
      ],
      cta: "Reserva tu sesión de fotos en Barcelona",
    },
    FR: {
      h1: "Photographe à Barcelone",
      lead: "Vous cherchez un photographe professionnel à Barcelone ? Pic Best Moments immortalise histoires d'amour, couples, fiançailles, demandes en mariage, mariages, familles et portraits dans les plus beaux lieux de la ville.",
      points: [
        "Séance couple et love story à Barcelone",
        "Photographie de fiançailles et demande en mariage",
        "Photographe famille et mariage à Barcelone",
        "Séances au Quartier Gothique, Sagrada Família, Barceloneta, Park Güell et Ciutadella",
      ],
      cta: "Réservez votre séance photo à Barcelone",
    },
    UA: {
      h1: "Фотограф у Барселоні",
      lead: "Шукаєте професійного фотографа в Барселоні? Pic Best Moments знімає love story, пари, заручини, пропозиції, весілля, сімейні фото та портрети у найкращих локаціях міста.",
      points: [
        "Парна фотосесія та love story у Барселоні",
        "Фотографія заручин і пропозиції руки та серця",
        "Сімейний і весільний фотограф у Барселоні",
        "Зйомки в Готичному кварталі, Саграда Фамілія, Барселонета, Парк Гуель і Сіутаделла",
      ],
      cta: "Забронювати фотосесію в Барселоні",
    },
  };

  const t = copy[language] || copy.EN;

  return (
    <section
      aria-label={t.h1}
      className="mx-auto max-w-5xl px-4 sm:px-6 pt-6 pb-2 text-center"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {t.h1}
      </h1>
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
        {t.lead}
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-left sm:text-center text-sm sm:text-base text-gray-600 dark:text-gray-300">
        {t.points.map((item) => (
          <li key={item} className="sm:list-none">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href={withLocale("/contact", language)}
          className="inline-block rounded-md bg-rose-700 px-6 py-3 text-sm sm:text-base font-bold uppercase tracking-wide text-white hover:bg-rose-800 transition-colors"
        >
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
