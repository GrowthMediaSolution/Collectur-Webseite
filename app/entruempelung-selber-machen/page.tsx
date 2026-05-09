import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner } from '../../components/Shared'
import { CheckCircleIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung selber machen oder Firma? – Vergleich | Collectus',
  description: 'Die große Frage: Selber entrümpeln oder einen Profi engagieren? Wir vergleichen Kosten, Aufwand und Ergebnis – ehrlich und transparent.',
  alternates: { canonical: '/entruempelung-selber-machen' },
}

const eigenVsProfi = [
  {
    aspekt: 'Zeitaufwand',
    selbst: 'Mehrere Tage bis Wochen',
    profi: 'In der Regel 1-2 Tage',
  },
  {
    aspekt: 'Körperliche Belastung',
    selbst: 'Hoch – schweres Heben, Treppen',
    profi: 'Keine – unser Team übernimmt alles',
  },
  {
    aspekt: 'Entsorgung',
    selbst: 'Selbst zum Wertstoffhof fahren',
    profi: 'Komplette Entsorgung inklusive',
  },
  {
    aspekt: 'Transport',
    selbst: 'Transporter mieten + fahren',
    profi: 'Fahrzeuge und Logistik inklusive',
  },
  {
    aspekt: 'Kosten',
    selbst: 'Miete, Sprit, Zeit, Wertstoffhof',
    profi: 'Transparenter Festpreis',
  },
  {
    aspekt: 'Sondermüll',
    selbst: 'Selbst entsorgen (kompliziert)',
    profi: 'Fachgerechte Entsorgung inklusive',
  },
]

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Entrümpelung selber machen oder Firma?',
    description:
      'Die große Frage: Selber entrümpeln oder einen Profi engagieren? Wir vergleichen Kosten, Aufwand und Ergebnis – ehrlich und transparent.',
    author: { '@type': 'Person', name: 'Abraham Osmani' },
    publisher: {
      '@type': 'Organization',
      name: 'Collectus Entrümpelung',
      url: 'https://collectus-entruempelung.de',
    },
    datePublished: '2025-04-26',
    dateModified: '2026-05-09',
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function EntruempelungSelberMachen() {
  return (
    <>
      <ArticleSchema />
      <PageHero
        title="Entrümpelung selber machen"
        highlight="oder Firma beauftragen?"
        description="Die große Frage: Selber entrümpeln oder einen Profi engagieren? Wir vergleichen Kosten, Aufwand und Ergebnis – ehrlich und transparent."
        breadcrumb="Selber machen vs. Firma"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Ratgeber</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-gray-900 mt-2">
              Entrümpelung: Selber machen oder Firma beauftragen?
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Eine Entrümpelung selber durchzuführen scheint auf den ersten Blick günstiger.
              Aber ist das wirklich so? Hier ein ehrlicher Vergleich.
            </p>
          </div>

          {/* Vergleichstabelle */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-12">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 text-sm font-bold text-gray-900">
              <div className="p-4">Aspekt</div>
              <div className="p-4 text-center">Selbst machen</div>
              <div className="p-4 text-center bg-primary-50 text-primary">Profi beauftragen</div>
            </div>
            {eigenVsProfi.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-gray-100 last:border-0 text-sm">
                <div className="p-4 font-medium text-gray-900">{row.aspekt}</div>
                <div className="p-4 text-center text-gray-500">{row.selbst}</div>
                <div className="p-4 text-center text-gray-700 bg-primary-50/30">{row.profi}</div>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h3 className="font-heading text-xl font-bold text-gray-900">Wann sich Selber-Machen lohnt</h3>
            <ul className="space-y-3">
              {[
                'Es handelt sich nur um wenige, leichte Gegenstände',
                'Sie haben genug Zeit und körperliche Fitness',
                'Sie besitzen oder können einen Transporter leihen',
                'Sie wissen, wie und wo Sie alles korrekt entsorgen',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl font-bold text-gray-900 pt-4">Wann ein Profi die bessere Wahl ist</h3>
            <ul className="space-y-3">
              {[
                'Ganze Wohnung oder Haus muss geräumt werden',
                'Es handelt sich um einen Nachlassfall oder eine Messie-Wohnung',
                'Zeitdruck: Übergabe an Vermieter steht bevor',
                'Sperrige oder schwere Möbel müssen über enge Treppen',
                'Sondermüll oder Elektroschrott muss entsorgt werden',
                'Sie möchten sich den Stress komplett ersparen',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-primary-50 border border-primary/10 rounded-2xl p-6 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Unser Tipp:</strong> Holen Sie sich in jedem Fall ein kostenloses Angebot.
                Erst dann können Sie die tatsächlichen Kosten vergleichen. Oft ist der Preisunterschied
                geringer als gedacht – und der Komfort deutlich höher.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung selber machen', 'Entrümpelung Firma', 'Entrümpelung selbst oder Firma', 'Wohnung selber entrümpeln', 'Entrümpelung Vergleich'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Weitere Ratgeber</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
              { href: '/entruempelung-checkliste', label: 'Checkliste' },
              { href: '/entruempelung-steuer', label: 'Steuerlich absetzen' },
              { href: '/faq', label: 'Häufige Fragen' },
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
