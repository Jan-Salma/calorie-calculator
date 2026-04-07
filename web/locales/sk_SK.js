/**
 * Locale: Slovenčina (sk_SK)
 * Fitness Fibel 2.0 Kalorická Kalkulačka
 * Štandard: gettext / .mo naming convention
 */
(function () {
  if (!window.LOCALES) window.LOCALES = {};
  window.LOCALES['sk_SK'] = {
    name: 'Slovenčina',
    nativeName: 'Slovenčina',
    flag: '🇸🇰',
    pluralRule: function (n) { return n === 1 ? 'one' : n >= 2 && n <= 4 ? 'few' : 'many'; },
    keys: {
      // ── Aplikácia ──────────────────────────────────────────────────────────
      'app.title':            'Kalorická Kalkulačka',
      'app.subtitle':         'Výpočet dennej potreby kalórií a makronutrientov · Fitness Fibel 2.0',
      'app.footer':           'Výpočty vychádzajú z Fitness Fibel 2.0 (Sjard Roscher) a slúžia ako orientačný základ.',

      // ── Záložky ────────────────────────────────────────────────────────────
      'tab.calc':             '🧲 Kalkulačka',
      'tab.records':          '📋 Záznamy',
      'tab.settings':         '⚙️ Nastavenia',

      // ── Jazyky ──────────────────────────────────────────────────────────────
      'lang.sk_SK':           'SK',
      'lang.en_EN':           'EN',
      'lang.de_DE':           'DE',

      // ── Banner – editácia záznamu ──────────────────────────────────────────────────
      'editing.banner':       'Editujete záznam:',
      'editing.new':          '✕ Nový výpočet',

      // ── Krok 1 – BMR ──────────────────────────────────────────────────────
      'step1.title':          '1️⃣ Základný metabolizmus (BMR)',
      'step1.weight':         'Hmotnosť (kg)',
      'step1.gender':         'Pohlavie',
      'step1.male':           '👨 Muž',
      'step1.female':         '👩 Žena',
      'step1.formula.male':   'Vzorec: 1,0 × {weight} kg × 24h',
      'step1.formula.female': 'Vzorec: 0,9 × {weight} kg × 24h',
      'step1.note.male':      'Muži: 1,0 kcal/kg/h · Fitness Fibel 2.0, str. 129',
      'step1.note.female':    'Ženy: 0,9 kcal/kg/h · Fitness Fibel 2.0, str. 129',
      'step1.unit':           'kcal / deň',

      // ── Krok 2 – PAL ──────────────────────────────────────────────────────
      'step2.title':          '2️⃣ Denné aktivity (PAL)',
      'step2.hours':          '{n} / 24 hodín',
      'step2.hours.error':    'Súčet hodín musí byť presne 24',
      'step2.intensity':      'Intenzita:',
      'step2.unit.h':         'h',
      'pal.sleep':            'Spánok',
      'pal.lying':            'Výlučne sedavý / ležiaci životný štýl',
      'pal.sedentary':        'Sedavá činnosť s malou aktivitou',
      'pal.light':            'Sedavá + krátke státie / chôdza',
      'pal.standing':         'Prevаžne stojaca / chodiaca práca',
      'pal.heavy':            'Ťažká fyzická práca / výkonnostný šport',
      'pal.sport':            'Šport / tréning',
      'pal.leisure':          'Voľný čas (ľahká aktivita)',

      // ── Krok 3 – Celkový výdaj ────────────────────────────────────────────────
      'step3.title':          '3️⃣ Celkový denný výdaj',
      'step3.pal':            'Priemerнý PAL',
      'step3.bmr':            'BMR',
      'step3.total':          'Celkový výdaj',
      'step3.unit':           'kcal / deň',

      // ── Krok 4 – Cieľ ─────────────────────────────────────────────────────────
      'step4.title':          '4️⃣ Cieľ',
      'goal.muscle':          'Budovanie svalov',
      'goal.fat_loss':        'Spaľovanie tuku',
      'goal.recomp':          'Body Recompozícia',
      'goal.muscle.desc':     'Kalorický prebytok',
      'goal.fat_loss.desc':   'Kalorický deficit',
      'goal.recomp.desc':     'Udržiavací príjem',
      'calc.by_calories':     'Podľa kalórií (kcal)',
      'calc.by_weight':       'Podľa hmotnosti (kg)',
      'surplus.label':        'Kalorický prebytok',
      'deficit.label':        'Kalorický deficit',
      'weekly.gain':          'Prírastok za týždeň',
      'weekly.loss':          'Úbytok za týždeň',
      'unit.kcal_day':        'kcal/deň',
      'unit.kg_week':         'kg/týždeň',
      'maintenance':          'Udržiavací príjem',
      'target.label':         'kcal / deň — tvoj cieľový príjem',
      'recommend.muscle.m':   '📖 Fitness Fibel 2.0: Muži +300 kcal, max. 1–1,5 kg/mes. Čistý rast bez nadbutočného tuku.',
      'recommend.muscle.f':   '📖 Fitness Fibel 2.0: Ženy +200 kcal, max. 0,5–1 kg/mes. Ženy budujú svaly pomalšie.',
      'recommend.fat_loss':   '📖 Fitness Fibel 2.0: Deficit 300 kcal/deň je ideálny štart. Cieľ: 0,5–1 kg/týždeň.',

      // ── Nápoveda – makrá (zo Fitness Fibel 2.0) ───────────────────────────────────────────
      'info.why_macros':         '📖 Prečo tieto makrá?',
      'info.muscle.title':       'Makrá pri budovaní svalov',
      'info.muscle.text':        'Telo syntetizuje prirodzene max. ~300 kcal svalovej hmoty denne (str. 137). Väčší prebytok = tuk, nie svaly. Preto stačí malý, kontrolovaný prebytok.',
      'info.muscle.protein':     '1,8–2,0 g/kg — stimuluje syntézu svalových proteínov (MPS). V kalorickom prebytku stačí nižší príjem bielkovín ako pri diéte.',
      'info.muscle.fat':         '25–30% kalórií — vyšší podiel tukov je kľúčový pre testosterón a anabolické hormóny nevyhnutné pre rast svalov.',
      'info.muscle.carbs':       'Zostatok kalórií — primárne palivo pre tréning, dopĺňa glykógen a umožňuje progresiu záťaže.',
      'info.fat_loss.title':     'Makrá pri spaľovaní tuku',
      'info.fat_loss.text':      'Pri deficite telo siča aj po svaloch. Zvýšené bielkoviny a silový tréning sú hlavné nástroje ochrany svalovej hmoty (str. 140).',
      'info.fat_loss.protein':   '2,2–2,4 g/kg — výrazne chráni svalovú hmotu pri kalorickom deficite. Viac aminokyselín = menej katabolizmu.',
      'info.fat_loss.fat':       '15–20% kalórií — minimalizujeme, ale nie pod biologické minimum. Tuky sú nevyhnutné pre hormóny (testosterón, estrógen) a vitamíny A, D, E, K.',
      'info.fat_loss.carbs':     'Zostatok — udržiavame čo najviac pre zachovanie energie a sily v tréningu, čo zvyšuje celkový kalorický výdaj.',
      'info.recomp.title':       'Makrá pri rekompozícii tela',
      'info.recomp.text':        'Rekompozícia = súčasné budovanie svalov a spaľovanie tuku pri udržiavacom príjme (str. 128). Najúčinnejšia u začiatočníkov alebo ľudí po prestávke.',
      'info.recomp.protein':     '1,8–2,2 g/kg — stred rozsahu pokrýva oba procesy: budovanie aj ochranu svalov. Vyšší príjem = lepší výsledok.',
      'info.recomp.fat':         '20–25% kalórií — zlatý stred pre hormonálnu rovnováhu bez obmedzenía výkonu v tréningu.',
      'info.recomp.carbs':       'Zostatok — dostatečne zásobuje glykógen pre tréning. Výsledky sú pomalšie ako pri čistej mase/diéte, ale bez výkyvov hmotnosti.',

      // ── Krok 5 – Makronutrienty ─────────────────────────────────────────────────────
      'step5.title':          '5️⃣ Makronutrienty',
      'macro.protein_per_kg': 'Bielkoviny (g/kg)',
      'macro.fat_pct':        'Tuky (% z kalórií)',
      'macro.carbs_auto':     'Sachariды dopĺňajú zostatok kalórií automaticky.',
      'macro.protein':        'Bielkoviny',
      'macro.fat':            'Tuky',
      'macro.carbs':          'Sachariды',
      'macro.grams':          'gramov',
      'fat.at_min':           '⚠️ Tuky ({g} g) sú nastavené na biologické minimum pre {gender} — nevyhnutné pre hormóny a vitamíny A, D, E, K.',
      'fat.warning':          '⚠️ Príjem tukov ({g} g) pod minimom pre {gender} ({min} g) — hrozí hormónalna nerovnováha.',
      'gender.m':             'mužov',
      'gender.f':             'ženy',

      // ── Pravidlá ──────────────────────────────────────────────────────────────
      'rules.title':          '📋 Dôležité pravidlá',
      'rules.fiber':          'Vláknina',
      'rules.fiber.value':    '{min}–{max} g/deň',
      'rules.water':          'Voda',
      'rules.water.value':    'min. {l} l/deň',
      'rules.8020':           'Pravidlo 80/20',
      'rules.8020.value':     '80 % celá strava',

      // ── Uložiť ───────────────────────────────────────────────────────────────
      'save.title':           '💾 Uložiť výsledky',
      'save.update':          '🔄 Aktualizovať',
      'save.new':             '➕ Uložiť ako nový',
      'save.button':          '💾 Uložiť tento výpočet',
      'save.note':            'Záznamy sa ukladajú lokálne v tomto prehliadači.',

      // ── Záznamy ────────────────────────────────────────────────────────────
      'records.empty.title':  'Žiadne záznamy',
      'records.empty.desc':   'Vypočítaj si plán v kalkulačke a ulož ho pre budúce použitie.',
      'records.go_calc':      '🧲 Prejsť do kalkulačky',
      'records.count.one':    'záznam',
      'records.count.few':    'záznamy',
      'records.count.many':   'záznamov',
      'record.bmr':           'BMR',
      'record.total':         'Celkový výdaj',
      'record.target':        'Cieľový príjem',
      'record.open':          '✏️ Otvoriť v kalkulačke',
      'record.delete':        '🗑️ Vymažať',
      'record.show':          '▼ Zobraziť detail',
      'record.hide':          '▲ Skryť detail',
      'record.editing_note':  'Tento záznam práve editujete v kalkulačke',
      'record.delete_confirm':'Vymažať záznam „{name}“?',
      'record.unit.kg':       'kg',
      'record.male':          'Muž',
      'record.female':        'Žena',

      // ── Modál – Uložiť ────────────────────────────────────────────────────────────
      'modal.save.title':     '💾 Uložiť výpočet',
      'modal.update.title':   '🔄 Aktualizovať záznam',
      'modal.save.note':      'Výsledky budú uložené ako nový záznam.',
      'modal.update.note':    'Prepíše sa záznam: „{name}“',
      'modal.name.label':     'Názov záznamu (volitelné)',
      'modal.save.btn':       'Uložiť',
      'modal.update.btn':     'Aktualizovať',
      'modal.cancel':         'Zrušiť',

      // ── Nastavenia ──────────────────────────────────────────────────────────────
      'settings.title':           '⚙️ Nastavenia',
      'settings.lang.label':      '🌍 Jazyk',
      'settings.lang.note':       'Predvolený jazyk aplikácie',
      'settings.macros.title':    '⚖️ Rozsahy makronutrientov',
      'settings.macros.note':     'Upravte rozsahy podľa vlastných preferencií. Predvolené hodnoty sú z Fitness Fibel 2.0 (str. 168–170).',
      'settings.protein.min':     'Bielkoviny min.',
      'settings.protein.max':     'Bielkoviny max.',
      'settings.fat.min':         'Tuky min.',
      'settings.fat.max':         'Tuky max.',
      'settings.protein.unit':    'g/kg',
      'settings.fat.unit':        '%',
      'settings.minfat.title':    '🛡️ Biologické minimum tukov',
      'settings.minfat.note':     'Minimálny denný príjem tukov bez ohľadu na % nastavenie. Nižší príjem poškodzuje hormóny.',
      'settings.minfat.male':     'Minimum pre mužov',
      'settings.minfat.female':   'Minimum pre ženy',
      'settings.minfat.unit':     'g/deň',
      'settings.surplus.title':   '📈 Predvolené hodnoty',
      'settings.surplus.muscle.m':'Predvolený prebytok (muži)',
      'settings.surplus.muscle.f':'Predvolený prebytok (ženy)',
      'settings.deficit.default': 'Predvolený deficit',
      'settings.reset':           '🔄 Obnoviť predvolené (Fitness Fibel 2.0)',
      'settings.save':            'Uložiť nastavenia',
      'settings.close':           'Zatvoriť',
    }
  };
})();
