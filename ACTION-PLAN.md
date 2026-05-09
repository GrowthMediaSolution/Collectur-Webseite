# SEO Action Plan -- Collectus Entruempelung

**Audit-Score:** 62/100
**Datum:** 09.05.2026
**Domain:** collectus-entruempelung.de

---

## Critical -- Sofort fixen (blockiert Rankings / Penalty-Risiko)

| # | Task | Datei/Detail | Aufwand | Impact |
|---|------|-------------|---------|--------|
| 1 | **13 Einsatzgebiet-Seiten differenzieren** | Alle `app/entruempelung-{stadt}/page.tsx`. Eigener `scope`-Array, stadt-spezifische FAQs (2-3), lokale Referenzen (Stadtteile, POIs), eigener SEO-Text (min. 400 W. einzigartig), eigene Sidebar-Karte. Aktuell 85-90% Copy-Paste = Doorway Pages. | Hoch | Hoch |
| 2 | **13 Meta-Descriptions individualisieren** | Alle Area-Seiten: identischer Satz mit Stadtname-Swap. Jede braucht unique Description mit lokalem Bezug. | Gering | Hoch |
| 3 | **`seniorenservice.png` komprimieren** | `public/images/seniorenservice.png` -- 1.5 MB PNG. Zu WebP konvertieren, max 200 KB. LCP-Killer auf `/seniorenentruempelung`. | Gering | Hoch |
| 4 | **`sizes`-Prop auf grosse Bilder** | `app/page.tsx` (abraham-garten: 2000px, aufsteller: 920px), `app/haushaltsaufloesung/page.tsx`, `app/keller-dachboden/page.tsx`, `app/seniorenentruempelung/page.tsx`. Beispiel: `sizes="(max-width: 768px) 100vw, 50vw"` | Gering | Hoch |

---

## High -- Diese Woche (signifikanter Ranking-Impact)

| # | Task | Datei/Detail | Aufwand | Impact |
|---|------|-------------|---------|--------|
| 5 | **`/ueber-uns` Seite erstellen** | Abraham Osmani, Team, Firmengeschichte, Versicherung, Ausstattung. Kritisch fuer Local E-E-A-T. | Mittel | Hoch |
| 6 | **Echte Kundenstimmen einbauen** | 3-5 anonymisierte Bewertungen mit Initialen + Auftragskontext. Aktuell nur "Top-bewertet auf Google" ohne Belege. | Mittel | Hoch |
| 7 | **Google Business Profile sync** | NAP + E-Mail pruefen. `aggregateRating ratingCount: 12` in `app/page.tsx:579` muss mit GBP uebereinstimmen. | Gering | Hoch |
| 8 | **Area-Seiten untereinander verlinken** | `RelatedLinks` in allen 13 Area-Seiten: statt 4x dieselben Service-Links 2-3 Nachbarstaedte verlinken. Hamm -> Beckum, Werne. | Gering | Mittel |
| 9 | **`abraham-portrait.jpg` verkleinern** | 423 KB fuer 56x56px Avatar. Auf 112x112 WebP (~5 KB). `public/images/abraham-portrait.jpg` | Gering | Mittel |
| 10 | **`priority` auf Subpage-Hauptbilder** | `app/haushaltsaufloesung/page.tsx`, `app/wohnungsaufloesung/page.tsx`, `app/keller-dachboden/page.tsx`, `app/seniorenentruempelung/page.tsx` -- sind LCP-Kandidaten | Gering | Mittel |
| 11 | **7.3 MB tote Bild-Assets loeschen** | `public/images/`: hero.png (2.7M), wohnung-leer.png (2.7M), team.png (1.5M), wohnzimmer-fenster.jpg, bad-dusche.jpg, bad-geraeumt-2.jpg, schlafzimmer-geraeumt.jpg, zimmer-leer-1/2/3.jpg | Gering | Gering |
| 12 | **HowTo-Schema entfernen** | `app/entruempelung-checkliste/page.tsx` -- Google hat HowTo Rich Results Sep 2023 entfernt. Schema bringt null Benefit. | Gering | Mittel |
| 13 | **`ratingCount` zu `reviewCount` aendern** | `app/page.tsx:579` -- Google bevorzugt `reviewCount` fuer bewertungsbasierte Ratings | Gering | Mittel |
| 14 | **`image` zu LocalBusiness Schema** | `app/page.tsx` + `components/Schema.tsx` -- Google erfordert `image` fuer Knowledge Panel. URL zum Logo oder Hero-Bild. | Gering | Mittel |
| 15 | **LocalBusiness Schema vereinheitlichen** | Homepage (`app/page.tsx`) hat `founder`, `aggregateRating`, `hasOfferCatalog` aber kein `priceRange`. `components/Schema.tsx` hat `priceRange` aber nichts anderes. Daten inkonsistent. | Gering | Mittel |

---

## Medium -- Diesen Monat (Optimierung)

| # | Task | Datei/Detail | Aufwand | Impact |
|---|------|-------------|---------|--------|
| 12 | **E-Mail auf `@collectus-entruempelung.de`** | Ueberall: `app/page.tsx:544`, `components/Schema.tsx:8`, `components/Shared.tsx:43`, `components/Footer.tsx:80`, `app/kontakt/page.tsx:14`, `app/faq/page.tsx:46` | Mittel | Mittel |
| 13 | **USt-ID im Impressum** | `app/impressum/page.tsx` -- "wird nachgetragen" ist Pflichtangabe nach TMG | Gering | Gering (rechtlich: Hoch) |
| 14 | **Meta-Descriptions verlaengern** | `/faq` (110Z), `/kontakt` (110Z), `/moebel-entsorgung` (115Z), `/gartenraeumung` (117Z) auf 130-155 Zeichen | Gering | Gering |
| 15 | **`Article`-Schema auf Ratgeber-Seiten** | `app/entruempelung-steuer/page.tsx`, `app/sperrmuell-ratgeber/page.tsx`, `app/entruempelung-selber-machen/page.tsx`, `app/entruempelung-checkliste/page.tsx` -- `datePublished`, `author`, `publisher` | Gering | Gering |
| 16 | **Keyword-Badges auf Area-Seiten verlinken** | 13 Area-Seiten haben `<span>` statt `<Link>` auf ihren Tags | Gering | Gering |
| 17 | **Breadcrumb `<a>` zu `<Link>`** | `components/Shared.tsx:86` -- `<a href="/">` zu `<Link href="/">` | Gering | Gering |
| 18 | ~~Security Headers in Caddy~~ | ERLEDIGT -- HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, static Cache-Control | Gering | Gering |
| 19 | **llms.txt erstellen** | `public/llms.txt` -- Beschreibung fuer AI-Crawler (Perplexity, ChatGPT) | Gering | Gering |

---

## High-Medium -- Content-Tiefe (diesen Monat)

| # | Task | Detail | Aufwand | Impact |
|---|------|--------|---------|--------|
| 20 | **`/entruempelung` Content ausbauen** | Aktuell ~280 Woerter, braucht min. 800. Prozessfotos, Case-Study, Versicherungsdetails, Teamqualifikation ergaenzen. | Mittel | Hoch |
| 21 | **`/entruempelung-kosten` Preistabelle** | Konkrete Richtwerte (z.B. "2-Zimmer: 800-1.500 EUR", "Keller: 300-600 EUR"). Hoechste Suchintention -- Nutzer erwarten Zahlen. + `Service` Schema mit `priceRange` | Mittel | Hoch |

---

## Low -- Langfristig / Content-Strategie

| # | Task | Detail | Aufwand | Impact |
|---|------|--------|---------|--------|
| 22 | **`/haushaltsaufloesung-nach-todesfall`** | Eigene Seite fuer hochfrequenten Suchbegriff -- aktuell nur Unterpunkt | Hoch | Mittel |
| 22 | **Stadt-spezifische FAQs auf Area-Seiten** | 2-3 FAQs pro Stadt mit FAQPage-Schema | Mittel | Mittel |
| 23 | **Google Maps Embed auf Kontaktseite** | Interaktive Karte staerkt lokale Signale | Gering | Gering |
| 24 | **Social Media Profile verlinken** | Falls Profile existieren, im Footer + `sameAs` in Schema | Gering | Gering |

---

## Bereits erledigt (heute gefixt)

| # | Was | Datei |
|---|-----|-------|
| A1 | Next.js Bildoptimierung aktiviert | `next.config.mjs` |
| A2 | Open Graph + Twitter Card Meta-Tags | `app/layout.tsx` |
| A3 | Stadt-Badges auf Startseite zu Links | `app/page.tsx` |
| A4 | `aggregateRating` Schema | `app/page.tsx` |
| A5 | `\| Collectus` in 6 Seitentiteln | 6 Dateien |
| A6 | HowTo-Schema auf Checkliste | `app/entruempelung-checkliste/page.tsx` |
| A7 | FAQ-Schema in Server-Component | `app/faq/page.tsx` |
| A8 | Keyword-Badges zu Links (4 Service-Seiten) | entruempelung, wohnung, haushalt, kosten |
| A9 | Dynamische Sitemap | `app/sitemap.ts` |
| A10 | Datenschutz noindex (war bereits vorhanden) | -- |
| A11 | HowTo-Schema entfernt (Google Sep 2023 deprecated) | `app/entruempelung-checkliste/page.tsx` |
| A12 | `ratingCount` zu `reviewCount` korrigiert | `app/page.tsx` |
| A13 | `image` + `description` + `founder` zu LocalBusiness | `app/page.tsx` + `components/Schema.tsx` |
| A14 | Security Headers + HSTS + static Cache-Control | `/etc/caddy/sites/collectus.caddy` |
| A15 | www -> non-www 301 Redirect konfiguriert | `/etc/caddy/sites/collectus.caddy` (DNS-Check fuer www noetig) |
