# ⚡ Kalorienrechner

> Ein mehrsprachiger Rechner für täglichen Energiebedarf, Makronährstoffe und Körperzusammensetzung mit Verlaufsaufzeichnung.

[![Version](https://img.shields.io/badge/version-2.2.0-f59e0b)](https://github.com/Jan-Salma/calorie-calculator/releases/tag/v2.2.0)
[![Plattform](https://img.shields.io/badge/plattform-Web-blue)](#)
[![Lizenz](https://img.shields.io/badge/lizenz-Privat-red)](#)

**In anderer Sprache lesen:** [English](README.md) · [Slovenčina](README_sk.md)

---

## 📋 Übersicht

Ein vollständiges Werkzeug zur Berechnung des täglichen Kalorienbedarfs und der Makronährstoffe. Die Web-Version erfordert keine Installation — einfach `index.html` im Browser öffnen und einmalig den Ordner verbinden.

### Funktionen

- **Grundumsatz (BMR)** — geschlechtsspezifische Formeln
  - Männer: `1,0 × Gewicht (kg) × 24h`
  - Frauen: `0,9 × Gewicht (kg) × 24h`
- **Körperzusammensetzung (Fett + Muskeln)** — die Felder richten sich nach dem gewählten Ziel:
  - 🔥 Fettabbau — Fett aktuell → Ziel %, abzubauendes Fett, Zielgewicht, Dauer und Zieldatum; Muskeln % → kg
  - 💪 Muskelaufbau — Muskeln aktuell → Ziel %, aufzubauende Muskeln, Zielgewicht, Dauer und Zieldatum; Fett % → kg
  - 🔄 Rekomposition — Fett und Muskeln aktuell → Ziel %, mit einstellbarem Monatstempo
- **Messverlauf** — jedes Speichern / Aktualisieren speichert Datum, Uhrzeit, Gewicht, Fett und Muskeln; Liniendiagramme (Fett links, Muskeln rechts, in kg oder %) und eine scrollbare Tabelle
- **Bearbeitungssperre ✏️** — Regler und Felder sind gesperrt, bis du ✏️ tippst, damit sie beim Scrollen am Handy nicht versehentlich verschoben werden
- **PAL-Aktivitätssystem** — 7 Aktivitätstypen mit einstellbarer Intensität, 24-Stunden-Validierung
- **3 Zielmodi** — Muskelaufbau, Fettabbau, Body-Rekomposition
- **Dynamisches Fettminimum** — Regler physisch blockiert unter biologischem Minimum (40 g Männer / 30 g Frauen)
- **Ziel-Info-Panels** — aufklappbare Erklärungen zur Makro-Logik je Ziel
- **Konfigurierbare Einstellungen** — Makrobereiche, Fettminima, Standard-Surplus/Defizit
- **Aufzeichnungssystem** — Berechnungen speichern, laden, bearbeiten und löschen
- **Portabler Speicher** — Daten im `data/`-Ordner neben der App gespeichert; funktioniert geräte- und browserübergreifend. Ohne verbundenen Ordner (z. B. am Handy) werden die Daten im Browser gespeichert
- **Mehrsprachigkeit** — SK, EN, DE; neue Sprache mit einer einzigen `.po`-Datei hinzufügen
- **Keine Installation** — eine HTML-Datei, funktioniert via `file://`

---

## 🗂 Repository-Struktur

```
calorie-calculator/
├── web/
│   ├── index.html           ← Haupt-App (React 18, Babel, CSS)
│   ├── data/                ← Automatisch von der App erstellt; persönliche Daten, gitignored
│   │   ├── settings.json
│   │   └── records.json
│   ├── languages/           ← Gettext-Übersetzungsdateien (bearbeiten in Poedit)
│   │   ├── en_EN.po / .mo   ← Englisch (Quelle / Vorlage)
│   │   ├── sk_SK.po / .mo   ← Slowakisch
│   │   └── de_DE.po / .mo   ← Deutsch
│   └── tools/
│       └── po2locale.py     ← Dev-Tool: kompiliert .po → .mo (benötigt polib)
├── README.md                ← EN (Standard)
├── README_sk.md             ← Slowakisch
├── README_de.md             ← Diese Datei
└── CHANGELOG.md
```

---

## 🚀 Erste Schritte

1. Repository herunterladen oder klonen
2. `web/index.html` in Chrome oder Edge öffnen
3. **„Ordner verbinden"** klicken und den `web/`-Ordner auswählen — aktiviert portablen Speicher und Sprachdateien
4. Kein Build-Schritt, kein Server, keine Installation erforderlich

> Eine Internetverbindung wird beim ersten Öffnen benötigt (Schriften + React über CDN).  
> Die Ordnerverbindung wird pro Browser gespeichert; bei erneutem Besuch genügt ein Klick zum Wiederverbinden.

---

## 📐 Berechnungsformeln

### Grundumsatz (BMR)
```
Männer: BMR = 1,0 × Gewicht (kg) × 24
Frauen: BMR = 0,9 × Gewicht (kg) × 24
```

### Körperzusammensetzung
```
Fettmasse    = Gewicht × Fett % / 100
Muskelmasse  = Gewicht × Muskeln % / 100
Rest         = Gewicht − Fett − Muskeln              (Wasser, Knochen, Organe …)

Fettabbau     Zielgewicht = (Gewicht − Fett) / (1 − Ziel-Fett %)
              abzubauendes Fett = Gewicht − Zielgewicht
              Tage = Fett × 7.700 / Defizit

Muskelaufbau  Zielgewicht = (Gewicht − Muskeln) / (1 − Ziel-Muskeln %)
              aufzubauende Muskeln = Zielgewicht − Gewicht
              Tage = Muskeln × 7.700 / Überschuss

Rekomposition Zielgewicht = Rest / (1 − Ziel-Fett % − Ziel-Muskeln %)
              abzubauendes Fett    = Fett − Zielgewicht × Ziel-Fett %
              aufzubauende Muskeln = Zielgewicht × Ziel-Muskeln % − Muskeln
              Tage = max(Fett / Fetttempo, Muskeln / Muskeltempo) × 30,44
```
In jedem Modus bleibt die nicht angezielte Masse unverändert. Die Rekomposition läuft beim Erhaltungsbedarf, daher nutzt die Dauer das einstellbare Monatstempo (Standard +0,5 kg Muskeln / −1,0 kg Fett).

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
