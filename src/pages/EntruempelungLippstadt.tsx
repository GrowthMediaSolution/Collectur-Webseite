import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { LocalBusinessSchema } from '../components/Schema'
import { CheckCircleIcon, MapPinIcon, TruckIcon } from '../components/Icons'

const leistungen = [
  'Wohnungsauflösungen & Haushaltsauflösungen',
  'Komplett-Entrümpelung von Häusern und Wohnungen',
  'Keller- und Dachbodenräumung',
  'Nachlassauflösung & Entrümpelung nach Todesfall',
  'Sperrmüll-Abholung und Elektroschrott-Entsorgung',
  'Besenreine Übergabe und Festpreisgarantie',
]

export default function EntruempelungLippstadt() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Lippstadt" />
      <PageHero
        title="Entrümpelung in"
        highlight="Lippstadt"
        description="Professionelle Entrümpelung und Wohnungsauflösung in Lippstadt und Umgebung. Festpreisgarantie, kostenlose Besichtigung – von Collectus Entrümpelung aus Ahlen."
        breadcrumb="Entrümpelung Lippstadt"
        seoTitle="Entrümpelung Lippstadt – Festpreis & Besenrein | Collectus"
        seoDescription="Professionelle Entrümpelung in Lippstadt. Festpreisgarantie, kostenlose Besichtigung – schnell und zuverlässig von Collectus."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">ca. 40 km von Ahlen</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelung Lippstadt – fair &amp; besenrein
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Lippstadt – die Stadt an der Lippe – liegt am östlichen Rand unseres Einsatzgebiets.
              Ob Altstadtwohnung, Einfamilienhaus in Bad Waldliesborn oder Gewerberäume im Gewerbegebiet:
              Collectus Entrümpelung kümmert sich um Ihre komplette Räumung – von der Planung bis zur besenreinen Übergabe.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Von Ahlen aus erreichen wir Lippstadt in rund 40 Minuten. Wir bieten kostenlose
              Vor-Ort-Besichtigungen und erstellen verbindliche Festpreisangebote.
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
                <p className="font-heading text-xl font-bold text-gray-900">Lippstadt</p>
                <p className="text-sm text-gray-500">Alle Ortsteile · ~40 km</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 font-semibold">Ortsteile die wir bedienen:</p>
            <div className="flex flex-wrap gap-2">
              {['Lippstadt-Mitte', 'Bad Waldliesborn', 'Lipperode', 'Lipperbruch', 'Eickelborn', 'Hörste', 'Cappel'].map(ort => (
                <span key={ort} className="bg-white rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200">{ort}</span>
              ))}
            </div>
            <div className="mt-6 bg-dark rounded-xl p-5 text-white">
              <p className="text-sm font-bold mb-1">Kostenlose Besichtigung</p>
              <p className="text-xs text-white/70">Wir kommen unverbindlich nach Lippstadt und erstellen ein Festpreisangebot.</p>
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
            Entrümpelungsservice für Lippstadt und Umgebung
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              In Lippstadt sind wir regelmäßig im Einsatz. Ob Nachlassauflösung, Wohnungsräumung
              oder Kellerentrümpelung – unsere erfahrenen Teams arbeiten schnell, sauber und zu fairen Preisen.
              Verwertbare Gegenstände werden bei der Preiskalkulation berücksichtigt.
            </p>
            <p>
              Da Lippstadt an der Grenze zum Kreis Soest liegt, bedienen wir hier auch Aufträge aus
              den umliegenden Gemeinden. Kontaktieren Sie uns für ein kostenloses Angebot.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Lippstadt', 'Wohnungsauflösung Lippstadt', 'Haushaltsauflösung Lippstadt', 'Entrümpelungsfirma Lippstadt'].map(tag => (
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
              { to: '/entruempelung-oelde', label: 'Entrümpelung Oelde' },
              { to: '/entruempelung-guetersloh', label: 'Entrümpelung Gütersloh' },
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
