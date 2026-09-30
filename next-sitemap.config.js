/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.pick-best-moment.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [
    "/api/*",
    "/admin/*",
    "/_next/*",
    "/GalleryLocationsPage",
    "/gallery",
    "/en",
    "/en/*",
  ],

  additionalPaths: async (config) => {
    const basePaths = [
      ["/", { changefreq: "daily", priority: 1.0 }],
      ["/contact", { changefreq: "monthly", priority: 0.9 }],
      ["/Gallery", { changefreq: "weekly", priority: 0.9 }],
      ["/love-story", { changefreq: "weekly", priority: 0.9 }],
      ["/favorite-spots", { changefreq: "weekly", priority: 0.9 }],
      ["/Conditions", { changefreq: "monthly", priority: 0.5 }],
      ["/favorite-spots/gothic-quarter", { changefreq: "weekly", priority: 0.8 }],
      ["/favorite-spots/ciutadella-park", { changefreq: "weekly", priority: 0.8 }],
      ["/favorite-spots/sagrada-familia", { changefreq: "weekly", priority: 0.8 }],
      ["/favorite-spots/manjuic", { changefreq: "weekly", priority: 0.8 }],
    ];

    const locales = ["", "es", "fr", "uk"];
    const paths = [];

    for (const [path, opts] of basePaths) {
      for (const locale of locales) {
        const localized =
          locale === "" ? path : path === "/" ? `/${locale}` : `/${locale}${path}`;
        paths.push(await config.transform(config, localized, opts));
      }
    }

    return paths;
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
  },
};
