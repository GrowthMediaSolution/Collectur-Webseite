import type { Metadata } from 'next'
import FaqClient from './FaqClient'

export const metadata: Metadata = {
  title: 'FAQ – Häufige Fragen zur Entrümpelung | Collectus',
  description: 'Antworten auf die häufigsten Fragen rund um Entrümpelung, Kosten, Ablauf und Entsorgung in Ahlen und Umgebung. Kostenlose Beratung, Festpreis, besenreine Übergabe.',
  alternates: { canonical: '/faq' },
}

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

function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function FAQ() {
  return (
    <>
      <FaqSchema />
      <FaqClient faqs={faqs} />
    </>
  )
}
