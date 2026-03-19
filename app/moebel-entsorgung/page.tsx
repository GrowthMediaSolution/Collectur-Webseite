import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, MapPinIcon, SparklesIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Möbel entsorgen Ahlen – Altmöbel Abholung | Collectus',
  description: 'Alte Möbel entsorgen in Ahlen. Abholung, Demontage und fachgerechte Entsorgung. Schnell, günstig und umweltgerecht.',
  alternates: { canonical: '/moebel-entsorgung' },
}

const leistungen = [
  'Abholung einzelner Sperrmüllstücke (Couch, Schrank, etc.)',
  'Altmöbel-Entsorgung bei Neuanschaffung oder Umzug',
  'Sofa, Bett, Matratze und Polstermöbel entsorgen',
  'Schrankwände, Regale und Tische abbauen und entsorgen',
  'Küchen-Demontage und Entsorgung',
  'Transport zum Wertstoffhof inklusive',
]

export default function MoebelEntsorgung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Möbel-Entsorgung" areaServed="Ahlen" />
      <PageHero
        title="Möbel entsorgen &"
        highlight="Altmöbel-Abholung"
        description="Alte Möbel entsorgen lassen in Ahlen und Umgebung. Wir holen Ihre Altmöbel ab, demontieren bei Bedarf und entsorgen fachgerecht – schnell und günstig."
        breadcrumb="Möbel entsorgen"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Schnell & Unkompliziert</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Alte Möbel entsorgen lassen – ohne Stress
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Das alte Sofa muss raus, der Kleiderschrank passt nicht mehr in die neue Wohnung oder
              die Küche wird ausgetauscht? Alte Möbel zu entsorgen ist oft mühsam – vor allem, wenn
              sie sperrig, schwer oder schwer zugänglich sind.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Collectus Entrümpelung nimmt Ihnen diese Arbeit ab. Wir holen Ihre Altmöbel direkt
              ab, demontieren bei Bedarf und entsorgen alles fachgerecht. Sie müssen sich um nichts
              kümmern – weder um den Transport noch um die Anmeldung beim Sperrmüll.
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
                <SparklesIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Möbel-Entsorgung</p>
                <p className="text-sm text-gray-500">Abholung · Demontage · Entsorgung</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Sofa / Couch', zeit: 'Abholung & Entsorgung' },
                { label: 'Kleiderschrank', zeit: 'Demontage & Entsorgung' },
                { label: 'Bett + Matratze', zeit: 'Abholung & Entsorgung' },
                { label: 'Küche (komplett)', zeit: 'Ausbau & Entsorgung' },
                { label: 'Schrankwand', zeit: 'Demontage & Entsorgung' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100">
                  <span className="font-medium text-gray-900 text-sm">{item.label}</span>
                  <span className="text-primary font-bold text-sm">{item.zeit}</span>
                </div>
              ))}
              <p className="text-xs text-gray-400 mt-2">Kostenlose Besichtigung – individuelles Festpreisangebot</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Möbel entsorgen in Ahlen und Umgebung
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Die Sperrmüll-Abholung der Stadt ist oft ausgebucht oder hat lange Wartezeiten.
              Wir bieten Ihnen eine schnelle Alternative: Rufen Sie uns an, und wir holen Ihre
              alten Möbel ab – oft schon innerhalb weniger Tage.
            </p>
            <p>
              Gut erhaltene Möbel können auf Wunsch an soziale Einrichtungen gespendet werden.
              So tun Sie etwas Gutes und sparen gleichzeitig Entsorgungskosten.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Möbel entsorgen Ahlen', 'Altmöbel Abholung', 'Sofa entsorgen', 'Schrank entsorgen', 'Möbel abholen lassen', 'Sperrmüll Abholung'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Weitere Leistungen</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/sperrmuell-entsorgung', label: 'Sperrmüll & Entsorgung' },
              { href: '/elektroschrott-entsorgung', label: 'Elektroschrott-Entsorgung' },
              { href: '/entruempelung', label: 'Entrümpelung' },
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="block rounded-2xl border border-gray-200 hover:border-primary/30 bg-white p-5 text-center font-semibold text-gray-800 hover:text-primary shadow-sm hover:shadow-md transition-all">
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
