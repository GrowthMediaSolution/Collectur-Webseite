import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, MapPinIcon, RecycleIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Elektroschrott Entsorgung Ahlen – Abholung & Recycling | Collectus',
  description: 'Elektroschrott fachgerecht entsorgen in Ahlen. Wir holen alte Elektrogeräte ab und recyceln umweltgerecht. Schnell und unkompliziert.',
  alternates: { canonical: '/elektroschrott-entsorgung' },
}

const geraete = [
  'Kühlschränke, Gefriertruhen und Waschmaschinen',
  'Fernseher, Monitore und Computer',
  'Mikrowellen, Backöfen und Herde',
  'Drucker, Scanner und IT-Equipment',
  'Staubsauger, Bügeleisen und Kleingeräte',
  'Lampen, Leuchten und elektrisches Werkzeug',
]

export default function ElektroschrottEntsorgung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Elektroschrott-Entsorgung" areaServed="Ahlen" />
      <PageHero
        title="Elektroschrott &"
        highlight="Altgeräte-Entsorgung"
        description="Fachgerechte Elektroschrott-Entsorgung in Ahlen und Umgebung. Wir holen Ihre alten Elektrogeräte ab und entsorgen sie umweltgerecht – schnell und unkompliziert."
        breadcrumb="Elektroschrott-Entsorgung"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Umweltgerecht</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Elektroschrott entsorgen – einfach &amp; korrekt
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Alte Elektrogeräte dürfen nicht in den Hausmüll. Die fachgerechte Entsorgung von
              Elektroschrott ist gesetzlich vorgeschrieben und erfordert professionelle Handhabung.
              Collectus Entrümpelung holt Ihre Altgeräte ab und sorgt für die umweltgerechte Entsorgung.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Ob einzelne Großgeräte wie Waschmaschinen und Kühlschränke oder größere Mengen
              aus einer Wohnungsauflösung – wir kümmern uns darum. Die Entsorgung erfolgt über
              zertifizierte Entsorgungsbetriebe nach den geltenden Vorschriften.
            </p>
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">Wir entsorgen unter anderem:</h3>
            <ul className="space-y-3">
              {geraete.map((d, i) => (
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
                <RecycleIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Elektroschrott</p>
                <p className="text-sm text-gray-500">Abholung · Entsorgung · Recycling</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: '🧊', label: 'Großgeräte', desc: 'Kühlschrank, Waschmaschine, Herd' },
                { icon: '📺', label: 'Bildschirme', desc: 'TV, Monitor, Laptop' },
                { icon: '🖨️', label: 'IT-Equipment', desc: 'Drucker, PC, Server' },
                { icon: '💡', label: 'Kleingeräte', desc: 'Lampen, Werkzeug, Haushaltsgeräte' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
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
            Elektroschrott-Entsorgung in Ahlen
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Elektroschrott fällt bei fast jeder Entrümpelung an. Ob einzelne Geräte oder ganze
              Büroausstattungen – wir übernehmen die Abholung und fachgerechte Entsorgung.
              Das spart Ihnen den Weg zum Wertstoffhof und die Unsicherheit bei der korrekten Entsorgung.
            </p>
            <p>
              Funktionsfähige Geräte können auf Wunsch an soziale Einrichtungen gespendet werden.
              So leisten Sie einen Beitrag zur Nachhaltigkeit und die Entsorgungskosten können sinken.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Elektroschrott entsorgen Ahlen', 'Altgeräte Abholung', 'Kühlschrank entsorgen', 'Waschmaschine entsorgen', 'Elektroschrott Entsorgung Kosten'].map(tag => (
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
              { href: '/entruempelung', label: 'Entrümpelung' },
              { href: '/gewerbeentruempelung', label: 'Gewerbeentrümpelung' },
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
