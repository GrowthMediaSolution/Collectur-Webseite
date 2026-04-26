import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, MapPinIcon, ShieldCheckIcon } from '../../components/Icons'
import SeniorenCareScene from '../../components/illustrations/SeniorenCareScene'

export const metadata: Metadata = {
  title: 'Seniorenservice Ahlen – Einfühlsame Entrümpelung',
  description: 'Einfühlsame Entrümpelung für Senioren in Ahlen. Seniorenwohnungen und Heimzimmer behutsam räumen – mit Verständnis und Respekt. Kostenlose Beratung vor Ort.',
  alternates: { canonical: '/seniorenentruempelung' },
}

const leistungen = [
  'Begleitung beim Verkleinern des Haushalts',
  'Schonende Räumung von Seniorenwohnungen und Zimmern in Pflegeheimen',
  'Sorgsamer Umgang mit persönlichen Erinnerungsstücken',
  'Entsorgung aller nicht mehr benötigten Gegenstände',
  'Koordination mit Angehörigen, Betreuern oder Pflegediensten',
  'Besenreine Übergabe der Wohnung oder des Zimmers',
]

export default function Seniorenentruempelung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Seniorenservice" areaServed="Ahlen" />
      <PageHero
        title="Seniorenservice &"
        highlight="Seniorenentrümpelung"
        description="Einfühlsame Entrümpelung für Senioren in Ahlen und Umgebung. Wir räumen Seniorenwohnungen und Heimzimmer behutsam und respektvoll – mit Zeit und Verständnis."
        breadcrumb="Seniorenservice"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Einfühlsam & Geduldig</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Entrümpelung für Senioren – mit Herz und Verstand
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Im Alter verändert sich vieles: Der Einzug ins betreute Wohnen oder in ein Pflegeheim
              steht an, oder eine Seniorenwohnung muss nach einem Todesfall aufgelöst werden.
              Der Haushalt muss verkleinert oder geräumt werden – und das fällt oft schwer.
              Hier helfen wir einfühlsam und professionell.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Collectus Entrümpelung begleitet Senioren und ihre Angehörigen bei der Verkleinerung
              des Haushalts. Wir nehmen uns Zeit, sortieren gemeinsam und behandeln persönliche
              Erinnerungsstücke mit dem Respekt, den sie verdienen.
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

          <div className="bg-gradient-to-br from-amber-50 via-white to-primary-50 rounded-3xl p-8 border border-amber-100 overflow-hidden">
            {/* Illustration */}
            <SeniorenCareScene className="w-full h-auto mb-6 rounded-2xl" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                <ShieldCheckIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Senioren-Service</p>
                <p className="text-sm text-gray-500">Einfühlsam · Persönlich · Komplett</p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                { step: '01', title: 'Persönliches Gespräch', desc: 'Wir klären den Umfang in Ruhe – bei Ihnen zu Hause.' },
                { step: '02', title: 'Gemeinsam sortieren', desc: 'Was bleibt, was kommt mit, was wird entsorgt.' },
                { step: '03', title: 'Haushalt räumen', desc: 'Wir entrümpeln behutsam und professionell.' },
                { step: '04', title: 'Übergabe', desc: 'Die Wohnung oder das Zimmer ist besenrein übergeben – für Sie oder die Hausverwaltung.' },
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
            Seniorenservice – Haushalt verkleinern und Wohnungen räumen
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Ob Seniorenwohnung, betreutes Wohnen oder Zimmer im Pflegeheim – wir übernehmen die
              Räumung behutsam und zuverlässig. Viele Senioren leben seit Jahrzehnten in ihrem
              Zuhause und haben eine tiefe emotionale Bindung an viele Gegenstände. Wir verstehen
              das und arbeiten mit der nötigen Sensibilität und Geduld.
            </p>
            <p>
              Auf Wunsch stimmen wir uns auch mit Angehörigen, Betreuern oder der Hausverwaltung ab.
              Unser Ziel: Ihnen so viel Arbeit und Stress wie möglich abzunehmen.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Seniorenservice Ahlen', 'Entrümpelung für Senioren', 'Haushalt verkleinern', 'Heimzimmer entrümpeln', 'Wohnung verkleinern Hilfe'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks links={[
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/nachlassentruempelung', label: 'Nachlassentrümpelung' },
              { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
            ]} />

      <CtaBanner />
    </>
  )
}
