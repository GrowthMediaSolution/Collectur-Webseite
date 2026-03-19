import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { CheckCircleIcon, MapPinIcon } from '../components/Icons'

const kategorien = [
  {
    title: 'Das darf auf den Sperrmüll',
    items: ['Möbel (Schränke, Tische, Stühle, Betten)', 'Matratzen und Lattenroste', 'Teppiche und Teppichböden', 'Fahrräder und Kinderwagen', 'Große Spielzeuge (Schaukeln, Rutschen)', 'Sanitärkeramik (Waschbecken, Toiletten)'],
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    title: 'Das darf NICHT auf den Sperrmüll',
    items: ['Elektrogeräte (Fernseher, Kühlschrank, Waschmaschine)', 'Batterien und Akkus', 'Farben, Lacke und Lösungsmittel', 'Bauschutt und Baumaterial', 'Autoreifen', 'Hausmüll in Säcken'],
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
  },
]

export default function SperrmüllRatgeber() {
  return (
    <>
      <PageHero
        title="Sperrmüll-Ratgeber:"
        highlight="Was darf in den Sperrmüll?"
        description="Was gehört zum Sperrmüll, was nicht? Unser Ratgeber klärt auf – mit klaren Listen und hilfreichen Tipps für die korrekte Entsorgung in Ahlen."
        breadcrumb="Sperrmüll-Ratgeber"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Ratgeber</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-gray-900 mt-2">
              Was darf auf den Sperrmüll?
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Nicht alles, was groß und sperrig ist, gehört auf den Sperrmüll. Hier erfahren Sie,
              was die Stadt Ahlen und die meisten Kommunen akzeptieren – und was nicht.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {kategorien.map((kat, i) => (
              <div key={i} className={`${kat.bg} rounded-2xl border ${kat.border} p-6 sm:p-8`}>
                <h3 className={`font-heading text-lg font-bold ${kat.color} mb-4`}>{kat.title}</h3>
                <ul className="space-y-3">
                  {kat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircleIcon className={`w-5 h-5 ${kat.color} mt-0.5 shrink-0`} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Sperrmüll in Ahlen – Tipps und Alternativen
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              In Ahlen können Sie Sperrmüll über die Stadt anmelden. Allerdings gibt es oft
              Wartezeiten und Mengenbegrenzungen. Zudem werden Elektrogeräte, Bauschutt und
              Schadstoffe nicht mitgenommen – die müssen Sie selbst zum Wertstoffhof bringen.
            </p>
            <p>
              <strong>Die einfache Alternative:</strong> Beauftragen Sie Collectus Entrümpelung.
              Wir holen alles ab – Sperrmüll, Elektroschrott und Sondermüll. Sie müssen nichts
              sortieren, nichts schleppen und nicht auf den Abholtermin der Stadt warten.
            </p>
            <p>
              Gut erhaltene Möbel und Gegenstände werden auf Wunsch an soziale Einrichtungen
              gespendet. Das ist gut für die Umwelt und kann die Entsorgungskosten senken.
            </p>

            <h3 className="font-heading text-lg font-bold text-gray-900 pt-4">Häufige Fragen zur Sperrmüll-Entsorgung</h3>
            <div className="space-y-4 mt-4">
              {[
                { q: 'Wie oft kann ich Sperrmüll anmelden?', a: 'In den meisten Gemeinden können Sie 1-2 Mal pro Jahr Sperrmüll kostenlos anmelden.' },
                { q: 'Was kostet eine professionelle Sperrmüll-Abholung?', a: 'Die Kosten hängen von der Menge und dem Aufwand ab. Kontaktieren Sie uns für ein individuelles Angebot.' },
                { q: 'Können Sie auch Elektrogeräte mitnehmen?', a: 'Ja, wir entsorgen auch Elektrogeräte und Elektroschrott fachgerecht.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h4 className="font-bold text-gray-900 mb-1">{faq.q}</h4>
                  <p className="text-gray-500 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Was darf in den Sperrmüll', 'Sperrmüll Ahlen', 'Sperrmüll entsorgen', 'Sperrmüll Abholung', 'Sperrmüll anmelden Ahlen'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Weitere Ratgeber & Leistungen</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: '/sperrmuell-entsorgung', label: 'Sperrmüll & Entsorgung' },
              { to: '/elektroschrott-entsorgung', label: 'Elektroschrott' },
              { to: '/entruempelung-checkliste', label: 'Checkliste' },
              { to: '/entruempelung-kosten', label: 'Kosten & Preise' },
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
