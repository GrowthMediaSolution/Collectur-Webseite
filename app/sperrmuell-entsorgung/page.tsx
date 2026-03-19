import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner, RelatedLinks } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, RecycleIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Sperrmüll Entsorgung Ahlen – Fachgerechte Abholung | Collectus',
  description: 'Sperrmüll-Entsorgung in Ahlen. Elektroschrott, Altlasten und mehr – umweltgerecht entsorgt. Kostenlose Besichtigung und Festpreis.',
  alternates: { canonical: '/sperrmuell-entsorgung' },
}

const items = [
  'Alte Möbel und Einrichtungsgegenstände',
  'Elektrogeräte (Kühlschrank, Waschmaschine, TV, etc.)',
  'Matratzen und Polstermöbel',
  'Bauschutt und Renovierungsabfälle',
  'Altholz, Metall und gemischte Abfälle',
  'Gartenabfälle und Grünschnitt',
]

export default function SperrmüllEntsorgung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Sperrmüll & Entsorgung" areaServed="Ahlen" />
      <PageHero
        title="Sperrmüll & Entsorgung in"
        highlight="Ahlen"
        description="Sperrmüll, Elektroschrott, Altlasten – wir entsorgen alles umweltgerecht und nach aktuellen Vorschriften. Sie müssen sich um nichts kümmern."
        breadcrumb="Sperrmüll & Entsorgung"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Umweltgerecht</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Was entsorgen wir?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Egal ob einzelne Sperrmüllstücke oder große Mengen an Altlasten – wir holen alles ab und
              entsorgen fachgerecht. Dabei trennen wir nach Materialarten, führen Verwertbares dem Recycling zu
              und entsorgen den Rest gemäß aktueller Umweltvorschriften.
            </p>
            <ul className="space-y-3">
              {items.map((d, i) => (
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
                <p className="font-heading text-xl font-bold text-gray-900">Entsorgungsservice</p>
                <p className="text-sm text-gray-500">Umweltgerecht · Schnell · Komplett</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">So funktioniert&apos;s</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="font-bold text-primary">1.</span> Sie kontaktieren uns mit einer Beschreibung.</li>
                  <li className="flex gap-2"><span className="font-bold text-primary">2.</span> Wir besichtigen kostenlos und erstellen ein Angebot.</li>
                  <li className="flex gap-2"><span className="font-bold text-primary">3.</span> Zum vereinbarten Termin holen wir alles ab.</li>
                  <li className="flex gap-2"><span className="font-bold text-primary">4.</span> Fachgerechte Trennung und Entsorgung.</li>
                </ol>
              </div>

              <div className="bg-dark rounded-xl p-5 text-white">
                <p className="text-xs uppercase tracking-widest text-primary-light mb-2">Wichtig</p>
                <p className="text-sm text-white/80">
                  Wir entsorgen auch Sondermüll und Elektroschrott nach dem ElektroG. Sprechen Sie uns an, wenn Sie unsicher sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Sperrmüll entsorgen in Ahlen – schnell und unkompliziert
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Wohin mit dem alten Sofa, dem defekten Kühlschrank oder dem Bauschutt aus der Renovierung?
              Collectus Entrümpelung übernimmt die fachgerechte Entsorgung Ihres Sperrmülls in Ahlen und Umgebung.
              Sie müssen nichts selbst zur Deponie bringen – wir kommen zu Ihnen.
            </p>
            <p>
              Wir trennen nach Materialarten und führen alles einer ordnungsgemäßen Entsorgung oder dem Recycling zu.
              Bei Elektrogeräten beachten wir die Vorgaben des Elektro- und Elektronikgerätegesetzes (ElektroG).
              So können Sie sicher sein, dass Ihre Entsorgung rechtskonform und umweltschonend erfolgt.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Sperrmüll entsorgen Ahlen', 'Sperrmüllabholung', 'Elektroschrott Entsorgung', 'Altlasten entsorgen Ahlen', 'Sperrmüllentsorgung Oelde'].map(tag => (
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
              { href: '/keller-dachboden', label: 'Keller & Dachboden' },
            ]} />

      <CtaBanner />
    </>
  )
}
