import type { Metadata } from 'next'
import { PageHero, CtaBanner } from '../../components/Shared'
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from '../../components/Icons'
import { MultiStepForm } from '../../components/MultiStepForm'

export const metadata: Metadata = {
  title: 'Kontakt – Collectus Entrümpelung Ahlen',
  description: 'Rufen Sie uns an, schreiben Sie uns oder kommen Sie vorbei. Wir beraten Sie gerne kostenlos und unverbindlich.',
  alternates: { canonical: '/kontakt' },
}

const kontaktInfo = [
  { icon: PhoneIcon, label: 'Telefon', value: '02382 9661456', href: 'tel:023829661456' },
  { icon: MailIcon, label: 'E-Mail', value: 'info@rundumshausserviceleistungen.de', href: 'mailto:info@rundumshausserviceleistungen.de' },
  { icon: MapPinIcon, label: 'Adresse', value: 'Lessingstraße 62, 59227 Ahlen', href: 'https://maps.google.com/?q=Lessingstraße+62+59227+Ahlen' },
  { icon: ClockIcon, label: 'Erreichbarkeit', value: 'Mo–Sa, 08:00–18:00 Uhr', href: undefined },
]

export default function Kontakt() {
  return (
    <>
      <PageHero
        title="Kontakt aufnehmen"
        highlight="– wir sind für Sie da"
        description="Rufen Sie uns an, schreiben Sie uns oder kommen Sie vorbei. Wir beraten Sie gerne kostenlos und unverbindlich."
        breadcrumb="Kontakt"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14">
          {/* Info */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
              So erreichen Sie uns
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Ob telefonisch, per E-Mail oder persönlich – wir freuen uns auf Ihre Anfrage. Nach einer kurzen Beschreibung
              Ihres Anliegens vereinbaren wir gerne eine kostenlose Besichtigung vor Ort.
            </p>

            <div className="space-y-4">
              {kontaktInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl border border-gray-200 p-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-900 font-semibold hover:text-primary transition-colors" target={item.href.startsWith('https') ? '_blank' : undefined} rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formular */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Kostenlose Anfrage</p>
              <h2 className="font-heading text-2xl font-black text-gray-900 mt-1">Jetzt Angebot anfordern</h2>
            </div>
            <MultiStepForm />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
