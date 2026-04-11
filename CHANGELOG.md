# Changelog

All notable changes to this project are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [2.0.0] - 2026-04-11

### Added
- **Portable file-based storage** — data stored in `data/` folder next to `index.html`
  - `data/settings.json` — language and macro settings
  - `data/records.json` — saved calculations
  - One-time folder connection via File System Access API; auto-restores silently on return visits
  - Reconnect button appears only when browser permission expires (new session) — one click
- **GNU gettext translation system** — flat `languages/` structure replacing `.js` locale files
  - `en_EN.po` / `en_EN.mo` — English source (anchor strings, also used as Poedit template)
  - `sk_SK.po` / `sk_SK.mo` — Slovak translations
  - `de_DE.po` / `de_DE.mo` — German translations
  - Adding new language: create `xx_XX.po` in Poedit from `en_EN.po`, save `xx_XX.po` + `xx_XX.mo` to `languages/`, reconnect app folder → new language appears automatically in dropdown
  - `.mo` binary parser built into `index.html` (DataView / ArrayBuffer, magic `0x950412de`)
- **Dynamic language discovery** — language dropdown auto-built from `languages/*.mo` after folder connection
- **Language switcher — `<select>` dropdown** replacing side-by-side buttons in header and settings modal
  - Header: shows short code only (`EN`, `SK`, `DE`, …)
  - Settings modal: shows code + native name (`EN — English`, `SK — Slovenčina`, `DE — Deutsch`)
- **Automatic language name resolution via `Intl.DisplayNames`** — browser resolves the native name for any language code without a hardcoded list (`it_IT` → `italiano (Italia)`, `ar_SA` → `العربية`, etc.)
- **`langShortCode()`** — derives display code from locale filename (`sk_SK.mo` → `SK`)
- **`resolveIntlName()`** — wraps `Intl.DisplayNames` with BCP47 conversion and graceful fallback
- **Connected folder path display** — when portable storage is connected, full path shown next to status indicator in both header and settings modal
- **`detectAppWebPath()`** — reads path of currently open `index.html` from `window.location.href` (file:// only), including the `web/` directory
- **"Change folder" button** in Settings modal — allows reconnecting or switching folder without leaving settings
- **New translation keys** added to all three languages (`.po` + `.mo`):
  - `storage.reconnect` — button label when stored handle exists but permission expired
  - `storage.change_folder` — button label in settings when already connected
  - `storage.folder_title` — section title in settings modal
- All three core translations embedded inline in `index.html` for immediate use without folder connection

### Changed
- `index.html` — complete rewrite; localStorage replaced by portable file storage, all locale scripts removed, storage module rewritten, language switcher replaced with `<select>` dropdown
- `languages/` directory — flattened; removed `sk_SK/LC_MESSAGES/` and `de_DE/LC_MESSAGES/` nested structure
- `tools/po2locale.py` — rewritten as v2 dev tool; compiles `.po` → `.mo` via `polib`; marked clearly as development-only utility, not required to run the app

### Removed
- `locales/` directory — all `en_EN.js`, `sk_SK.js`, `de_DE.js` files removed
- `<script src="locales/...">` tags from `index.html`
- Nested `languages/sk_SK/LC_MESSAGES/` and `languages/de_DE/LC_MESSAGES/` subdirectories

### Files changed
- `web/index.html` — complete v2.0.0 rewrite
- `web/languages/en_EN.po` + `en_EN.mo` — new (English source/template, 156 entries)
- `web/languages/sk_SK.po` + `sk_SK.mo` — new flat location (156 entries)
- `web/languages/de_DE.po` + `de_DE.mo` — new flat location (156 entries)
- `web/tools/po2locale.py` — rewritten for v2 workflow
- `web/locales/` — removed entirely

---

## [1.1.2] - 2026-04-08

### Fixed
- **Weight input field** — removed hard minimum limit (30 kg), field can now be freely cleared and retyped
  - Typing: any valid number accepted immediately, no forced minimum while typing
  - On blur (leaving field): if empty or < 1, resets to 80 kg as safe default
  - Removed `min={30}` HTML attribute that blocked browser from accepting lower values
  - Calculations guarded with `parseFloat(weight) || 0` — no NaN propagation

### Files changed
- `web/index.html` — weight input onChange/onBlur logic rewritten, calculation guard added

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

---

[Unreleased]: https://github.com/Jan-Salma/calorie-calculator/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.1.2...v2.0.0
[1.1.2]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Jan-Salma/calorie-calculator/releases/tag/v1.0.0
