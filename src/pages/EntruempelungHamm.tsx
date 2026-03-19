import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { LocalBusinessSchema } from '../components/Schema'
import { CheckCircleIcon, MapPinIcon, TruckIcon } from '../components/Icons'

const leistungen = [
  'Wohnungsauflösungen & Haushaltsauflösungen',
  'Komplettentrümpelung von Wohnungen und Häusern',
  'Keller-, Dachboden- und Garagenräumung',
  'Sperrmüll- und Elektroschrott-Entsorgung',
  'Nachlassentrümpelung nach Todesfall',
  'Kostenlose Besichtigung und Festpreisangebot',
]

export default function EntruempelungHamm() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Hamm" />
      <PageHero
        title="Entrümpelung in"
        highlight="Hamm"
        description="Professionelle Entrümpelung und Wohnungsauflösung in Hamm. Schnelle Terminvergabe, faire Festpreise und besenreine Übergabe – von Ihrem regionalen Partner."
        breadcrumb="Entrümpelung Hamm"
        seoTitle="Entrümpelung Hamm – Schnell & Besenrein zum Festpreis | Collectus"
        seoDescription="Zuverlässige Entrümpelung in Hamm. Alle Stadtteile, schnelle Termine, faire Festpreise. Kostenlose Besichtigung vor Ort."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Einsatzgebiet Hamm</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Ihr Entrümpelungsservice in Hamm
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Hamm ist eine der größten Städte in unserer Einsatzregion und liegt nur ca. 25 km westlich
              von unserem Standort in Ahlen. Wir sind regelmäßig in allen Stadtbezirken im Einsatz –
              von Hamm-Mitte über Heessen und Bockum-Hövel bis nach Pelkum und Uentrop.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Gerade in einer Stadt mit über 180.000 Einwohnern gibt es einen hohen Bedarf an professionellen
              Entrümpelungen: Mieterwechsel, Nachlassfälle, Gewerbeauflösungen oder einfach der Wunsch
              nach mehr Platz. Collectus Entrümpelung ist Ihr zuverlässiger Partner für alle diese Situationen.
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
                <TruckIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Entrümpelung Hamm</p>
                <p className="text-sm text-gray-500">Ca. 25 km von Ahlen · Alle Stadtteile</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Hamm-Mitte', text: 'Entrümpelungen in der Innenstadt und angrenzenden Vierteln.' },
                { title: 'Heessen & Bockum-Hövel', text: 'Wohnungsauflösungen im Norden der Stadt.' },
                { title: 'Pelkum & Herringen', text: 'Keller- und Dachbodenräumungen im Westen.' },
                { title: 'Uentrop & Rhynern', text: 'Haushaltsauflösungen im Osten und Süden.' },
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
            Entrümpelungsfirma für Hamm – lokal, schnell und transparent
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Als Entrümpelungsfirma aus der Region bieten wir Ihnen kurze Wege und persönliche Betreuung.
              In Hamm führen wir regelmäßig Entrümpelungen durch – in Privatwohnungen genauso wie in
              Gewerberäumen, Büros oder Lagerräumen.
            </p>
            <p>
              Unser Ablauf ist immer gleich: Kostenlose Besichtigung, transparentes Festpreisangebot,
              professionelle Räumung und besenreine Übergabe. Sie müssen sich um nichts kümmern.
              Wir koordinieren die gesamte Logistik von A bis Z.
            </p>
            <p>
              Ob Altbauwohnung in der Innenstadt oder Einfamilienhaus am Stadtrand – wir haben die
              Erfahrung und Ausstattung für jede Größe und jede Situation. Rufen Sie uns an oder
              schreiben Sie uns eine E-Mail für ein unverbindliches Angebot.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Hamm', 'Wohnungsauflösung Hamm', 'Entrümpelungsfirma Hamm', 'Haushaltsauflösung Hamm', 'Sperrmüll Hamm'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Weitere Einsatzgebiete</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: '/entruempelung-beckum', label: 'Entrümpelung Beckum' },
              { to: '/entruempelung-warendorf', label: 'Entrümpelung Warendorf' },
              { to: '/entruempelung-oelde', label: 'Entrümpelung Oelde' },
              { to: '/entruempelung-drensteinfurt', label: 'Entrümpelung Drensteinfurt' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="block rounded-2xl border border-gray-200 hover:border-primary/30 bg-white p-5 text-center font-semibold text-gray-800 hover:text-primary shadow-sm hover:shadow-md transition-all">
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
