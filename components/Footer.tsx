import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, MailIcon, MapPinIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" title="Collectus Entrümpelung – Startseite" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Collectus Entrümpelung"
                width={140}
                height={56}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Ihr Partner für professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Ahlen und Umgebung.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wohnungsaufloesung" title="Wohnungsauflösung in Ahlen – Collectus" className="hover:text-primary-light transition-colors">Wohnungsauflösung</Link></li>
              <li><Link href="/haushaltsaufloesung" title="Haushaltsauflösung in Ahlen – Collectus" className="hover:text-primary-light transition-colors">Haushaltsauflösung</Link></li>
              <li><Link href="/entruempelung" title="Entrümpelung in Ahlen – Collectus" className="hover:text-primary-light transition-colors">Entrümpelung</Link></li>
              <li><Link href="/keller-dachboden" title="Keller und Dachboden räumen – Collectus" className="hover:text-primary-light transition-colors">Keller & Dachboden</Link></li>
              <li><Link href="/sperrmuell-entsorgung" title="Sperrmüll entsorgen – Collectus" className="hover:text-primary-light transition-colors">Sperrmüll & Entsorgung</Link></li>
              <li><Link href="/nachlassentruempelung" title="Nachlassentrümpelung – Collectus" className="hover:text-primary-light transition-colors">Nachlassentrümpelung</Link></li>
              <li><Link href="/messie-entruempelung" title="Messie-Entrümpelung – Collectus" className="hover:text-primary-light transition-colors">Messie-Entrümpelung</Link></li>
              <li><Link href="/gewerbeentruempelung" title="Gewerbeentrümpelung – Collectus" className="hover:text-primary-light transition-colors">Gewerbeentrümpelung</Link></li>
              <li><Link href="/gartenraeumung" title="Gartenräumung – Collectus" className="hover:text-primary-light transition-colors">Gartenräumung</Link></li>
              <li><Link href="/elektroschrott-entsorgung" title="Elektroschrott entsorgen – Collectus" className="hover:text-primary-light transition-colors">Elektroschrott</Link></li>
              <li><Link href="/moebel-entsorgung" title="Möbel entsorgen – Collectus" className="hover:text-primary-light transition-colors">Möbel entsorgen</Link></li>
              <li><Link href="/seniorenentruempelung" title="Seniorenservice & Entrümpelung – Collectus" className="hover:text-primary-light transition-colors">Seniorenservice</Link></li>
              <li><Link href="/entruempelung-auszug" title="Entrümpelung bei Auszug – Collectus" className="hover:text-primary-light transition-colors">Entrümpelung Auszug</Link></li>
              <li><Link href="/entruempelung-kosten" title="Entrümpelung Kosten & Preise – Collectus" className="hover:text-primary-light transition-colors">Kosten & Preise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Einsatzgebiete</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/entruempelung-beckum" title="Entrümpelung Beckum – Collectus" className="hover:text-primary-light transition-colors">Beckum</Link></li>
              <li><Link href="/entruempelung-hamm" title="Entrümpelung Hamm – Collectus" className="hover:text-primary-light transition-colors">Hamm</Link></li>
              <li><Link href="/entruempelung-warendorf" title="Entrümpelung Warendorf – Collectus" className="hover:text-primary-light transition-colors">Warendorf</Link></li>
              <li><Link href="/entruempelung-oelde" title="Entrümpelung Oelde – Collectus" className="hover:text-primary-light transition-colors">Oelde</Link></li>
              <li><Link href="/entruempelung-drensteinfurt" title="Entrümpelung Drensteinfurt – Collectus" className="hover:text-primary-light transition-colors">Drensteinfurt</Link></li>
              <li><Link href="/entruempelung-sendenhorst" title="Entrümpelung Sendenhorst – Collectus" className="hover:text-primary-light transition-colors">Sendenhorst</Link></li>
              <li><Link href="/entruempelung-ennigerloh" title="Entrümpelung Ennigerloh – Collectus" className="hover:text-primary-light transition-colors">Ennigerloh</Link></li>
              <li><Link href="/entruempelung-muenster" title="Entrümpelung Münster – Collectus" className="hover:text-primary-light transition-colors">Münster</Link></li>
              <li><Link href="/entruempelung-lippstadt" title="Entrümpelung Lippstadt – Collectus" className="hover:text-primary-light transition-colors">Lippstadt</Link></li>
              <li><Link href="/entruempelung-guetersloh" title="Entrümpelung Gütersloh – Collectus" className="hover:text-primary-light transition-colors">Gütersloh</Link></li>
              <li><Link href="/entruempelung-werne" title="Entrümpelung Werne – Collectus" className="hover:text-primary-light transition-colors">Werne</Link></li>
              <li><Link href="/entruempelung-telgte" title="Entrümpelung Telgte – Collectus" className="hover:text-primary-light transition-colors">Telgte</Link></li>
              <li><Link href="/entruempelung-luedinghausen" title="Entrümpelung Lüdinghausen – Collectus" className="hover:text-primary-light transition-colors">Lüdinghausen</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Ratgeber</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/entruempelung-checkliste" title="Entrümpelung Checkliste – Collectus" className="hover:text-primary-light transition-colors">Checkliste</Link></li>
              <li><Link href="/sperrmuell-ratgeber" title="Sperrmüll-Ratgeber – Collectus" className="hover:text-primary-light transition-colors">Sperrmüll-Ratgeber</Link></li>
              <li><Link href="/entruempelung-steuer" title="Entrümpelung steuerlich absetzen – Collectus" className="hover:text-primary-light transition-colors">Steuerlich absetzen</Link></li>
              <li><Link href="/entruempelung-selber-machen" title="Selber entrümpeln vs. Firma – Collectus" className="hover:text-primary-light transition-colors">Selber machen vs. Firma</Link></li>
              <li><Link href="/fuer-vermieter" title="Entrümpelung für Vermieter – Collectus" className="hover:text-primary-light transition-colors">Für Vermieter</Link></li>
              <li><Link href="/fuer-erbengemeinschaften" title="Entrümpelung für Erbengemeinschaften – Collectus" className="hover:text-primary-light transition-colors">Für Erbengemeinschaften</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><PhoneIcon className="w-3.5 h-3.5" /> <a href="tel:023829661456" title="Collectus Entrümpelung anrufen" className="hover:text-primary-light transition-colors">02382 9661456</a></li>
              <li className="flex items-center gap-2"><MailIcon className="w-3.5 h-3.5" /> <a href="mailto:info@rundumshausserviceleistungen.de" title="E-Mail an Collectus Entrümpelung" className="hover:text-primary-light transition-colors">E-Mail senden</a></li>
              <li className="flex items-start gap-2"><MapPinIcon className="w-3.5 h-3.5 mt-0.5" /> Lessingstraße 62<br />59227 Ahlen</li>
            </ul>

            <h4 className="text-white font-bold mb-4 mt-8">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" title="Impressum – Collectus Entrümpelung" className="hover:text-primary-light transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" title="Datenschutzerklärung – Collectus Entrümpelung" className="hover:text-primary-light transition-colors">Datenschutz</Link></li>
              <li><Link href="/faq" title="Häufige Fragen zur Entrümpelung – Collectus" className="hover:text-primary-light transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Collectus Entrümpelung – Rund ums Haus Serviceleistungen. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/impressum" title="Impressum – Collectus Entrümpelung" className="hover:text-gray-300 transition-colors">Impressum</Link>
            <Link href="/datenschutz" title="Datenschutzerklärung – Collectus Entrümpelung" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
