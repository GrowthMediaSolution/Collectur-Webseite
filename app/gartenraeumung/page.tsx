import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner } from '../../components/Shared'
import { LocalBusinessSchema } from '../../components/Schema'
import { CheckCircleIcon, MapPinIcon, SparklesIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Gartenräumung Ahlen – Gartenhaus & Schuppen räumen | Collectus',
  description: 'Gartenräumung in Ahlen und Umgebung. Gartenhaus, Schuppen, Terrasse – professionell geräumt und fachgerecht entsorgt.',
  alternates: { canonical: '/gartenraeumung' },
}

const leistungen = [
  'Gartenhütte, Schuppen und Gewächshäuser räumen',
  'Gartengeräte, Möbel und Grünschnitt entsorgen',
  'Alte Zäune, Spielgeräte und Pools demontieren',
  'Terrassenräumung und Hofentrümpelung',
  'Entsorgung von Erde, Steinen und Baumaterial',
  'Besenreine Übergabe des gesamten Außenbereichs',
]

export default function Gartenraeumung() {
  return (
    <>
      <LocalBusinessSchema serviceName="Gartenräumung" areaServed="Ahlen" />
      <PageHero
        title="Gartenräumung &"
        highlight="Gartenhaus-Entrümpelung"
        description="Professionelle Gartenräumung in Ahlen und Umgebung. Wir räumen Gartenhäuser, Schuppen, Terrassen und den kompletten Außenbereich – schnell und fachgerecht."
        breadcrumb="Gartenräumung"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Außenbereich</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Gartenhaus entrümpeln &amp; Garten räumen lassen
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Im Laufe der Jahre sammeln sich in Gartenhäusern, Schuppen und auf Terrassen unzählige
              Gegenstände an: alte Gartengeräte, kaputte Möbel, Baumaterial und vieles mehr. Wenn der
              Garten entrümpelt werden soll – sei es wegen Verkauf, Renovierung oder einfach zum
              Aufräumen – ist Collectus Entrümpelung Ihr Ansprechpartner.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Wir räumen Gartenhäuser, Schuppen, Garagen-Nebengebäude, Terrassen und den kompletten
              Außenbereich. Auf Wunsch übernehmen wir auch die Demontage von alten Zäunen, Spielgeräten
              oder anderen Aufbauten.
            </p>
            <ul className="space-y-3">
              {leistungen.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl p-8 border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                <SparklesIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Gartenräumung</p>
                <p className="text-sm text-gray-500">Gartenhaus · Schuppen · Terrasse</p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                { step: '01', title: 'Besichtigung', desc: 'Kostenloser Vor-Ort-Termin im Garten.' },
                { step: '02', title: 'Festpreis', desc: 'Transparentes Angebot für die gesamte Räumung.' },
                { step: '03', title: 'Räumung', desc: 'Professionelle Entrümpelung des Außenbereichs.' },
                { step: '04', title: 'Entsorgung', desc: 'Fachgerechte Entsorgung aller Materialien.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
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
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Gartenräumung in Ahlen und Umgebung
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Im Münsterland gibt es viele Grundstücke mit großen Gärten, Gartenhäusern und
              Nebengebäuden. Gerade beim Immobilienverkauf oder bei Mieterwechsel muss der
              Außenbereich oft komplett geräumt werden. Wir übernehmen das für Sie – inklusive
              Entsorgung und besenreiner Übergabe.
            </p>
            <p>
              Die Kosten für eine Gartenräumung hängen vom Umfang ab. Nach einer kostenlosen
              Besichtigung erhalten Sie ein verbindliches Festpreisangebot.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Gartenräumung Ahlen', 'Gartenhaus entrümpeln', 'Schuppen räumen', 'Garten entrümpeln lassen', 'Gartenräumung Kosten'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Weitere Leistungen</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/keller-dachboden', label: 'Keller & Dachboden' },
              { href: '/entruempelung', label: 'Entrümpelung' },
              { href: '/sperrmuell-entsorgung', label: 'Sperrmüll & Entsorgung' },
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
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
