import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { PhoneIcon, MailIcon, MapPinIcon, MenuIcon, XIcon, ChevronRightIcon } from './Icons'

const navLinks = [
  {
    label: 'Leistungen',
    children: [
      { href: '/wohnungsaufloesung', label: 'Wohnungsauflösung' },
      { href: '/haushaltsaufloesung', label: 'Haushaltsauflösung' },
      { href: '/entruempelung', label: 'Entrümpelung' },
      { href: '/keller-dachboden', label: 'Keller- & Dachbodenräumung' },
      { href: '/sperrmuell-entsorgung', label: 'Sperrmüll & Entsorgung' },
      { href: '/nachlassentruempelung', label: 'Nachlassentrümpelung' },
      { href: '/messie-entruempelung', label: 'Messie-Entrümpelung' },
      { href: '/gewerbeentruempelung', label: 'Gewerbeentrümpelung' },
      { href: '/gartenraeumung', label: 'Gartenräumung' },
      { href: '/elektroschrott-entsorgung', label: 'Elektroschrott-Entsorgung' },
      { href: '/moebel-entsorgung', label: 'Möbel entsorgen' },
      { href: '/entruempelung-auszug', label: 'Entrümpelung bei Auszug' },
      { href: '/seniorenentruempelung', label: 'Seniorenumzug' },
      { href: '/entruempelung-kosten', label: 'Kosten & Preise' },
    ],
  },
  {
    label: 'Einsatzgebiete',
    children: [
      { href: '/entruempelung-beckum', label: 'Entrümpelung Beckum' },
      { href: '/entruempelung-hamm', label: 'Entrümpelung Hamm' },
      { href: '/entruempelung-warendorf', label: 'Entrümpelung Warendorf' },
      { href: '/entruempelung-oelde', label: 'Entrümpelung Oelde' },
      { href: '/entruempelung-drensteinfurt', label: 'Entrümpelung Drensteinfurt' },
      { href: '/entruempelung-sendenhorst', label: 'Entrümpelung Sendenhorst' },
      { href: '/entruempelung-ennigerloh', label: 'Entrümpelung Ennigerloh' },
      { href: '/entruempelung-muenster', label: 'Entrümpelung Münster' },
      { href: '/entruempelung-lippstadt', label: 'Entrümpelung Lippstadt' },
      { href: '/entruempelung-guetersloh', label: 'Entrümpelung Gütersloh' },
      { href: '/entruempelung-werne', label: 'Entrümpelung Werne' },
      { href: '/entruempelung-telgte', label: 'Entrümpelung Telgte' },
      { href: '/entruempelung-luedinghausen', label: 'Entrümpelung Lüdinghausen' },
    ],
  },
  {
    label: 'Ratgeber',
    children: [
      { href: '/entruempelung-checkliste', label: 'Entrümpelung Checkliste' },
      { href: '/sperrmuell-ratgeber', label: 'Sperrmüll-Ratgeber' },
      { href: '/entruempelung-steuer', label: 'Steuerlich absetzen' },
      { href: '/entruempelung-selber-machen', label: 'Selber machen vs. Firma' },
      { href: '/fuer-vermieter', label: 'Für Vermieter' },
      { href: '/fuer-erbengemeinschaften', label: 'Für Erbengemeinschaften' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  { href: '/kontakt', label: 'Kontakt' },
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  /* Close dropdown when clicking anywhere outside the nav */
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setOpenDropdown(null)
    }
  }, [])

  /* Close dropdown on Escape key */
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpenDropdown(null)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [handleClickOutside, handleEscape])

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }
  const closeMenuDelayed = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-sm">
      <nav ref={navRef} className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Startseite">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white font-heading font-black text-lg tracking-tight shadow-md shadow-primary/25 group-hover:scale-105 transition-transform">
            C
          </span>
          <span className="hidden sm:block font-heading text-lg font-bold text-gray-900 leading-tight">
            Collectus<br />
            <span className="text-xs font-body font-medium text-primary tracking-wide">Entrümpelung</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-gray-600">
          {navLinks.map((item) =>
            'children' in item && item.children ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={closeMenuDelayed}
              >
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="flex items-center gap-1 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                  <ChevronRightIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-90' : ''}`} />
                </button>
                {openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 max-h-[70vh] overflow-y-auto bg-white rounded-xl shadow-2xl shadow-black/12 border border-gray-200/80 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={() => openMenu(item.label)}
                    onMouseLeave={closeMenuDelayed}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={item.href}>
                <Link to={item.href!} className="hover:text-primary transition-colors py-2">{item.label}</Link>
              </li>
            )
          )}
        </ul>

        <a
          href="tel:023829661456"
          className="hidden lg:inline-flex items-center gap-2 border border-primary/15 bg-primary-50 hover:bg-primary text-primary hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all hover:-translate-y-0.5"
        >
          <PhoneIcon className="w-4 h-4" />
          Jetzt anrufen
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 -mr-2 text-gray-700"
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col divide-y divide-gray-100">
            {navLinks.map((item) =>
              'children' in item && item.children ? (
                item.children.map((child) => (
                  <li key={child.href}>
                    <Link to={child.href} className="block px-6 py-3.5 text-gray-700 hover:bg-primary-50 hover:text-primary font-medium transition-colors">
                      {child.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li key={item.href}>
                  <Link to={item.href!} className="block px-6 py-3.5 text-gray-700 hover:bg-primary-50 hover:text-primary font-medium transition-colors">
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <a href="tel:023829661456" className="flex items-center gap-2 px-6 py-3.5 text-primary font-semibold">
                <PhoneIcon className="w-4 h-4" />
                02382 9661456
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
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
              <li><Link to="/wohnungsaufloesung" className="hover:text-primary-light transition-colors">Wohnungsauflösung</Link></li>
              <li><Link to="/haushaltsaufloesung" className="hover:text-primary-light transition-colors">Haushaltsauflösung</Link></li>
              <li><Link to="/entruempelung" className="hover:text-primary-light transition-colors">Entrümpelung</Link></li>
              <li><Link to="/keller-dachboden" className="hover:text-primary-light transition-colors">Keller & Dachboden</Link></li>
              <li><Link to="/sperrmuell-entsorgung" className="hover:text-primary-light transition-colors">Sperrmüll & Entsorgung</Link></li>
              <li><Link to="/nachlassentruempelung" className="hover:text-primary-light transition-colors">Nachlassentrümpelung</Link></li>
              <li><Link to="/messie-entruempelung" className="hover:text-primary-light transition-colors">Messie-Entrümpelung</Link></li>
              <li><Link to="/gewerbeentruempelung" className="hover:text-primary-light transition-colors">Gewerbeentrümpelung</Link></li>
              <li><Link to="/gartenraeumung" className="hover:text-primary-light transition-colors">Gartenräumung</Link></li>
              <li><Link to="/elektroschrott-entsorgung" className="hover:text-primary-light transition-colors">Elektroschrott</Link></li>
              <li><Link to="/moebel-entsorgung" className="hover:text-primary-light transition-colors">Möbel entsorgen</Link></li>
              <li><Link to="/seniorenentruempelung" className="hover:text-primary-light transition-colors">Seniorenumzug</Link></li>
              <li><Link to="/entruempelung-auszug" className="hover:text-primary-light transition-colors">Entrümpelung Auszug</Link></li>
              <li><Link to="/entruempelung-kosten" className="hover:text-primary-light transition-colors">Kosten & Preise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Einsatzgebiete</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/entruempelung-beckum" className="hover:text-primary-light transition-colors">Beckum</Link></li>
              <li><Link to="/entruempelung-hamm" className="hover:text-primary-light transition-colors">Hamm</Link></li>
              <li><Link to="/entruempelung-warendorf" className="hover:text-primary-light transition-colors">Warendorf</Link></li>
              <li><Link to="/entruempelung-oelde" className="hover:text-primary-light transition-colors">Oelde</Link></li>
              <li><Link to="/entruempelung-drensteinfurt" className="hover:text-primary-light transition-colors">Drensteinfurt</Link></li>
              <li><Link to="/entruempelung-sendenhorst" className="hover:text-primary-light transition-colors">Sendenhorst</Link></li>
              <li><Link to="/entruempelung-ennigerloh" className="hover:text-primary-light transition-colors">Ennigerloh</Link></li>
              <li><Link to="/entruempelung-muenster" className="hover:text-primary-light transition-colors">Münster</Link></li>
              <li><Link to="/entruempelung-lippstadt" className="hover:text-primary-light transition-colors">Lippstadt</Link></li>
              <li><Link to="/entruempelung-guetersloh" className="hover:text-primary-light transition-colors">Gütersloh</Link></li>
              <li><Link to="/entruempelung-werne" className="hover:text-primary-light transition-colors">Werne</Link></li>
              <li><Link to="/entruempelung-telgte" className="hover:text-primary-light transition-colors">Telgte</Link></li>
              <li><Link to="/entruempelung-luedinghausen" className="hover:text-primary-light transition-colors">Lüdinghausen</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Ratgeber</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/entruempelung-checkliste" className="hover:text-primary-light transition-colors">Checkliste</Link></li>
              <li><Link to="/sperrmuell-ratgeber" className="hover:text-primary-light transition-colors">Sperrmüll-Ratgeber</Link></li>
              <li><Link to="/entruempelung-steuer" className="hover:text-primary-light transition-colors">Steuerlich absetzen</Link></li>
              <li><Link to="/entruempelung-selber-machen" className="hover:text-primary-light transition-colors">Selber machen vs. Firma</Link></li>
              <li><Link to="/fuer-vermieter" className="hover:text-primary-light transition-colors">Für Vermieter</Link></li>
              <li><Link to="/fuer-erbengemeinschaften" className="hover:text-primary-light transition-colors">Für Erbengemeinschaften</Link></li>
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
              <li><Link to="/impressum" className="hover:text-primary-light transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-primary-light transition-colors">Datenschutz</Link></li>
              <li><Link to="/faq" className="hover:text-primary-light transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Collectus Entrümpelung – Rund ums Haus Serviceleistungen. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
