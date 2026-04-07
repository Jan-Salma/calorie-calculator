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
- **Multilanguage support** — SK / EN / DE
  - Instant language switcher in header
  - Language stored in settings (persisted)
  - Slovak plural rules (`one` / `few` / `many`)
- **Nutrition rules panel** — daily fibre (30–60 g), water (weight/20 L), 80/20 rule
- **Responsive dark-mode UI** — DM Sans + Outfit fonts, amber/red/green accent system
- **Zero-install web app** — single HTML + locale JS files, no server or build step required

### Technical
- React 18 + Babel standalone (CDN) — no build pipeline
- Locale system: `web/locales/[lang].js`, self-registering to `window.LOCALES`
- Settings stored in `localStorage` key `ff2_settings_v1`
- Records stored in `localStorage` key `ff2_records_v2`

### Known Limitations
- Records and settings are bound to the browser and device (localStorage)
- Portable cross-device storage planned for v2.0.0

---

[Unreleased]: https://github.com/Jan-Salma/calorie-calculator/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Jan-Salma/calorie-calculator/releases/tag/v1.0.0
