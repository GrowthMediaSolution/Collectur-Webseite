import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, SparklesIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Haushaltsauflösung Ahlen – Einfühlsam & Professionell | Collectus',
  description: 'Komplette Haushaltsauflösung in Ahlen. Einfühlsam und besenrein – nach Todesfall, Pflegeheim oder Umzug. Kostenlose Besichtigung, Festpreis.',
  alternates: { canonical: '/haushaltsaufloesung' },
}

const included = [
  'Komplette Haushaltsauflösung inklusive aller Zimmer',
  'Sortierung nach Verwertung, Spende und Entsorgung',
  'Abbau und Abtransport sämtlicher Einrichtungsgegenstände',
  'Entsorgung von Elektrogeräten und Sondermüll',
  'Besenreine Übergabe der gesamten Immobilie',
  'Diskrete Abwicklung bei sensiblen Anlässen',
]

export default function Haushaltsaufloesung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Haushaltsauflösung" areaServed="Ahlen" />
      <PageHero
        title="Haushaltsauflösung in"
        highlight="Ahlen & Umgebung"
        description="Wir lösen komplette Haushalte auf – einfühlsam, unkompliziert und besenrein. Ob nach einem Todesfall, bei Pflegeheimeinzug oder Umzug: Wir übernehmen alles."
        breadcrumb="Haushaltsauflösung"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Komplettservice</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Was umfasst eine Haushaltsauflösung?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Eine Haushaltsauflösung geht über eine einfache Entrümpelung hinaus. Wir kümmern uns um den gesamten Haushalt
              einer Wohnung oder eines Hauses – von der Küche über das Wohnzimmer bis zu Keller und Dachboden. Dabei sortieren
              wir sorgfältig, verwerten was möglich ist und entsorgen den Rest fachgerecht und umweltschonend.
            </p>
            <ul className="space-y-3">
              {included.map((d, i) => (
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
                <SparklesIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Haushaltsauflösung</p>
                <p className="text-sm text-gray-500">Komplett · Diskret · Besenrein</p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { step: '01', title: 'Kostenlose Besichtigung', desc: 'Wir kommen vorbei und bewerten den Umfang des Haushalts.' },
                { step: '02', title: 'Sortierung & Bewertung', desc: 'Verwertbares wird getrennt, Persönliches zurückgegeben.' },
                { step: '03', title: 'Räumung & Entsorgung', desc: 'Abtransport und fachgerechte Entsorgung aller Gegenstände.' },
                { step: '04', title: 'Besenreine Übergabe', desc: 'Alle Räume werden gesäubert und übergabefertig gemacht.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-primary/20">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{s.title}</h4>
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
            Haushaltsauflösung in Ahlen – einfühlsam und professionell
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Collectus Entrümpelung ist Ihr zuverlässiger Partner für Haushaltsauflösungen in Ahlen und der Region.
              Wir wissen, dass der Anlass einer Haushaltsauflösung häufig emotional belastend sein kann – deshalb
              arbeiten wir stets diskret, einfühlsam und mit klarem Ablauf.
            </p>
            <p>
              Ob nach einem Todesfall, bei Einzug in ein Pflegeheim oder bei einem Umzug ins Ausland: Wir räumen
              den kompletten Haushalt, sortieren nach verwertbaren und entsorgungspflichtigen Gegenständen und
              übergeben die Räume besenrein. Selbstverständlich geben wir persönliche Gegenstände, Dokumente und
              Wertgegenstände an Sie oder die Familie zurück.
            </p>
            <p>
              Unser Einsatzgebiet umfasst Ahlen, Beckum, Hamm, Warendorf, Oelde, Drensteinfurt, Sendenhorst und
              weitere Orte im Umkreis von 40–50 km. Die Besichtigung ist immer kostenlos.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Haushaltsauflösung Ahlen', 'Haushaltsauflösung Kosten', 'Haushaltsauflösung nach Todesfall', 'Haushaltsauflösung Beckum', 'Haushalt auflösen lassen'].map(tag => (
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
              { href: '/keller-dachboden', label: 'Keller & Dachboden' },
              { href: '/sperrmuell-entsorgung', label: 'Sperrmüll & Entsorgung' },
            ]} />

      <CtaBanner />
    </>
  )
}
