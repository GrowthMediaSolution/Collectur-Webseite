import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, MapPinIcon, ShieldCheckIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Nachlassentrümpelung Ahlen – Einfühlsam & Diskret | Collectus',
  description: 'Professionelle Nachlassentrümpelung in Ahlen. Einfühlsame Räumung nach Todesfall, diskret und respektvoll. Kostenlose Besichtigung.',
  alternates: { canonical: '/nachlassentruempelung' },
}

const ablauf = [
  'Einfühlsames Erstgespräch – telefonisch oder vor Ort',
  'Kostenlose Besichtigung und transparente Angebotserstellung',
  'Sicherung persönlicher Gegenstände, Dokumente und Wertgegenstände',
  'Sortierung nach Verwertung, Spende und Entsorgung',
  'Fachgerechte Entsorgung aller übrigen Gegenstände',
  'Besenreine Übergabe an Erben, Vermieter oder Käufer',
]

export default function Nachlassentruempelung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Nachlassentrümpelung" areaServed="Ahlen" />
      <PageHero
        title="Nachlassentrümpelung &"
        highlight="Entrümpelung nach Todesfall"
        description="Einfühlsame, professionelle Nachlassentrümpelung in Ahlen und Umgebung. Wir übernehmen die komplette Räumung – diskret, respektvoll und zu fairen Konditionen."
        breadcrumb="Nachlassentrümpelung"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Sensibel & Diskret</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelung nach Todesfall – wir nehmen Ihnen die Last ab
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Der Verlust eines Angehörigen ist eine emotional schwere Zeit. Die Auflösung des Haushalts kann
              eine zusätzliche Belastung darstellen, die viele Hinterbliebene überfordert. Collectus Entrümpelung
              übernimmt diese Aufgabe für Sie – einfühlsam, professionell und komplett.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Wir wissen, dass bei einer Nachlassentrümpelung besondere Sorgfalt gefragt ist. Persönliche
              Erinnerungsstücke, Dokumente, Fotos und Wertgegenstände werden sorgfältig aussortiert und an
              die Familie übergeben. Erst danach beginnt die eigentliche Entrümpelung und Entsorgung.
            </p>
            <ul className="space-y-3">
              {ablauf.map((d, i) => (
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
                <p className="font-heading text-xl font-bold text-gray-900">Nachlassentrümpelung</p>
                <p className="text-sm text-gray-500">Diskret · Einfühlsam · Professionell</p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { step: '01', title: 'Erstgespräch', desc: 'Wir hören Ihnen zu und klären den Umfang in Ruhe.' },
                { step: '02', title: 'Persönliches sichern', desc: 'Fotos, Dokumente und Wertgegenstände werden an Sie übergeben.' },
                { step: '03', title: 'Haushalt auflösen', desc: 'Sortierung, Verwertung und fachgerechte Entsorgung.' },
                { step: '04', title: 'Besenrein übergeben', desc: 'Die Immobilie ist bereit für den nächsten Schritt.' },
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
            Nachlassentrümpelung in Ahlen und Umgebung
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Eine Entrümpelung nach Todesfall erfordert mehr als nur das Räumen von Räumen. Es geht um Respekt
              vor dem Verstorbenen, um Rücksicht auf die Trauernden und um eine professionelle Abwicklung, die
              den Hinterbliebenen den Rücken stärkt.
            </p>
            <p>
              Bei Collectus Entrümpelung haben wir langjährige Erfahrung mit Nachlassauflösungen. Wir wissen,
              worauf es ankommt: Ein sensibles Erstgespräch, die Sicherung persönlicher Gegenstände und eine
              saubere, vollständige Räumung. Auf Wunsch koordinieren wir uns auch mit Nachlassverwaltern,
              Rechtsanwälten oder Hausverwaltungen.
            </p>
            <p>
              Unser Einsatzgebiet umfasst Ahlen, Beckum, Hamm, Warendorf und den gesamten Umkreis von 40–50 km.
              Die Besichtigung ist immer kostenlos. Rufen Sie uns an – wir sind für Sie da.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Nachlassentrümpelung Ahlen', 'Entrümpelung nach Todesfall', 'Nachlass auflösen', 'Nachlassauflösung Kosten', 'Wohnungsauflösung Todesfall'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks links={[
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
              { href: '/entruempelung', label: 'Entrümpelung' },
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
            ]} />

      <CtaBanner />
    </>
  )
}
