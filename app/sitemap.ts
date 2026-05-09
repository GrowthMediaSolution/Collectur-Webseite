import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://collectus-entruempelung.de'
  const now = new Date().toISOString()

  return [
    // Startseite
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // Leistungen
    { url: `${base}/wohnungsaufloesung`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/haushaltsaufloesung`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/entruempelung`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/keller-dachboden`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sperrmuell-entsorgung`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/nachlassentruempelung`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/messie-entruempelung`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/gewerbeentruempelung`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/gartenraeumung`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/elektroschrott-entsorgung`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/moebel-entsorgung`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-auszug`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/seniorenentruempelung`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-kosten`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Einsatzgebiete
    { url: `${base}/entruempelung-beckum`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/entruempelung-hamm`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/entruempelung-warendorf`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/entruempelung-oelde`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-drensteinfurt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-sendenhorst`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-ennigerloh`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-muenster`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/entruempelung-lippstadt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-guetersloh`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-werne`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-telgte`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-luedinghausen`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Ratgeber
    { url: `${base}/entruempelung-checkliste`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/sperrmuell-ratgeber`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-steuer`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/entruempelung-selber-machen`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fuer-vermieter`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fuer-erbengemeinschaften`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Sonstiges
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
