import { Link } from 'react-router-dom'
import { PageHero, CtaBanner } from '../components/Shared'
import { LocalBusinessSchema } from '../components/Schema'
import { CheckCircleIcon, MapPinIcon, TruckIcon } from '../components/Icons'

const leistungen = [
  'Wohnungsauflösungen & Haushaltsauflösungen',
  'Entrümpelung einzelner Räume oder ganzer Gebäude',
  'Keller- und Dachbodenräumung',
  'Sperrmüll- und Elektroschrott-Entsorgung',
  'Besenreine Übergabe an Vermieter oder Käufer',
  'Kostenlose Besichtigung und Festpreisangebot',
]

export default function EntruempelungBeckum() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Beckum" />
      <PageHero
        title="Entrümpelung in"
        highlight="Beckum"
        description="Professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Beckum. Schnell, zuverlässig und besenrein – von Collectus Entrümpelung aus Ahlen."
        breadcrumb="Entrümpelung Beckum"
        seoTitle="Entrümpelung Beckum – Kostenlose Besichtigung & Festpreis | Collectus"
        seoDescription="Professionelle Entrümpelung in Beckum und Umgebung. Wohnungsauflösung, Haushaltsauflösung, besenreine Übergabe. Jetzt kostenlos anfragen!"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Ihr Partner in Beckum</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelungsservice für Beckum und Umgebung
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Beckum liegt nur wenige Kilometer von unserem Standort in Ahlen entfernt – deshalb sind wir schnell bei Ihnen
              vor Ort. Ob eine komplette Wohnungsauflösung, eine Kellerentrümpelung oder die Entsorgung von Sperrmüll:
              Collectus Entrümpelung übernimmt alle Arbeiten professionell und zu fairen Festpreisen.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              In Beckum und den Ortsteilen Neubeckum, Roland und Vellern sind wir regelmäßig im Einsatz.
              Die Nachfrage nach zuverlässigen Entrümpelungsdiensten ist hier besonders hoch – gerade bei
              Mieterwechseln, Nachlassfällen oder der Vorbereitung einer Immobilie für den Verkauf.
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
                <p className="font-heading text-xl font-bold text-gray-900">Entrümpelung Beckum</p>
                <p className="text-sm text-gray-500">Ca. 10 km von Ahlen · Schnell vor Ort</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Neubeckum', text: 'Wohnungsauflösungen und Entrümpelungen im Beckumer Ortsteil.' },
                { title: 'Roland', text: 'Schnelle Kellerräumung und Sperrmüllentsorgung.' },
                { title: 'Vellern', text: 'Haushaltsauflösungen und besenreine Übergaben.' },
                { title: 'Beckum Innenstadt', text: 'Entrümpelungen in Mehrfamilienhäusern und Altbauten.' },
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
            Warum Collectus für Ihre Entrümpelung in Beckum?
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Als Entrümpelungsfirma mit Sitz in Ahlen kennen wir die Region rund um Beckum bestens. Die kurze Anfahrt
              von nur ca. 10 Kilometern ermöglicht uns eine schnelle Terminvergabe – häufig innerhalb von 2–3 Werktagen.
              Auch kurzfristige Einsätze sind möglich.
            </p>
            <p>
              Bei jeder Entrümpelung in Beckum gehen wir nach dem gleichen bewährten Ablauf vor: Nach einer kostenlosen
              Besichtigung erhalten Sie ein transparentes Festpreisangebot. Zum vereinbarten Termin räumen wir die
              Immobilie, sortieren nach Verwertung und Entsorgung und übergeben die Räume besenrein.
            </p>
            <p>
              Wir entsorgen sämtliche Materialien fachgerecht und umweltschonend – von Möbeln und Elektrogeräten
              bis hin zu Bauschutt und Sondermüll. Vertrauen Sie auf einen lokalen Anbieter, der Wert auf
              saubere Arbeit und faire Preise legt.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Beckum', 'Wohnungsauflösung Beckum', 'Haushaltsauflösung Beckum', 'Entrümpelungsfirma Beckum', 'Sperrmüll Beckum'].map(tag => (
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
              { to: '/entruempelung-warendorf', label: 'Entrümpelung Warendorf' },
              { to: '/entruempelung-oelde', label: 'Entrümpelung Oelde' },
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
