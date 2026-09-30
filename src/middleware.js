import { NextResponse } from "next/server";

const LOCALE_TO_LANG = {
  es: "ES",
  fr: "FR",
  uk: "UA",
};

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Normalize lowercase gallery URL (with optional locale prefix)
  if (/^\/(es|fr|uk)\/gallery$/.test(pathname)) {
    const locale = pathname.split("/")[1];
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/Gallery`;
    return NextResponse.redirect(url, 301);
  }
  if (pathname === "/gallery") {
    const url = request.nextUrl.clone();
    url.pathname = "/Gallery";
    return NextResponse.redirect(url, 301);
  }

  // Old GalleryLocationsPage → favorite-spots
  const oldLocations = pathname.match(/^\/(?:(es|fr|uk)\/)?GalleryLocationsPage$/);
  if (oldLocations) {
    const locale = oldLocations[1];
    const location = searchParams.get("location");

    let newPath = "/favorite-spots";
    if (location && location !== "all") {
      const slug = location
        .toLowerCase()
        .trim()
        .replace(/ñ/g, "n")
        .replace(/í/g, "i")
        .replace(/à/g, "a")
        .replace(/è/g, "e")
        .replace(/ó/g, "o")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
      newPath = `/favorite-spots/${slug}`;
    }

    const url = request.nextUrl.clone();
    url.pathname = locale ? `/${locale}${newPath}` : newPath;
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  // Locale-prefixed routes: /es/..., /fr/..., /uk/...
  const localeMatch = pathname.match(/^\/(es|fr|uk)(?=\/|$)/);
  if (localeMatch) {
    const locale = localeMatch[1];
    const rest = pathname.slice(localeMatch[0].length) || "/";
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = rest;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", LOCALE_TO_LANG[locale]);
    requestHeaders.set("x-url-path", pathname);

    const response = NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders },
    });
    response.cookies.set("NEXT_LOCALE", LOCALE_TO_LANG[locale], {
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  // Default English paths
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", "EN");
  requestHeaders.set("x-url-path", pathname);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.cookies.set("NEXT_LOCALE", "EN", {
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap-0.xml|locales/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map)$).*)",
  ],
};
