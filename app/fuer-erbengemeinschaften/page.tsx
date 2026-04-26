import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner } from '../../components/Shared'
import { CheckCircleIcon, MapPinIcon, ShieldCheckIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung für Erbengemeinschaften – Nachlassräumung',
  description: 'Professionelle Nachlassräumung für Erbengemeinschaften. Wir übernehmen die komplette Koordination und Räumung – neutral, fair und transparent.',
  alternates: { canonical: '/fuer-erbengemeinschaften' },
}

const leistungen = [
  'Komplette Räumung des Nachlasses in Absprache mit der Erbengemeinschaft',
  'Sicherung von Wertgegenständen, Dokumenten und persönlichen Erinnerungsstücken',
  'Koordination mit allen Erben – auch bei unterschiedlichen Vorstellungen',
  'Verwertung brauchbarer Gegenstände zur Kostenreduzierung',
  'Fachgerechte Entsorgung aller übrigen Materialien',
  'Besenreine Übergabe der Immobilie',
  'Ordnungsgemäße Rechnung für die Erbschaftssteuer-Erklärung',
  'Abstimmung mit Nachlassverwalter, Notar oder Rechtsanwalt',
]

export default function FuerErbengemeinschaften() {
  return (
    <>
      <PageHero
        title="Entrümpelung für"
        highlight="Erbengemeinschaften"
        description="Professionelle Nachlassräumung für Erbengemeinschaften. Wir übernehmen die komplette Koordination und Räumung – neutral, fair und transparent."
        breadcrumb="Für Erbengemeinschaften"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Für Erben</span>
            <h2 className="font-heading text-3xl font-black text-gray-900 mt-2 mb-6">
              Nachlassräumung für Erbengemeinschaften
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Wenn mehrere Erben eine Immobilie räumen müssen, kann das schnell kompliziert werden.
              Unterschiedliche Vorstellungen, räumliche Distanz und emotionale Belastung machen die
              Nachlassauflösung zu einer Herausforderung.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Collectus Entrümpelung agiert als neutraler Dienstleister, der die Interessen aller
              Erben berücksichtigt. Wir sortieren sorgfältig, sichern persönliche Gegenstände und
              erstellen auf Wunsch eine Inventarliste. So können alle Beteiligten sicher sein,
              dass die Räumung fair und transparent abläuft.
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
                <ShieldCheckIcon />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900">Erben-Service</p>
                <p className="text-sm text-gray-500">Neutral · Sorgfältig · Transparent</p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                { step: '01', title: 'Abstimmung mit allen Erben', desc: 'Klärung der Wünsche und Anforderungen aller Beteiligten.' },
                { step: '02', title: 'Persönliches sichern', desc: 'Wertgegenstände und Erinnerungsstücke werden an die Erben übergeben.' },
                { step: '03', title: 'Professionelle Räumung', desc: 'Sortierung, Verwertung und fachgerechte Entsorgung.' },
                { step: '04', title: 'Übergabe & Dokumentation', desc: 'Besenreine Übergabe mit Rechnung für die Erbschaftssteuererklärung.' },
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
            Nachlassauflösung bei Erbengemeinschaften
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Bei Erbengemeinschaften ist es besonders wichtig, dass die Nachlassräumung fair und
              nachvollziehbar abläuft. Wir dokumentieren den Prozess und stellen sicher, dass alle
              Erben einbezogen werden – auch wenn sie nicht vor Ort sein können.
            </p>
            <p>
              Die Kosten der Nachlassräumung können in vielen Fällen als Nachlassverbindlichkeit
              geltend gemacht und von der Erbschaftssteuer abgezogen werden. Wir erstellen Ihnen
              eine ordnungsgemäße Rechnung für Ihren Steuerberater.
            </p>
            <p>
              Wir arbeiten bei Bedarf auch mit Nachlassverwaltern, Notaren und Rechtsanwälten
              zusammen. Kontaktieren Sie uns für ein kostenloses und unverbindliches Beratungsgespräch.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Erbengemeinschaft', 'Nachlassräumung Erben', 'Nachlassauflösung Kosten', 'Entrümpelung Erbfall', 'Wohnungsauflösung nach Todesfall'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Verwandte Leistungen</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/nachlassentruempelung', label: 'Nachlassentrümpelung' },
              { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
              { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
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
