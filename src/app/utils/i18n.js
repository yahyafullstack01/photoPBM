export const SUPPORTED_LOCALES = ["en", "es", "fr", "uk"];
export const LOCALE_PREFIXES = ["es", "fr", "uk"];

export const LANG_TO_LOCALE = {
  EN: "en",
  ES: "es",
  FR: "fr",
  UA: "uk",
};

export const LOCALE_TO_LANG = {
  en: "EN",
  es: "ES",
  fr: "FR",
  uk: "UA",
};

export const LANG_TO_HTML = {
  EN: "en",
  ES: "es",
  FR: "fr",
  UA: "uk",
};

export function getLocaleFromPathname(pathname = "/") {
  const match = pathname.match(/^\/(es|fr|uk)(?=\/|$)/);
  return match ? match[1] : "en";
}

export function stripLocale(pathname = "/") {
  const stripped = pathname.replace(/^\/(es|fr|uk)(?=\/|$)/, "") || "/";
  return stripped.startsWith("/") ? stripped : `/${stripped}`;
}

export function withLocale(pathname = "/", langOrLocale = "EN") {
  const [pathPart, hash = ""] = String(pathname).split("#");
  const clean = stripLocale(pathPart || "/");
  const hashSuffix = hash ? `#${hash}` : "";
  const locale =
    LANG_TO_LOCALE[langOrLocale] ||
    (SUPPORTED_LOCALES.includes(langOrLocale) ? langOrLocale : "en");

  if (locale === "en") {
    return `${clean === "/" ? "/" : clean}${hashSuffix}`;
  }

  const base = clean === "/" ? `/${locale}` : `/${locale}${clean}`;
  return `${base}${hashSuffix}`;
}

export function languageAlternates(path = "/") {
  const clean = stripLocale(path);
  const suffix = clean === "/" ? "" : clean;
  const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.pick-best-moment.com"
  ).replace(/\/$/, "");

  return {
    en: `${SITE_URL}${suffix || ""}`,
    es: `${SITE_URL}/es${suffix}`,
    fr: `${SITE_URL}/fr${suffix}`,
    uk: `${SITE_URL}/uk${suffix}`,
    "x-default": `${SITE_URL}${suffix || ""}`,
  };
}
