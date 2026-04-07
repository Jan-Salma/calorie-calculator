# ⚡ Calorie Calculator

> A multilingual, cross-platform calorie and macronutrient calculator based on **Fitness Fibel 2.0** (Sjard Roscher).

[![Version](https://img.shields.io/badge/version-1.0.0-f59e0b)](https://github.com/Jan-Salma/calorie-calculator/releases/tag/v1.0.0)
[![Platform](https://img.shields.io/badge/platform-Web-blue)](#)
[![License](https://img.shields.io/badge/license-Private-red)](#)

**Read this in other languages:** [Slovenčina](README_sk.md) · [Deutsch](README_de.md)

---

## 📋 Overview

A complete tool for calculating daily calorie requirements and macronutrients, built on the scientific formulas from Fitness Fibel 2.0. Available as a zero-install web app — just open `index.html` in a browser.

### Key Features

- **BMR calculation** — Basal Metabolic Rate with gender-specific formulas (Fitness Fibel 2.0, p. 129)
  - Men: `1.0 × weight (kg) × 24h`
  - Women: `0.9 × weight (kg) × 24h`
- **PAL activity system** — 8 activity types with adjustable intensity, strict 24-hour validation
- **3 goal modes** — Muscle Gain, Fat Loss, Body Recomposition
- **Dynamic fat minimum** — slider physically blocked below biological minimum (40 g men / 30 g women)
- **Goal info panels** — collapsible explanations from the book for each goal's macro logic
- **Configurable settings** — adjust macro ranges, fat minimums, and default surplus/deficit per goal
- **Records system** — save, load, edit, and delete calculations
- **Multilanguage** — Slovak (SK), English (EN), German (DE) with instant header switcher
- **Zero-install** — single HTML file + locale files, works via `file://` protocol

---

## 🗂 Repository Structure

```
calorie-calculator/
├── web/                  ← Web app (current active platform)
│   ├── index.html        ← Main app (React 18, Babel, vanilla CSS)
│   └── locales/          ← Translation files
│       ├── en_EN.js
│       ├── sk_SK.js
│       └── de_DE.js
├── android/              ← Android (planned)
├── ios/                  ← iOS (planned)
├── desktop/              ← Desktop / Electron (planned)
├── README.md             ← This file (EN)
├── README_sk.md          ← Slovak
├── README_de.md          ← German
└── CHANGELOG.md
```

---

## 🚀 Getting Started (Web)

1. Download or clone the repository
2. Open `web/index.html` in Chrome, Edge, or Firefox
3. No build step, no server, no installation required

> **Note:** An internet connection is required on first open to load fonts and React from CDN.

---

## ⚙️ Tech Stack

| Platform | Status     | Stack                          |
|----------|------------|--------------------------------|
| Web      | ✅ v1.0.0  | React 18, Babel standalone, vanilla CSS |
| Android  | 🔜 Planned | —                              |
| iOS      | 🔜 Planned | —                              |
| Desktop  | 🔜 Planned | —                              |

---

## 📐 Calculation Formulas

### BMR (Basal Metabolic Rate)
```
Men:   BMR = 1.0 × weight (kg) × 24
Women: BMR = 0.9 × weight (kg) × 24
```
Source: Fitness Fibel 2.0, p. 129

### PAL (Physical Activity Level)
```
PAL = Σ(activity_hours × PAL_value) / 24
```

### Total Daily Energy Expenditure
```
TDEE = BMR × PAL
```

### Macronutrients (defaults per Fitness Fibel 2.0)

| Goal          | Protein       | Fat     | Carbs    |
|---------------|---------------|---------|----------|
| Muscle Gain   | 1.8–2.0 g/kg  | 25–30 % | remainder |
| Fat Loss      | 2.2–2.4 g/kg  | 15–20 % | remainder |
| Recomposition | 1.8–2.2 g/kg  | 20–25 % | remainder |

---

## 🌐 Multilanguage

The app uses a gettext-inspired locale system. Each language is a self-contained JS file in `web/locales/`:

```
web/locales/
├── en_EN.js    ← English (default)
├── sk_SK.js    ← Slovak
└── de_DE.js    ← German
```

To add a new language, create `web/locales/es_ES.js` following the same structure and add a `<script src="locales/es_ES.js">` tag in `index.html`.

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a full list of changes.

---

## 📄 License

Private project — all rights reserved.  
Formulas and methodology © Sjard Roscher — Fitness Fibel 2.0.
