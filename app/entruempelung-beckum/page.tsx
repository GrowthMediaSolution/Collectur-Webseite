import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, TruckIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung Beckum – Schnell & Zuverlässig | Collectus',
  description: 'Entrümpelung Beckum – nur wenige Kilometer von Ahlen. Privat & Gewerbe, Festpreis, besenreine Übergabe. Ihr lokaler Partner im Kreis Warendorf.',
  alternates: { canonical: '/entruempelung-beckum' },
}

const scope = [
  'Entrümpelung einzelner Räume oder ganzer Gebäude',
  'Nur 15 Minuten Anfahrt ab Ahlen',
  'Auch in Neubeckum und Roland verfügbar',
  'Schnelle Terminvergabe – auch kurzfristig',
  'Fachgerechte Trennung und Entsorgung',
  'Besenreine Übergabe im Anschluss',
]

export default function EntruempelungBeckum() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Beckum" />
      <PageHero
        title="Entrümpelung in"
        highlight="Beckum"
        description="Schnelle, zuverlässige Entrümpelung für Privat und Gewerbe in Beckum und Umgebung. Wir räumen auf und entsorgen fachgerecht."
        breadcrumb="Entrümpelung Beckum"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Beckum & Umgebung</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Ihr Entrümpelungsservice in Beckum
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Collectus ist Ihr regionaler Partner für professionelle Entrümpelung in Beckum. Ob Wohnung, Haus,
              Keller oder Gewerbeobjekt – wir räumen schnell, sauber und zum Festpreis. Nach kostenloser
              Besichtigung erhalten Sie ein transparentes Angebot ohne versteckte Kosten.
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
                <p className="text-sm text-gray-500">Privat & Gewerbe · Beckum + Region</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Wohnungen', val: 'Ab 1 Zimmer' },
                { label: 'Häuser', val: 'Komplett' },
                { label: 'Anfahrt', val: '15 Min.' },
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
            Entrümpelung Beckum – fair, pünktlich und besenrein
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Beckum liegt nur wenige Kilometer von unserem Standort in Ahlen entfernt – wir sind schnell vor Ort
              und kennen die Region bestens. Ob Privathaushalt, Nachlass oder Gewerbeimmobilie: Collectus
              übernimmt die komplette Entrümpelung zuverlässig und zu fairen Preisen.
            </p>
            <p>
              Unser Service umfasst den vollständigen Abtransport, die fachgerechte Entsorgung nach geltenden
              Umweltvorschriften sowie die besenreine Übergabe der Räumlichkeiten. Kurzfristige Termine sind
              möglich – sprechen Sie uns an.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
              <MapPinIcon className="w-3 h-3" />Entrümpelung Beckum
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
              <MapPinIcon className="w-3 h-3" />Entrümpelungsfirma Beckum
            </span>
            <Link href="/haushaltsaufloesung" className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500 hover:border-primary/30 hover:text-primary transition-colors">
              <MapPinIcon className="w-3 h-3" />Haushaltsauflösung Beckum
            </Link>
            <Link href="/wohnungsaufloesung" className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500 hover:border-primary/30 hover:text-primary transition-colors">
              <MapPinIcon className="w-3 h-3" />Wohnungsauflösung Beckum
            </Link>
            <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
              <MapPinIcon className="w-3 h-3" />Entrümpelung Kreis Warendorf
            </span>
          </div>
        </div>
      </section>

      <RelatedLinks links={[
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
              { href: '/entruempelung-oelde', label: 'Entrümpelung Oelde' },
              { href: '/entruempelung', label: 'Entrümpelung Ahlen' },
            ]} />

      <CtaBanner />
    </>
  )
}
