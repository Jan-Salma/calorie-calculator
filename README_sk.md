# ⚡ Kalorická Kalkulačka

> Viacjazyčná kalkulačka dennej potreby kalórií a makronutrientov, postavená na vedeckých vzorcoch z knihy **Fitness Fibel 2.0** (Sjard Roscher).

[![Verzia](https://img.shields.io/badge/verzia-2.0.0-f59e0b)](https://github.com/Jan-Salma/calorie-calculator/releases/tag/v2.0.0)
[![Platforma](https://img.shields.io/badge/platforma-Web-blue)](#)
[![Licencia](https://img.shields.io/badge/licencia-Súkromná-red)](#)

**Čítaj v inom jazyku:** [English](README.md) · [Deutsch](README_de.md)

---

## 📋 Prehľad

Kompletný nástroj na výpočet dennej potreby kalórií a makronutrientov. Webová verzia nevyžaduje inštaláciu — stačí otvoriť `index.html` v prehliadači a raz pripojiť priečinok.

### Funkcie

- **Výpočet BMR** — Bazálny metabolizmus s pohlavie-špecifickými vzorcami (Fitness Fibel 2.0, str. 129)
  - Muži: `1,0 × hmotnosť (kg) × 24h`
  - Ženy: `0,9 × hmotnosť (kg) × 24h`
- **Systém PAL aktivít** — 7 typov aktivít s nastaviteľnou intenzitou, 24-hodinová validácia
- **3 cieľové režimy** — Budovanie svalov, Spaľovanie tuku, Body Rekomposícia
- **Dynamické minimum tuku** — posuvník fyzicky blokovaný pod biologickým minimom (40 g muži / 30 g ženy)
- **Nápovedy k cieľom** — vysvetlenia z knihy pre logiku makier každého cieľa
- **Nastaviteľné rozsahy** — makrá, minimá tuku, predvolené prebytky/deficity
- **Záznamy** — uložiť, načítať, upraviť a vymazať výpočty
- **Prenosné úložisko** — dáta uložené v priečinku `data/` vedľa aplikácie; funguje naprieč prehliadačmi a zariadeniami
- **Viacjazyčnosť** — SK, EN, DE; nový jazyk pridáš jedným `.po` súborom
- **Bez inštalácie** — jeden HTML súbor, funguje cez `file://`

---

## 🗂 Štruktúra repozitára

```
calorie-calculator/
├── web/
│   ├── index.html           ← Hlavná app (React 18, Babel, CSS)
│   ├── data/                ← Automaticky vytvorí app; osobné dáta, gitignored
│   │   ├── settings.json
│   │   └── records.json
│   ├── languages/           ← Prekladové súbory gettext (edituj v Poedit)
│   │   ├── en_EN.po / .mo   ← Angličtina (zdroj / šablóna)
│   │   ├── sk_SK.po / .mo   ← Slovenčina
│   │   └── de_DE.po / .mo   ← Nemčina
│   └── tools/
│       └── po2locale.py     ← Dev nástroj: kompiluje .po → .mo (vyžaduje polib)
├── README.md                ← EN (default)
├── README_sk.md             ← Tento súbor
├── README_de.md             ← Nemčina
└── CHANGELOG.md
```

---

## 🚀 Spustenie

1. Stiahni alebo naklonuj repozitár
2. Otvor `web/index.html` v Chrome alebo Edge
3. Klikni **„Pripojiť priečinok"** a vyber priečinok `web/` — aktivuje prenosné úložisko a jazykové súbory
4. Žiadny build, žiadny server, žiadna inštalácia

> Pri prvom otvorení je potrebné internetové pripojenie (fonty + React z CDN).  
> Pripojenie priečinka si prehliadač pamätá; pri ďalšej návšteve stačí jedno kliknutie na opätovné pripojenie.

---

## 📐 Výpočtové vzorce

### BMR
```
Muži:  BMR = 1,0 × hmotnosť (kg) × 24
Ženy:  BMR = 0,9 × hmotnosť (kg) × 24
```
Zdroj: Fitness Fibel 2.0, str. 129

### PAL
```
PAL = Σ(hodiny_aktivity × PAL_hodnota) / 24
```

### Celkový denný výdaj
```
Celkový výdaj = BMR × PAL
```

---

## 📝 Changelog

Pozri [CHANGELOG.md](CHANGELOG.md) pre kompletný zoznam zmien (v angličtine).

---

## 📄 Licencia

Súkromný projekt — všetky práva vyhradené.  
Vzorce a metodológia © Sjard Roscher — Fitness Fibel 2.0.
