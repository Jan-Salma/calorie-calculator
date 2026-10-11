# ⚡ Calorie Calculator

> A multilingual calorie, macronutrient and body-composition calculator with progress tracking.

[![Version](https://img.shields.io/badge/version-2.2.0-f59e0b)](https://github.com/Jan-Salma/calorie-calculator/releases/tag/v2.2.0)
[![Platform](https://img.shields.io/badge/platform-Web-blue)](#)
[![License](https://img.shields.io/badge/license-Private-red)](#)

**Read this in other languages:** [Slovenčina](README_sk.md) · [Deutsch](README_de.md)

---

## 📋 Overview

A complete tool for calculating daily calorie requirements and macronutrients. Zero-install web app — open `index.html` in a browser and connect your folder once.

### Key Features

- **BMR calculation** — Basal Metabolic Rate with gender-specific formulas
  - Men: `1.0 × weight (kg) × 24h`
  - Women: `0.9 × weight (kg) × 24h`
- **Body composition (fat + muscle)** — fields follow the selected goal:
  - 🔥 Fat Loss — fat current → target %, fat to lose, target weight, duration and target date; muscle % → kg
  - 💪 Muscle Building — muscle current → target %, muscle to gain, target weight, duration and target date; fat % → kg
  - 🔄 Recomposition — both fat and muscle current → target %, with an adjustable monthly pace
- **Progress history** — every save / update records date, time, weight, fat and muscle; line charts (fat left, muscle right, kg or %) and a scrollable table
- **Edit lock ✏️** — sliders and fields are locked until you tap ✏️, so scrolling on a phone never moves them by accident
- **PAL activity system** — 7 activity types with adjustable intensity, strict 24-hour validation
- **3 goal modes** — Muscle Gain, Fat Loss, Body Recomposition
- **Dynamic fat minimum** — slider physically blocked below biological minimum (40 g men / 30 g women)
- **Goal info panels** — collapsible explanations of each goal's macro logic
- **Configurable settings** — adjust macro ranges, fat minimums, and default surplus/deficit per goal
- **Records system** — save, load, edit, and delete calculations
- **Portable storage** — data saved in `data/` folder next to the app; works across browsers and devices. Without a connected folder (e.g. on a phone) data is saved in the browser
- **Multilanguage** — Slovak (SK), English (EN), German (DE); add any language by dropping a `.po` file
- **Zero-install** — single HTML file, works via `file://` protocol

---

## 🗂 Repository Structure

```
calorie-calculator/
├── web/
│   ├── index.html           ← Main app (React 18, Babel, vanilla CSS)
│   ├── data/                ← Auto-created by app; personal data, gitignored
│   │   ├── settings.json
│   │   └── records.json
│   ├── languages/           ← Gettext translation files (edit in Poedit)
│   │   ├── en_EN.po / .mo   ← English (source / template)
│   │   ├── sk_SK.po / .mo   ← Slovak
│   │   └── de_DE.po / .mo   ← German
│   └── tools/
│       └── po2locale.py     ← Dev tool: compiles .po → .mo (requires polib)
├── README.md                ← This file (EN)
├── README_sk.md             ← Slovak
├── README_de.md             ← German
└── CHANGELOG.md
```

---

## 🚀 Getting Started

1. Download or clone the repository
2. Open `web/index.html` in Chrome or Edge
3. Click **"Connect folder"** and select the `web/` directory — enables portable storage and language files
4. No build step, no server, no installation required

> **Note:** An internet connection is required on first open to load fonts and React from CDN.  
> The folder connection is remembered per browser; a one-click reconnect appears on return visits if permission expired.

---

## 📐 Calculation Formulas

### BMR (Basal Metabolic Rate)
```
Men:   BMR = 1.0 × weight (kg) × 24
Women: BMR = 0.9 × weight (kg) × 24
```

### Body Composition
```
fat mass    = weight × fat % / 100
muscle mass = weight × muscle % / 100
rest        = weight − fat mass − muscle mass        (water, bone, organs…)

Fat Loss        target weight = (weight − fat mass) / (1 − target fat %)
                fat to lose   = weight − target weight
                days          = fat to lose × 7,700 / deficit

Muscle Building target weight = (weight − muscle mass) / (1 − target muscle %)
                muscle to gain = target weight − weight
                days           = muscle to gain × 7,700 / surplus

Recomposition   target weight = rest / (1 − target fat % − target muscle %)
                fat to lose    = fat mass − target weight × target fat %
                muscle to gain = target weight × target muscle % − muscle mass
                days           = max(fat to lose / fat pace, muscle to gain / muscle pace) × 30.44
```
In each mode the mass that is not targeted is assumed to stay unchanged. Recomposition runs at maintenance intake, so its duration uses the adjustable monthly pace (default +0.5 kg muscle / −1.0 kg fat).

### PAL (Physical Activity Level)
```
PAL = Σ(activity_hours × PAL_value) / 24
```

### Total Daily Energy Expenditure
```
TDEE = BMR × PAL
```

### Macronutrients (default ranges)

| Goal          | Protein       | Fat     | Carbs     |
|---------------|---------------|---------|-----------|
| Muscle Gain   | 1.8–2.0 g/kg  | 25–30 % | remainder |
| Fat Loss      | 2.2–2.4 g/kg  | 15–20 % | remainder |
| Recomposition | 1.8–2.2 g/kg  | 20–25 % | remainder |

---

## 🌐 Multilanguage

The app uses GNU gettext (`.po` / `.mo` files). Source files are in `web/languages/` and are edited in [Poedit](https://poedit.net/).

**To add a new language:**
1. Open `en_EN.po` in Poedit → create new translation → save as `xx_XX.po` + `xx_XX.mo` in `web/languages/`
2. Reconnect the app folder — the new language appears automatically in the dropdown

```
web/languages/
├── en_EN.po / .mo   ← English (source, use as template)
├── sk_SK.po / .mo   ← Slovak
└── de_DE.po / .mo   ← German
```

> Both `.po` (source, edit in Poedit) and `.mo` (compiled binary, read by the app) are tracked in git. `po2locale.py` is a dev tool for recompiling `.mo` from `.po` when translations change.

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a full list of changes.

---

## 📄 License

Private project — all rights reserved.  
Formulas and methodology © Sjard Roscher — Fitness Fibel 2.0.
