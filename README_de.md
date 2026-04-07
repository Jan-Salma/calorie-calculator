# ⚡ Kalorienrechner

> Ein mehrsprachiger, plattformübergreifender Kalorienrechner für den täglichen Energiebedarf und Makronährstoffe, basierend auf den wissenschaftlichen Formeln aus **Fitness Fibel 2.0** (Sjard Roscher).

[![Version](https://img.shields.io/badge/version-1.0.0-f59e0b)](https://github.com/Jan-Salma/calorie-calculator/releases/tag/v1.0.0)
[![Plattform](https://img.shields.io/badge/plattform-Web-blue)](#)
[![Lizenz](https://img.shields.io/badge/lizenz-Privat-red)](#)

**In anderer Sprache lesen:** [English](README.md) · [Slovenčina](README_sk.md)

---

## 📋 Übersicht

Ein vollständiges Werkzeug zur Berechnung des täglichen Kalorienbedarfs und der Makronährstoffe. Die Web-Version erfordert keine Installation — einfach `index.html` im Browser öffnen.

### Funktionen

- **Grundumsatz (BMR)** — geschlechtsspezifische Formeln (Fitness Fibel 2.0, S. 129)
  - Männer: `1,0 × Gewicht (kg) × 24h`
  - Frauen: `0,9 × Gewicht (kg) × 24h`
- **PAL-Aktivitätssystem** — 8 Aktivitätstypen mit einstellbarer Intensität, 24-Stunden-Validierung
- **3 Zielmodi** — Muskelaufbau, Fettabbau, Body-Rekomposition
- **Dynamisches Fettminimum** — Regler physisch blockiert unter biologischem Minimum (40 g Männer / 30 g Frauen)
- **Ziel-Info-Panels** — aufklappbare Erklärungen aus dem Buch zur Makro-Logik je Ziel
- **Konfigurierbare Einstellungen** — Makrobereiche, Fettminima, Standard-Surplus/Defizit
- **Aufzeichnungssystem** — Berechnungen speichern, laden, bearbeiten und löschen
- **Mehrsprachigkeit** — SK, EN, DE mit sofortigem Sprachwechsel in der Kopfzeile
- **Keine Installation** — eine HTML-Datei + Locale-Dateien, funktioniert via `file://`

---

## 🗂 Repository-Struktur

```
calorie-calculator/
├── web/
│   ├── index.html        ← Haupt-App (React 18, Babel, CSS)
│   └── locales/          ← Übersetzungen
│       ├── en_EN.js
│       ├── sk_SK.js
│       └── de_DE.js
├── android/              ← Android (geplant)
├── ios/                  ← iOS (geplant)
├── desktop/              ← Desktop (geplant)
├── README.md             ← EN (Standard)
├── README_sk.md          ← Slowakisch
├── README_de.md          ← Diese Datei
└── CHANGELOG.md
```

---

## 🚀 Erste Schritte (Web)

1. Repository herunterladen oder klonen
2. `web/index.html` in Chrome, Edge oder Firefox öffnen
3. Kein Build-Schritt, kein Server, keine Installation erforderlich

> Eine Internetverbindung wird beim ersten Öffnen benötigt (Schriften + React über CDN).

---

## 📐 Berechnungsformeln

### Grundumsatz (BMR)
```
Männer: BMR = 1,0 × Gewicht (kg) × 24
Frauen: BMR = 0,9 × Gewicht (kg) × 24
```

### PAL (Physical Activity Level)
```
PAL = Σ(Aktivitätsstunden × PAL-Wert) / 24
```

### Gesamtumsatz
```
Gesamtumsatz = BMR × PAL
```

---

## 📝 Changelog

Siehe [CHANGELOG.md](CHANGELOG.md) für eine vollständige Liste der Änderungen (auf Englisch).

---

## 📄 Lizenz

Privates Projekt — alle Rechte vorbehalten.  
Formeln und Methodik © Sjard Roscher — Fitness Fibel 2.0.
