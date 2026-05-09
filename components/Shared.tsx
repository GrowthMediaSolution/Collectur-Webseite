'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PhoneIcon, MailIcon } from './Icons'

export function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="max-w-4xl mx-auto px-5 text-center relative z-10">

        {/* Social Proof */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold text-white mb-6">
          <span className="text-yellow-300 tracking-tight">♥</span>
          <span>Persönlich aus Ahlen – ehrlich, fair, zuverlässig</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl font-black mb-3">
          Noch heute Termin sichern – kostenlos & unverbindlich
        </h2>
        <p className="text-white/80 mb-2 max-w-xl mx-auto text-lg">
          Kein Stress, kein Risiko. Wir kommen vorbei, bewerten den Auftrag und geben Ihnen ein faires Festpreisangebot – ohne Anzahlung.
        </p>
        <p className="text-white/60 text-sm mb-8">
          ✓ Antwort in unter 2 Stunden &nbsp;·&nbsp; ✓ Termine diese Woche noch verfügbar
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:023829661456"
            title="Collectus Entrümpelung anrufen – 02382 9661456"
            className="inline-flex flex-col items-center justify-center gap-0.5 bg-white text-primary font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:bg-gray-50 transition-all hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              Jetzt kostenlos anrufen
            </span>
            <span className="text-xs font-normal text-primary/60">02382 9661456 · Mo–Sa 08–18 Uhr</span>
          </a>
          <a
            href="mailto:info@rundumshausserviceleistungen.de"
            title="E-Mail an Collectus Entrümpelung senden"
            className="inline-flex flex-col items-center justify-center gap-0.5 bg-white/15 text-white font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-white/25 transition-all border border-white/20"
          >
            <span className="flex items-center gap-2">
              <MailIcon className="w-5 h-5" />
              Angebot per E-Mail anfragen
            </span>
            <span className="text-xs font-normal text-white/50">Antwort innerhalb von 2 Stunden</span>
          </a>
        </div>

        {/* Risk Reversal */}
        <p className="mt-6 text-white/50 text-xs">
          Keine Anzahlung &nbsp;·&nbsp; Keine versteckten Kosten &nbsp;·&nbsp; Kein Risiko &nbsp;·&nbsp; Besenreine Übergabe garantiert
        </p>
      </div>
    </section>
  )
}

export function PageHero({ title, highlight, description, breadcrumb }: {
  title: string
  highlight: string
  description: string
  breadcrumb: string
}) {
  const pathname = usePathname()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://collectus-entruempelung.de/' },
      { '@type': 'ListItem', position: 2, name: breadcrumb, item: `https://collectus-entruempelung.de${pathname}` },
    ],
  }

  return (
    <section className="relative pt-28 pb-14 md:pt-34 md:pb-18 overflow-hidden bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="max-w-6xl mx-auto px-5">
        <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" title="Zur Startseite – Collectus Entrümpelung" className="hover:text-primary transition-colors">Startseite</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{breadcrumb}</span>
        </nav>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-5">
          {title} <span className="text-primary">{highlight}</span>
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-3xl">{description}</p>
      </div>
    </section>
  )
}

export function RelatedLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Weitere Leistungen</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              title={`${l.label} – Collectus Entrümpelung`}
              className="block rounded-2xl border border-gray-200 hover:border-primary/30 bg-white p-5 text-center font-semibold text-gray-800 hover:text-primary shadow-sm hover:shadow-md transition-all"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SeoTextBlock({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-5 prose prose-lg prose-gray max-w-none">
        {children}
      </div>
    </section>
  )
}
