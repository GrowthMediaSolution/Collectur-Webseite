import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { LocalBusinessSchema } from '../components/Schema'
import { CheckCircleIcon, MapPinIcon, TruckIcon } from '../components/Icons'

const leistungen = [
  'Wohnungsauflösung und Haushaltsauflösung',
  'Entrümpelung aller Raumtypen',
  'Keller- und Dachbodenräumung',
  'Sperrmüll- und Elektroschrott-Entsorgung',
  'Besenreine Übergabe',
  'Kostenlose Besichtigung und Festpreisangebot',
]

export default function EntruempelungSendenhorst() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Sendenhorst" />
      <PageHero
        title="Entrümpelung in"
        highlight="Sendenhorst"
        description="Entrümpelung und Wohnungsauflösung in Sendenhorst und Albersloh. Schnell erreichbar von Ahlen – kostenlose Besichtigung, fairer Festpreis."
        breadcrumb="Entrümpelung Sendenhorst"
        seoTitle="Entrümpelung Sendenhorst – Ihr Partner vor Ort | Collectus"
        seoDescription="Entrümpelung und Wohnungsauflösung in Sendenhorst und Albersloh. Schnell erreichbar, kostenlose Besichtigung, fairer Festpreis."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Sendenhorst & Albersloh</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Ihr Entrümpelungsdienst in Sendenhorst
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Sendenhorst liegt nur ca. 15 km nördlich von Ahlen und ist damit schnell erreichbar. Gemeinsam mit
              dem Ortsteil Albersloh betreuen wir hier regelmäßig Entrümpelungen, Wohnungsauflösungen und
              Haushaltsauflösungen.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              In einer ruhigen Kleinstadt wie Sendenhorst kommt es oft zu Nachlassfällen oder Umzügen älterer
              Bewohner in betreute Einrichtungen. Wir gehen in solchen Situationen besonders einfühlsam vor
              und garantieren eine diskrete Abwicklung.
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
                <p className="font-heading text-xl font-bold text-gray-900">Sendenhorst</p>
                <p className="text-sm text-gray-500">Ca. 15 km von Ahlen · Schnell vor Ort</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Sendenhorst Kern', text: 'Wohnungsauflösungen und Entrümpelungen in der Kernstadt.' },
                { title: 'Albersloh', text: 'Haushaltsauflösungen und Kellerräumungen im Ortsteil.' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-1">{s.title}</h4>
                  <p className="text-sm text-gray-500">{s.text}</p>
                </div>
              ))}
              <div className="bg-dark rounded-xl p-5 text-white">
                <p className="text-xs uppercase tracking-widest text-primary-light mb-2">Vorteil</p>
                <p className="text-sm text-white/80">Durch die kurze Anfahrt von Ahlen können wir häufig bereits innerhalb von 2 Werktagen einen Termin anbieten.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Entrümpelung Sendenhorst – schnell, nah und zuverlässig
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Collectus Entrümpelung ist Ihr lokaler Ansprechpartner für Entrümpelungen in Sendenhorst.
              Durch die Nähe zu unserem Standort in Ahlen profitieren Sie von kurzen Anfahrtswegen,
              schneller Terminvergabe und persönlicher Betreuung.
            </p>
            <p>
              Jede Entrümpelung beginnt mit einer kostenlosen Besichtigung. Danach erhalten Sie ein
              transparentes Festpreisangebot. Zum vereinbarten Termin räumen wir gründlich, entsorgen
              fachgerecht und übergeben die Räume besenrein.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Sendenhorst', 'Wohnungsauflösung Sendenhorst', 'Entrümpelung Albersloh', 'Haushaltsauflösung Sendenhorst'].map(tag => (
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
              { to: '/entruempelung-drensteinfurt', label: 'Entrümpelung Drensteinfurt' },
              { to: '/entruempelung-ennigerloh', label: 'Entrümpelung Ennigerloh' },
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
