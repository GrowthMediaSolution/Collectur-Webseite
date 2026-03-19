import type { Metadata } from 'next'
import { PageHero, CtaBanner } from '../../components/Shared'
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from '../../components/Icons'

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

          {/* Karte */}
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-[400px] lg:h-auto">
            <iframe
              title="Collectus Entrümpelung Standort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.5!2d7.8899!3d51.7631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b98b0a0a0a0a0a%3A0x0!2sLessingstra%C3%9Fe%2062%2C%2059227%20Ahlen!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
