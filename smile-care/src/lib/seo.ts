const siteName = "SmileCare Dental";
const siteUrl = "https://www.smilecaredental.com";
const defaultImage = `${siteUrl}/og-image.jpg`;

export const homePageSeo = {
  title: `${siteName} | Cuidado dental sin estrés y consultas gratuitas`,
  description:
    "SmileCare ofrece cuidado dental sin dolor: protección contra caries, endodoncia, cirugía oral, alineación dental y diseño de sonrisa. Reserva tu consulta gratuita hoy.",
  image: defaultImage,
};

export const structuredData = {
  business: {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteName,
    description: homePageSeo.description,
    url: siteUrl,
    telephone: "+1-800-555-0199",
    image: defaultImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Dental Ave",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7128",
      longitude: "-74.0060",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "324",
    },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios dentales",
      itemListElement: [
        "Protección contra caries",
        "Endodoncia",
        "Cirugía oral",
        "Alineación dental",
        "Diseño de sonrisa",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Las consultas médicas en SmileCare son gratuitas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, en SmileCare las consultas son gratuitas y de confianza. Nuestro equipo evalúa tus resultados con atención para ofrecerte información práctica que mejore tu salud y tu longevidad.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué servicios dentales ofrece SmileCare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SmileCare ofrece una amplia variedad de servicios dentales, incluyendo protección contra caries, endodoncia, cirugía oral, alineación dental y diseño de sonrisa.",
        },
      },
    ],
  },
};
