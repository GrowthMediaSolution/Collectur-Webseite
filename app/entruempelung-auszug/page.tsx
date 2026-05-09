import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, MapPinIcon, ShieldCheckIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung bei Auszug – Besenrein übergeben | Collectus',
  description: 'Wohnung entrümpeln vor dem Auszug in Ahlen und Umgebung. Besenreine Übergabe, Festpreisgarantie. Stressfrei ausziehen!',
  alternates: { canonical: '/entruempelung-auszug' },
}

const vorteile = [
  'Stressfreie Räumung bei Auszug oder Mietende',
  'Kompletträumung oder Teilräumung – Sie entscheiden',
  'Sperrige Möbel und Altlasten fachgerecht entsorgt',
  'Renovierungsbedingte Entrümpelung vor Übergabe',
  'Besenreine Übergabe für die Wohnungsabnahme',
  'Kostenlose Besichtigung und verbindlicher Festpreis',
]

export default function EntruempelungAuszug() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung bei Auszug" areaServed="Ahlen" />
      <PageHero
        title="Entrümpelung bei"
        highlight="Auszug & Mietende"
        description="Wohnung entrümpeln vor dem Auszug? Wir räumen schnell und zuverlässig – damit die Übergabe reibungslos klappt. Festpreisgarantie und besenreine Übergabe."
        breadcrumb="Entrümpelung bei Auszug"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Für Mieter & Vermieter</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Wohnung räumen bei Auszug – wir helfen
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Der Auszug steht bevor und es gibt noch Möbel, Hausrat oder Sperrmüll, der entsorgt
              werden muss? Gerade bei zeitlichen Engpässen oder wenn der Vermieter die besenreine
              Übergabe fordert, ist professionelle Hilfe Gold wert.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Collectus Entrümpelung räumt Ihre Wohnung vor dem Auszug komplett oder teilweise.
              Wir entsorgen alte Möbel, Elektrogeräte, Sperrmüll und alles, was nicht mitgenommen
              werden soll. Die Wohnung ist danach besenrein und bereit für die Übergabe an den
              Vermieter oder Nachmieter.
            </p>
            <ul className="space-y-3">
              {vorteile.map((d, i) => (
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
                <ShieldCheckIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Auszugs-Service</p>
                <p className="text-sm text-gray-500">Schnell · Sauber · Besenrein</p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                { step: '01', title: 'Termin vereinbaren', desc: 'Kurzfristige Termine oft innerhalb weniger Tage möglich.' },
                { step: '02', title: 'Räumung', desc: 'Wir entfernen alle ungewünschten Gegenstände.' },
                { step: '03', title: 'Entsorgung', desc: 'Fachgerechte Trennung und Entsorgung aller Materialien.' },
                { step: '04', title: 'Besenrein', desc: 'Die Wohnung ist bereit für die Übergabe.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-primary/20">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{s.title}</h3>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Entrümpelung vor dem Auszug in Ahlen
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Viele unserer Kunden kontaktieren uns, wenn der Auszugstermin naht und noch Möbel
              oder Hausrat entsorgt werden müssen. Wir wissen, dass es dann oft schnell gehen muss.
              Deshalb bieten wir kurzfristige Termine – häufig bereits innerhalb weniger Tage.
            </p>
            <p>
              Der besondere Vorteil: Sie müssen sich um nichts kümmern. Wir kommen, räumen alles aus
              und übergeben die Wohnung besenrein. So können Sie sich voll auf Ihren Umzug konzentrieren.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung bei Auszug', 'Wohnung räumen Auszug', 'Mietwohnung entrümpeln', 'besenreine Übergabe', 'Entrümpelung vor Umzug'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks links={[
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/entruempelung', label: 'Entrümpelung' },
              { href: '/fuer-vermieter', label: 'Für Vermieter' },
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
            ]} />

      <CtaBanner />
    </>
  )
}
