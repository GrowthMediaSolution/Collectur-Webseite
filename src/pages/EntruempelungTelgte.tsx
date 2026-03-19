import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { LocalBusinessSchema } from '../components/Schema'
import { CheckCircleIcon, MapPinIcon, TruckIcon } from '../components/Icons'

const leistungen = [
  'Wohnungsauflösung & Haushaltsauflösung',
  'Entrümpelung von Häusern und Wohnungen',
  'Keller- und Dachbodenräumung',
  'Sperrmüll-Abholung und Entsorgung',
  'Nachlassauflösung & Messie-Entrümpelung',
  'Besenreine Übergabe inklusive',
]

export default function EntruempelungTelgte() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Telgte" />
      <PageHero
        title="Entrümpelung in"
        highlight="Telgte"
        description="Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Telgte. Schnell, professionell und zu fairen Festpreisen – von Collectus Entrümpelung aus Ahlen."
        breadcrumb="Entrümpelung Telgte"
        seoTitle="Entrümpelung Telgte – Professionell & Fair | Collectus"
        seoDescription="Entrümpelung in Telgte und Westbevern. Professionell, schnell und zu fairen Festpreisen – von Collectus Entrümpelung."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">ca. 30 km von Ahlen</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelung Telgte – Ihr lokaler Partner
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Telgte, die Wallfahrtsstadt an der Ems, liegt zwischen Warendorf und Münster. Die Stadt
              mit ihren rund 20.000 Einwohnern ist ein wichtiger Teil unseres Einsatzgebiets.
              Von Ahlen erreichen wir Telgte in etwa 30 Minuten.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Ob Entrümpelung in der Altstadt, Wohnungsauflösung in Westbevern oder Kellerräumung
              in einem der umliegenden Ortsteile – Collectus Entrümpelung übernimmt die komplette Räumung
              zum vereinbarten Festpreis.
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
                <p className="font-heading text-xl font-bold text-gray-900">Telgte</p>
                <p className="text-sm text-gray-500">Alle Ortsteile · ~30 km</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 font-semibold">Ortsteile die wir bedienen:</p>
            <div className="flex flex-wrap gap-2">
              {['Telgte-Mitte', 'Westbevern', 'Westbevern-Vadrup', 'Raestrup'].map(ort => (
                <span key={ort} className="bg-white rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200">{ort}</span>
              ))}
            </div>
            <div className="mt-6 bg-dark rounded-xl p-5 text-white">
              <p className="text-sm font-bold mb-1">Kostenlose Besichtigung</p>
              <p className="text-xs text-white/70">Wir kommen unverbindlich zu Ihnen nach Telgte.</p>
              <a href="tel:023829661456" className="mt-3 inline-flex items-center gap-2 text-primary-light font-bold text-sm hover:underline">
                02382 9661456
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Entrümpelungsservice in Telgte
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              In Telgte leben viele Familien in Einfamilienhäusern – und wenn sich die Lebenssituation
              ändert, steht oft eine Entrümpelung an. Ob Umzug, Erbfall oder einfach der Wunsch nach
              Ordnung: Wir räumen schnell, sauber und zum fairen Festpreis.
            </p>
            <p>
              Unser Team kümmert sich um die komplette Abwicklung – von der Besichtigung über die
              Sortierung bis zur fachgerechten Entsorgung und besenreinen Übergabe.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Telgte', 'Wohnungsauflösung Telgte', 'Haushaltsauflösung Telgte', 'Entrümpelungsfirma Telgte'].map(tag => (
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
              { to: '/entruempelung-warendorf', label: 'Entrümpelung Warendorf' },
              { to: '/entruempelung-muenster', label: 'Entrümpelung Münster' },
              { to: '/entruempelung-sendenhorst', label: 'Entrümpelung Sendenhorst' },
              { to: '/entruempelung-beckum', label: 'Entrümpelung Beckum' },
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
