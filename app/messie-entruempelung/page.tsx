import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, MapPinIcon, ShieldCheckIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Messie-Entrümpelung Ahlen – Diskret & Professionell | Collectus',
  description: 'Diskrete Messie-Entrümpelung in Ahlen und Umgebung. Professionelle Räumung, Grundreinigung, fachgerechte Entsorgung. Vertraulich und respektvoll.',
  alternates: { canonical: '/messie-entruempelung' },
}

const besonderheiten = [
  'Kein Verurteilen – wir arbeiten diskret und vorurteilsfrei',
  'Schutzausrüstung und professionelle Hygienemaßnahmen',
  'Schädlingsbekämpfung wird bei Bedarf koordiniert',
  'Sorgfältige Trennung persönlicher Gegenstände',
  'Fachgerechte Entsorgung aller Materialien',
  'Grundreinigung und besenreine Übergabe',
]

export default function MessieEntruempelung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Messie-Entrümpelung" areaServed="Ahlen" />
      <PageHero
        title="Messie-Entrümpelung in"
        highlight="Ahlen & Umgebung"
        description="Diskrete und professionelle Messie-Entrümpelung. Wir räumen verwahrloste Wohnungen vorurteilsfrei, gründlich und mit Respekt – von der Entrümpelung bis zur Grundreinigung."
        breadcrumb="Messie-Entrümpelung"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Diskret & Vorurteilsfrei</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Messie-Wohnung entrümpeln – professionell und respektvoll
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Eine Messie-Entrümpelung unterscheidet sich grundlegend von einer normalen Entrümpelung. Oft sind
              Wohnungen über Jahre hinweg mit Gegenständen, Müll und Altlasten gefüllt. In vielen Fällen kommen
              Hygiene- und Schädlingsprobleme hinzu. Collectus Entrümpelung geht mit solchen Situationen
              professionell und vor allem respektvoll um.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Wir verurteilen niemanden. Unsere Aufgabe ist es, die Wohnung in einen bewohnbaren oder
              übergebefähigen Zustand zu versetzen. Dabei arbeiten wir mit professioneller Schutzausrüstung,
              sorgen bei Bedarf für Schädlingsbekämpfung und koordinieren bei extremen Fällen
              auch mit Gesundheitsamt oder Hausverwaltung.
            </p>
            <ul className="space-y-3">
              {besonderheiten.map((d, i) => (
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
                <p className="font-heading text-xl font-bold text-gray-900">Messie-Entrümpelung</p>
                <p className="text-sm text-gray-500">Diskret · Professionell · Grundreinigung</p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { step: '01', title: 'Diskretes Erstgespräch', desc: 'Vertrauliche Bestandsaufnahme der Situation.' },
                { step: '02', title: 'Schutz & Sicherheit', desc: 'Professionelle Schutzausrüstung und Hygienemaßnahmen.' },
                { step: '03', title: 'Kompletträumung', desc: 'Systematisches Räumen, Trennen und Entsorgen aller Materialien.' },
                { step: '04', title: 'Grundreinigung', desc: 'Intensive Reinigung der gesamten Wohnung nach der Räumung.' },
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
            Messie-Wohnung räumen lassen – vertraulich und zuverlässig
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Ob Sie selbst betroffen sind, als Angehöriger Hilfe suchen oder als Hausverwaltung eine
              vermüllte Wohnung räumen lassen müssen – wir sind Ihr diskreter Ansprechpartner. Jede Anfrage
              wird vertraulich behandelt.
            </p>
            <p>
              Eine Messie-Entrümpelung erfordert in der Regel mehr Zeit und spezielles Equipment als eine
              normale Entrümpelung. Die Kosten hängen vom Ausmaß der Vermüllung ab. Nach einer
              kostenlosen Besichtigung erhalten Sie ein transparentes Angebot, das alle notwendigen
              Arbeiten umfasst – von der Räumung über die Schädlingsbekämpfung bis zur Grundreinigung.
            </p>
            <p>
              Wir sind in Ahlen, Beckum, Hamm, Warendorf und dem gesamten Umkreis für Sie da.
              Kontaktieren Sie uns – wir helfen Ihnen schnell und unkompliziert.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Messie Entrümpelung', 'Messie Wohnung räumen', 'Messie Entrümpelung Kosten', 'vermüllte Wohnung räumen', 'Messie Wohnung Ahlen'].map(tag => (
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
              { href: '/nachlassentruempelung', label: 'Nachlassentrümpelung' },
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
            ]} />

      <CtaBanner />
    </>
  )
}
