import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, HomeIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Wohnungsauflösung Ahlen – Komplett & Besenrein | Collectus',
  description: 'Professionelle Wohnungsauflösung in Ahlen und Umgebung. Kostenlose Besichtigung, besenreine Übergabe, Festpreisgarantie. Jetzt unverbindlich anfragen!',
  alternates: { canonical: '/wohnungsaufloesung' },
}

const details = [
  'Komplette Räumung aller Räume',
  'Sortierung nach Verwertung und Entsorgung',
  'Möbelabbau und Abtransport',
  'Umweltgerechte Entsorgung aller Materialien',
  'Besenreine Übergabe an den Vermieter oder Käufer',
  'Auf Wunsch: Renovierung nach der Räumung',
]

const situations = [
  { title: 'Umzug', text: 'Sie ziehen um und möchten die alte Wohnung komplett geräumt übergeben.' },
  { title: 'Todesfall', text: 'Eine einfühlsame und diskrete Auflösung des Haushalts eines Angehörigen.' },
  { title: 'Trennung', text: 'Bei Trennung übernehmen wir die Auflösung der gemeinsamen Wohnung.' },
  { title: 'Verkauf / Vermietung', text: 'Die Immobilie soll besenrein für den neuen Mieter oder Käufer vorbereitet werden.' },
]

export default function Wohnungsaufloesung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Wohnungsauflösung" areaServed="Ahlen" />
      <PageHero
        title="Wohnungsauflösung in"
        highlight="Ahlen & Umgebung"
        description="Professionelle Wohnungsauflösung – komplett, schnell und besenrein. Von der Sortierung über die Entsorgung bis zur besenreinen Übergabe. Alles aus einer Hand."
        breadcrumb="Wohnungsauflösung"
      />

      {/* Was wir tun */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Unser Service</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Was beinhaltet eine Wohnungsauflösung?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Eine Wohnungsauflösung umfasst die vollständige Räumung einer Wohnung inklusive aller Räume, Keller und Dachboden.
              Wir sortieren nach Verwertbarem und Entsorgungsgut, demontieren Möbel und entsorgen alles fachgerecht.
              Am Ende übergeben wir die Räumlichkeiten besenrein – bereit für den nächsten Mieter oder den Verkauf.
            </p>
            <ul className="space-y-3">
              {details.map((d, i) => (
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
                <HomeIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Wohnungsauflösung</p>
                <p className="text-sm text-gray-500">Ahlen · Beckum · Hamm · Warendorf</p>
              </div>
            </div>
            <div className="space-y-4">
              {situations.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-1">{s.title}</h4>
                  <p className="text-sm text-gray-500">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Fließtext */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Wohnungsauflösung in Ahlen – schnell, sauber und zuverlässig
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Sie suchen eine Firma für eine Wohnungsauflösung in Ahlen? Collectus Entrümpelung übernimmt die komplette Auflösung
              Ihrer Wohnung – egal ob aufgrund eines Umzugs, Todesfalls, einer Trennung oder weil die Immobilie verkauft oder neu
              vermietet werden soll. Unser erfahrenes Team arbeitet diskret, zügig und mit höchster Sorgfalt.
            </p>
            <p>
              Bei einer Wohnungsauflösung kümmern wir uns um alles: Vom Abbau und Abtransport der Möbel über die fachgerechte
              Entsorgung von Sperrmüll und Elektrogeräten bis hin zur besenreinen Übergabe der leeren Räume. Auf Wunsch
              übernehmen wir auch kleinere Renovierungsarbeiten wie das Entfernen von Tapeten oder Bodenbelägen.
            </p>
            <p>
              Unser Einsatzgebiet umfasst Ahlen und die umliegende Region. Dazu gehören unter anderem Beckum,
              Hamm, Warendorf, Oelde, Drensteinfurt und Sendenhorst. Die Besichtigung vor Ort ist grundsätzlich kostenlos –
              wir erstellen Ihnen daraufhin ein transparentes Festpreisangebot ohne versteckte Kosten.
            </p>
            <p>
              Vertrauen Sie auf einen lokalen Partner, der die Region kennt und Wert auf pünktliche, saubere Arbeit legt.
              Kontaktieren Sie uns telefonisch unter <a href="tel:023829661456" className="text-primary font-semibold hover:underline">02382 9661456</a> oder
              per <a href="mailto:info@rundumshausserviceleistungen.de" className="text-primary font-semibold hover:underline">E-Mail</a>.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {['Wohnungsauflösung Ahlen', 'Wohnungsräumung Beckum', 'Wohnung räumen lassen Hamm', 'Wohnungsauflösung Kosten', 'besenreine Wohnungsauflösung'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Andere Leistungen */}
      <RelatedLinks links={[
              { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
              { href: '/entruempelung', label: 'Entrümpelung' },
              { href: '/keller-dachboden', label: 'Keller & Dachboden' },
              { href: '/sperrmuell-entsorgung', label: 'Sperrmüll & Entsorgung' },
            ]} />

      <CtaBanner />
    </>
  )
}
