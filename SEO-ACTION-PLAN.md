# SEO Action Plan -- Collectus Entruempelung

**Erstellt:** 09.05.2026
**Audit-Score:** 62/100
**Domain:** collectus-entruempelung.de
**Typ:** Lokaler Dienstleister (Entruempelung / Wohnungsaufloesung)

---

## Legende

| Spalte | Werte |
|--------|-------|
| Aufwand | Gering / Mittel / Hoch |
| Impact | Hoch / Mittel / Gering |
| Status | Offen / Erledigt |

---

## Phase 1 -- Kritisch (diese Woche)

| # | Aufgabe | Detail | Aufwand | Impact | Status |
|---|---------|--------|---------|--------|--------|
| 1 | **13 Einsatzgebiet-Seiten differenzieren (Doorway-Pages-Risiko)** | 85-90% duplizierter Content. Jede Seite braucht: eigenen `scope`-Array, stadt-spezifische FAQs (2-3 pro Stadt), lokale Referenzen (Stadtteile, Entfernung, Besonderheiten), einzigartigen SEO-Textblock, unique Sidebar-Karte. Minimum 400 Woerter einzigartiger Content pro Seite. | Hoch | Hoch | Offen |
| 2 | **13 Meta-Descriptions individualisieren** | Alle Area-Seiten nutzen exakt denselben Satz mit Stadtname-Swap. Jede Stadt braucht eine einzigartige Description mit lokalem Bezug (Kreis, Entfernung, Stadtteil). | Gering | Hoch | Offen |
| 3 | **`seniorenservice.png` (1.5 MB) komprimieren** | Zu WebP konvertieren, max. 200 KB. Aktuell LCP-Killer auf `/seniorenentruempelung`. | Gering | Hoch | Offen |
| 4 | **`sizes`-Prop auf alle grossen Bilder** | `abraham-garten.jpg` (2000px), `aufsteller-werbung.jpg` (920px), Subpage-Bilder -- Browser laedt sonst Vollgroesse auf Mobile. Beispiel: `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"` | Gering | Hoch | Offen |

---

## Phase 2 -- Hoch (diese Woche / naechste Woche)

| # | Aufgabe | Detail | Aufwand | Impact | Status |
|---|---------|--------|---------|--------|--------|
| 5 | **`/ueber-uns`-Seite erstellen** | Abraham Osmani, Teamfotos, Firmengeschichte, Versicherungsnachweis, Ausstattung. Staerkt E-E-A-T massiv. | Mittel | Hoch | Offen |
| 6 | **Echte Kundenstimmen einbauen** | 3-5 anonymisierte Bewertungen mit Initialen und Auftragskontext. Aktuell nur "Top-bewertet auf Google" ohne Belege. | Mittel | Hoch | Offen |
| 7 | **Area-Seiten untereinander verlinken** | Jede Stadt-Seite verlinkt auf 2-3 Nachbarstaedte statt 4x denselben Service-Link. Beispiel: Hamm -> Beckum, Werne, Ahlen. | Gering | Mittel | Offen |
| 8 | **`abraham-portrait.jpg` verkleinern** | 340 KB fuer 56x56px Avatar. Auf 112x112 WebP runterskalieren (~5 KB). | Gering | Mittel | Offen |
| 9 | **`priority`-Prop auf Subpage-Hauptbilder** | Fehlt auf `wohnzimmer-geraeumt-1.jpg` (Haushalt/Wohnung), `keller-geraeumt.jpg`, `seniorenservice.png` -- sind LCP-Kandidaten. | Gering | Mittel | Offen |
| 10 | **Tote Bild-Assets loeschen** | 10 Dateien, 7.3 MB: `hero.png` (2.7 MB), `wohnung-leer.png` (2.7 MB), `team.png` (1.5 MB), `wohnzimmer-fenster.jpg`, `bad-dusche.jpg`, `bad-geraeumt-2.jpg`, `schlafzimmer-geraeumt.jpg`, `zimmer-leer-1/2/3.jpg` | Gering | Gering | Offen |

---

## Phase 3 -- Mittel (diesen Monat)

| # | Aufgabe | Detail | Aufwand | Impact | Status |
|---|---------|--------|---------|--------|--------|
| 11 | **E-Mail auf `@collectus-entruempelung.de`** | Aktuell `info@rundumshausserviceleistungen.de` ueberall (Schema, Footer, Kontakt, CtaBanner). Widerspricht der Marke. | Mittel | Mittel | Offen |
| 12 | **USt-ID im Impressum eintragen** | Aktuell: "wird nachgetragen" -- Pflichtangabe nach TMG. | Gering | Gering (rechtlich: Hoch) | Offen |
| 13 | **Meta-Descriptions verlaengern** | `/faq` (110 Z.), `/kontakt` (110 Z.), `/moebel-entsorgung` (115 Z.), `/gartenraeumung` (117 Z.) auf 130-155 Zeichen erweitern. | Gering | Gering | Offen |
| 14 | **Google Business Profile synchronisieren** | NAP + E-Mail muessen mit Schema-Daten uebereinstimmen. `aggregateRating ratingCount: 12` verifizieren. | Gering | Hoch | Offen |
| 15 | **`Article`-Schema auf Ratgeber-Seiten** | Checkliste, Steuer, Sperrmuell-Ratgeber, Selber-Machen -- `datePublished`, `author`, `publisher` ergaenzen. | Gering | Gering | Offen |
| 16 | **Keyword-Badges auf Area-Seiten verlinken** | Area-Seiten haben noch `<span>`-Tags statt Links (z.B. "Entruempelung Hamm" auf `/entruempelung-hamm` ist kein Link). | Gering | Gering | Offen |
| 17 | **Breadcrumb `<a>` zu `<Link>`** | `PageHero` nutzt `<a href="/">` statt Next.js `<Link>` -- kein Prefetching. | Gering | Gering | Offen |

---

## Phase 4 -- Langfristig / Content-Strategie

| # | Aufgabe | Detail | Aufwand | Impact | Status |
|---|---------|--------|---------|--------|--------|
| 18 | **`/haushaltsaufloesung-nach-todesfall`** | Eigenstaendige Seite fuer hochfrequenten Suchbegriff -- derzeit nur Unterpunkt auf `/haushaltsaufloesung`. | Hoch | Mittel | Offen |
| 19 | **`/entruempelung-kosten` mit Preistabelle** | Konkrete Richtwerte (z.B. "1-Zimmer ab X Euro"). Erhoht Relevanz fuer "was kostet"-Suchanfragen. | Mittel | Mittel | Offen |
| 20 | **Google Maps Embed auf Kontaktseite** | Aktuell nur Adresse als Text. Interaktive Karte staerkt lokale Signale. | Gering | Gering | Offen |
| 21 | **Social Media Profile verlinken** | Keine Social-Links auf der Website. Falls Profile existieren, im Footer ergaenzen. | Gering | Gering | Offen |

---

## Bereits erledigt (nicht anfassen)

Diese Punkte wurden im Rahmen des Audits gefixt:

| # | Was | Datei |
|---|-----|-------|
| A1 | Next.js Bildoptimierung aktiviert (`unoptimized: true` entfernt) | `next.config.mjs` |
| A2 | Open Graph + Twitter Card Meta-Tags ergaenzt | `app/layout.tsx` |
| A3 | Stadt-Badges auf Startseite zu Links umgebaut (8/10 verlinkt) | `app/page.tsx` |
| A4 | `aggregateRating` Schema hinzugefuegt | `app/page.tsx` |
| A5 | `\| Collectus` in 6 fehlenden Seitentiteln ergaenzt | 6 `page.tsx`-Dateien |
| A6 | HowTo-Schema auf Checkliste-Seite | `app/entruempelung-checkliste/page.tsx` |
| A7 | FAQ-Schema in Server-Component verlagert | `app/faq/page.tsx` + `FaqClient.tsx` |
| A8 | Keyword-Badges zu internen Links auf 4 Service-Seiten | entruempelung, wohnungsaufloesung, haushaltsaufloesung, kosten |
| A9 | Dynamische Sitemap mit `lastmod`-Daten (alte XML geloescht) | `app/sitemap.ts` |
| A10 | Datenschutz hatte bereits `robots: { index: false }` | -- |

---

## Technische Referenz -- Was gut laeuft

- SSR via Next.js App Router -- alle Seiten fuer Google ohne JS sichtbar
- `lang="de"` am `<html>`-Element
- `metadataBase` korrekt -- Canonicals loesen sich richtig auf
- `robots: { index: false }` auf Impressum und Datenschutz
- BreadcrumbList-Schema auf jeder Unterseite via `PageHero`
- LocalBusiness + GeoCircle + AggregateRating-Schema auf der Startseite
- FAQPage-Schema auf der FAQ-Seite (Server-Component)
- HowTo-Schema auf der Checkliste-Seite
- Open Graph + Twitter Card Meta-Tags im Root-Layout
- robots.txt korrekt, Sitemap referenziert
- Dynamische Sitemap mit `lastmod`-Daten (36 URLs)
- Alle 38 Seiten haben Canonical Tags
- Beschreibende `alt`-Texte auf allen Bildern
- URL-Struktur: Deutsche Keywords, Kleinbuchstaben, Bindestriche
- Konsistenter Markenname `| Collectus` in allen Seitentiteln
- Keyword-Badges als interne Links auf Hauptleistungsseiten
- Einsatzgebiet-Badges auf der Startseite verlinkt
- Minimales Client-Side JS (4 Components)
- Google Fonts via `next/font` -- kein Layout Shift
- Bundle < 110 KB First Load JS

---

## Bekannte Risiken

- **Doorway Pages (KRITISCH):** Die 13 Einsatzgebiet-Seiten sind das groesste aktive Risiko. 85-90% duplizierter Content. Google definiert Doorway Pages als "Seiten, die sich nur durch den Ortsnamen unterscheiden" -- genau das liegt hier vor. Prioritaet #1 hat die hoechste Dringlichkeit.
- **Bewertungsanzahl:** `aggregateRating ratingCount: 12` muss mit dem Google Business Profile uebereinstimmen. Bei Abweichung droht ein Schema-Penalty.
- **E-Mail-Dissonanz:** `info@rundumshausserviceleistungen.de` auf einer Domain namens `collectus-entruempelung.de` ist ein Trust-Signal-Problem.
