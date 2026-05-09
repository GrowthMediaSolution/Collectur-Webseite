'use client'

import { useState } from 'react'
import { PageHero, CtaBanner } from '../../components/Shared'
import { ChevronRightIcon } from '../../components/Icons'

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

export default function FaqClient({ faqs }: { faqs: { q: string; a: string }[] }) {
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

      <CtaBanner />
    </>
  )
}
