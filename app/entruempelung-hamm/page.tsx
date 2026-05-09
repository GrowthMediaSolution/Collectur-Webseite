import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, TruckIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung Hamm – Schnell & Zuverlässig | Collectus',
  description: 'Entrümpelung Hamm – von Bockum-Hövel bis Pelkum. Kurze Anfahrt ab Ahlen, Festpreis, besenrein. Kostenlose Besichtigung in allen Stadtteilen.',
  alternates: { canonical: '/entruempelung-hamm' },
}

const scope = [
  'Alle Stadtteile: Mitte, Bockum-Hövel, Heessen, Pelkum',
  'Entrümpelung einzelner Räume oder ganzer Gebäude',
  'Gewerberäume, Büros, Lagerhallen',
  'Schnelle Terminvergabe – auch kurzfristig',
  'Fachgerechte Trennung und Entsorgung',
  'Besenreine Übergabe im Anschluss',
]

export default function EntruempelungHamm() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Hamm" />
      <PageHero
        title="Entrümpelung in"
        highlight="Hamm"
        description="Schnelle, zuverlässige Entrümpelung für Privat und Gewerbe in Hamm. Wir räumen auf und entsorgen fachgerecht."
        breadcrumb="Entrümpelung Hamm"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Hamm & Umgebung</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Ihr Entrümpelungsservice in Hamm
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Hamm liegt direkt vor unserer Haustür – kurze Anfahrt, sofortige Verfügbarkeit. Collectus
              übernimmt Ihre Entrümpelung in Hamm professionell und zuverlässig. Festpreis, kein Stress.
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
                <p className="text-sm text-gray-500">Privat & Gewerbe · Hamm + Region</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Wohnungen', val: 'Ab 1 Zimmer' },
                { label: 'Häuser', val: 'Komplett' },
                { label: 'Gewerbe', val: 'Büro & Lager' },
                { label: 'Garagen', val: 'Inkl. Entsorgung' },
                { label: 'Besichtigung', val: 'Am selben Tag möglich' },
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
            Entrümpelung Hamm – fair, pünktlich und besenrein
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Hamm ist eine unserer meistgebuchten Städte. Die Nähe zu Ahlen ermöglicht kurze Reaktionszeiten
              und flexible Terminvereinbarungen. Wir entrümpeln in allen Stadtteilen – von Hamm-Mitte über
              Bockum-Hövel bis Pelkum.
            </p>
            <p>
              Ob Wohnungsauflösung, Nachlassentrümpelung oder Gewerbe – wir übernehmen alles und übergeben
              die Räume besenrein.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
              <MapPinIcon className="w-3 h-3" />Entrümpelung Hamm
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
              <MapPinIcon className="w-3 h-3" />Entrümpelungsfirma Hamm
            </span>
            <Link href="/haushaltsaufloesung" className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500 hover:border-primary/30 hover:text-primary transition-colors">
              <MapPinIcon className="w-3 h-3" />Haushaltsauflösung Hamm
            </Link>
            <Link href="/wohnungsaufloesung" className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500 hover:border-primary/30 hover:text-primary transition-colors">
              <MapPinIcon className="w-3 h-3" />Wohnungsauflösung Hamm
            </Link>
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
              <MapPinIcon className="w-3 h-3" />Nachlassentrümpelung Hamm
            </span>
          </div>
        </div>
      </section>

      <RelatedLinks links={[
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
              { href: '/entruempelung-werne', label: 'Entrümpelung Werne' },
              { href: '/entruempelung-beckum', label: 'Entrümpelung Beckum' },
            ]} />

      <CtaBanner />
    </>
  )
}
