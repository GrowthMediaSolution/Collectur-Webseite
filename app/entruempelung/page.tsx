import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, TruckIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung Ahlen – Schnell, Sauber & Zuverlässig | Collectus',
  description: 'Professionelle Entrümpelung in Ahlen und Umgebung. Privat & Gewerbe, kostenlose Besichtigung, besenreine Übergabe. Festpreis ohne versteckte Kosten.',
  alternates: { canonical: '/entruempelung' },
}

const scope = [
  'Entrümpelung einzelner Räume oder ganzer Gebäude',
  'Wohnungen, Häuser, Garagen, Schuppen',
  'Gewerberäume, Büros, Lagerhallen',
  'Schnelle Terminvergabe – auch kurzfristig möglich',
  'Fachgerechte Trennung und Entsorgung',
  'Besenreine Übergabe im Anschluss',
]

export default function Entruempelung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Ahlen" />
      <PageHero
        title="Entrümpelung in"
        highlight="Ahlen & Umgebung"
        description="Schnelle, zuverlässige Entrümpelung für Privat und Gewerbe. Ob Wohnung, Haus, Keller oder Büro – wir räumen auf und entsorgen fachgerecht."
        breadcrumb="Entrümpelung"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Schnell & gründlich</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelung – alles muss raus
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Eine Entrümpelung kann viele Gründe haben: Renovation, Umzug, Nachlass, Mietwechsel oder einfach der
              Wunsch nach mehr Platz. Egal ob ein einzelner Raum oder ein ganzes Gebäude – wir entrümpeln schnell,
              sauber und termingerecht. Danach übergeben wir Ihnen die Räumlichkeiten besenrein.
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
                <p className="text-sm text-gray-500">Privat & Gewerbe · Ahlen + Region</p>
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
            Entrümpelungsfirma in Ahlen – fair, pünktlich und besenrein
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Collectus Entrümpelung ist Ihre Entrümpelungsfirma in Ahlen und Umgebung. Ob Privathaushalt oder
              Gewerbeobjekt – wir entrümpeln professionell und zuverlässig. Nach einer kostenlosen Besichtigung
              erhalten Sie ein transparentes Festpreisangebot, das alle Leistungen umfasst.
            </p>
            <p>
              Unsere Entrümpelungen umfassen den Abtransport sämtlicher Gegenstände, die fachgerechte Entsorgung
              nach aktuellen Umweltvorschriften sowie die besenreine Übergabe. Auch kurzfristige Termine sind
              möglich – sprechen Sie uns einfach an.
            </p>
            <p>
              Wir sind in Ahlen, Beckum, Hamm, Warendorf, Oelde und der gesamten Region für Sie im Einsatz.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              { label: 'Entrümpelung Ahlen' },
              { label: 'Entrümpelungsfirma Ahlen' },
              { label: 'kurzfristige Entrümpelung' },
              { label: 'Entrümpelung Hamm', href: '/entruempelung-hamm' },
              { label: 'Gewerbeentrümpelung', href: '/gewerbeentruempelung' },
            ].map(tag => tag.href ? (
              <Link key={tag.label} href={tag.href} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500 hover:border-primary/30 hover:text-primary transition-colors">
                <MapPinIcon className="w-3 h-3" />{tag.label}
              </Link>
            ) : (
              <span key={tag.label} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag.label}
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
