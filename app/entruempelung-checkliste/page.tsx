import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, CtaBanner } from '../../components/Shared'
import { CheckCircleIcon, MapPinIcon } from '../../components/Icons'

export const metadata: Metadata = {
  title: 'Entrümpelung Checkliste – Schritt für Schritt | Collectus',
  description: 'Die ultimative Checkliste für Ihre Entrümpelung. Schritt für Schritt – damit nichts vergessen wird. Kostenlos zum Durchgehen und Abhaken.',
  alternates: { canonical: '/entruempelung-checkliste' },
}

const checkliste = [
  {
    phase: 'Vor der Entrümpelung',
    items: [
      'Umfang festlegen: Welche Räume sollen geräumt werden?',
      'Persönliche Gegenstände und Wertgegenstände sichern',
      'Dokumente (Verträge, Urkunden, Fotos) aussortieren',
      'Möbel und Gegenstände markieren: behalten, spenden, entsorgen',
      'Angebote einholen und Preise vergleichen',
      'Termin mit dem Entrümpelungsunternehmen vereinbaren',
      'Vermieter oder Hausverwaltung informieren (bei Mietwohnung)',
      'Parkplatz oder Haltezone für den Transporter reservieren',
    ],
  },
  {
    phase: 'Während der Entrümpelung',
    items: [
      'Ansprechpartner für das Entrümpelungsteam vor Ort sein',
      'Letzte Kontrolle: Sind alle wichtigen Dinge gesichert?',
      'Auf ordentliche Trennung der Materialien achten',
      'Zwischenergebnis prüfen: Sind alle Räume berücksichtigt?',
    ],
  },
  {
    phase: 'Nach der Entrümpelung',
    items: [
      'Alle Räume auf Vollständigkeit prüfen',
      'Besenreine Übergabe kontrollieren',
      'Übergabeprotokoll mit dem Vermieter erstellen',
      'Schlüssel übergeben',
      'Nachsendeauftrag bei der Post einrichten',
      'Versorgungsunternehmen (Strom, Gas, Wasser) abmelden',
    ],
  },
]

export default function EntruempelungCheckliste() {
  return (
    <>
      <PageHero
        title="Entrümpelung"
        highlight="Checkliste"
        description="Die ultimative Checkliste für Ihre Entrümpelung. Schritt für Schritt – damit nichts vergessen wird. Kostenlos zum Durchgehen und Abhaken."
        breadcrumb="Checkliste"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Ratgeber</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-gray-900 mt-2">
              Die komplette Entrümpelung-Checkliste
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Eine Entrümpelung ist ein großes Projekt. Mit dieser Checkliste behalten Sie den Überblick
              und vergessen nichts Wichtiges – egal ob Sie selbst entrümpeln oder einen Profi beauftragen.
            </p>
          </div>

          <div className="space-y-10">
            {checkliste.map((phase, pi) => (
              <div key={pi} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {pi + 1}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900">{phase.phase}</h3>
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            Entrümpelung Checkliste – professionell vorbereiten
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Eine gute Vorbereitung spart Zeit, Geld und Nerven. Egal ob Sie die Entrümpelung selbst
              durchführen oder einen Entrümpelungsservice wie Collectus beauftragen – mit dieser Checkliste
              sind Sie optimal vorbereitet.
            </p>
            <p>
              Besonders wichtig: Sichern Sie vor der Entrümpelung alle persönlichen Gegenstände,
              Dokumente und Wertgegenstände. Was einmal entsorgt ist, kann nicht zurückgeholt werden.
              Im Zweifel lieber einen Gegenstand mehr behalten als einen zu wenig.
            </p>
            <p>
              <strong>Tipp:</strong> Beauftragen Sie einen professionellen Entrümpelungsservice, wenn
              der Umfang groß ist oder Sie zeitlichen Druck haben. Die Kosten sind oft günstiger als
              erwartet – vor allem, wenn verwertbare Gegenstände vorhanden sind.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Entrümpelung Checkliste', 'Checkliste Wohnungsauflösung', 'Entrümpelung vorbereiten', 'Entrümpelung planen', 'Haushaltsauflösung Checkliste'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500">
                <MapPinIcon className="w-3 h-3" />{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h3 className="font-heading text-2xl font-black text-gray-900 mb-8 text-center">Weitere Ratgeber</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
              { href: '/sperrmuell-ratgeber', label: 'Sperrmüll-Ratgeber' },
              { href: '/entruempelung-steuer', label: 'Steuerlich absetzen' },
              { href: '/faq', label: 'Häufige Fragen' },
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
