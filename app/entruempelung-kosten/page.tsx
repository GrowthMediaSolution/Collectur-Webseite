import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, MapPinIcon, PhoneIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung Kosten – Festpreis & kostenlose Besichtigung | Collectus',
  description: 'Was kostet eine Entrümpelung? Kostenlose Besichtigung vor Ort in Ahlen – verbindlicher Festpreis ohne versteckte Kosten.',
  alternates: { canonical: '/entruempelung-kosten' },
}

const faktoren = [
  { label: 'Wohnungsgröße', desc: 'Je mehr Räume, desto höher der Aufwand. Eine 2-Zimmer-Wohnung ist günstiger als ein komplettes Haus.' },
  { label: 'Menge des Räumguts', desc: 'Voll möbliert, teilmöbliert oder nur einzelne Stücke – die Menge beeinflusst den Preis.' },
  { label: 'Zugänglichkeit', desc: 'Erdgeschoss oder 5. OG ohne Aufzug? Enge Treppenhäuser erhöhen den Aufwand.' },
  { label: 'Art der Gegenstände', desc: 'Sondermüll, Elektrogeräte oder gefährliche Stoffe erfordern spezielle Entsorgung.' },
  { label: 'Sonderwünsche', desc: 'Grundreinigung, Renovierung oder Schädlingsbekämpfung nach der Räumung.' },
]

export default function EntruempelungKosten() {
  return (
    <>
      <LocalBusinessSchema serviceName="Entrümpelung" areaServed="Ahlen" />
      <PageHero
        title="Was kostet eine"
        highlight="Entrümpelung?"
        description="Transparente Preisinformation für Entrümpelungen, Wohnungsauflösungen und Haushaltsauflösungen in Ahlen und Umgebung. Kostenlose Besichtigung – Festpreis ohne versteckte Kosten."
        breadcrumb="Kosten & Preise"
      />

      {/* Kostenfaktoren */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Faire Preise</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-gray-900 mt-2">
              Diese Faktoren bestimmen den Preis
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Jede Entrümpelung ist individuell. Der Preis hängt von mehreren Faktoren ab, die wir bei einer kostenlosen Besichtigung gemeinsam erfassen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faktoren.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-heading text-lg font-bold text-gray-900">{f.label}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-7 text-white shadow-xl shadow-primary/20 flex flex-col justify-center">
              <h3 className="font-heading text-xl font-bold mb-2">Kostenlose Besichtigung</h3>
              <p className="text-white/80 text-sm mb-4">
                Wir kommen vor Ort, bewerten den Umfang und erstellen ein verbindliches Festpreisangebot – ohne Verpflichtung.
              </p>
              <a href="tel:023829661456" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
                <PhoneIcon className="w-4 h-4" /> 02382 9661456
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Festpreis-Garantie */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-8">
            Verbindlicher Festpreis – ohne böse Überraschungen
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Jede Entrümpelung ist individuell – deshalb erstellen wir Ihnen nach einer kostenlosen
            Besichtigung vor Ort ein verbindliches Festpreisangebot. Alle Kosten sind enthalten:
            Arbeitslohn, Transport und Entsorgung. Keine Nachforderungen.
          </p>
          <a href="tel:023829661456" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
            <PhoneIcon className="w-5 h-5" /> Jetzt kostenlose Besichtigung anfragen
          </a>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Entrümpelung Kosten in Ahlen – transparent und fair
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Die Frage „Was kostet eine Entrümpelung?" ist eine der häufigsten, die uns gestellt wird.
              Die ehrliche Antwort: Es kommt darauf an. Jede Immobilie, jeder Haushalt und jede Situation
              ist anders. Deshalb erstellen wir grundsätzlich individuelle Angebote nach einer Vor-Ort-Besichtigung.
            </p>
            <p>
              Was wir Ihnen aber garantieren können: Sie erhalten von uns immer ein verbindliches
              Festpreisangebot – erstellt nach einer kostenlosen Besichtigung vor Ort. Dieses Angebot
              enthält alle Kosten: Arbeitslohn, Transportkosten, Entsorgungsgebühren. Keine versteckten
              Zusatzkosten, keine bösen Überraschungen.
            </p>
            <p>
              Sollten bei der Entrümpelung verwertbare Gegenstände vorhanden sein (z. B. gut erhaltene Möbel,
              Antiquitäten, funktionierende Elektrogeräte), wird dies wertmindernd berücksichtigt – der Preis
              kann also auch niedriger ausfallen.
            </p>
            <p>
              Zögern Sie nicht, uns zu kontaktieren. Ein Anruf genügt, und wir vereinbaren zeitnah
              eine kostenlose Besichtigung bei Ihnen in Ahlen, Beckum, Hamm, Warendorf oder Umgebung.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              { label: 'Entrümpelung Kosten' },
              { label: 'Was kostet Entrümpelung' },
              { label: 'Wohnungsauflösung Kosten', href: '/wohnungsaufloesung' },
              { label: 'Entrümpelung Festpreis' },
              { label: 'günstige Entrümpelung Ahlen', href: '/entruempelung' },
              { label: 'kostenlose Besichtigung', href: '/kontakt' },
            ].map(tag => tag.href ? (
              <Link key={tag.label} href={tag.href} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500 hover:border-primary/30 hover:text-primary transition-colors">
                <MapPinIcon className="w-3 h-3" />{tag.label}
              </Link>
            ) : (
              <span key={tag.label} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Unsere Leistungen</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
              { href: '/entruempelung', label: 'Entrümpelung' },
              { href: '/keller-dachboden', label: 'Keller & Dachboden' },
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
