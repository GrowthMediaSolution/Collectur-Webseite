import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { LocalBusinessSchema } from '../components/Schema'
import { CheckCircleIcon, MapPinIcon, TruckIcon } from '../components/Icons'

const leistungen = [
  'Komplette Wohnungsauflösung zum Festpreis',
  'Entrümpelung einzelner Räume oder ganzer Immobilien',
  'Keller- und Dachbodenräumung',
  'Fachgerechte Entsorgung und Recycling',
  'Nachlassentrümpelung – diskret und einfühlsam',
  'Besenreine Übergabe im Anschluss',
]

export default function EntruempelungOelde() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Oelde" />
      <PageHero
        title="Entrümpelung in"
        highlight="Oelde"
        description="Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Oelde. Kostenlose Besichtigung, faire Festpreise und besenreine Übergabe."
        breadcrumb="Entrümpelung Oelde"
        seoTitle="Entrümpelung Oelde – Kostenlose Besichtigung | Collectus"
        seoDescription="Professionelle Entrümpelung in Oelde. Wohnungsauflösung, Haushaltsauflösung und Entsorgung – alles besenrein und zum Festpreis."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Oelde & Ortsteile</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelungsservice in Oelde
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Die Stadt Oelde liegt im östlichen Teil des Kreises Warendorf, ca. 20 km von unserem Standort
              in Ahlen entfernt. Wir sind in Oelde und den Ortsteilen Stromberg, Lette und Sünninghausen
              regelmäßig im Einsatz.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Ob renovierungsbedürftiges Haus oder moderne Mietwohnung – wir entrümpeln jede Art von Immobilie
              professionell und hinterlassen saubere, bezugsfertige Räume. Besonders in den älteren Vierteln
              Oeldes gibt es häufig Bedarf an gründlicher Keller- und Dachbodenräumung.
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
                <p className="font-heading text-xl font-bold text-gray-900">Entrümpelung Oelde</p>
                <p className="text-sm text-gray-500">Ca. 20 km von Ahlen · Kreis Warendorf</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Oelde', val: 'Kernstadt' },
                { label: 'Stromberg', val: 'Ortsteil' },
                { label: 'Lette', val: 'Ortsteil' },
                { label: 'Sünninghausen', val: 'Ortsteil' },
                { label: 'Besichtigung', val: 'Kostenlos' },
                { label: 'Übergabe', val: 'Besenrein' },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-bold text-gray-900">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Entrümpelungsfirma in Oelde – zuverlässig und fair
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Collectus Entrümpelung ist Ihre lokale Entrümpelungsfirma für Oelde und Umgebung. Wir bieten
              eine kostenlose Besichtigung vor Ort, erstellen ein transparentes Festpreisangebot und führen
              die Entrümpelung professionell und pünktlich durch.
            </p>
            <p>
              Unser Team entsorgt alle Materialien fachgerecht – Möbel, Elektrogeräte, Bauschutt und
              Sondermüll werden nach aktuellen Umweltvorschriften getrennt und recycelt. Am Ende
              erhalten Sie saubere, bezugsfertige Räume.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Oelde', 'Wohnungsauflösung Oelde', 'Haushaltsauflösung Oelde', 'Keller räumen Oelde', 'Sperrmüll Oelde'].map(tag => (
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
              { to: '/entruempelung-hamm', label: 'Entrümpelung Hamm' },
              { to: '/entruempelung-warendorf', label: 'Entrümpelung Warendorf' },
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
