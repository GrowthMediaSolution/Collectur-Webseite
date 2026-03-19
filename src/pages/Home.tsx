import { Link } from 'react-router-dom'
import {
  PhoneIcon, MailIcon, MapPinIcon, CheckCircleIcon, ShieldCheckIcon,
  SparklesIcon, TruckIcon, RecycleIcon, ClockIcon, HomeIcon, ArchiveIcon,
} from '../components/Icons'
import { useSEO } from '../hooks/useSEO'

/* ──────── Data ──────── */

const services = [
  {
    icon: HomeIcon,
    title: 'Wohnungsauflösungen',
    text: 'Komplette Räumung Ihrer Wohnung – von der Sortierung bis zur besenreinen Übergabe. Diskret und zuverlässig.',
    to: '/wohnungsaufloesung',
  },
  {
    icon: SparklesIcon,
    title: 'Haushaltsauflösungen',
    text: 'Wir lösen komplette Haushalte auf, inklusive Entsorgung, Verwertung und Übergabe in einwandfreiem Zustand.',
    to: '/haushaltsaufloesung',
  },
  {
    icon: TruckIcon,
    title: 'Entrümpelungen',
    text: 'Ob einzelne Räume oder ganze Gebäude – wir entrümpeln schnell, sauber und termingerecht.',
    to: '/entruempelung',
  },
  {
    icon: ArchiveIcon,
    title: 'Keller- & Dachbodenräumungen',
    text: 'Keller voll? Dachboden überquillt? Wir schaffen Platz und entsorgen fachgerecht.',
    to: '/keller-dachboden',
  },
  {
    icon: RecycleIcon,
    title: 'Sperrmüll & Altlasten',
    text: 'Umweltgerechte Entsorgung von Sperrmüll, Elektrogeräten und anderen Altlasten – alles aus einer Hand.',
    to: '/sperrmuell-entsorgung',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Fachgerechte Entsorgung',
    text: 'Alle Materialien werden umweltgerecht und nach aktuellen Vorschriften entsorgt oder recycelt.',
    to: '/entruempelung',
  },
]

const usps = [
  { text: 'Kostenlose Besichtigung & Beratung vor Ort' },
  { text: 'Zuverlässige und pünktliche Durchführung' },
  { text: 'Besenreine Übergabe garantiert' },
  { text: 'Stressfreie, unkomplizierte Abwicklung' },
  { text: 'Umweltgerechte Entsorgung aller Materialien' },
  { text: 'Faire und transparente Preise' },
]

const serviceAreas = [
  'Ahlen', 'Beckum', 'Hamm', 'Warendorf', 'Oelde',
  'Drensteinfurt', 'Sendenhorst', 'Ennigerloh', 'Dolberg', 'Vorhelm',
]

/* ──────── Sections ──────── */

function Hero() {
  return (
    <section className="relative pt-28 pb-18 md:pt-34 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[620px] w-[620px] rounded-full bg-primary/7 blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 h-[440px] w-[440px] rounded-full bg-primary/4 blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,420px)] lg:gap-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary mb-6 shadow-sm shadow-primary/5">
              <MapPinIcon className="w-4 h-4" />
              Ahlen & Umgebung · 40-50 km Umkreis
            </div>

            <h1 className="font-heading text-[2.9rem] leading-[1.02] tracking-tight text-gray-900 sm:text-[3.7rem] xl:text-[4.35rem] font-black mb-6">
              Professionelle <span className="text-primary">Entrümpelung</span> mit klarer, sauberer Übergabe
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-500 sm:text-xl mb-8">
              Wohnungsauflösungen, Haushaltsauflösungen und Entrümpelungen in Ahlen und Umgebung.
              Zuverlässig organisiert, pünktlich umgesetzt und auf Wunsch komplett besenrein übergeben.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="tel:023829661456"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-primary/35"
              >
                <PhoneIcon className="w-5 h-5" />
                02382 9661456
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-primary hover:text-primary"
              >
                Kostenlose Besichtigung
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <CheckCircleIcon className="w-4 h-4 text-success" />
                  Kostenlose Beratung
                </div>
                <p className="mt-1 text-sm text-gray-500">Vor-Ort-Termin ohne Verpflichtung.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <SparklesIcon className="w-4 h-4 text-primary" />
                  Besenreine Übergabe
                </div>
                <p className="mt-1 text-sm text-gray-500">Sauber vorbereitet für Verkauf oder Vermietung.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <ShieldCheckIcon className="w-4 h-4 text-primary" />
                  Haftpflichtversichert
                </div>
                <p className="mt-1 text-sm text-gray-500">Sicher, planbar und professionell umgesetzt.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-white to-primary/5 blur-2xl" />
            <div className="rounded-[2rem] border border-primary/10 bg-white/90 p-6 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Schneller Ablauf</p>
                  <h3 className="mt-2 font-heading text-2xl font-black text-gray-900">In 4 Schritten erledigt</h3>
                </div>
                <div className="rounded-2xl bg-primary-50 px-4 py-2 text-right">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Einsatzgebiet</p>
                  <p className="text-lg font-bold text-gray-900">Ahlen + Region</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { step: '01', title: 'Kontakt aufnehmen', text: 'Kurz anrufen oder schreiben. Wir reagieren schnell und verbindlich.' },
                  { step: '02', title: 'Vor Ort besichtigen', text: 'Kostenlose Einschätzung direkt bei Ihnen ohne versteckte Kosten.' },
                  { step: '03', title: 'Festpreis erhalten', text: 'Sie bekommen ein transparentes Angebot für den kompletten Auftrag.' },
                  { step: '04', title: 'Sauber übergeben', text: 'Wir räumen, entsorgen und übergeben die Räume besenrein.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50/70 px-4 py-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white shadow-md shadow-primary/20">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-dark px-5 py-4 text-white">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-light">Leistungen</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">Wohnungsauflösung, Haushaltsauflösung, Keller, Dachboden, Sperrmüll.</p>
                </div>
                <div className="rounded-2xl bg-primary-50 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">Versprechen</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">Zuverlässige Termine, fachgerechte Entsorgung und ein sauberer Abschluss.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="leistungen" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Was wir bieten</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-gray-900 mt-2">Unsere Leistungen</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Von der Wohnungsauflösung bis zur fachgerechten Entsorgung – alles aus einer Hand.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              to={s.to}
              key={i}
              className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <s.icon />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Advantages() {
  return (
    <section id="vorteile" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Warum Collectus</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-6">
              Stressfrei entrümpeln – <span className="text-primary">wir kümmern uns</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Wir wissen, dass eine Entrümpelung oder Wohnungsauflösung eine belastende Situation sein kann. Deshalb machen wir den gesamten
              Prozess so einfach und transparent wie möglich – von der ersten kostenlosen Besichtigung bis zur besenreinen Übergabe.
            </p>
            <ul className="space-y-4">
              {usps.map((u, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-700 font-medium">{u.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl p-10 border border-primary/10">
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Anruf oder Anfrage', desc: 'Sie kontaktieren uns – telefonisch oder per E-Mail.' },
                  { step: '02', title: 'Kostenlose Besichtigung', desc: 'Wir kommen vorbei, bewerten den Umfang und beraten Sie.' },
                  { step: '03', title: 'Festes Angebot', desc: 'Sie erhalten ein transparentes Festpreisangebot – keine versteckten Kosten.' },
                  { step: '04', title: 'Besenreine Übergabe', desc: 'Wir entrümpeln, entsorgen und übergeben den Raum blitzsauber.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-primary/20">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{s.title}</h4>
                      <p className="text-gray-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section id="gebiet" className="py-20 md:py-28 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm tracking-wider uppercase">Wo wir tätig sind</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mt-2">
            Einsatzgebiet im Umkreis von Ahlen
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Wir sind in einem Radius von ca. 40–50 km um Ahlen für Sie unterwegs – in diesen und vielen weiteren Orten.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {serviceAreas.map((area) => (
            <span key={area} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/10 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-primary hover:border-primary transition-all cursor-default">
              <MapPinIcon className="w-3.5 h-3.5 opacity-60" />
              {area}
            </span>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Ihr Ort ist nicht dabei? <Link to="/kontakt" className="text-primary-light hover:underline">Kontaktieren Sie uns</Link> – wir finden eine Lösung.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Kontakt</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-6">
              Kostenlos beraten lassen
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Rufen Sie uns an oder schreiben Sie eine E-Mail. Wir melden uns schnellstmöglich und vereinbaren
              einen kostenlosen Besichtigungstermin bei Ihnen vor Ort.
            </p>

            <div className="space-y-5">
              <a href="tel:023829661456" className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-sm text-gray-400">Telefon</span>
                  <span className="font-bold text-gray-900 text-lg">02382 9661456</span>
                </span>
              </a>

              <a href="mailto:info@rundumshausserviceleistungen.de" className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <MailIcon />
                </span>
                <span>
                  <span className="block text-sm text-gray-400">E-Mail</span>
                  <span className="font-bold text-gray-900">info@rundumshausserviceleistungen.de</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center">
                  <MapPinIcon />
                </span>
                <span>
                  <span className="block text-sm text-gray-400">Adresse</span>
                  <span className="font-bold text-gray-900">Lessingstraße 62, 59227 Ahlen</span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center">
                  <ClockIcon />
                </span>
                <span>
                  <span className="block text-sm text-gray-400">Erreichbarkeit</span>
                  <span className="font-bold text-gray-900">Mo–Sa · 08:00–18:00 Uhr</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 text-white text-center shadow-2xl shadow-primary/30">
              <h3 className="font-heading text-2xl sm:text-3xl font-black mb-3">Jetzt kostenlos anfragen</h3>
              <p className="text-white/80 mb-8 max-w-sm mx-auto">
                Keine versteckten Kosten. Wir besichtigen kostenlos vor Ort und erstellen Ihnen ein faires Festpreisangebot.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:023829661456"
                  className="flex items-center justify-center gap-2.5 w-full bg-white text-primary font-bold py-4 rounded-2xl hover:bg-gray-50 transition-colors text-lg shadow-lg"
                >
                  <PhoneIcon className="w-5 h-5" />
                  02382 9661456
                </a>
                <a
                  href="mailto:info@rundumshausserviceleistungen.de"
                  className="flex items-center justify-center gap-2.5 w-full bg-white/15 text-white font-semibold py-4 rounded-2xl hover:bg-white/25 transition-colors border border-white/20"
                >
                  <MailIcon className="w-5 h-5" />
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────── Schema.org JSON-LD ──────── */

function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Collectus Entrümpelung',
    alternateName: 'Rund ums Haus Serviceleistungen',
    description: 'Professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Ahlen und Umgebung.',
    url: 'https://collectus-entruempelung.de',
    telephone: '+49-2382-9661456',
    email: 'info@rundumshausserviceleistungen.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lessingstraße 62',
      addressLocality: 'Ahlen',
      postalCode: '59227',
      addressCountry: 'DE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '51.7633', longitude: '7.8903' },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: '51.7633', longitude: '7.8903' },
      geoRadius: '50000',
    },
    founder: { '@type': 'Person', name: 'Abraham Osmani' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Entrümpelungsdienstleistungen',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wohnungsauflösung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Haushaltsauflösung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entrümpelung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kellerentrümpelung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dachbodenräumung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sperrmüllentsorgung' } },
      ],
    },

    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

/* ──────── Home Page ──────── */

export default function Home() {
  useSEO({
    title: 'Entrümpelung Ahlen – Wohnungsauflösung & Haushaltsauflösung | Collectus',
    description: 'Professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Ahlen und Umgebung. Kostenlose Besichtigung, besenreine Übergabe, faire Festpreise. Jetzt anfragen!',
  })

  return (
    <>
      <SchemaOrg />
      <Hero />
      <Services />
      <Advantages />
      <ServiceArea />
      <Contact />
    </>
  )
}
