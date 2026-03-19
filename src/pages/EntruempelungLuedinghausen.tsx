import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { LocalBusinessSchema } from '../components/Schema'
import { CheckCircleIcon, MapPinIcon, TruckIcon } from '../components/Icons'

const leistungen = [
  'Wohnungsauflösung & Haushaltsauflösung',
  'Komplett-Entrümpelung von Häusern und Wohnungen',
  'Keller-, Dachboden- und Garagenräumung',
  'Sperrmüll- und Elektroschrott-Entsorgung',
  'Nachlassauflösung nach Todesfall',
  'Besenreine Übergabe zum Festpreis',
]

export default function EntruempelungLuedinghausen() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Lüdinghausen" />
      <PageHero
        title="Entrümpelung in"
        highlight="Lüdinghausen"
        description="Professionelle Entrümpelung und Wohnungsauflösung in Lüdinghausen. Schnelle Termine, transparente Festpreise – von Collectus Entrümpelung aus Ahlen."
        breadcrumb="Entrümpelung Lüdinghausen"
        seoTitle="Entrümpelung Lüdinghausen – Schnell & zum Festpreis | Collectus"
        seoDescription="Professionelle Entrümpelung in Lüdinghausen. Schnelle Termine, transparente Festpreise, besenreine Übergabe."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">ca. 30 km von Ahlen</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelung Lüdinghausen – zuverlässig &amp; fair
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Lüdinghausen, die Drei-Burgen-Stadt im Kreis Coesfeld, liegt nordwestlich von Ahlen.
              Mit rund 25.000 Einwohnern und vielen älteren Wohngebieten gibt es hier regelmäßig
              Bedarf an professionellen Entrümpelungen – sei es nach einem Erbfall, bei
              Umzügen oder bei der Räumung von Mietwohnungen.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Von unserem Standort in Ahlen sind wir in knapp 30 Minuten bei Ihnen in Lüdinghausen.
              Wir bieten kostenlose Besichtigungen und erstellen ein verbindliches Festpreisangebot
              ohne versteckte Kosten.
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
                <p className="font-heading text-xl font-bold text-gray-900">Lüdinghausen</p>
                <p className="text-sm text-gray-500">Alle Ortsteile · ~30 km</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 font-semibold">Ortsteile die wir bedienen:</p>
            <div className="flex flex-wrap gap-2">
              {['Lüdinghausen-Mitte', 'Seppenrade', 'Aldenhövel', 'Ondrup', 'Berenbrock'].map(ort => (
                <span key={ort} className="bg-white rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-200">{ort}</span>
              ))}
            </div>
            <div className="mt-6 bg-dark rounded-xl p-5 text-white">
              <p className="text-sm font-bold mb-1">Kostenlose Besichtigung</p>
              <p className="text-xs text-white/70">Wir kommen unverbindlich nach Lüdinghausen.</p>
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
            Entrümpelungsservice in Lüdinghausen
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Lüdinghausen bietet mit seinen historischen Burgen und gewachsenen Wohngebieten ein
              vielfältiges Einsatzfeld. Von der Altbauwohnung in der Stadtmitte bis zum Bauernhof
              in Seppenrade – wir entrümpeln jedes Objekt professionell und hinterlassen es besenrein.
            </p>
            <p>
              Verwertbare und gut erhaltene Gegenstände werden bei der Kalkulation angerechnet.
              So können wir Ihnen oft günstigere Preise bieten als erwartet.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Lüdinghausen', 'Wohnungsauflösung Lüdinghausen', 'Haushaltsauflösung Lüdinghausen', 'Entrümpelungsfirma Lüdinghausen'].map(tag => (
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
              { to: '/entruempelung-drensteinfurt', label: 'Entrümpelung Drensteinfurt' },
              { to: '/entruempelung-sendenhorst', label: 'Entrümpelung Sendenhorst' },
              { to: '/entruempelung-muenster', label: 'Entrümpelung Münster' },
              { to: '/entruempelung-werne', label: 'Entrümpelung Werne' },
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
