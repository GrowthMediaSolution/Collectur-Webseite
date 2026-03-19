import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, TruckIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung Drensteinfurt – Schnell & Zuverlässig | Collectus',
  description: 'Professionelle Entrümpelung in Drensteinfurt. Privat & Gewerbe, kostenlose Besichtigung, besenreine Übergabe. Festpreis ohne versteckte Kosten.',
  alternates: { canonical: '/entruempelung-drensteinfurt' },
}

const scope = [
  'Entrümpelung einzelner Räume oder ganzer Gebäude',
  'Wohnungen, Häuser, Garagen, Keller',
  'Gewerberäume, Büros, Lagerhallen',
  'Schnelle Terminvergabe – auch kurzfristig',
  'Fachgerechte Trennung und Entsorgung',
  'Besenreine Übergabe im Anschluss',
]

export default function EntruempelungDrensteinfurt() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Drensteinfurt" />
      <PageHero
        title="Entrümpelung in"
        highlight="Drensteinfurt"
        description="Schnelle, zuverlässige Entrümpelung für Privat und Gewerbe in Drensteinfurt. Wir räumen auf und entsorgen fachgerecht."
        breadcrumb="Entrümpelung Drensteinfurt"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Drensteinfurt & Umgebung</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Ihr Entrümpelungsservice in Drensteinfurt
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Collectus ist Ihr regionaler Partner für professionelle Entrümpelung in Drensteinfurt. Ob Wohnung,
              Haus, Keller oder Gewerbeobjekt – wir räumen schnell, sauber und zum Festpreis. Nach kostenloser
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
                <p className="text-sm text-gray-500">Privat & Gewerbe · Drensteinfurt + Region</p>
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
            Entrümpelung Drensteinfurt – fair, pünktlich und besenrein
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Drensteinfurt liegt im Kreis Warendorf und ist von unserem Standort in Ahlen schnell erreichbar.
              Collectus entrümpelt Ihre Immobilie professionell – vom einzelnen Zimmer bis zum kompletten Haus.
            </p>
            <p>
              Unser Service umfasst den vollständigen Abtransport, die fachgerechte Entsorgung sowie die
              besenreine Übergabe. Festpreise, keine versteckten Kosten, kurzfristige Termine möglich.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Drensteinfurt', 'Entrümpelungsfirma Drensteinfurt', 'Haushaltsauflösung Drensteinfurt', 'Wohnungsauflösung Drensteinfurt', 'Entrümpelung Kreis Warendorf'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Weitere Leistungen</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
              { href: '/keller-dachboden', label: 'Keller & Dachboden' },
              { href: '/sperrmuell-entsorgung', label: 'Sperrmüll & Entsorgung' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="block rounded-2xl border border-gray-200 hover:border-primary/30 bg-white p-5 text-center font-semibold text-gray-800 hover:text-primary shadow-sm hover:shadow-md transition-all">
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
