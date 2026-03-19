import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – Collectus Entrümpelung Ahlen',
  description: 'Impressum von Collectus Entrümpelung – Rund ums Haus Serviceleistungen, Abraham Osmani, Lessingstraße 62, 59227 Ahlen.',
  alternates: { canonical: '/impressum' },
  robots: { index: false },
}

export default function Impressum() {
  return (
    <section className="pt-28 pb-16 md:pt-34 md:pb-24">
      <div className="max-w-3xl mx-auto px-5">
        <h1 className="font-heading text-3xl sm:text-4xl font-black text-gray-900 mb-8">Impressum</h1>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Angaben gemäß § 5 TMG</h2>
            <p>
              Abraham Osmani<br />
              Rund ums Haus Serviceleistungen<br />
              Lessingstraße 62<br />
              59227 Ahlen
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Kontakt</h2>
            <p>
              Telefon: <a href="tel:023829661456" className="text-primary hover:underline">02382 9661456</a><br />
              E-Mail: <a href="mailto:info@rundumshausserviceleistungen.de" className="text-primary hover:underline">info@rundumshausserviceleistungen.de</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              <em>(wird nachgetragen)</em>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Abraham Osmani<br />
              Lessingstraße 62<br />
              59227 Ahlen
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Haftungsausschluss</h2>

            <h3 className="font-semibold text-gray-800 mt-4 mb-1">Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
              und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
              § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="font-semibold text-gray-800 mt-4 mb-1">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="font-semibold text-gray-800 mt-4 mb-1">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
