import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, ArchiveIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Keller & Dachboden räumen Ahlen – Platz schaffen | Collectus',
  description: 'Keller- und Dachbodenräumung in Ahlen. Wir schaffen Platz, entsorgen fachgerecht und räumen besenrein. Kostenlose Besichtigung!',
  alternates: { canonical: '/keller-dachboden' },
}

const included = [
  'Kellerentrümpelung inklusive Sperrmüll',
  'Dachbodenräumung und Entsorgung',
  'Abbruch von Regalen, Verschlägen und Einbauten',
  'Abtransport schwerer und sperriger Gegenstände',
  'Fachgerechte Entsorgung aller Materialien',
  'Besenreine Übergabe nach der Räumung',
]

export default function KellerDachboden() {
  return (
    <>
      <LocalBusinessSchema serviceName="Keller- und Dachbodenräumung" areaServed="Ahlen" />
      <PageHero
        title="Keller- & Dachbodenräumung in"
        highlight="Ahlen"
        description="Keller voll? Dachboden überquillt? Wir schaffen Platz – schnell, sauber und fachgerecht entsorgt. Auch bei schwer zugänglichen Räumen."
        breadcrumb="Keller- & Dachbodenräumung"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Platz schaffen</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Kellerentrümpelung & Dachbodenräumung
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Keller und Dachboden sind oft die Orte, an denen sich über Jahre Gegenstände ansammeln, die nicht mehr
              gebraucht werden. Wir räumen diese Bereiche vollständig, entsorgen alles fachgerecht und übergeben saubere,
              nutzbare Räume. Auch bei engen Treppen, Kellerverschlägen oder niedrigen Dachschrägen – wir finden eine Lösung.
            </p>
            <ul className="space-y-3">
              {included.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl p-8 border border-primary/10">
            <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
              <Image
                src="/images/keller-geraeumt.jpg"
                alt="Geräumter Keller nach Kellerentrümpelung durch Collectus Ahlen"
                width={1080}
                height={1440}
                className="w-full h-52 object-cover object-center"
              />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                <ArchiveIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Keller & Dachboden</p>
                <p className="text-sm text-gray-500">Auch bei schwer zugänglichen Räumen</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Kellerverschläge', text: 'Regale, Kisten, alte Möbel – alles wird geräumt und entsorgt.' },
                { title: 'Dachböden', text: 'Auch bei niedrigen Deckenhöhen und steilen Treppen arbeiten wir effizient.' },
                { title: 'Waschkeller', text: 'Defekte Geräte, Altholz und Gerümpel werden fachgerecht entfernt.' },
                { title: 'Garagen & Schuppen', text: 'Räumung inkl. Werkzeug, Reifen und sperrigem Inventar.' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-1">{s.title}</h4>
                  <p className="text-sm text-gray-500">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Keller räumen lassen in Ahlen – zuverlässig und besenrein
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Ob anstehende Renovierung, Verkauf der Immobilie oder einfach der Wunsch nach mehr Platz –
              eine professionelle Keller- oder Dachbodenräumung spart Ihnen Zeit, Mühe und Nerven.
              Collectus Entrümpelung übernimmt den kompletten Prozess: Besichtigung, Angebot, Räumung, Entsorgung.
            </p>
            <p>
              Wir entsorgen Sperrmüll, Elektrogeräte, Altholz und Bauschutt umweltgerecht und nach aktuellen Vorschriften.
              Am Ende erhalten Sie saubere, besenreine Räume – bereit zur Nutzung oder Übergabe.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Kellerentrümpelung Ahlen', 'Dachboden räumen Ahlen', 'Keller räumen lassen', 'Dachboden entrümpeln Beckum', 'Kellerräumung Hamm'].map(tag => (
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
              { href: '/entruempelung', label: 'Entrümpelung' },
              { href: '/sperrmuell-entsorgung', label: 'Sperrmüll & Entsorgung' },
            ]} />

      <CtaBanner />
    </>
  )
}
