# Changelog

All notable changes to this project are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [2.2.0] - 2026-09-26

### Added
- **Muscle share** — step `2️⃣` renamed to **Body Composition**; alongside body fat you now enter your muscle share (%) and see the muscle mass in kg
- **Goal-driven body composition** — which fields are settable follows the goal chosen in step `5️⃣` (a badge in the section header shows the active mode):
  - 🔥 **Fat Loss** — fat: current + target % → fat to lose, target weight, duration and target date. Muscle: current % → kg only
  - 💪 **Muscle Building** — muscle: current + target % → muscle to gain, target weight, duration and target date. Fat: current % → kg only
  - 🔄 **Body Recomposition** — both fat and muscle have current + target % → fat to lose, muscle to gain, target weight, separate durations for fat and muscle and one combined target date
- **Target date** — every duration now also shows the calendar date the target is reached (`🎯 Target reached around 30 January 2027`)
- **Calculation model** — in each mode the mass that is *not* targeted stays constant:
  - Fat loss: `target weight = lean mass / (1 − target fat %)`, duration `fat to lose × 7,700 / deficit`
  - Muscle building: `target weight = (weight − muscle) / (1 − target muscle %)`, duration `muscle to gain × 7,700 / surplus` — same kcal-per-kg model the Goal step already uses for kg/week
  - Recomposition: `target weight = rest / (1 − target fat % − target muscle %)` where rest = weight − fat − muscle. Recomposition runs at maintenance, so the duration uses an adjustable **monthly pace** (defaults: muscle +0.5 kg/month, fat −1.0 kg/month)
  - Validation when fat + muscle ≥ 100 % (current or target) and hints when a target points the wrong way
- **Measurement history** — every *Save* or *Update* writes a row with date, time, weight, fat % / kg and muscle % / kg into the record (`record.history`)
  - New card **📈 Fat & Muscle Progress** under step 2: two line charts side by side (fat left, muscle right) with the change since the first measurement, kg / % toggle, and a scrollable table (newest first, goal icon per row, delete per row)
  - Checkbox in the save dialog (on by default) with a preview of the values that will be recorded
  - Saving again on the same day with identical values does not create a duplicate row — the original row and its time are kept
  - Records from 2.1.x and older get their saved date and values as the first history point
  - Record detail in the Records tab shows muscle, target weight, deltas and the number of measurements
- **Edit lock (✏️)** — every slider and adjustable field (weight, body fat, muscle, targets, recomposition pace, each activity, deficit/surplus, protein, fat %) is locked by default; ✏️ unlocks it, ✓ locks it again. Only one field can be open at a time. Locked sliders ignore touch completely, so scrolling on a phone can no longer move them by accident; activity −/+ buttons appear only when the row is unlocked; the weight field opens the keyboard only after ✏️
- **Browser storage fallback** — when no app folder is connected, settings and records are saved in the browser (`localStorage`). Mobile browsers do not support folder selection at all, so until now records and history could not be saved on a phone. On devices without folder support the "Select app folder" button is hidden and the header shows where data is stored. When a folder is connected later and it has no data yet, the browser data is copied into it once

### Fixed
- Translation files (`.po` / `.mo`) regenerated directly from the inline translations — four storage strings in `sk_SK` / `de_DE` had outdated source texts since 2.0.0; all three languages now match the app 1:1 (213 entries each)

### Files changed
- `web/index.html` — body composition, history, charts, edit lock, browser storage
- `web/languages/en_EN.po` + `.mo`, `sk_SK.po` + `.mo`, `de_DE.po` + `.mo` — 213 entries (was 169)
- `README.md`, `README_sk.md`, `README_de.md`, `CHANGELOG.md`

---

## [2.1.1] - 2026-08-22

### Fixed
- **Mobile keyboard popped up when dragging the body fat sliders** — regression introduced in 2.1.0
  - Cause: the body fat number inputs were placed in the same row as their sliders, only **10 px** from the slider track. The track was a **6 px** tall touch target (effective ~16 px) while the number field is 36 px tall, so a finger aiming at the slider thumb hit the number field instead and opened the keyboard. Every other slider in the app is 980–2750 px away from any text field, which is why only the new section was affected
  - The slider itself never causes this — a range input does not take focus on touch; only `input[type=number]` opens the keyboard
  - Fix 1: the number input moved out of the slider row — it now sits on the label line (right-aligned, with `%`), and the slider spans the full width on its own line. No keyboard-capable element remains next to any slider; a missed tap now lands on a plain container
  - Fix 2: **all** sliders in the app got a **26 px** touch target (was 6 px, 4 px for PAL intensity) while keeping the exact same thin look — the track is now drawn by `::-webkit-slider-runnable-track` / `::-moz-range-track` with fill colour and position passed in via the `--rc` / `--rf` CSS variables
  - Fix 3: `touch-action: pan-y` on sliders — vertical page scrolling still works, horizontal dragging belongs to the slider
  - `inputMode="decimal"` on the body fat fields — numeric keypad instead of the full keyboard when you do want to type a value

### Files changed
- `web/index.html` — slider CSS rewritten, body fat field layout, all 6 slider render sites

---

## [2.1.0] - 2026-08-22

### Added
- **Body fat section** — new step `2️⃣` in the calculator, placed directly after BMR
  - Current body fat % input (number field + slider, 3–60 %) → instantly shows **fat mass** and **lean mass** in kg
  - Target body fat % input → shows **target weight** and **how many kg of fat must be lost**
  - Calculation assumes lean mass (muscle, water, bone) stays unchanged:
    `lean = weight × (1 − bf%/100)` · `target weight = lean / (1 − target bf%/100)` · `fat to lose = weight − target weight`
  - When the goal is **Fat Loss**, an estimate is shown of how long the target takes at the current daily deficit (`1 kg fat ≈ 7,700 kcal`)
  - Handles the reverse case too — if the target is above the current value, the tile switches to "Fat to gain"
- **Body fat data stored in records** — `bodyFatPct`, `targetFatPct`, `fatMassKg`, `leanMassKg`, `fatDeltaKg` saved in `data/records.json`; shown in the record detail view. Older records without these fields load without errors (defaults applied per gender)
- **13 new translation keys** (`bodyfat.*`) in all three languages (`.po` + `.mo` + inline built-ins)
- **SEO meta tags** — `description`, `og:title`, `og:description`, `og:type`; `<title>`, meta description and `<html lang>` update dynamically when the language is switched

### Changed
- **All "Fitness Fibel 2.0" references removed from user-facing texts** — page title, subtitle, BMR notes, goal recommendations, macro info panels and settings. The single remaining mention is the footer line, unchanged:
  `Calculations are based on Fitness Fibel 2.0 (Sjard Roscher) and serve as a reference guide.`
- Page references to the book (`p. 129`, `p. 137`, `p. 140`, `p. 128`, `pp. 168–170`) removed from all texts
- `<title>` — `Calorie Calculator · Fitness Fibel 2.0` → `Calorie Calculator`
- **Calculator steps renumbered** — body fat inserted as step 2: PAL `2️⃣`→`3️⃣`, Total expenditure `3️⃣`→`4️⃣`, Goal `4️⃣`→`5️⃣`, Macronutrients `5️⃣`→`6️⃣`
- `README.md`, `README_sk.md`, `README_de.md` — book branding removed from title, description and feature list; body fat formulas documented; version badge bumped to 2.1.0. Attribution kept in the licence section only

### Files changed
- `web/index.html` — body fat section, dynamic title/meta, all text changes
- `web/languages/en_EN.po` + `.mo` — 169 entries (was 156)
- `web/languages/sk_SK.po` + `.mo` — 169 entries (was 156)
- `web/languages/de_DE.po` + `.mo` — 169 entries (was 156)
- `README.md`, `README_sk.md`, `README_de.md`, `CHANGELOG.md`

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

[Unreleased]: https://github.com/Jan-Salma/calorie-calculator/compare/v2.2.0...HEAD
[2.2.0]: https://github.com/Jan-Salma/calorie-calculator/compare/v2.1.1...v2.2.0
[2.1.1]: https://github.com/Jan-Salma/calorie-calculator/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/Jan-Salma/calorie-calculator/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.1.2...v2.0.0
[1.1.2]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Jan-Salma/calorie-calculator/releases/tag/v1.0.0
