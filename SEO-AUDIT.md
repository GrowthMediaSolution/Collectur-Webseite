# SEO Audit Report – Collectus Entrümpelung

**Datum:** 09.05.2026
**Domain:** collectus-entruempelung.de
**Typ:** Lokaler Dienstleister (Entrümpelung, Wohnungsauflösung)
**Framework:** Next.js 14, App Router, SSR/SSG
**Seiten:** 38 indexierbare Seiten (davon 13 Einsatzgebiet-Seiten)

---

## Executive Summary

**Gesamtbewertung: 62/100 -- solide technische Basis, aber kritische Content-Risiken**

Die Website hat ein starkes technisches Fundament (SSR, Canonical Tags, Schema, schnelle Architektur). Das grosste Risiko sind die 13 Einsatzgebiet-Seiten mit **85-90% dupliziertem Content** -- ein klassisches Doorway-Pages-Muster, das Google abstrafen kann. Bilder brauchen Optimierung (1.5 MB PNG, fehlende `sizes`-Props, 7.3 MB tote Assets). Meta-Descriptions der Area-Seiten sind identische Templates.

### Top 5 Prioritaten

1. **KRITISCH:** 13 Einsatzgebiet-Seiten haben 85-90% duplizierten Content (Doorway-Pages-Risiko)
2. **HOCH:** Bilder nicht optimiert -- 1.5 MB PNG, kein WebP, fehlende `sizes`-Props
3. **HOCH:** 13 identische Meta-Descriptions (nur Stadtname unterschiedlich)
4. **MITTEL:** E-Mail `info@rundumshausserviceleistungen.de` widerspricht der Marke "Collectus"
5. **MITTEL:** Keine `/ueber-uns`-Seite -- schwache E-E-A-T-Signale

### Quick Wins (bereits umgesetzt)

- Next.js Bildoptimierung aktiviert (`unoptimized: true` entfernt)
- Open Graph + Twitter Card Meta-Tags ergaenzt
- Stadt-Badges auf Startseite zu Links umgebaut
- `aggregateRating` Schema hinzugefuegt
- `| Collectus` in 6 fehlenden Seitentiteln ergaenzt
- HowTo-Schema auf Checkliste-Seite
- FAQ-Schema in Server-Component verlagert
- Keyword-Badges zu internen Links auf 4 Service-Seiten
- Dynamische Sitemap mit `lastmod`-Daten

---

## 1. Technisches SEO

### 1.1 Crawlability & Indexation

| Pruefpunkt | Status | Details |
|------------|--------|---------|
| robots.txt | OK | `Allow: /`, `Disallow: /api/`, Sitemap referenziert |
| XML Sitemap | OK | Dynamisch via `app/sitemap.ts`, 36 URLs, `lastmod`-Daten |
| Canonical Tags | OK | Alle 38 Seiten haben `alternates: { canonical }` |
| `lang`-Attribut | OK | `<html lang="de">` |
| `metadataBase` | OK | `https://collectus-entruempelung.de` |
| noindex auf Rechtsseiten | OK | Impressum + Datenschutz haben `robots: { index: false }` |
| Redirect www -> non-www | OK | Caddy Config korrekt |
| HTTPS | OK | Caddy mit automatischem Let's Encrypt |

**Probleme:**

| Issue | Impact | Detail |
|-------|--------|--------|
| Impressum + Kontakt in Sitemap | Gering | Rechtliche/Utility-Seiten brauchen keine hohe Priority |

### 1.2 Site-Architektur

| Pruefpunkt | Status | Details |
|------------|--------|---------|
| Klick-Tiefe | OK | Alle Seiten max. 2 Klicks von der Startseite |
| Navigation | OK | Mega-Menu mit 3 Dropdown-Kategorien (Leistungen, Einsatzgebiete, Ratgeber) |
| Footer-Links | OK | Alle 38 Seiten verlinkt |
| Breadcrumbs | OK | BreadcrumbList-Schema auf jeder Unterseite via `PageHero` |
| Orphan Pages | OK | Keine -- alle Seiten in Navigation und Footer |

**Probleme:**

| Issue | Impact | Detail |
|-------|--------|--------|
| Area-Seiten verlinken nicht untereinander | Mittel | 13 Einsatzgebiet-Seiten haben identische `RelatedLinks` auf 4 Service-Seiten -- keine Quervernetzung zwischen Staedten |
| `PageHero` Breadcrumb nutzt `<a>` statt `<Link>` | Gering | `<a href="/">Startseite</a>` statt Next.js `<Link>` -- kein Prefetching |

### 1.3 Core Web Vitals (Code-Analyse)

| Metrik | Einschaetzung | Begruendung |
|--------|---------------|-------------|
| LCP | Risiko | Hero-Bild `abraham-garten.jpg` (423 KB, 2000x1333) hat `priority`, aber kein `sizes`-Prop -- Browser laedt volle Groesse auf Mobile |
| CLS | OK | Alle `<Image>` haben `width`/`height` oder `fill` mit Container |
| INP | OK | Minimales JS -- nur Header, FAQ-Accordion, MultiStepForm als Client Components |

### 1.4 Bilder

**Kritische Probleme:**

| Issue | Impact | Detail |
|-------|--------|--------|
| `seniorenservice.png` ist 1.5 MB | Hoch | Wird auf `/seniorenentruempelung` geladen -- massiver LCP-Killer |
| `abraham-portrait.jpg` ist 340 KB fuer 56x56px Display | Mittel | Sollte max. 5 KB sein (112x112 WebP fuer Retina) |
| Kein `sizes`-Prop auf Hero/Subpage-Bildern | Mittel | `abraham-garten.jpg` (2000px breit), `aufsteller-werbung.jpg` (920px) -- Browser laedt Vollgroesse auf Mobile |
| Kein `priority` auf Subpage-Hauptbildern | Mittel | `wohnzimmer-geraeumt-1.jpg` (Haushaltsaufloesung, Wohnungsaufloesung), `keller-geraeumt.jpg`, `seniorenservice.png` |
| 7.3 MB tote Bild-Assets | Gering | 10 ungenutzten Dateien in `/public/images/` (inkl. 2.7 MB `hero.png`, 2.7 MB `wohnung-leer.png`, 1.5 MB `team.png`) |
| Kein WebP/AVIF | Mittel | Alle Bilder sind JPG/PNG -- Next.js Image Optimization konvertiert jetzt automatisch (seit Fix #1), aber Source-Dateien sind unnoetig gross |

### 1.5 JavaScript & Rendering

| Pruefpunkt | Status | Details |
|------------|--------|---------|
| SSR/SSG | OK | Alle Seiten werden serverseitig gerendert -- kein JS fuer Content noetig |
| Client Components | OK | Nur 4: Header, MultiStepForm, FaqClient, CtaBanner (PageHero) -- minimal |
| Bundle Size | OK | First Load JS ~102 KB shared, Seiten 130-230 B eigene Daten |
| Font Loading | OK | Google Fonts via `next/font` (PT Sans + PT Sans Narrow) -- keine FOUT |

---

## 2. On-Page SEO

### 2.1 Title Tags

**38 Seiten geprueft. Alle haben einen Title.**

| Status | Anzahl | Details |
|--------|--------|---------|
| OK (einzigartig, Keyword + Brand) | 25 | Alle Service- und Ratgeber-Seiten |
| Template-Duplikat | 13 | Alle Area-Seiten: `Entrümpelung {Stadt} – Schnell & Zuverlässig \| Collectus` |

**Probleme:**

| Issue | Impact | Betroffene Seiten |
|-------|--------|-------------------|
| 13 identische Title-Templates | Hoch | Alle `entruempelung-{stadt}` Seiten -- nur Stadtname unterschiedlich |
| Startseiten-Title 72 Zeichen | Gering | `Entrümpelung Ahlen – Wohnungsauflösung & Haushaltsauflösung \| Collectus` -- leicht ueber 60 Zeichen, kann abgeschnitten werden |

### 2.2 Meta Descriptions

**38 Seiten geprueft. Alle haben eine Description.**

| Status | Anzahl | Details |
|--------|--------|---------|
| OK (einzigartig, 120-160 Zeichen) | 21 | Service-, Ratgeber- und Utility-Seiten |
| Template-Duplikat | 13 | Identischer Satz, nur Stadtname ersetzt |
| Zu kurz (< 120 Zeichen) | 4 | `/faq` (110), `/kontakt` (110), `/moebel-entsorgung` (115), `/gartenraeumung` (117) |

**Kritisches Problem:** Alle 13 Area-Seiten nutzen exakt denselben Satz:
> "Professionelle Entrümpelung in {Stadt}. Privat & Gewerbe, kostenlose Besichtigung, besenreine Übergabe. Festpreis ohne versteckte Kosten."

Google behandelt diese als Near-Duplicates und kann die Anzeige in den SERPs unterdruecken.

### 2.3 Heading-Struktur

| Pruefpunkt | Status | Details |
|------------|--------|---------|
| H1 pro Seite | OK | Jede Seite hat genau einen H1 via `PageHero` oder Hero-Section |
| H1 enthaelt Keyword | OK | Alle H1s enthalten das primaere Keyword der Seite |
| Hierarchie H1 > H2 > H3 | OK | Keine uebersprungenen Ebenen |
| H2 enthalten Keywords | OK | SEO-Textbloecke nutzen keyword-reiche H2s |

### 2.4 Internal Linking

| Pruefpunkt | Status | Details |
|------------|--------|---------|
| Navigation | OK | 38 Seiten ueber Header + Footer verlinkt |
| Keyword-Badges | OK | 4 Service-Seiten nutzen Badges als interne Links |
| Einsatzgebiet-Badges (Startseite) | OK | 8 von 10 Staedten als Links |
| `RelatedLinks`-Komponente | OK | 4 Cross-Links am Ende jeder Service/Area-Seite |

**Probleme:**

| Issue | Impact | Detail |
|-------|--------|--------|
| Area-Seiten haben keine Quervernetzung | Mittel | Hamm verlinkt nicht zu Beckum, Warendorf nicht zu Oelde -- kein lokaler Cluster |
| Keyword-Badges auf Area-Seiten sind `<span>` | Gering | z.B. "Entrümpelung Hamm"-Badge auf `/entruempelung-hamm` ist kein Link |
| CtaBanner E-Mail nutzt `<a>` statt `<Link>` | Gering | Kein Prefetching, aber auch kein SEO-Problem |

### 2.5 Schema/Structured Data

| Schema-Typ | Seiten | Status |
|------------|--------|--------|
| LocalBusiness + GeoCircle + AggregateRating | Startseite | OK |
| LocalBusiness (Subpage-Variante) | Alle Service- und Area-Seiten | OK |
| BreadcrumbList | Alle Unterseiten | OK |
| FAQPage | `/faq` | OK (Server-Component) |
| HowTo | `/entruempelung-checkliste` | OK |

**Probleme:**

| Issue | Impact | Detail |
|-------|--------|--------|
| Kein `Article`-Schema auf Ratgeber-Seiten | Gering | Checkliste, Steuer, Sperrmuell-Ratgeber, Selber-Machen -- fehlt `datePublished`, `author` |
| `aggregateRating` nicht verifizierbar | Mittel | `ratingCount: 12` muss mit Google Business Profile uebereinstimmen |
| Schema-Descriptions weichen von Meta ab | Gering | Startseite + Checkliste haben unterschiedliche Description in JSON-LD vs. Meta |

---

## 3. Content-Qualitaet

### 3.1 Doorway-Pages-Analyse (KRITISCH)

**13 Einsatzgebiet-Seiten sind zu 85-90% identischer Content.**

Detailanalyse:

| Element | Anteil am Content | Duplikat-Rate |
|---------|-------------------|---------------|
| `scope`-Array (6 Leistungspunkte) | ~10% | 100% identisch |
| Sidebar-Karte (6 Label/Value-Paare) | ~10% | 100% identisch |
| RelatedLinks (4 Links) | ~5% | 100% identisch |
| JSX/Component-Struktur | ~20% | 100% identisch |
| H2-Headings | ~5% | Template, nur Stadtname ersetzt |
| Meta Title + Description | ~5% | Template, nur Stadtname ersetzt |
| Intro-Absatz (Section 1) | ~15% | ~80% dupliziert |
| SEO-Text Absatz 1 | ~15% | ~50% einzigartig (Kreis-Nennung, Entfernung) |
| SEO-Text Absatz 2 | ~10% | ~85% dupliziert (3-4 Vorlagen recycelt) |
| Keyword-Tags | ~5% | ~60% dupliziert |

**Was einzigartig ist (nur 10-15%):**
- P1 nennt den jeweiligen Kreis (Warendorf, Soest, Coesfeld, Unna, Guetersloh)
- Hamm und Muenster nennen Stadtteile (Bockum-Hoevel, Pelkum; Mauritz, Hiltrup)
- 4./5. Keyword-Tag variiert nach Region

**Google-Risiko:** Doorway Pages -- "Seiten, die sich nur durch den Ortsnamen unterscheiden" sind explizit in den Google Quality Guidelines als Spam definiert.

### 3.2 E-E-A-T-Signale

| Signal | Status | Detail |
|--------|--------|--------|
| **Experience** | Mittel | Echte Fotos von Auftaegen vorhanden, Aufsteller-Bild zeigt lokale Praesenz |
| **Expertise** | Schwach | Keine `/ueber-uns`-Seite, keine Zertifizierungen, keine Firmengeschichte |
| **Authoritativeness** | Schwach | Keine externen Bewertungen eingebunden, kein Google Maps Embed |
| **Trustworthiness** | Mittel | NAP konsistent, Impressum vorhanden (USt-ID fehlt), HTTPS |

**Probleme:**

| Issue | Impact | Detail |
|-------|--------|--------|
| Keine `/ueber-uns`-Seite | Hoch | Google und Nutzer finden keine Info ueber den Inhaber/das Team |
| E-Mail widerspricht Brand | Mittel | `info@rundumshausserviceleistungen.de` statt `@collectus-entruempelung.de` |
| USt-ID fehlt im Impressum | Mittel (rechtlich: Hoch) | "wird nachgetragen" -- Pflichtangabe nach TMG |
| Keine echten Testimonials | Mittel | "Top-bewertet auf Google" aber keine echten Kundenzitate mit Name/Kontext |
| Kein Google Maps Embed | Gering | Adresse nur als Text, kein interaktiver Kartennachweis |

### 3.3 Content-Tiefe

| Seitentyp | Wortanzahl (ca.) | Bewertung |
|-----------|------------------|-----------|
| Startseite | 800-1000 | OK fuer Local Business |
| Service-Seiten (Entruempelung, Wohnungsaufloesung, etc.) | 400-600 | Akzeptabel, koennte tiefer sein |
| Ratgeber-Seiten (Checkliste, Steuer, Sperrmuell) | 600-800 | OK |
| Einsatzgebiet-Seiten | 200-300 (einzigartig) | Zu duenn -- Doorway-Page-Niveau |
| Kontakt | 100-150 | OK fuer Kontaktseite |

---

## 4. Off-Page / Autoritaet

| Pruefpunkt | Status | Detail |
|------------|--------|--------|
| Google Business Profile | Unklar | NAP im Schema stimmt, aber GBP-Sync nicht verifizierbar |
| Externe Backlinks | Nicht geprueft | Kein Ahrefs/Semrush verfuegbar |
| Social Media | Nicht vorhanden | Keine Social-Links auf der Website |
| Lokale Verzeichnisse | Nicht geprueft | Brancheneintraege (Gelbe Seiten, 11880, etc.) nicht verifizierbar |

---

## 5. Priorisierter Action Plan

### KRITISCH (sofort)

| # | Aufgabe | Aufwand | Impact |
|---|---------|---------|--------|
| 1 | **13 Einsatzgebiet-Seiten differenzieren** -- einzigartiger `scope`-Array, stadt-spezifische FAQs, lokale Referenzen (Stadtteile, Entfernung, Besonderheiten), unique Meta-Descriptions, Quervernetzung zwischen Staedten | Hoch | Hoch |
| 2 | **`seniorenservice.png` (1.5 MB) zu WebP konvertieren** und auf max. 200 KB komprimieren | Gering | Hoch |
| 3 | **`sizes`-Prop auf alle grossen Bilder** -- `abraham-garten.jpg`, `aufsteller-werbung.jpg`, Subpage-Bilder | Gering | Hoch |

### HOCH (diese Woche)

| # | Aufgabe | Aufwand | Impact |
|---|---------|---------|--------|
| 4 | **13 Meta-Descriptions individualisieren** -- jede Stadt braucht einen einzigartigen Satz mit lokalem Bezug | Gering | Hoch |
| 5 | **`/ueber-uns`-Seite erstellen** -- Abraham Osmani, Teamfotos, Firmengeschichte, Versicherungsnachweis | Mittel | Hoch |
| 6 | **Echte Kundenstimmen einbauen** -- 3-5 anonymisierte Bewertungen mit Initialen und Auftragskontext | Mittel | Hoch |
| 7 | **`abraham-portrait.jpg` auf 112x112 WebP verkleinern** (aktuell 340 KB fuer 56x56 Display) | Gering | Mittel |
| 8 | **Tote Bild-Assets loeschen** -- 10 Dateien, 7.3 MB (`hero.png`, `wohnung-leer.png`, `team.png`, etc.) | Gering | Gering |

### MITTEL (diesen Monat)

| # | Aufgabe | Aufwand | Impact |
|---|---------|---------|--------|
| 9 | **E-Mail auf `@collectus-entruempelung.de` umstellen** | Mittel | Mittel |
| 10 | **USt-ID im Impressum eintragen** | Gering | Gering (rechtlich: Hoch) |
| 11 | **`Article`-Schema auf Ratgeber-Seiten** (Checkliste, Steuer, Sperrmuell, Selber-Machen) | Gering | Gering |
| 12 | **Meta-Descriptions verlaengern** -- `/faq` (110), `/kontakt` (110), `/moebel-entsorgung` (115), `/gartenraeumung` (117) auf 130-155 Zeichen | Gering | Gering |
| 13 | **`priority` auf Subpage-Hauptbilder** setzen (Haushaltsaufloesung, Wohnungsaufloesung, Keller, Senioren) | Gering | Gering |
| 14 | **Google Business Profile synchronisieren** -- NAP, E-Mail, Bewertungsanzahl pruefen | Gering | Hoch |

### LANGFRISTIG (Content-Strategie)

| # | Aufgabe | Aufwand | Impact |
|---|---------|---------|--------|
| 15 | **`/haushaltsaufloesung-nach-todesfall`** als eigene Seite | Hoch | Mittel |
| 16 | **`/entruempelung-kosten` mit Preistabelle** ausbauen | Mittel | Mittel |
| 17 | **Quervernetzung Area-Seiten** -- jede Stadt verlinkt auf 2-3 Nachbarstaedte | Gering | Mittel |
| 18 | **Breadcrumb `<a>` zu `<Link>`** in PageHero-Komponente aendern | Gering | Gering |

---

## 6. Was gut laeuft (nicht anfassen)

- SSR via Next.js App Router -- alle Seiten fuer Google ohne JS sichtbar
- `lang="de"` am `<html>`-Element
- `metadataBase` korrekt -- Canonicals loesen sich richtig auf
- `robots: { index: false }` auf Impressum und Datenschutz
- BreadcrumbList-Schema auf jeder Unterseite
- LocalBusiness + GeoCircle + AggregateRating-Schema auf der Startseite
- FAQPage-Schema (Server-Component)
- HowTo-Schema auf der Checkliste
- Open Graph + Twitter Card Meta-Tags
- robots.txt korrekt, Sitemap referenziert
- Dynamische Sitemap mit `lastmod`-Daten
- Alle Seiten haben Canonical Tags
- Beschreibende `alt`-Texte auf allen Bildern
- URL-Struktur: Deutsche Keywords, Kleinbuchstaben, Bindestriche
- Konsistenter Markenname `| Collectus` in allen Seitentiteln
- Keyword-Badges als interne Links auf Hauptleistungsseiten
- Einsatzgebiet-Badges auf der Startseite verlinkt
- Minimale Client-Side JS (4 Components) -- exzellent fuer INP
- Google Fonts via `next/font` -- kein Layout Shift durch Fonts
- Bundle < 110 KB First Load JS
