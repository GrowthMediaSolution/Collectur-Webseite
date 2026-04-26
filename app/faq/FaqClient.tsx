'use client'

import { useState } from 'react'
import { PageHero, CtaBanner } from '../../components/Shared'
import { ChevronRightIcon } from '../../components/Icons'

const faqs = [
  {
    q: 'Was kostet eine Entrümpelung in Ahlen?',
    a: 'Die Kosten hängen vom Umfang ab – Raumgröße, Menge des Räumguts und Zugänglichkeit spielen eine Rolle. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot ohne versteckte Kosten.',
  },
  {
    q: 'Wie schnell kann ein Termin stattfinden?',
    a: 'In der Regel können wir innerhalb von 2–5 Werktagen einen Termin anbieten. Bei dringenden Fällen sind auch kurzfristigere Termine möglich – rufen Sie uns einfach an.',
  },
  {
    q: 'Wird die Wohnung besenrein übergeben?',
    a: 'Ja. Bei jeder Wohnungsauflösung und Entrümpelung übergeben wir die Räume besenrein. Auf Wunsch führen wir auch eine zusätzliche Reinigung durch.',
  },
  {
    q: 'Was passiert mit verwertbaren Gegenständen?',
    a: 'Verwertbare Gegenstände werden sortiert und, wenn möglich, dem Recycling oder sozialen Einrichtungen zugeführt. So wird Abfall minimiert und Ressourcen werden geschont.',
  },
  {
    q: 'Wie weit ist euer Einsatzgebiet?',
    a: 'Wir sind in Ahlen und der gesamten Region für Sie im Einsatz. Dazu gehören unter anderem Beckum, Hamm, Warendorf, Oelde, Drensteinfurt und Sendenhorst.',
  },
  {
    q: 'Muss ich bei der Entrümpelung anwesend sein?',
    a: 'Nein, das ist nicht zwingend erforderlich. Wir können die Räumung auch ohne Ihre Anwesenheit durchführen – z. B. nach einer Schlüsselübergabe.',
  },
  {
    q: 'Entsorgt ihr auch Elektrogeräte und Sondermüll?',
    a: 'Ja, wir entsorgen Elektrogeräte nach dem ElektroG sowie Sondermüll fachgerecht und gesetzeskonform. Sprechen Sie uns bei speziellen Materialien einfach an.',
  },
  {
    q: 'Bietet ihr auch Haushaltsauflösungen nach einem Todesfall an?',
    a: 'Ja. Wir arbeiten in solchen Fällen besonders einfühlsam und diskret. Persönliche Gegenstände, Dokumente und Wertgegenstände geben wir selbstverständlich an die Familie zurück.',
  },
  {
    q: 'Kann ich einzelne Räume entrümpeln lassen?',
    a: 'Selbstverständlich. Wir entrümpeln auch einzelne Zimmer, Keller, Dachböden oder Garagen – es muss nicht immer die gesamte Wohnung sein.',
  },
  {
    q: 'Wie erhalte ich ein Angebot?',
    a: 'Rufen Sie uns an unter 02382 9661456 oder schreiben Sie uns eine E-Mail an info@rundumshausserviceleistungen.de. Wir vereinbaren eine kostenlose Besichtigung und erstellen Ihnen danach ein verbindliches Festpreisangebot.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
      >
        <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors pr-8">{q}</span>
        <ChevronRightIcon className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 pr-10 text-gray-600 leading-relaxed animate-fade-in">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FaqClient() {
  return (
    <>
      <PageHero
        title="Häufige Fragen zur"
        highlight="Entrümpelung"
        description="Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Entrümpelungs- und Auflösungsservices in Ahlen und Umgebung."
        breadcrumb="FAQ"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm divide-y divide-gray-200 px-6 sm:px-8">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <CtaBanner />
    </>
  )
}
