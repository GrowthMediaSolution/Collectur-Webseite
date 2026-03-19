'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PhoneIcon, MenuIcon, XIcon, ChevronRightIcon } from './Icons'

const navLinks = [
  { href: '/', label: 'Home' },
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

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
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav
        ref={navRef}
        className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.55)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.7)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 1.5px 0 rgba(255,255,255,0.8) inset',
        }}
      >
        <Link href="/" className="flex items-center group" aria-label="Startseite">
          <Image
            src="/logo.png"
            alt="Collectus Entrümpelung"
            width={160}
            height={64}
            className="h-14 w-auto group-hover:scale-105 transition-transform"
            priority
          />
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
                        href={child.href}
                        title={`${child.label} – Collectus Entrümpelung`}
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
                <Link href={item.href!} title={`${item.label} – Collectus Entrümpelung`} className="hover:text-primary transition-colors py-2">{item.label}</Link>
              </li>
            )
          )}
        </ul>

        <a
          href="tel:023829661456"
          title="Collectus Entrümpelung anrufen"
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
        <div
          className="lg:hidden mt-2 rounded-2xl max-h-[80vh] overflow-y-auto"
          style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.7)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          }}
        >
          <ul className="flex flex-col divide-y divide-gray-100">
            {navLinks.map((item) =>
              'children' in item && item.children ? (
                item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="block px-6 py-3.5 text-gray-700 hover:bg-primary-50 hover:text-primary font-medium transition-colors">
                      {child.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li key={item.href}>
                  <Link href={item.href!} className="block px-6 py-3.5 text-gray-700 hover:bg-primary-50 hover:text-primary font-medium transition-colors">
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
