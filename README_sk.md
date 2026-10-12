# ⚡ Kalorická Kalkulačka

> Viacjazyčná kalkulačka dennej potreby kalórií, makronutrientov a telesného zloženia so sledovaním vývoja.

[![Verzia](https://img.shields.io/badge/verzia-2.3.0-f59e0b)](https://github.com/Jan-Salma/calorie-calculator/releases/tag/v2.3.0)
[![Platforma](https://img.shields.io/badge/platforma-Web-blue)](#)
[![Licencia](https://img.shields.io/badge/licencia-Súkromná-red)](#)

**Čítaj v inom jazyku:** [English](README.md) · [Deutsch](README_de.md)

---

## 📋 Prehľad

Kompletný nástroj na výpočet dennej potreby kalórií a makronutrientov. Webová verzia nevyžaduje inštaláciu — stačí otvoriť `index.html` v prehliadači a raz pripojiť priečinok.

### Funkcie

- **Výpočet BMR** — Bazálny metabolizmus s pohlavie-špecifickými vzorcami
  - Muži: `1,0 × hmotnosť (kg) × 24h`
  - Ženy: `0,9 × hmotnosť (kg) × 24h`
- **Telesné zloženie (tuk + svaly)** — polia sa riadia zvoleným cieľom:
  - 🔥 Spaľovanie tuku — tuk aktuálny → cieľový %, tuk na zhodenie, cieľová hmotnosť, trvanie a dátum dosiahnutia; svaly % → kg
  - 💪 Budovanie svalov — svaly aktuálne → cieľové %, svaly na pribratie, cieľová hmotnosť, trvanie a dátum dosiahnutia; tuk % → kg
  - 🔄 Rekompozícia — tuk aj svaly aktuálne → cieľové %, s nastaviteľným mesačným tempom
- **História meraní** — každé uloženie / aktualizácia zapíše dátum, čas, váhu, tuk a svaly; čiarové grafy (tuk vľavo, svaly vpravo, v kg alebo %) a rolovateľná tabuľka
- **Zámok úprav ✏️** — posuvníky a polia sú zamknuté, kým neťukneš na ✏️, takže sa pri scrollovaní na telefóne nedajú omylom posunúť
- **Systém PAL aktivít** — 7 typov aktivít s nastaviteľnou intenzitou, 24-hodinová validácia
- **3 cieľové režimy** — Budovanie svalov, Spaľovanie tuku, Body Rekomposícia
- **Dynamické minimum tuku** — posuvník fyzicky blokovaný pod biologickým minimom (40 g muži / 30 g ženy)
- **Nápovedy k cieľom** — vysvetlenie logiky makier pre každý cieľ
- **Nastaviteľné rozsahy** — makrá, minimá tuku, predvolené prebytky/deficity
- **Záznamy** — uložiť, načítať, upraviť a vymazať výpočty
- **Prenosné úložisko** — dáta uložené v priečinku `data/` vedľa aplikácie; funguje naprieč prehliadačmi a zariadeniami. Bez pripojeného priečinka (napr. na telefóne) sa dáta ukladajú v prehliadači
- **Viacjazyčnosť** — SK, EN, DE; nový jazyk pridáš jedným `.po` súborom
- **Bez inštalácie** — vopred preložené statické súbory, fungujú offline aj cez `file://`; žiadne CDN ani cudzie skripty
- **Zabezpečenie** — prísna Content-Security-Policy (žiadne inline skripty, žiadny `eval`, žiadne požiadavky mimo vlastnej domény), písma aj knižnice uložené s aplikáciou

---

## 🗂 Štruktúra repozitára

```
calorie-calculator/
├── web/
│   ├── index.html           ← Kostra stránky (načíta assets/app.css + assets/app.js)
│   ├── assets/              ← VÝSTUP PREKLADU (v gite): app.js, app.css, fonts/
│   ├── src/                 ← Zdroj: app.jsx (React 18), app.css — na server netreba
│   ├── data/                ← Automaticky vytvorí app; osobné dáta, gitignored
│   │   ├── settings.json
│   │   └── records.json
│   ├── languages/           ← Prekladové súbory gettext (edituj v Poedit)
│   │   ├── en_EN.po / .mo   ← Angličtina (zdroj / šablóna)
│   │   ├── sk_SK.po / .mo   ← Slovenčina
│   │   └── de_DE.po / .mo   ← Nemčina
│   └── tools/
│       └── po2locale.py     ← Dev nástroj: kompiluje .po → .mo (vyžaduje polib)
├── scripts/                 ← build.mjs (npm run build), serve.mjs (npm run serve), security-headers.mjs
├── package.json / package-lock.json ← Pevné verzie závislostí (React 18.2.0, esbuild, písma)
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
4. Na používanie netreba server ani inštaláciu — `web/assets/` je vopred preložené a uložené v gite

> Aplikácia nič nesťahuje z internetu: React, písma aj štýly sú v `web/assets/`.  
> Pripojenie priečinka si prehliadač pamätá; pri ďalšej návšteve stačí jedno kliknutie na opätovné pripojenie.

---

## 📐 Výpočtové vzorce

### BMR
```
Muži:  BMR = 1,0 × hmotnosť (kg) × 24
Ženy:  BMR = 0,9 × hmotnosť (kg) × 24
```

### Telesné zloženie
```
hmotnosť tuku  = hmotnosť × tuk % / 100
svalová hmota  = hmotnosť × svaly % / 100
ostatná hmota  = hmotnosť − tuk − svaly            (voda, kosti, orgány…)

Spaľovanie tuku   cieľová hmotnosť = (hmotnosť − tuk) / (1 − cieľový tuk %)
                  tuk na zhodenie  = hmotnosť − cieľová hmotnosť
                  dni              = tuk na zhodenie × 7 700 / deficit

Budovanie svalov  cieľová hmotnosť = (hmotnosť − svaly) / (1 − cieľové svaly %)
                  svaly na pribratie = cieľová hmotnosť − hmotnosť
                  dni                = svaly na pribratie × 7 700 / prebytok

Rekompozícia      cieľová hmotnosť = ostatná hmota / (1 − cieľový tuk % − cieľové svaly %)
                  tuk na zhodenie    = tuk − cieľová hmotnosť × cieľový tuk %
                  svaly na pribratie = cieľová hmotnosť × cieľové svaly % − svaly
                  dni = max(tuk / tempo tuku, svaly / tempo svalov) × 30,44
```
V každom režime sa považuje za nemennú tá hmota, na ktorú sa necieli. Rekompozícia prebieha na udržiavacom príjme, preto trvanie počíta s nastaviteľným mesačným tempom (predvolene +0,5 kg svalov / −1,0 kg tuku).

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
