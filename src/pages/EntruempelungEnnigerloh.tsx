import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { LocalBusinessSchema } from '../components/Schema'
import { CheckCircleIcon, MapPinIcon, TruckIcon } from '../components/Icons'

const leistungen = [
  'Wohnungsauflösung und Haushaltsauflösung',
  'Komplettentrümpelung zum Festpreis',
  'Keller- und Dachbodenräumung',
  'Sperrmüllabholung und Entsorgung',
  'Nachlassentrümpelung – diskret und professionell',
  'Besenreine Übergabe inklusive',
]

export default function EntruempelungEnnigerloh() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Ennigerloh" />
      <PageHero
        title="Entrümpelung in"
        highlight="Ennigerloh"
        description="Professionelle Entrümpelung in Ennigerloh und den Ortsteilen Westkirchen, Enniger und Ostenfelde. Festpreis, besenrein, zuverlässig."
        breadcrumb="Entrümpelung Ennigerloh"
        seoTitle="Entrümpelung Ennigerloh – Professionell & Zuverlässig | Collectus"
        seoDescription="Professionelle Entrümpelung in Ennigerloh, Westkirchen, Enniger und Ostenfelde. Festpreis, besenrein übergeben."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Ennigerloh & Ortsteile</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelungsservice für Ennigerloh
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Ennigerloh liegt direkt nördlich von Ahlen und ist in weniger als 15 Minuten zu erreichen.
              Gemeinsam mit den Ortsteilen Westkirchen, Enniger und Ostenfelde gehört Ennigerloh zu den
              Orten, in denen wir besonders häufig im Einsatz sind.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Die Nachfrage nach professioneller Entrümpelung in Ennigerloh ist vor allem bei
              Eigentümerwechseln nach Erbschaft und bei Umzügen in Senioreneinrichtungen hoch.
              Wir arbeiten in solchen Fällen stets einfühlsam und diskret.
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
                <p className="font-heading text-xl font-bold text-gray-900">Ennigerloh</p>
                <p className="text-sm text-gray-500">Ca. 10 km von Ahlen · Direkter Nachbar</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Ennigerloh Kern', text: 'Entrümpelungen und Wohnungsauflösungen in der Kernstadt.' },
                { title: 'Westkirchen', text: 'Haushaltsauflösungen und Kellerräumungen.' },
                { title: 'Enniger', text: 'Sperrmüllentsorgung und Dachbodenräumung.' },
                { title: 'Ostenfelde', text: 'Komplettentrümpelungen in ländlicher Umgebung.' },
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
            Entrümpelung Ennigerloh – Ihr Nachbar aus Ahlen
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Als direkte Nachbarstadt von Ahlen bieten wir in Ennigerloh besonders kurze Reaktionszeiten.
              Oft können wir einen Besichtigungstermin innerhalb von 1–2 Werktagen realisieren und die
              Entrümpelung zeitnah durchführen.
            </p>
            <p>
              Unser Service umfasst die komplette Bandbreite: Von der Wohnungsauflösung nach einem Todesfall
              über die Kellerentrümpelung bis zur Sperrmüllabholung. Alles zum transparenten Festpreis,
              alles mit besenreiner Übergabe.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Ennigerloh', 'Wohnungsauflösung Ennigerloh', 'Entrümpelung Westkirchen', 'Haushaltsauflösung Ennigerloh'].map(tag => (
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
              { to: '/entruempelung-oelde', label: 'Entrümpelung Oelde' },
              { to: '/entruempelung-warendorf', label: 'Entrümpelung Warendorf' },
              { to: '/entruempelung-sendenhorst', label: 'Entrümpelung Sendenhorst' },
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
