import { PhoneIcon, MailIcon } from './Icons'
import { useSEO } from '../hooks/useSEO'
import { useLocation } from 'react-router-dom'

export function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">
          Jetzt kostenlos anfragen
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto text-lg">
          Keine versteckten Kosten. Wir besichtigen kostenlos vor Ort und erstellen Ihnen ein faires Festpreisangebot.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:023829661456"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-primary font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:bg-gray-50 transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            02382 9661456
          </a>
          <a
            href="mailto:info@rundumshausserviceleistungen.de"
            className="inline-flex items-center justify-center gap-2.5 bg-white/15 text-white font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-white/25 transition-colors border border-white/20"
          >
            <MailIcon className="w-5 h-5" />
            E-Mail schreiben
          </a>
        </div>
      </div>
    </section>
  )
}

export function PageHero({ title, highlight, description, breadcrumb, seoTitle, seoDescription }: {
  title: string
  highlight: string
  description: string
  breadcrumb: string
  seoTitle?: string
  seoDescription?: string
}) {
  const { pathname } = useLocation()
  const autoTitle = `${title} ${highlight} – Collectus Entrümpelung`
  const autoDesc = description.length > 155 ? description.slice(0, 152) + '...' : description

  useSEO({
    title: seoTitle || autoTitle,
    description: seoDescription || autoDesc,
  })

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
          <a href="/" className="hover:text-primary transition-colors">Startseite</a>
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

export function SeoTextBlock({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-5 prose prose-lg prose-gray max-w-none">
        {children}
      </div>
    </section>
  )
}
