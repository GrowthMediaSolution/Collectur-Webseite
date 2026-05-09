export function LocalBusinessSchema({ serviceName, areaServed }: { serviceName?: string; areaServed?: string }) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Collectus Entrümpelung',
    alternateName: 'Rund ums Haus Serviceleistungen',
    description: 'Professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Ahlen und Umgebung.',
    telephone: '+49-2382-9661456',
    email: 'info@rundumshausserviceleistungen.de',
    url: 'https://collectus-entruempelung.de',
    image: 'https://collectus-entruempelung.de/images/abraham-garten.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lessingstraße 62',
      addressLocality: 'Ahlen',
      postalCode: '59227',
      addressCountry: 'DE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '51.7633', longitude: '7.8903' },
    priceRange: '$$',
    founder: { '@type': 'Person', name: 'Abraham Osmani' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  }

  if (serviceName) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: serviceName,
      itemListElement: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: serviceName } }],
    }
  }

  if (areaServed) {
    schema.areaServed = {
      '@type': 'City',
      name: areaServed,
    }
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
