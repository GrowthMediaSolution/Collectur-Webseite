import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner } from '../../components/Shared'
import { CheckCircleIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung steuerlich absetzen – Ratgeber | Collectus',
  description: 'Kann man eine Entrümpelung von der Steuer absetzen? Ja! Erfahren Sie hier, welche Kosten absetzbar sind und was Sie dafür benötigen.',
  alternates: { canonical: '/entruempelung-steuer' },
}

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Entrümpelung steuerlich absetzen – Ratgeber',
    description:
      'Kann man eine Entrümpelung von der Steuer absetzen? Ja! Erfahren Sie hier, welche Kosten absetzbar sind und was Sie dafür benötigen.',
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

export default function EntruempelungSteuer() {
  return (
    <>
      <ArticleSchema />
      <PageHero
        title="Entrümpelung"
        highlight="steuerlich absetzen"
        description="Kann man eine Entrümpelung von der Steuer absetzen? Ja! Erfahren Sie hier, welche Kosten absetzbar sind und was Sie dafür benötigen."
        breadcrumb="Steuerlich absetzen"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Ratgeber</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-gray-900 mt-2">
              Entrümpelung als haushaltsnahe Dienstleistung absetzen
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <div className="bg-primary-50 border border-primary/10 rounded-2xl p-6">
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">Das Wichtigste vorab:</h3>
              <p>
                Die Kosten einer Entrümpelung können als <strong>haushaltsnahe Dienstleistung</strong> nach
                §35a EStG von der Steuer abgesetzt werden. Absetzbar sind bis zu 20 % der Arbeitskosten,
                maximal 4.000 € pro Jahr.
              </p>
            </div>

            <h3 className="font-heading text-xl font-bold text-gray-900 pt-4">Welche Kosten sind absetzbar?</h3>
            <ul className="space-y-3">
              {[
                'Arbeitskosten (Lohn der Entrümpler)',
                'Fahrtkosten zum Einsatzort',
                'Maschinenkosten (z. B. Container-Stellung)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl font-bold text-gray-900 pt-4">Welche Kosten sind NICHT absetzbar?</h3>
            <ul className="space-y-3">
              {[
                'Materialkosten (z. B. Kartons, Verpackung)',
                'Entsorgungsgebühren des Wertstoffhofs',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 text-red-500 mt-0.5 shrink-0 font-bold text-center">✗</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl font-bold text-gray-900 pt-4">Voraussetzungen für die steuerliche Absetzbarkeit</h3>
            <ul className="space-y-3">
              {[
                'Die Entrümpelung muss in Ihrem Haushalt oder einem haushaltsnah genutzten Grundstück stattfinden',
                'Sie benötigen eine ordnungsgemäße Rechnung mit ausgewiesener Mehrwertsteuer',
                'Die Zahlung muss per Überweisung erfolgen (keine Barzahlung!)',
                'Arbeitskosten müssen auf der Rechnung getrennt von Materialkosten ausgewiesen sein',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">Rechenbeispiel</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Gesamtkosten Entrümpelung</span>
                  <span className="font-bold">1.500 €</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Davon Arbeitskosten</span>
                  <span className="font-bold">1.000 €</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>20 % absetzbar</span>
                  <span className="font-bold">200 €</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-primary">Ihre Steuerersparnis</span>
                  <span className="font-bold text-primary text-lg">200 €</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary/10 rounded-2xl p-6 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Hinweis:</strong> Diese Informationen dienen als allgemeine Orientierung und
                ersetzen keine Steuerberatung. Für Ihre individuelle Situation konsultieren Sie bitte
                einen Steuerberater oder das zuständige Finanzamt.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung steuerlich absetzen', 'Entrümpelung Steuer', 'haushaltsnahe Dienstleistung', 'Entrümpelung von Steuer absetzen', '§35a EStG Entrümpelung'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="font-heading text-2xl font-black text-gray-900 mb-4">
            Wir erstellen eine steuerlich korrekte Rechnung
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Collectus Entrümpelung erstellt Ihnen eine ordnungsgemäße Rechnung mit separat
            ausgewiesenen Arbeitskosten – so können Sie die Entrümpelung problemlos von der
            Steuer absetzen.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Weitere Ratgeber</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
              { href: '/entruempelung-checkliste', label: 'Checkliste' },
              { href: '/sperrmuell-ratgeber', label: 'Sperrmüll-Ratgeber' },
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
