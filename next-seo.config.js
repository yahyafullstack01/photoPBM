const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.pick-best-moment.com"
).replace(/\/$/, "");

const url = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
const img = (path = "/og/barcelona-photographer.jpg") => url(path);

const BRAND = "Pic Best Moments";

const seoConfig = {
  defaults: {
    title: `Photographer in Barcelona | Photoshoot, Love Story & Wedding | ${BRAND}`,
    description:
      "Photographer in Barcelona for love story, couple, engagement, proposal, wedding, family and portrait photoshoots. Book a professional photo session at Gothic Quarter, Sagrada Família, Barceloneta, Park Güell & Ciutadella.",
    keywords:
      "photographer in Barcelona, Barcelona photographer, fotógrafo en Barcelona, photographe à Barcelone, love story photography Barcelona, couple photoshoot Barcelona, engagement photos Barcelona, proposal photography Barcelona, wedding photographer Barcelona, family photos Barcelona, Gothic Quarter photoshoot, Sagrada Família photography, Barceloneta beach photos, photo session Barcelona, hire photographer Barcelona",
    openGraph: {
      url: SITE_URL,
      title: `Photographer in Barcelona | Photoshoot, Love Story & Wedding | ${BRAND}`,
      description:
        "Hire a photographer in Barcelona for love stories, couples, engagements, weddings and family photos at iconic city locations.",
      type: "website",
      images: [
        {
          url: img("/Logo.webp"),
          width: 1200,
          height: 628,
          alt: `${BRAND} - Photographer in Barcelona`,
        },
      ],
    },
    canonical: SITE_URL,
    robots: "index, follow",
  },

  contact: {
    title: "Book a Photographer in Barcelona | Contact Pic Best Moments",
    description:
      "Book a photographer in Barcelona for your love story, couple, engagement, wedding or family photoshoot. Choose date, time, duration and location. Reply within 24 hours. English, Spanish, French & Ukrainian.",
    keywords:
      "book photographer Barcelona, hire photographer Barcelona, Barcelona photo session booking, fotógrafo Barcelona contacto, photographe Barcelone réservation, photo shoot Barcelona price, couple photoshoot booking Barcelona",
    openGraph: {
      url: url("/contact"),
      title: "Book a Photographer in Barcelona | Contact Pic Best Moments",
      description:
        "Book a photographer in Barcelona. Choose date, time, duration and iconic Barcelona locations for your photoshoot.",
      type: "website",
      images: [
        {
          url: img("/Logo.webp"),
          width: 1200,
          height: 628,
          alt: "Book Barcelona Photo Session",
        },
      ],
    },
    canonical: url("/contact"),
    robots: "index, follow",
  },

  loveStory: {
    title:
      "Love Story Photography Barcelona | Romantic Couple & Engagement Photoshoots",
    description:
      "Romantic love story and couple photography in Barcelona. Engagement photos, proposal photography & couple photoshoots at Gothic Quarter, Sagrada Família, Park Güell, Parc Ciutadella, Barceloneta. View our portfolio and book your Barcelona photo session.",
    keywords:
      "love story photography Barcelona, couple photoshoot Barcelona, engagement photos Barcelona, proposal photography Barcelona, romantic photoshoot Barcelona, couple photographer Barcelona, engagement session Barcelona, Parc Ciutadella proposal, Gothic Quarter couple photos, Sagrada Família love story",
    openGraph: {
      url: url("/love-story"),
      title:
        "Love Story Photography Barcelona | Romantic Couple & Engagement Photoshoots",
      description:
        "Professional romantic couple photography in Barcelona. Engagement & proposal photos at iconic locations. Book your love story session.",
      type: "website",
      images: [
        {
          url: img("/Logo.webp"),
          width: 1200,
          height: 628,
          alt: "Barcelona Love Story Photography",
        },
      ],
    },
    canonical: url("/love-story"),
    robots: "index, follow",
  },

  gallery: {
    title: "Photography Portfolio Barcelona | Photo Gallery | Pic Best Moments",
    description:
      "Explore our photography portfolio: love stories, couple photos, family sessions, weddings and portraits in Barcelona. Gothic Quarter, Sagrada Família, Barceloneta, Parc Ciutadella. Book your Barcelona photoshoot.",
    keywords:
      "Barcelona photography portfolio, Barcelona photo gallery, photoshoot gallery Barcelona, couple photos Barcelona, love story gallery Barcelona, professional photography Barcelona, Barcelona photographer portfolio",
    openGraph: {
      url: url("/Gallery"),
      title: "Photography Portfolio Barcelona | Photo Gallery",
      description:
        "Curated gallery of professional photo sessions in Barcelona: couples, families, weddings & portraits.",
      type: "website",
      images: [
        {
          url: img("/Logo.webp"),
          width: 1200,
          height: 628,
          alt: "Barcelona Photography Portfolio",
        },
      ],
    },
    canonical: url("/Gallery"),
    robots: "index, follow",
  },

  favoriteSpots: {
    title: "Best Photo Locations in Barcelona | Photoshoot Spots Guide",
    description:
      "Discover the best photography locations in Barcelona: Gothic Quarter, Sagrada Família, Barceloneta Beach, Parc Ciutadella, Park Güell, Montjuïc. View real photoshoot examples, tips & recommendations for your Barcelona photo session.",
    keywords:
      "best photo spots Barcelona, Barcelona photoshoot locations, where to take photos Barcelona, Gothic Quarter photoshoot, Sagrada Família photo spot, Barceloneta photo location, Parc Ciutadella photography, Park Güell photos",
    openGraph: {
      url: url("/favorite-spots"),
      title: "Best Photo Locations in Barcelona | Photoshoot Spots Guide",
      description:
        "Complete guide to the best Barcelona photo locations with real session examples, professional tips & beautiful spots for your photoshoot.",
      type: "website",
      images: [
        {
          url: img("/Logo.webp"),
          width: 1200,
          height: 628,
          alt: "Best Barcelona Photo Locations",
        },
      ],
    },
    canonical: url("/favorite-spots"),
    robots: "index, follow",
  },

  conditions: {
    title: "Terms & Conditions | Pic Best Moments",
    description: "Read our Terms & Conditions and Privacy Policy.",
    openGraph: {
      url: url("/Conditions"),
      title: "Terms & Conditions | Pic Best Moments",
      description: "Read our Terms & Conditions and Privacy Policy.",
      type: "website",
      images: [
        {
          url: img("/Logo.webp"),
          width: 1200,
          height: 628,
          alt: "Terms & Conditions",
        },
      ],
    },
    canonical: url("/Conditions"),
    robots: "index, follow",
  },
};

export default seoConfig;
