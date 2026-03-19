import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://collectus-entruempelung.de'
const BRAND = 'Collectus Entrümpelung Ahlen'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  noindex?: boolean
}

export function useSEO({ title, description, canonical, noindex }: SEOProps) {
  const { pathname } = useLocation()
  const fullTitle = title.includes('Collectus') ? title : `${title} | ${BRAND}`
  const canonicalUrl = canonical || `${BASE_URL}${pathname}`

  useEffect(() => {
    document.title = fullTitle

    setMeta('description', description)
    setMeta('robots', noindex ? 'noindex, follow' : 'index, follow')

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonicalUrl

    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', canonicalUrl, 'property')

    return () => {
      document.title = `Collectus Entrümpelung Ahlen – Wohnungsauflösung & Haushaltsauflösung`
    }
  }, [fullTitle, description, canonicalUrl, noindex])
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.content = content
}
