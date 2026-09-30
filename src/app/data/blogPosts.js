const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.pick-best-moment.com"
).replace(/\/$/, "");

/**
 * Blog posts for SEO + client acquisition.
 * Content is English (tourist search demand); titles/excerpts localized.
 */
const blogPosts = [
  {
    slug: "best-photo-spots-barcelona",
    date: "2026-09-15",
    image: "/og/barcelona-photographer.jpg",
    imageAlt:
      "Couple photoshoot in Barcelona with a professional photographer at an iconic city location",
    relatedLinks: [
      { href: "/favorite-spots", label: "Explore favorite spots" },
      { href: "/love-story", label: "View love stories" },
      { href: "/contact", label: "Book a photoshoot" },
    ],
    keywords: [
      "best photo spots Barcelona",
      "Barcelona photoshoot locations",
      "photographer in Barcelona",
      "couple photoshoot Barcelona",
    ],
    translations: {
      EN: {
        title: "Best Photo Spots in Barcelona for Couples & Proposals",
        excerpt:
          "A local photographer’s guide to the best Barcelona photoshoot locations — Gothic Quarter, Sagrada Família, Barceloneta, Ciutadella and more.",
        readTime: "6 min read",
        sections: [
          {
            heading: "Why location matters for your Barcelona photoshoot",
            body: "Barcelona is one of Europe’s most photogenic cities — but the “best” spot depends on your style, the light, and whether you want crowds or quiet romance. As a photographer in Barcelona, I help couples, travelers and families choose locations that feel natural on camera and special in real life.",
          },
          {
            heading: "1. Gothic Quarter — timeless streets & golden light",
            body: "The Gothic Quarter is perfect for love story and engagement sessions. Narrow alleys, stone arches and hidden squares create a cinematic look. Best light is early morning or late afternoon. Wear comfortable shoes — we walk a lot between beautiful corners.",
          },
          {
            heading: "2. Sagrada Família — iconic Barcelona backdrop",
            body: "For classic Barcelona photos, Sagrada Família is unmatched. We usually shoot nearby viewpoints and quieter angles so you get the landmark without looking like a tourist queue. Ideal for couples who want one unforgettable “we were here” frame.",
          },
          {
            heading: "3. Barceloneta Beach — sunset romance",
            body: "Barceloneta is ideal for relaxed couple photos, proposals near the water, and soft sunset tones. Bring a light jacket for breeze, and avoid midday harsh sun when possible. Beach + city skyline = a very Barcelona mood.",
          },
          {
            heading: "4. Parc de la Ciutadella — proposals & green calm",
            body: "Ciutadella Park is one of the best places in Barcelona for a surprise proposal. Trees, fountains and open lawns give privacy and beautiful depth. Many of my proposal sessions happen here for exactly that reason.",
          },
          {
            heading: "5. Park Güell & Montjuïc — color and views",
            body: "Park Güell brings Gaudí color and creative frames (check access rules). Montjuïc offers panoramic views of the city — great for dramatic couple portraits at golden hour.",
          },
          {
            heading: "How to book a photographer in Barcelona",
            body: "Tell me your date, preferred vibe (romantic, tourist icons, beach, proposal), and how long you want to shoot. I’ll suggest the best route and light for that day. Multilingual sessions available in English, Spanish, French and Ukrainian.",
          },
        ],
        cta: "Ready to book your Barcelona photoshoot?",
        ctaButton: "Contact Pic Best Moments",
      },
      ES: {
        title: "Mejores lugares para fotos en Barcelona: parejas y propuestas",
        excerpt:
          "Guía de un fotógrafo local: Barrio Gótico, Sagrada Família, Barceloneta, Ciutadella y más para tu sesión en Barcelona.",
        readTime: "6 min",
        sections: [
          {
            heading: "Por qué importa el lugar de tu sesión",
            body: "Barcelona es una de las ciudades más fotogénicas de Europa, pero el mejor lugar depende de tu estilo, la luz y si buscas romanticismo con menos gente. Como fotógrafo en Barcelona, ayudo a parejas, viajeros y familias a elegir localizaciones naturales y especiales.",
          },
          {
            heading: "1. Barrio Gótico — calles eternas y luz dorada",
            body: "Ideal para historias de amor y compromisos. Calles estrechas, arcos y plazas escondidas. Mejor luz: mañana temprano o atardecer.",
          },
          {
            heading: "2. Sagrada Família — el icono de Barcelona",
            body: "Para fotos clásicas de Barcelona. Buscamos ángulos limpios y menos colas para un recuerdo auténtico.",
          },
          {
            heading: "3. Barceloneta — romance al atardecer",
            body: "Perfecta para sesiones relajadas de pareja y propuestas junto al mar. Evita el sol del mediodía si puedes.",
          },
          {
            heading: "4. Parque de la Ciutadella — propuestas con calma",
            body: "Uno de los mejores sitios de Barcelona para una propuesta sorpresa: árboles, fuentes y privacidad.",
          },
          {
            heading: "5. Park Güell y Montjuïc — color y vistas",
            body: "Park Güell aporta color; Montjuïc, vistas panorámicas al atardecer.",
          },
          {
            heading: "Cómo reservar un fotógrafo en Barcelona",
            body: "Cuéntame fecha, estilo y duración. Te propongo la mejor ruta y luz. Sesiones en inglés, español, francés y ucraniano.",
          },
        ],
        cta: "¿Listo para reservar tu sesión en Barcelona?",
        ctaButton: "Contactar Pic Best Moments",
      },
      FR: {
        title: "Meilleurs lieux photo à Barcelone pour couples et demandes en mariage",
        excerpt:
          "Guide d’un photographe local : Quartier Gothique, Sagrada Família, Barceloneta, Ciutadella et plus encore.",
        readTime: "6 min",
        sections: [
          {
            heading: "Pourquoi le lieu change tout",
            body: "Barcelone est ultra photogénique, mais le meilleur spot dépend de votre style et de la lumière. En tant que photographe à Barcelone, j’aide couples et voyageurs à choisir des lieux naturels et magiques.",
          },
          {
            heading: "1. Quartier Gothique",
            body: "Parfait pour love story et fiançailles : ruelles, arcs et places cachées. Idéal tôt le matin ou en fin de journée.",
          },
          {
            heading: "2. Sagrada Família",
            body: "Le décor iconique de Barcelone, avec des angles plus calmes pour des photos élégantes.",
          },
          {
            heading: "3. Barceloneta",
            body: "Romance au coucher du soleil, séances couple détendues et demandes près de la mer.",
          },
          {
            heading: "4. Parc de la Ciutadella",
            body: "L’un des meilleurs endroits pour une demande en mariage surprise à Barcelone.",
          },
          {
            heading: "5. Park Güell & Montjuïc",
            body: "Couleurs de Gaudí et vues panoramiques au golden hour.",
          },
          {
            heading: "Réserver un photographe à Barcelone",
            body: "Indiquez date, ambiance et durée — je propose le meilleur parcours. Anglais, espagnol, français, ukrainien.",
          },
        ],
        cta: "Prêt à réserver votre séance à Barcelone ?",
        ctaButton: "Contacter Pic Best Moments",
      },
      UA: {
        title: "Найкращі місця для фото в Барселоні: пари та пропозиції",
        excerpt:
          "Гід локального фотографа: Готичний квартал, Саграда Фамілія, Барселонета, Сіутаделла та інші.",
        readTime: "6 хв",
        sections: [
          {
            heading: "Чому локація важлива",
            body: "Барселона дуже фотогенічна, але найкраще місце залежить від стилю й світла. Як фотограф у Барселоні, я допомагаю парам і туристам обрати природні й особливі локації.",
          },
          {
            heading: "1. Готичний квартал",
            body: "Ідеально для love story та заручин. Найкраще світло — ранок або захід.",
          },
          {
            heading: "2. Саграда Фамілія",
            body: "Культовий фон Барселони з акуратними ракурсами без натовпу в кадрі.",
          },
          {
            heading: "3. Барселонета",
            body: "Романтика на заході, спокійні парні зйомки й пропозиції біля моря.",
          },
          {
            heading: "4. Парк Сіутаделла",
            body: "Одне з найкращих місць для сюрприз-пропозиції в Барселоні.",
          },
          {
            heading: "5. Парк Гуель і Монжуїк",
            body: "Колір Гауді та панорами міста.",
          },
          {
            heading: "Як забронювати фотографа в Барселоні",
            body: "Напишіть дату, настрій і тривалість — підберу маршрут і світло. EN / ES / FR / UA.",
          },
        ],
        cta: "Готові забронювати фотосесію в Барселоні?",
        ctaButton: "Зв’язатися з Pic Best Moments",
      },
    },
  },
  {
    slug: "proposal-photography-barcelona-ciutadella",
    date: "2026-09-22",
    image: "/og/proposal-barcelona.jpg",
    imageAlt:
      "Surprise proposal photography in Barcelona at Parc de la Ciutadella",
    relatedLinks: [
      { href: "/favorite-spots/ciutadella-park", label: "Ciutadella location guide" },
      { href: "/love-story", label: "Proposal & love stories" },
      { href: "/contact", label: "Plan your proposal shoot" },
    ],
    keywords: [
      "proposal photography Barcelona",
      "surprise proposal Barcelona",
      "Parc Ciutadella proposal",
      "engagement photographer Barcelona",
    ],
    translations: {
      EN: {
        title: "Surprise Proposal Photography in Barcelona (Parc Ciutadella Guide)",
        excerpt:
          "How to plan a surprise proposal photoshoot in Barcelona — why Ciutadella Park works so well, timing tips, and how I stay hidden until the “yes”.",
        readTime: "5 min read",
        sections: [
          {
            heading: "A proposal in Barcelona should feel effortless",
            body: "Barcelona is a dream city for a surprise proposal — but logistics matter. Crowds, light and a calm path for you (and me as your photographer) make the difference between stressful and magical.",
          },
          {
            heading: "Why Parc de la Ciutadella is ideal",
            body: "Ciutadella Park offers greenery, romantic fountains and enough space to create a private moment. It’s one of my favorite places for proposal photography in Barcelona because it feels intimate even in a busy city.",
          },
          {
            heading: "Best time of day",
            body: "Late afternoon into golden hour is usually best: softer light, warmer skin tones, and beautiful shadows under the trees. Early morning also works if you want fewer people around.",
          },
          {
            heading: "How the surprise works with a photographer",
            body: "You share the plan; I arrive early and stay discreet. When you propose, I capture the reaction first — then we continue with joyful couple portraits. Friends or family can hide nearby if you want that “just happened” celebration on camera.",
          },
          {
            heading: "What to prepare",
            body: "Ring secure, comfortable clothes, a short route, and a backup indoor café nearby in case of rain. Tell me if you want video-style bursts of the moment or classic stills only.",
          },
          {
            heading: "Book proposal photography in Barcelona",
            body: "Message me your preferred date and park (Ciutadella or another spot). I’ll confirm timing, meeting point and a discreet shooting plan in English, Spanish, French or Ukrainian.",
          },
        ],
        cta: "Planning a proposal in Barcelona?",
        ctaButton: "Book proposal photography",
      },
      ES: {
        title: "Fotografía de propuesta en Barcelona (guía Ciutadella)",
        excerpt:
          "Cómo planear una propuesta sorpresa en Barcelona: por qué Ciutadella funciona tan bien, horarios y cómo me mantengo discreto hasta el “sí”.",
        readTime: "5 min",
        sections: [
          {
            heading: "Una propuesta debería sentirse fácil",
            body: "Barcelona es perfecta para proponerte, pero la logística importa: gente, luz y un plan claro con tu fotógrafo.",
          },
          {
            heading: "Por qué Ciutadella",
            body: "Verde, fuentes y espacio para un momento íntimo. Una de mis localizaciones favoritas para propuestas en Barcelona.",
          },
          {
            heading: "Mejor hora",
            body: "Atardecer / golden hour, o mañana temprano si quieres menos gente.",
          },
          {
            heading: "Cómo funciona la sorpresa",
            body: "Llego antes y discreto. Primero capturo la emoción del “sí”, luego retratos de pareja felices.",
          },
          {
            heading: "Qué preparar",
            body: "Anillo, ropa cómoda, ruta corta y plan B por si llueve.",
          },
          {
            heading: "Reservar",
            body: "Escríbeme fecha y lugar. Confirmamos punto de encuentro y plan discreto.",
          },
        ],
        cta: "¿Planeas una propuesta en Barcelona?",
        ctaButton: "Reservar fotografía de propuesta",
      },
      FR: {
        title: "Photographie de demande en mariage à Barcelone (guide Ciutadella)",
        excerpt:
          "Comment organiser une demande surprise à Barcelone : pourquoi la Ciutadella, quels horaires, et comment je reste discret jusqu’au oui.",
        readTime: "5 min",
        sections: [
          {
            heading: "Une demande doit rester magique",
            body: "Barcelone est idéale — encore faut-il gérer foule, lumière et discrétion du photographe.",
          },
          {
            heading: "Pourquoi la Ciutadella",
            body: "Verdure, fontaines et intimité. Un de mes spots préférés pour les demandes à Barcelone.",
          },
          {
            heading: "Meilleur moment",
            body: "Fin d’après-midi / golden hour, ou tôt le matin.",
          },
          {
            heading: "Le déroulé",
            body: "J’arrive tôt, discret. Je capture l’émotion du oui, puis des portraits de couple.",
          },
          {
            heading: "À préparer",
            body: "Bague, tenues confortables, court parcours, plan B pluie.",
          },
          {
            heading: "Réserver",
            body: "Envoyez date et lieu — on confirme le point de rendez-vous.",
          },
        ],
        cta: "Vous préparez une demande à Barcelone ?",
        ctaButton: "Réserver la séance proposal",
      },
      UA: {
        title: "Фото пропозиції в Барселоні (гід по Сіутаделлі)",
        excerpt:
          "Як спланувати сюрприз-пропозицію в Барселоні: чому парк Сіутаделла, який час і як я лишаюся непомітним до «так».",
        readTime: "5 хв",
        sections: [
          {
            heading: "Пропозиція має бути легкою",
            body: "Барселона ідеальна для пропозиції, але важливі світло, люди і чіткий план із фотографом.",
          },
          {
            heading: "Чому Сіутаделла",
            body: "Зелень, фонтани й простір для інтимного моменту — один із найкращих парків для пропозиції.",
          },
          {
            heading: "Найкращий час",
            body: "Золота година або ранковий спокій.",
          },
          {
            heading: "Як проходить сюрприз",
            body: "Приходжу раніше й непомітно. Спочатку емоція «так», потім радісні парні кадри.",
          },
          {
            heading: "Що підготувати",
            body: "Каблучка, зручний одяг, короткий маршрут і план Б на дощ.",
          },
          {
            heading: "Бронювання",
            body: "Напишіть дату й локацію — узгодимо точку зустрічі.",
          },
        ],
        cta: "Плануєте пропозицію в Барселоні?",
        ctaButton: "Забронювати зйомку пропозиції",
      },
    },
  },
  {
    slug: "what-to-wear-barcelona-photoshoot",
    date: "2026-09-28",
    image: "/og/barcelona-photographer.jpg",
    imageAlt:
      "Couple dressed for a romantic love story photoshoot in Barcelona",
    relatedLinks: [
      { href: "/love-story", label: "See styled love stories" },
      { href: "/Gallery", label: "Browse the gallery" },
      { href: "/contact", label: "Book your session" },
    ],
    keywords: [
      "what to wear photoshoot Barcelona",
      "couple photoshoot outfits Barcelona",
      "Barcelona photographer tips",
      "engagement photos outfit",
    ],
    translations: {
      EN: {
        title: "What to Wear for a Photoshoot in Barcelona",
        excerpt:
          "Outfit tips from a Barcelona photographer — colors, fabrics and styles that look great in Gothic streets, beach light and park greenery.",
        readTime: "5 min read",
        sections: [
          {
            heading: "Dress for the location and the light",
            body: "Barcelona sessions move between stone streets, beaches and parks. The best outfits photograph cleanly, feel comfortable to walk in, and match the location mood without fighting it.",
          },
          {
            heading: "Colors that work on camera",
            body: "Soft neutrals, earth tones, whites, blues and muted pastels look timeless. Avoid large logos and neon patterns. Couples: coordinate, don’t match identically — similar palette, different textures.",
          },
          {
            heading: "Gothic Quarter & city streets",
            body: "Elegant casual works best: linen shirts, simple dresses, tailored trousers. Flowy fabrics move beautifully in alley breezes. Skip huge hats that hide faces in shadows.",
          },
          {
            heading: "Beach sessions (Barceloneta)",
            body: "Light fabrics, barefoot options, and layers for wind. Avoid all-black in harsh midday sun. A soft dress or relaxed shirt photographs wonderfully at sunset.",
          },
          {
            heading: "Parks & proposals",
            body: "Comfortable shoes matter more than people think. Choose something you can kneel/hug/spin in. Keep the ring pocket accessible. Bring a backup top if you’re nervous about sweat or wrinkles.",
          },
          {
            heading: "Quick checklist",
            body: "Steam clothes, pack a lint roller, bring hair ties, and wear shoes you can walk in for 1–2 hours. If you’re unsure, send me outfit photos before the shoot — I’m happy to advise.",
          },
          {
            heading: "Book your Barcelona photoshoot",
            body: "Once outfits and location are clear, the session feels easy. Tell me your date and style and I’ll help you plan a confident look for your Barcelona photos.",
          },
        ],
        cta: "Want outfit advice for your session?",
        ctaButton: "Book & get styling tips",
      },
      ES: {
        title: "Qué ponerte para una sesión de fotos en Barcelona",
        excerpt:
          "Consejos de un fotógrafo en Barcelona: colores, telas y estilos que quedan genial en el Gótico, la playa y los parques.",
        readTime: "5 min",
        sections: [
          {
            heading: "Viste según el lugar y la luz",
            body: "Entre calles de piedra, playa y parques, la mejor ropa es cómoda, limpia en cámara y acorde al ambiente.",
          },
          {
            heading: "Colores que funcionan",
            body: "Neutros, tierra, blancos, azules y pasteles. Evita logos grandes. En pareja: coordinar, no clonar.",
          },
          {
            heading: "Barrio Gótico",
            body: "Elegante-casual: lino, vestidos simples, pantalones cómodos.",
          },
          {
            heading: "Playa",
            body: "Telas ligeras y capas por el viento. El atardecer es tu amigo.",
          },
          {
            heading: "Parques y propuestas",
            body: "Zapatos cómodos y ropa para abrazar y arrodillarte sin estrés.",
          },
          {
            heading: "Checklist",
            body: "Plancha/vapor, calzado para caminar 1–2 h. Si dudas, envíame fotos del outfit.",
          },
          {
            heading: "Reservar",
            body: "Cuéntame fecha y estilo — te ayudo con el look.",
          },
        ],
        cta: "¿Quieres consejo de outfit?",
        ctaButton: "Reservar y pedir tips",
      },
      FR: {
        title: "Que porter pour une séance photo à Barcelone",
        excerpt:
          "Conseils d’un photographe à Barcelone : couleurs et styles pour le Gothique, la plage et les parcs.",
        readTime: "5 min",
        sections: [
          {
            heading: "S’habiller selon le lieu",
            body: "Rues en pierre, plage, parcs : visez le confort et des tenues propres à l’image.",
          },
          {
            heading: "Couleurs qui marchent",
            body: "Neutres, tons terre, blancs, bleus, pastels. Évitez les gros logos. En couple : coordonnez.",
          },
          {
            heading: "Quartier Gothique",
            body: "Élégant-décontracté, lin, robes simples.",
          },
          {
            heading: "Plage",
            body: "Tissus légers et couches pour le vent. Coucher de soleil idéal.",
          },
          {
            heading: "Parcs & demandes",
            body: "Chaussures confortables et tenues pour embrasser / s’agenouiller facilement.",
          },
          {
            heading: "Checklist",
            body: "Repassage, chaussures pour 1–2 h de marche. Envoyez-moi vos tenues si besoin.",
          },
          {
            heading: "Réserver",
            body: "Date + style = je vous aide sur le look.",
          },
        ],
        cta: "Besoin d’un conseil tenue ?",
        ctaButton: "Réserver la séance",
      },
      UA: {
        title: "Що одягнути на фотосесію в Барселоні",
        excerpt:
          "Поради фотографа в Барселоні: кольори й стилі для Готичного кварталу, пляжу та парків.",
        readTime: "5 хв",
        sections: [
          {
            heading: "Одяг під локацію і світло",
            body: "Камінь, пляж, парки — обирайте зручність і чистий вигляд у кадрі.",
          },
          {
            heading: "Кольори",
            body: "Нейтральні, земляні, білі, блакитні, пастель. Без великих логотипів. Парі: узгодити, не копіювати.",
          },
          {
            heading: "Готичний квартал",
            body: "Елегантно-кежуал, льон, прості сукні.",
          },
          {
            heading: "Пляж",
            body: "Легкі тканини й шар на вітер. Захід сонця — ідеал.",
          },
          {
            heading: "Парки і пропозиції",
            body: "Зручне взуття й одяг для обіймів і коліна.",
          },
          {
            heading: "Чекліст",
            body: "Відпарити одяг, взуття на 1–2 години ходьби. Можете надіслати фото луків.",
          },
          {
            heading: "Бронювання",
            body: "Дата й стиль — допоможу з образом.",
          },
        ],
        cta: "Потрібні поради щодо образу?",
        ctaButton: "Забронювати зйомку",
      },
    },
  },
];

export function getAllBlogPosts() {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}

export function getLocalizedPost(post, lang = "EN") {
  const t = post.translations[lang] || post.translations.EN;
  return {
    ...post,
    title: t.title,
    excerpt: t.excerpt,
    readTime: t.readTime,
    sections: t.sections,
    cta: t.cta,
    ctaButton: t.ctaButton,
  };
}

export function blogArticleJsonLd(post, lang = "EN") {
  const localized = getLocalizedPost(post, lang);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: localized.title,
    description: localized.excerpt,
    image: [`${SITE_URL}${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Pic Best Moments",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Pic Best Moments",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Logo.webp`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
    about: {
      "@type": "Place",
      name: "Barcelona",
    },
  };
}

export default blogPosts;
