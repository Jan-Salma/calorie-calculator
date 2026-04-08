# Changelog

All notable changes to this project are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

- Portable file-based storage (File System Access API + JSON) replacing localStorage
- `.po`/`.mo` translation system with Poedit workflow
- Multilingual README variants (SK, DE)

---

## [1.1.1] - 2026-04-08

### Fixed
- **Removed "Voľný čas (ľahká aktivita)"** PAL activity — not based on Fitness Fibel 2.0 source (p. 129); was incorrectly added
- **Renamed 4 PAL activity labels** with real-world occupation examples (all 3 languages: SK / EN / DE)
  - *Sedavý / ležiaci* → includes `(počítač, tv)` / `(computer, TV)` / `(Computer, TV)`
  - *Sedavá + krátke státie / chôdza* → includes `(vodič, pracovník na montážnej linke)` / `(driver, assembly line worker)` / `(Fahrer, Fließbandarbeiter)`
  - *Prevažne stojaca / chodiaca práca* → includes `(domáce práce, predajca)` / `(housework, salesperson)` / `(Hausarbeit, Verkäufer)`
  - *Ťažká fyzická práca* → includes `(stavební robotníci, vrcholový šport)` / `(construction workers, elite sport)` / `(Bauarbeiter, Leistungssport)`
- **DEFAULT_HOURS redistributed** — leisure (7 h) removed, lying raised from 0 h → 7 h; total remains 24 h

### Files changed
- `web/index.html` — PAL_ACTIVITIES array reduced from 8 to 7 items, DEFAULT_HOURS updated
- `web/locales/sk_SK.js` — labels updated, `pal.leisure` removed
- `web/locales/en_EN.js` — labels updated, `pal.leisure` removed
- `web/locales/de_DE.js` — labels updated, `pal.leisure` removed

---

## [1.1.0] - 2026-04-07

### Added
- **Multilanguage support** — Slovak (sk_SK), English (en_EN), Deutsch (de_DE)
  - Instant language switcher in header (no page reload)
  - Language preference stored in settings (persisted across sessions)
  - Slovak plural rules (`one` / `few` / `many`)
  - Self-registering locale system via `window.LOCALES` — new languages added by dropping a single JS file
- **English locale** (`web/locales/en_EN.js`) — full translation of all UI strings
- **German locale** (`web/locales/de_DE.js`) — full translation of all UI strings
- **Updated Slovak locale** (`web/locales/sk_SK.js`) — refactored to new locale format, all strings verified

### Changed
- Locale files moved to `web/locales/` subfolder
- `web/index.html` updated to load all 3 locale scripts in `<head>`
- README updated to document multilanguage architecture and locale contribution guide

### Files changed
- `web/index.html` — locale loader added, language switcher UI integrated
- `web/locales/sk_SK.js` — new file (Slovak)
- `web/locales/en_EN.js` — new file (English)
- `web/locales/de_DE.js` — new file (German)
- `README.md` — updated with multilanguage docs

---

## [1.0.0] - 2026-04-07

### Added
- **BMR calculation** with gender-specific formulas (Fitness Fibel 2.0, p. 129)
  - Men: `1.0 × weight (kg) × 24h`
  - Women: `0.9 × weight (kg) × 24h`
- **PAL activity system** with 8 activity types and adjustable intensity sliders
  - Sleep, sedentary (lying), sedentary (desk), light activity, standing, heavy physical, sport/training, leisure
  - Real-time 24-hour validation with visual indicator
- **3 goal modes**
  - 💪 Muscle Gain — caloric surplus (default +300 kcal men / +200 kcal women)
  - 🔥 Fat Loss — caloric deficit (default −300 kcal)
  - 🔄 Body Recomposition — maintenance calories
- **Dual calculation method** — by daily kcal or by weekly weight change (kg/week)
- **Dynamic fat minimum limiter** — fat slider physically blocked below biological minimum
  - 40 g/day men, 30 g/day women (configurable in settings)
  - Warning message displayed when minimum is enforced
- **Macronutrient calculator** with adjustable protein and fat sliders
  - Carbohydrates calculated automatically from remaining calories
  - Pie chart visualization of macro distribution
- **Goal info panels** — collapsible explanations from Fitness Fibel 2.0 for each goal's macro logic
- **Settings modal** — globally configurable
  - Macro ranges (protein g/kg, fat %) per goal
  - Biological fat minimums per gender
  - Default surplus/deficit values per gender
  - Default language
- **Records system** — save, load, edit, and delete calculations (localStorage `ff2_records_v2`)
  - Auto-generated names with date, goal, weight, and gender
  - Custom naming
  - Update existing record or save as new
- **Slovak-only UI** — first public release (SK locale only)
- **Nutrition rules panel** — daily fibre (30–60 g), water (weight/20 L), 80/20 rule
- **Responsive dark-mode UI** — DM Sans + Outfit fonts, amber/red/green accent system
- **Zero-install web app** — single HTML file, no server or build step required

### Technical
- React 18 + Babel standalone (CDN) — no build pipeline
- Settings stored in `localStorage` key `ff2_settings_v1`
- Records stored in `localStorage` key `ff2_records_v2`

### Known Limitations
- Slovak language only (multilanguage added in v1.1.0)
- Records and settings are bound to the browser and device (localStorage)
- Portable cross-device storage planned for v2.0.0

---

[Unreleased]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.1.1...HEAD
[1.1.1]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Jan-Salma/calorie-calculator/releases/tag/v1.0.0
