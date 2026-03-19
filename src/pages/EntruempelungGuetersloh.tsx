import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { LocalBusinessSchema } from '../components/Schema'
import { CheckCircleIcon, MapPinIcon, TruckIcon } from '../components/Icons'

const leistungen = [
  'Wohnungsauflösungen & Haushaltsauflösungen',
  'Entrümpelung von Häusern, Wohnungen und Kellern',
  'Gewerbeentrümpelung & Büroauflösung',
  'Sperrmüll-Abholung und Entsorgung',
  'Nachlassauflösung & Entrümpelung nach Todesfall',
  'Besenreine Übergabe mit Festpreisgarantie',
]

export default function EntruempelungGuetersloh() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Gütersloh" />
      <PageHero
        title="Entrümpelung in"
        highlight="Gütersloh"
        description="Zuverlässige Entrümpelung und Wohnungsauflösung in Gütersloh. Komplettservice vom Keller bis zum Dachboden – von Collectus Entrümpelung aus Ahlen."
        breadcrumb="Entrümpelung Gütersloh"
        seoTitle="Entrümpelung Gütersloh – Komplett & Zuverlässig | Collectus"
        seoDescription="Zuverlässige Entrümpelung in Gütersloh. Vom Keller bis zum Dachboden, besenreine Übergabe, faire Festpreise."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">ca. 50 km von Ahlen</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelung Gütersloh – professionell &amp; komplett
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Gütersloh – Wirtschaftszentrum in Ostwestfalen mit rund 100.000 Einwohnern. Hier fallen
              regelmäßig Entrümpelungen an: Wohnungsauflösungen, Nachlassräumungen und Gewerbeentrümpelungen.
              Collectus Entrümpelung ist Ihr zuverlässiger Partner für den gesamten Raum Gütersloh.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Von Ahlen aus erreichen wir Gütersloh in etwa 50 Minuten. Trotz der Entfernung bieten wir
              selbstverständlich kostenlose Besichtigungen und verbindliche Festpreise.
            </p>
            <ul className="space-y-3">
              {leistungen.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl p-8 border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                <TruckIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Gütersloh</p>
                <p className="text-sm text-gray-500">Alle Stadtteile · ~50 km</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 font-semibold">Stadtteile die wir bedienen:</p>
            <div className="flex flex-wrap gap-2">
              {['Gütersloh-Mitte', 'Friedrichsdorf', 'Isselhorst', 'Spexard', 'Avenwedde', 'Blankenhagen', 'Nordhorn'].map(ort => (
                <span key={ort} className="bg-white rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200">{ort}</span>
              ))}
            </div>
            <div className="mt-6 bg-dark rounded-xl p-5 text-white">
              <p className="text-sm font-bold mb-1">Kostenlose Besichtigung</p>
              <p className="text-xs text-white/70">Unverbindliche Vor-Ort-Besichtigung in ganz Gütersloh und Umgebung.</p>
              <a href="tel:023829661456" className="mt-3 inline-flex items-center gap-2 text-primary-light font-bold text-sm hover:underline">
                02382 9661456
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Entrümpelungsservice in Gütersloh
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Der Großraum Gütersloh ist ein wichtiger Teil unseres Einsatzgebiets. In einer Stadt
              mit vielen Unternehmen sind Büroauflösungen und Gewerbeentrümpelungen genauso gefragt
              wie private Wohnungsauflösungen und Nachlassräumungen.
            </p>
            <p>
              Wir arbeiten termingerecht, transparent und umweltbewusst. Verwertbare Gegenstände
              werden bei der Kalkulation berücksichtigt – das kann die Kosten für Sie deutlich senken.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Gütersloh', 'Wohnungsauflösung Gütersloh', 'Entrümpelungsfirma Gütersloh', 'Haushaltsauflösung Gütersloh'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Weitere Einsatzgebiete</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: '/entruempelung-beckum', label: 'Entrümpelung Beckum' },
              { to: '/entruempelung-oelde', label: 'Entrümpelung Oelde' },
              { to: '/entruempelung-warendorf', label: 'Entrümpelung Warendorf' },
              { to: '/entruempelung-lippstadt', label: 'Entrümpelung Lippstadt' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="block rounded-2xl border border-gray-200 hover:border-primary/30 bg-white p-5 text-center font-semibold text-gray-800 hover:text-primary shadow-sm hover:shadow-md transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
