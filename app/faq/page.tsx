import type { Metadata } from 'next'
import FaqClient from './FaqClient'

export const metadata: Metadata = {
  title: 'FAQ – Häufige Fragen zur Entrümpelung | Collectus',
  description: 'Antworten auf die häufigsten Fragen rund um Entrümpelung, Kosten, Ablauf und Entsorgung in Ahlen und Umgebung.',
  alternates: { canonical: '/faq' },
}

export default function FAQ() {
  return <FaqClient />
}
