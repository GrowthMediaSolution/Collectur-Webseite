import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, TruckIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung Warendorf – Schnell & Zuverlässig | Collectus',
  description: 'Professionelle Entrümpelung in Warendorf. Privat & Gewerbe, kostenlose Besichtigung, besenreine Übergabe. Festpreis ohne versteckte Kosten.',
  alternates: { canonical: '/entruempelung-warendorf' },
}

const scope = [
  'Entrümpelung einzelner Räume oder ganzer Gebäude',
  'Wohnungen, Häuser, Garagen, Keller',
  'Gewerberäume, Büros, Lagerhallen',
  'Schnelle Terminvergabe – auch kurzfristig',
  'Fachgerechte Trennung und Entsorgung',
  'Besenreine Übergabe im Anschluss',
]

export default function EntruempelungWarendorf() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Warendorf" />
      <PageHero
        title="Entrümpelung in"
        highlight="Warendorf"
        description="Schnelle, zuverlässige Entrümpelung für Privat und Gewerbe in Warendorf. Wir räumen auf und entsorgen fachgerecht."
        breadcrumb="Entrümpelung Warendorf"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Warendorf & Umgebung</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Ihr Entrümpelungsservice in Warendorf
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Warendorf ist die Kreisstadt des Kreises Warendorf und ein zentrales Einsatzgebiet für
              Collectus. Wir übernehmen Ihre Entrümpelung professionell, pünktlich und zum Festpreis.
            </p>
            <ul className="space-y-3">
              {scope.map((d, i) => (
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
                <p className="font-heading text-xl font-bold text-gray-900">Entrümpelungsservice</p>
                <p className="text-sm text-gray-500">Privat & Gewerbe · Warendorf + Region</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Wohnungen', val: 'Ab 1 Zimmer' },
                { label: 'Häuser', val: 'Komplett' },
                { label: 'Gewerbe', val: 'Büro & Lager' },
                { label: 'Garagen', val: 'Inkl. Entsorgung' },
                { label: 'Besichtigung', val: 'Kostenlos' },
                { label: 'Übergabe', val: 'Besenrein' },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-bold text-gray-900">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Entrümpelung Warendorf – fair, pünktlich und besenrein
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Als Kreisstadt ist Warendorf ein wichtiges Einsatzgebiet für unser Team. Wir kennen die
              Region und sind regelmäßig in Warendorf und den umliegenden Gemeinden aktiv.
            </p>
            <p>
              Collectus übernimmt den kompletten Ablauf: Besichtigung, Angebot, Entrümpelung, Entsorgung
              und besenreine Übergabe – alles aus einer Hand.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Warendorf', 'Entrümpelungsfirma Warendorf', 'Haushaltsauflösung Warendorf', 'Wohnungsauflösung Warendorf', 'Entrümpelung Kreis Warendorf'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks links={[
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
              { href: '/keller-dachboden', label: 'Keller & Dachboden' },
              { href: '/sperrmuell-entsorgung', label: 'Sperrmüll & Entsorgung' },
            ]} />

      <CtaBanner />
    </>
  )
}
