import Link from 'next/link'
import { PhoneIcon, MailIcon, MapPinIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white font-heading font-black text-lg">C</span>
              <span className="font-heading text-lg font-bold text-white leading-tight">
                Collectus<br />
                <span className="text-xs font-body font-medium text-primary-light tracking-wide">Entrümpelung</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Ihr Partner für professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Ahlen und Umgebung.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wohnungsaufloesung" className="hover:text-primary-light transition-colors">Wohnungsauflösung</Link></li>
              <li><Link href="/haushaltsaufloesung" className="hover:text-primary-light transition-colors">Haushaltsauflösung</Link></li>
              <li><Link href="/entruempelung" className="hover:text-primary-light transition-colors">Entrümpelung</Link></li>
              <li><Link href="/keller-dachboden" className="hover:text-primary-light transition-colors">Keller & Dachboden</Link></li>
              <li><Link href="/sperrmuell-entsorgung" className="hover:text-primary-light transition-colors">Sperrmüll & Entsorgung</Link></li>
              <li><Link href="/nachlassentruempelung" className="hover:text-primary-light transition-colors">Nachlassentrümpelung</Link></li>
              <li><Link href="/messie-entruempelung" className="hover:text-primary-light transition-colors">Messie-Entrümpelung</Link></li>
              <li><Link href="/gewerbeentruempelung" className="hover:text-primary-light transition-colors">Gewerbeentrümpelung</Link></li>
              <li><Link href="/gartenraeumung" className="hover:text-primary-light transition-colors">Gartenräumung</Link></li>
              <li><Link href="/elektroschrott-entsorgung" className="hover:text-primary-light transition-colors">Elektroschrott</Link></li>
              <li><Link href="/moebel-entsorgung" className="hover:text-primary-light transition-colors">Möbel entsorgen</Link></li>
              <li><Link href="/seniorenentruempelung" className="hover:text-primary-light transition-colors">Seniorenumzug</Link></li>
              <li><Link href="/entruempelung-auszug" className="hover:text-primary-light transition-colors">Entrümpelung Auszug</Link></li>
              <li><Link href="/entruempelung-kosten" className="hover:text-primary-light transition-colors">Kosten & Preise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Einsatzgebiete</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/entruempelung-beckum" className="hover:text-primary-light transition-colors">Beckum</Link></li>
              <li><Link href="/entruempelung-hamm" className="hover:text-primary-light transition-colors">Hamm</Link></li>
              <li><Link href="/entruempelung-warendorf" className="hover:text-primary-light transition-colors">Warendorf</Link></li>
              <li><Link href="/entruempelung-oelde" className="hover:text-primary-light transition-colors">Oelde</Link></li>
              <li><Link href="/entruempelung-drensteinfurt" className="hover:text-primary-light transition-colors">Drensteinfurt</Link></li>
              <li><Link href="/entruempelung-sendenhorst" className="hover:text-primary-light transition-colors">Sendenhorst</Link></li>
              <li><Link href="/entruempelung-ennigerloh" className="hover:text-primary-light transition-colors">Ennigerloh</Link></li>
              <li><Link href="/entruempelung-muenster" className="hover:text-primary-light transition-colors">Münster</Link></li>
              <li><Link href="/entruempelung-lippstadt" className="hover:text-primary-light transition-colors">Lippstadt</Link></li>
              <li><Link href="/entruempelung-guetersloh" className="hover:text-primary-light transition-colors">Gütersloh</Link></li>
              <li><Link href="/entruempelung-werne" className="hover:text-primary-light transition-colors">Werne</Link></li>
              <li><Link href="/entruempelung-telgte" className="hover:text-primary-light transition-colors">Telgte</Link></li>
              <li><Link href="/entruempelung-luedinghausen" className="hover:text-primary-light transition-colors">Lüdinghausen</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Ratgeber</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/entruempelung-checkliste" className="hover:text-primary-light transition-colors">Checkliste</Link></li>
              <li><Link href="/sperrmuell-ratgeber" className="hover:text-primary-light transition-colors">Sperrmüll-Ratgeber</Link></li>
              <li><Link href="/entruempelung-steuer" className="hover:text-primary-light transition-colors">Steuerlich absetzen</Link></li>
              <li><Link href="/entruempelung-selber-machen" className="hover:text-primary-light transition-colors">Selber machen vs. Firma</Link></li>
              <li><Link href="/fuer-vermieter" className="hover:text-primary-light transition-colors">Für Vermieter</Link></li>
              <li><Link href="/fuer-erbengemeinschaften" className="hover:text-primary-light transition-colors">Für Erbengemeinschaften</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><PhoneIcon className="w-3.5 h-3.5" /> <a href="tel:023829661456" className="hover:text-primary-light transition-colors">02382 9661456</a></li>
              <li className="flex items-center gap-2"><MailIcon className="w-3.5 h-3.5" /> <a href="mailto:info@rundumshausserviceleistungen.de" className="hover:text-primary-light transition-colors">E-Mail senden</a></li>
              <li className="flex items-start gap-2"><MapPinIcon className="w-3.5 h-3.5 mt-0.5" /> Lessingstraße 62<br />59227 Ahlen</li>
            </ul>

            <h4 className="text-white font-bold mb-4 mt-8">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-primary-light transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-primary-light transition-colors">Datenschutz</Link></li>
              <li><Link href="/faq" className="hover:text-primary-light transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Collectus Entrümpelung – Rund ums Haus Serviceleistungen. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
