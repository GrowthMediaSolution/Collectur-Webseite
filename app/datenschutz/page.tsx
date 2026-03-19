import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Collectus Entrümpelung Ahlen',
  description: 'Datenschutzerklärung von Collectus Entrümpelung – Informationen zum Umgang mit Ihren personenbezogenen Daten.',
  alternates: { canonical: '/datenschutz' },
  robots: { index: false },
}

export default function Datenschutz() {
  return (
    <section className="pt-28 pb-16 md:pt-34 md:pb-24">
      <div className="max-w-3xl mx-auto px-5">
        <h1 className="font-heading text-3xl sm:text-4xl font-black text-gray-900 mb-8">Datenschutzerklärung</h1>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
              Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">2. Verantwortlicher</h2>
            <p>
              Abraham Osmani<br />
              Rund ums Haus Serviceleistungen<br />
              Lessingstraße 62<br />
              59227 Ahlen<br />
              Telefon: 02382 9661456<br />
              E-Mail: info@rundumshausserviceleistungen.de
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">3. Datenerfassung auf dieser Website</h2>

            <h3 className="font-semibold text-gray-800 mt-4 mb-1">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-semibold text-gray-800 mt-4 mb-1">Kontaktaufnahme</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
              Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. b DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">4. Google Maps</h2>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
              (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen
              von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden
              in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
              Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen
              Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">5. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
              <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">6. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
              Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
