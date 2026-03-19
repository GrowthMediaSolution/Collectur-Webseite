import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, MapPinIcon, SparklesIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Gewerbeentrümpelung Ahlen – Büro & Gewerbe | Collectus',
  description: 'Professionelle Gewerbeentrümpelung in Ahlen. Büros, Lager, Praxen – schnell geräumt ohne Betriebsstörung. Kostenlose Besichtigung.',
  alternates: { canonical: '/gewerbeentruempelung' },
}

const leistungen = [
  'Büroauflösung und Räumung von Gewerberäumen',
  'Lager-, Werkstatt- und Hallenräumung',
  'Praxisauflösung (Arzt, Anwalt, etc.)',
  'Gastronomie-Entrümpelung (Restaurant, Café, Kiosk)',
  'Fachgerechte Entsorgung von Büromöbeln und Technik',
  'Besenreine Übergabe an Vermieter oder Nachmieter',
]

export default function Gewerbeentruempelung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Gewerbeentrümpelung" areaServed="Ahlen" />
      <PageHero
        title="Gewerbeentrümpelung &"
        highlight="Büroauflösung"
        description="Professionelle Entrümpelung von Büros, Lagerräumen, Praxen und Gewerbeimmobilien in Ahlen und Umgebung. Schnell, planbar und ohne Betriebsstörungen."
        breadcrumb="Gewerbeentrümpelung"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Für Unternehmen</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Gewerbeentrümpelung & Büroauflösung
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Ob Geschäftsaufgabe, Standortwechsel oder Renovierung – wenn gewerbliche Räumlichkeiten geräumt
              werden müssen, brauchen Sie einen zuverlässigen Partner, der effizient und termingerecht arbeitet.
              Collectus Entrümpelung ist auf Gewerbeentrümpelungen im Raum Ahlen spezialisiert.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Wir räumen Büros, Praxen, Lager, Werkstätten, Gastronomiebetriebe und andere Gewerbeobjekte –
              komplett oder teilweise. Dabei achten wir auf einen reibungslosen Ablauf, klare Terminplanung
              und die fachgerechte Entsorgung aller Materialien, einschließlich IT-Equipment und Elektrogeräten.
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
                <SparklesIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Gewerbe-Service</p>
                <p className="text-sm text-gray-500">Büro · Lager · Praxis · Gastronomie</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Büros', val: 'Alle Größen' },
                { label: 'Lager', val: 'Auch Hallen' },
                { label: 'Praxen', val: 'Arzt, Anwalt' },
                { label: 'Gastro', val: 'Restaurant, Café' },
                { label: 'Termin', val: 'Planbar' },
                { label: 'Übergabe', val: 'Besenrein' },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-bold text-gray-900">{item.val}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-dark rounded-xl p-5 text-white">
              <p className="text-xs uppercase tracking-widest text-primary-light mb-2">Datenschutz</p>
              <p className="text-sm text-white/80">
                Vertrauliche Unterlagen und Datenträger werden auf Wunsch nach DSGVO-Vorgaben vernichtet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Büroauflösung in Ahlen und Umgebung
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Professionelle Büroauflösungen erfordern eine andere Herangehensweise als private Entrümpelungen.
              Terminplanung, Zugangsbeschränkungen, sensible Daten und teure Technik – all das muss berücksichtigt
              werden. Collectus Entrümpelung hat die Erfahrung und das Know-how für Aufträge jeder Größe.
            </p>
            <p>
              Bei der Entsorgung von IT-Equipment und Datenträgern achten wir selbstverständlich auf eine
              datenschutzkonforme Vernichtung. Büromöbel, die noch in gutem Zustand sind, können auf Wunsch
              an soziale Einrichtungen gespendet werden.
            </p>
            <p>
              Wir entrümpeln gewerbliche Objekte in Ahlen, Beckum, Hamm, Warendorf und dem gesamten Umkreis.
              Kontaktieren Sie uns für ein kostenloses Angebot.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Gewerbeentrümpelung Ahlen', 'Büroauflösung Ahlen', 'Gewerberäumung Hamm', 'Büro entrümpeln', 'Praxisauflösung Ahlen'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks links={[
              { href: '/entruempelung', label: 'Entrümpelung' },
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/sperrmuell-entsorgung', label: 'Sperrmüll & Entsorgung' },
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
            ]} />

      <CtaBanner />
    </>
  )
}
