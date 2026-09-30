import { languageAlternates, stripLocale, withLocale } from "../utils/i18n";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.pick-best-moment.com"
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/og/barcelona-photographer.jpg";

/**
 * Build Next.js App Router metadata for a page.
 */
export function buildPageMetadata({
  title,
  description,
  keywords,
  path = "/",
  image,
  type = "website",
  index = true,
  lang = "EN",
}) {
  const cleanPath = stripLocale(path);
  const localizedPath = withLocale(cleanPath, lang);
  const url = `${SITE_URL}${localizedPath === "/" ? "" : localizedPath}`;
  const ogImage = image?.startsWith("http")
    ? image
    : `${SITE_URL}${image || DEFAULT_OG_IMAGE}`;

  return {
    title: {
      absolute: title,
    },
    description,
    ...(keywords
      ? {
          keywords: Array.isArray(keywords)
            ? keywords
            : String(keywords)
                .split(",")
                .map((k) => k.trim())
                .filter(Boolean),
        }
      : {}),
    alternates: {
      canonical: url,
      languages: languageAlternates(cleanPath),
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: "Pic Best Moments",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 628,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index,
      follow: index,
    },
  };
}

export async function getRequestLocale() {
  try {
    const { headers } = await import("next/headers");
    const h = await headers();
    return h.get("x-locale") || "EN";
  } catch {
    return "EN";
  }
}

export async function getRequestPath() {
  try {
    const { headers } = await import("next/headers");
    const h = await headers();
    return h.get("x-url-path") || "/";
  } catch {
    return "/";
  }
}

export { SITE_URL };
