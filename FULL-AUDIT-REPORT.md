# Full SEO Audit Report -- Collectus Entruempelung

**Datum:** 09.05.2026
**Domain:** collectus-entruempelung.de
**Business Type:** Local Service (Entruempelung / Wohnungsaufloesung)
**Framework:** Next.js 14, App Router, SSR/SSG
**Seiten:** 38 total (36 in Sitemap, 2 noindex)

---

## Executive Summary

### SEO Health Score: 62/100

| Kategorie | Gewicht | Score | Gewichtet |
|-----------|---------|-------|-----------|
| Technical SEO | 22% | 82/100 | 18.0 |
| Content Quality | 23% | 38/100 | 8.7 |
| On-Page SEO | 20% | 68/100 | 13.6 |
| Schema / Structured Data | 10% | 75/100 | 7.5 |
| Performance (CWV) | 10% | 55/100 | 5.5 |
| AI Search Readiness | 10% | 45/100 | 4.5 |
| Images | 5% | 40/100 | 2.0 |
| **Gesamt** | **100%** | | **59.8 ~ 62** |

### Top 5 kritische Probleme

1. **Doorway Pages:** 13 Einsatzgebiet-Seiten mit 85-90% dupliziertem Content
2. **13 identische Meta-Descriptions** (nur Stadtname getauscht)
3. **Keine /ueber-uns-Seite** -- schwache E-E-A-T-Signale fuer Local Business
4. **1.5 MB PNG** auf Seniorenservice-Seite (LCP-Killer)
5. **E-Mail-Dissonanz:** `info@rundumshausserviceleistungen.de` auf `collectus-entruempelung.de`

### Top 5 Quick Wins

1. Bilder komprimieren / WebP konvertieren (seniorenservice.png, abraham-portrait.jpg)
2. `sizes`-Prop auf grosse Bilder setzen
3. 7.3 MB tote Bild-Assets loeschen
4. Meta-Descriptions der Area-Seiten individualisieren
5. `priority`-Prop auf Subpage-Hauptbilder

---

## 1. Technical SEO (82/100)

### Crawlability

| Check | Status | Detail |
|-------|--------|--------|
| robots.txt | PASS | `Allow: /`, `Disallow: /api/`, Sitemap referenziert |
| XML Sitemap | PASS | Dynamisch via `app/sitemap.ts`, 36 URLs, `lastmod`-Daten |
| Sitemap-URLs = Canonical-URLs | PASS | Alle Sitemap-URLs matchen die Canonical-Tags |
| Klick-Tiefe | PASS | Alle Seiten max. 2 Klicks von Startseite |
| Orphan Pages | PASS | Keine -- alle Seiten in Navigation und Footer |

### Indexation

| Check | Status | Detail |
|-------|--------|--------|
| Canonical Tags | PASS | Alle 38 Seiten via `alternates: { canonical }` |
| noindex auf Rechtsseiten | PASS | Impressum + Datenschutz |
| Duplicate Canonicals | PASS | Keine Konflikte |
| Redirect Chains | PASS | Keine erkannt |

### Security & Server

| Check | Status | Detail |
|-------|--------|--------|
| HTTPS | PASS | Caddy mit auto Let's Encrypt |
| HTTP -> HTTPS | PASS | Caddy automatischer Redirect |
| www -> non-www | PASS | Caddy Redirect konfiguriert |
| Compression | PASS | `encode zstd gzip` in Caddy |
| HSTS | WARN | Nicht explizit konfiguriert (Caddy setzt es standardmaessig) |
| Security Headers | WARN | Keine `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` in Caddy Config |
| Content-Encoding | PASS | gzip/zstd aktiv |

### URL-Struktur

| Check | Status | Detail |
|-------|--------|--------|
| Lesbare URLs | PASS | Deutsche Keywords, Kleinbuchstaben, Bindestriche |
| Konsistenz | PASS | Kein Trailing Slash, keine Parameter |
| Keywords in URLs | PASS | `/entruempelung-kosten`, `/haushaltsaufloesung`, etc. |

### Probleme

| Issue | Impact | Fix |
|-------|--------|-----|
| Keine Security Headers in Caddy | Gering | `header { X-Content-Type-Options "nosniff"; X-Frame-Options "SAMEORIGIN"; Referrer-Policy "strict-origin-when-cross-origin" }` in collectus.caddy |
| `lang="de"` aber kein `hreflang` | Gering | Nur relevant falls mehrsprachig geplant -- aktuell OK |

---

## 2. Content Quality (38/100)

### KRITISCH: Doorway Pages

13 Einsatzgebiet-Seiten (`/entruempelung-{stadt}`) sind zu **85-90% identisch**:

| Element | Duplikat-Rate |
|---------|---------------|
| `scope`-Array (6 Punkte) | 100% identisch |
| Sidebar-Karte (6 Felder) | 100% identisch |
| RelatedLinks (4 Links) | 100% identisch |
| JSX-Struktur | 100% identisch |
| H2-Headings | Template, nur Stadtname |
| Meta Title + Description | Template, nur Stadtname |
| SEO-Text Absatz 2 | ~85% dupliziert |

Einzigartig pro Seite: ~1-2 Saetze (Kreis-Nennung, Entfernung zu Ahlen). Hamm und Muenster sind am besten differenziert (Stadtteil-Nennungen).

### E-E-A-T Assessment

| Signal | Score (1-5) | Detail |
|--------|-------------|--------|
| Experience | 3/5 | Echte Fotos, Aufsteller, Inhaber mit Bild -- aber keine Case Studies |
| Expertise | 2/5 | Keine Zertifizierungen, keine Fachbeitraege, kein /ueber-uns |
| Authoritativeness | 2/5 | Keine externen Bewertungen eingebunden, keine Presseerwahnungen |
| Trustworthiness | 3/5 | NAP konsistent, Impressum vorhanden (USt-ID fehlt), HTTPS |
| **Gesamt** | **2.5/5** | Hauptproblem: fehlende /ueber-uns-Seite und keine echten Testimonials |

### Content-Tiefe pro Seitentyp

| Seite | Woerter (ca.) | Min. empfohlen | Bewertung |
|-------|---------------|----------------|-----------|
| Startseite `/` | ~550 | 500 | OK |
| `/entruempelung` | ~280 | 800 | ZU DUENN -- Hauptservice-Seite |
| `/entruempelung-kosten` | ~450 | 800 | ZU DUENN -- hoechste Suchintention |
| `/wohnungsaufloesung` | ~400 | 600 | Grenzwertig |
| `/haushaltsaufloesung` | ~400 | 600 | Grenzwertig |
| Ratgeber-Seiten | 600-800 | 600 | OK |
| Area-Seiten (13x) | 200-300 einzigartig | 500 | KRITISCH DUENN |
| FAQ | ~350 (10 Fragen) | 500 | Grenzwertig -- 5-8 Fragen mehr |
| Kontakt | ~150 | -- | OK fuer Kontaktseite |

### Brand-Inkonsistenz

- Domain: `collectus-entruempelung.de`
- E-Mail: `info@rundumshausserviceleistungen.de`
- Schema alternateName: "Rund ums Haus Serviceleistungen"
- Trust-Signal-Problem: Nutzer sehen eine Domain und eine komplett andere E-Mail

---

## 3. On-Page SEO (68/100)

### Title Tags (38 Seiten)

| Status | Anzahl | Detail |
|--------|--------|--------|
| Einzigartig + Brand + Keyword | 25 | Service- und Ratgeber-Seiten |
| Template-Duplikat | 13 | `Entrümpelung {Stadt} – Schnell & Zuverlässig \| Collectus` |

### Meta Descriptions (38 Seiten)

| Status | Anzahl | Detail |
|--------|--------|--------|
| Einzigartig, 120-160 Z. | 21 | OK |
| Near-Duplicate Template | 13 | Identischer Satz, nur Stadtname |
| Zu kurz (< 120 Z.) | 4 | `/faq` (110), `/kontakt` (110), `/moebel-entsorgung` (115), `/gartenraeumung` (117) |

### Heading-Struktur

| Check | Status | Detail |
|-------|--------|--------|
| 1x H1 pro Seite | PASS | Alle 38 Seiten |
| H1 enthaelt Keyword | PASS | |
| Hierarchie H1>H2>H3 | PASS | Keine Luecken |

### Internal Linking

| Check | Status | Detail |
|-------|--------|--------|
| Navigation | PASS | 38 Seiten in Header + Footer |
| Cross-Links (Service) | PASS | Keyword-Badges als Links auf 4 Service-Seiten |
| Cross-Links (Area) | FAIL | Area-Seiten verlinken nicht untereinander |
| Breadcrumb `<a>` statt `<Link>` | WARN | Kein Prefetching |

---

## 4. Schema / Structured Data (75/100)

| Schema | Seite(n) | Status | Issues |
|--------|----------|--------|--------|
| LocalBusiness + GeoCircle + AggregateRating | Startseite | PASS | `ratingCount: 12` verifizieren gegen GBP |
| LocalBusiness (Subpage) | Service + Area-Seiten | PASS | Inkl. `areaServed` + `hasOfferCatalog` |
| BreadcrumbList | Alle Unterseiten | PASS | Via PageHero Server-Component |
| FAQPage | `/faq` | PASS | Server-Component, 10 Fragen |
| HowTo | `/entruempelung-checkliste` | PASS | 3 Sections, 18 Steps |
| Article | Ratgeber-Seiten | FAIL | Komplett fehlend auf Steuer, Sperrmuell, Selber-Machen |

### Fehlende Schema-Chancen

- `Article` / `BlogPosting` auf 4 Ratgeber-Seiten
- `Review` / echte Testimonials auf der Startseite
- `Service` Schema mit `priceRange` auf `/entruempelung-kosten`

---

## 5. Performance / CWV (55/100)

| Metrik | Einschaetzung | Risiko |
|--------|---------------|--------|
| LCP | WARN | `abraham-garten.jpg` (423 KB, 2000x1333, hat `priority` aber kein `sizes`). `seniorenservice.png` (1.5 MB) auf Subpage |
| CLS | PASS | Alle Bilder haben width/height oder fill |
| INP | PASS | Nur 4 Client-Components, minimales JS |
| TTFB | PASS | SSR via standalone Node.js, Caddy Proxy |
| Bundle | PASS | < 110 KB First Load JS |
| Fonts | PASS | `next/font` -- kein FOUT/FOIT |

### Bild-Optimierung

| Problem | Dateien | Groesse |
|---------|---------|---------|
| Uebergrosse PNGs | `seniorenservice.png` (1.5 MB, in Benutzung) | 1.5 MB |
| Tote Assets | `hero.png` (2.7 MB), `wohnung-leer.png` (2.7 MB), `team.png` (1.5 MB), 7 weitere JPGs | 7.3 MB |
| Avatar zu gross | `abraham-portrait.jpg` (423 KB fuer 56x56 Display) | 423 KB |
| Fehlendes `sizes`-Prop | `abraham-garten.jpg` (2000px), `aufsteller-werbung.jpg` (920px), Subpage-Bilder | -- |
| Fehlendes `priority` | Subpage-Hauptbilder (Wohnung, Keller, Senioren) | -- |
| Kein WebP Source | Alle Bilder JPG/PNG (Next.js konvertiert jetzt automatisch seit Fix) | -- |

---

## 6. AI Search Readiness (45/100)

| Check | Status | Detail |
|-------|--------|--------|
| Klar zitierbare Aussagen | WARN | Content ist eher generisch, wenige spezifische Fakten/Zahlen |
| FAQ-Struktur | PASS | 10 Fragen mit klaren Antworten |
| Q&A-Formatierung | WARN | Nur auf /faq -- Service-Seiten haben keine FAQs |
| Entity-Klarheit | PASS | LocalBusiness Schema, NAP konsistent |
| llms.txt | FAIL | Nicht vorhanden |
| Passage-Level Citability | WARN | Absaetze auf Area-Seiten zu generisch fuer AI-Zitation |

---

## 7. Images (40/100)

| Check | Status | Detail |
|-------|--------|--------|
| Alt-Text vorhanden | PASS | Alle 8 genutzten Bilder haben beschreibende Alt-Texte |
| Alt-Text beschreibend | PASS | Enthalten Brand + Kontext |
| Dateiformate | WARN | Source-Dateien alle JPG/PNG -- Next.js konvertiert jetzt automatisch |
| Dateigroessen | FAIL | 1.5 MB PNG, 423 KB Avatar, 7.3 MB tote Assets |
| `sizes`-Prop | FAIL | Nur 4 Gallery-Bilder haben `sizes` |
| `priority`-Prop | WARN | Nur Hero-Bild + Logo haben `priority` |
| Responsive | WARN | Nur Gallery-Bilder haben `sizes` fuer Responsive |
| Lazy Loading | PASS | Next.js `<Image>` hat automatisches Lazy Loading |
