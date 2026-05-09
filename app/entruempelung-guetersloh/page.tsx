import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, TruckIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung Gütersloh – Schnell & Zuverlässig | Collectus',
  description: 'Entrümpelung Gütersloh – Innenstadt bis Avenwedde. Professionell, Festpreis, besenreine Übergabe. Ihr Entrümpelungspartner im Kreis Gütersloh.',
  alternates: { canonical: '/entruempelung-guetersloh' },
}

const scope = [
  'Entrümpelung einzelner Räume oder ganzer Gebäude',
  'Gütersloh-Mitte, Avenwedde, Friedrichsdorf',
  'Gewerberäume, Büros, Lagerhallen',
  'Schnelle Terminvergabe – auch kurzfristig',
  'Fachgerechte Trennung und Entsorgung',
  'Besenreine Übergabe im Anschluss',
]

export default function EntruempelungGuetersloh() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Gütersloh" />
      <PageHero
        title="Entrümpelung in"
        highlight="Gütersloh"
        description="Schnelle, zuverlässige Entrümpelung für Privat und Gewerbe in Gütersloh. Wir räumen auf und entsorgen fachgerecht."
        breadcrumb="Entrümpelung Gütersloh"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Gütersloh & Umgebung</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Ihr Entrümpelungsservice in Gütersloh
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Collectus übernimmt Entrümpelungen in Gütersloh und dem gesamten Kreis Gütersloh. Vom einzelnen
              Zimmer bis zur kompletten Immobilie – schnell, sauber, zum Festpreis.
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
                <p className="text-sm text-gray-500">Privat & Gewerbe · Gütersloh + Region</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Wohnungen', val: 'Ab 1 Zimmer' },
                { label: 'Häuser', val: 'Komplett' },
                { label: 'Gewerbe', val: 'Büro & Lager' },
                { label: 'Garagen', val: 'Inkl. Entsorgung' },
                { label: 'Besichtigung', val: 'Kostenlos' },
                { label: 'Großobjekte', val: 'Auf Anfrage' },
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
            Entrümpelung Gütersloh – fair, pünktlich und besenrein
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Gütersloh ist eine der größeren Städte in unserem Einzugsgebiet. Unser Team ist regelmäßig in
              Gütersloh im Einsatz und kennt die örtlichen Gegebenheiten – von der Innenstadt bis zu den
              Außenbezirken.
            </p>
            <p>
              Wir übernehmen den kompletten Ablauf: Besichtigung, Angebot, Entrümpelung, Entsorgung und
              besenreine Übergabe. Alles aus einer Hand, transparent und zuverlässig.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
              <MapPinIcon className="w-3 h-3" />Entrümpelung Gütersloh
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
              <MapPinIcon className="w-3 h-3" />Entrümpelungsfirma Gütersloh
            </span>
            <Link href="/haushaltsaufloesung" className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500 hover:border-primary/30 hover:text-primary transition-colors">
              <MapPinIcon className="w-3 h-3" />Haushaltsauflösung Gütersloh
            </Link>
            <Link href="/wohnungsaufloesung" className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500 hover:border-primary/30 hover:text-primary transition-colors">
              <MapPinIcon className="w-3 h-3" />Wohnungsauflösung Gütersloh
            </Link>
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
              <MapPinIcon className="w-3 h-3" />Entrümpelung Kreis Gütersloh
            </span>
          </div>
        </div>
      </section>

      <RelatedLinks links={[
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
              { href: '/entruempelung-lippstadt', label: 'Entrümpelung Lippstadt' },
              { href: '/entruempelung-oelde', label: 'Entrümpelung Oelde' },
            ]} />

      <CtaBanner />
    </>
  )
}
