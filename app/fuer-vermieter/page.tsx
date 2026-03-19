import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { CheckCircleIcon, MapPinIcon, ShieldCheckIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung für Vermieter & Hausverwaltungen | Collectus',
  description: 'Schnelle und zuverlässige Wohnungsräumung bei Mieterwechsel, Räumungsklagen oder zurückgelassenem Hausrat. Ihr Partner für Hausverwaltungen in Ahlen und Umgebung.',
  alternates: { canonical: '/fuer-vermieter' },
}

const vorteile = [
  'Schnelle Räumung bei Mieterwechsel oder Kündigung',
  'Entrümpelung von zurückgelassenen Gegenständen',
  'Koordination ohne Mieterbeteiligung möglich',
  'Besenreine Übergabe für sofortige Neuvermietung',
  'Fachgerechte Entsorgung aller Materialien',
  'Dokumentation der Räumung für Ihre Unterlagen',
  'Festpreisgarantie – keine Kostennachforderungen',
  'Kurzfristige Termine bei dringenden Fällen',
]

export default function FuerVermieter() {
  return (
    <>
      <PageHero
        title="Entrümpelung für"
        highlight="Vermieter & Hausverwaltungen"
        description="Schnelle und zuverlässige Wohnungsräumung bei Mieterwechsel, Räumungsklagen oder zurückgelassenem Hausrat. Ihr Partner für Hausverwaltungen in Ahlen und Umgebung."
        breadcrumb="Für Vermieter"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Für Eigentümer & Hausverwaltungen</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Wohnungsräumung für Vermieter
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Als Vermieter oder Hausverwaltung kennen Sie die Situation: Ein Mieter zieht aus und
              hinterlässt Möbel, Müll oder die gesamte Einrichtung. Oder eine Räumungsklage wurde
              durchgesetzt und die Wohnung muss schnell geräumt werden.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Collectus Entrümpelung ist Ihr zuverlässiger Partner für solche Fälle. Wir räumen
              die Wohnung schnell, gründlich und besenrein – damit Sie so bald wie möglich
              neu vermieten können. Auf Wunsch erstellen wir eine Fotodokumentation der Räumung.
            </p>
            <ul className="space-y-3">
              {vorteile.map((d, i) => (
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
                <ShieldCheckIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Vermieter-Service</p>
                <p className="text-sm text-gray-500">Schnell · Zuverlässig · Dokumentiert</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Mieterwechsel', desc: 'Zurückgelassene Gegenstände schnell entsorgen.' },
                { label: 'Räumungsklage', desc: 'Professionelle Räumung nach Gerichtsbeschluss.' },
                { label: 'Vermüllte Wohnung', desc: 'Messie-Entrümpelung und Grundreinigung.' },
                { label: 'Neuvermietung', desc: 'Besenreine Übergabe für sofortige Vermietung.' },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-sm">{item.label}</h4>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-dark rounded-xl p-5 text-white">
              <p className="text-xs uppercase tracking-widest text-primary-light mb-2">Langfristige Zusammenarbeit</p>
              <p className="text-sm text-white/80">
                Wir arbeiten gerne langfristig mit Hausverwaltungen zusammen. Fragen Sie nach
                Rahmenvereinbarungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Ihr Entrümpelungspartner für die Immobilienwirtschaft
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Für Vermieter und Hausverwaltungen ist eine schnelle Wohnungsräumung bares Geld wert.
              Jeder Tag, an dem eine Wohnung nicht vermietet werden kann, kostet Mieteinnahmen.
              Wir verstehen das und handeln entsprechend zügig.
            </p>
            <p>
              Besonders bei Problemfällen – vermüllte Wohnungen, Sondermüll oder
              schwierige Zugangssituationen – können Sie sich auf unsere Erfahrung verlassen.
              Wir rechnen die Leistung sauber ab und erstellen ordnungsgemäße Rechnungen für
              Ihre Buchhaltung.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung für Vermieter', 'Wohnungsräumung Vermieter', 'Hausverwaltung Entrümpelung', 'Mietwohnung räumen', 'Entrümpelung nach Räumungsklage'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks links={[
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/messie-entruempelung', label: 'Messie-Entrümpelung' },
              { href: '/entruempelung-auszug', label: 'Entrümpelung bei Auszug' },
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
            ]} />

      <CtaBanner />
    </>
  )
}
