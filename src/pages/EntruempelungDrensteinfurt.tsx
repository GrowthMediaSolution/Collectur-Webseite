import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { LocalBusinessSchema } from '../components/Schema'
import { CheckCircleIcon, MapPinIcon, TruckIcon } from '../components/Icons'

const leistungen = [
  'Wohnungsauflösung & Haushaltsauflösung',
  'Entrümpelung von Wohnungen und Häusern',
  'Keller- und Dachbodenräumung',
  'Sperrmüll- und Sondermüll-Entsorgung',
  'Besenreine Übergabe garantiert',
  'Kostenlose Besichtigung vor Ort',
]

export default function EntruempelungDrensteinfurt() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Drensteinfurt" />
      <PageHero
        title="Entrümpelung in"
        highlight="Drensteinfurt"
        description="Entrümpelungen, Wohnungsauflösungen und Haushaltsauflösungen in Drensteinfurt. Persönlich, schnell und zum Festpreis von Ihrem regionalen Partner."
        breadcrumb="Entrümpelung Drensteinfurt"
        seoTitle="Entrümpelung Drensteinfurt – Schnell & Besenrein | Collectus"
        seoDescription="Entrümpelung in Drensteinfurt und Ortsteilen. Persönlich, schnell und zum Festpreis – von Ihrem regionalen Partner aus Ahlen."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Drensteinfurt & Walstedde</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelung in Drensteinfurt und Rinkerode
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Die Stadt Drensteinfurt mit ihren Ortsteilen Walstedde und Rinkerode liegt ca. 25 km nordwestlich
              von Ahlen – gut erreichbar über die B58. Wir sind regelmäßig in Drensteinfurt im Einsatz und
              kennen die örtlichen Gegebenheiten bestens.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              In einer Kleinstadt wie Drensteinfurt schätzen unsere Kunden vor allem die persönliche
              Betreuung und die kurzen Kommunikationswege. Vom ersten Anruf bis zur besenreinen Übergabe
              haben Sie immer einen festen Ansprechpartner.
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
                <p className="font-heading text-xl font-bold text-gray-900">Drensteinfurt</p>
                <p className="text-sm text-gray-500">Ca. 25 km von Ahlen · Über B58</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Drensteinfurt Kern', text: 'Wohnungsauflösungen in der Innenstadt und Umgebung.' },
                { title: 'Walstedde', text: 'Entrümpelungen in ländlichen Wohnlagen.' },
                { title: 'Rinkerode', text: 'Haushaltsauflösungen und Kellerräumungen.' },
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
            Entrümpelung Drensteinfurt – persönlich und professionell
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Collectus Entrümpelung bietet in Drensteinfurt, Walstedde und Rinkerode einen persönlichen
              Entrümpelungsservice an. Wir kommen kostenlos zur Besichtigung, erstellen ein Festpreisangebot
              und führen alle Arbeiten zum vereinbarten Termin durch.
            </p>
            <p>
              Unsere Kunden in Drensteinfurt schätzen besonders unsere Pünktlichkeit und die saubere
              Arbeitsweise. Egal ob Haushaltsauflösung nach einem Umzug, Nachlassentrümpelung oder
              Kellerräumung – wir hinterlassen die Räume in einwandfreiem Zustand.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Drensteinfurt', 'Wohnungsauflösung Drensteinfurt', 'Haushaltsauflösung Drensteinfurt', 'Entrümpelung Walstedde'].map(tag => (
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
              { to: '/entruempelung-hamm', label: 'Entrümpelung Hamm' },
              { to: '/entruempelung-beckum', label: 'Entrümpelung Beckum' },
              { to: '/entruempelung-sendenhorst', label: 'Entrümpelung Sendenhorst' },
              { to: '/entruempelung-warendorf', label: 'Entrümpelung Warendorf' },
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
