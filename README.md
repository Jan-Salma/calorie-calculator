# ⚡ Kalorická Kalkulačka

Komplexná kalkulačka dennej potreby kalórií a makronutrientov.

## 📋 Popis

Webová aplikácia na výpočet:
- **BMR** (bazálny metabolizmus) na základe hmotnosti
- **PAL** (Physical Activity Level) s detailným rozpisom denných aktivít
- **Celkového denného výdaja** (Gesamtbedarf = BMR × PAL)
- **Cieľového kalorického príjmu** pre 3 režimy:
  - 💪 Budovanie svalov (kalorický prebytok)
  - 🔥 Spaľovanie tuku (kalorický deficit)
  - 🔄 Body Recompozícia (udržiavací príjem)
- **Makronutrientov** (bielkoviny, tuky, sacharidy) s nastaviteľnými rozsahmi

## 🗂 Štruktúra repozitára

```
calorie-calculator/
├── web/              ← Web HTML verzia (aktuálna)
│   └── index.html
├── android/          ← Android verzia (pripravené)
├── ios/              ← iOS verzia (pripravené)
├── desktop/          ← Desktop verzia (pripravené)
├── CHANGELOG.md
└── README.md
```

## 🚀 Spustenie (Web)

1. Otvor `web/index.html` v prehliadači (Chrome, Firefox, Edge)
2. Hotovo — žiadna inštalácia, žiadny build

> Potrebuješ internet pri prvom otvorení (fonty + React z CDN).

## ⚙️ Technológie

| Platforma | Stav | Tech Stack |
|-----------|------|------------|
| Web | ✅ v1.0.0 | React 18, Babel, vanilla CSS |
| Android | 🔜 Plánované | — |
| iOS | 🔜 Plánované | — |
| Desktop | 🔜 Plánované | — |

## 📐 Výpočtové vzorce

### BMR (Grundumsatz)
```
BMR = 1.0 kcal × hmotnosť (kg) × 24 h
```

### PAL (Physical Activity Level)
```
PAL = Σ(hodiny_aktivity × PAL_aktivity) / 24
```

### Celkový denný výdaj
```
Gesamtbedarf = BMR × PAL
```

### Makronutrienty
- **Bielkoviny:** 1.8–2.4 g/kg (podľa cieľa)
- **Tuky:** 15–30 % z celkových kalórií (podľa cieľa)
- **Sacharidy:** zvyšok kalórií

## 📝 Verzie

Pozri [CHANGELOG.md](CHANGELOG.md) pre kompletný zoznam zmien.

## 📄 Licencia

Súkromný projekt — všetky práva vyhradené.
