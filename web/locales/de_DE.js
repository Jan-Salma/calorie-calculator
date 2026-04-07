/**
 * Locale: Deutsch (de_DE)
 * Fitness Fibel 2.0 Kalorienrechner
 * Standard: gettext / .mo naming convention
 */
(function () {
  if (!window.LOCALES) window.LOCALES = {};
  window.LOCALES['de_DE'] = {
    name: 'Deutsch',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    pluralRule: function (n) { return n === 1 ? 'one' : 'many'; },
    keys: {
      // ── Anwendung ─────────────────────────────────────────────────────────
      'app.title':            'Kalorienrechner',
      'app.subtitle':         'Täglicher Kalorienbedarf und Makronährstoffverteilung · Fitness Fibel 2.0',
      'app.footer':           'Berechnungen basieren auf der Fitness Fibel 2.0 (Sjard Roscher) und dienen als Orientierungshilfe.',

      // ── Registerkarten ──────────────────────────────────────────────────────────
      'tab.calc':             '🧲 Rechner',
      'tab.records':          '📋 Aufzeichnungen',
      'tab.settings':         '⚙️ Einstellungen',

      // ── Sprachen ──────────────────────────────────────────────────────────────
      'lang.sk_SK':           'SK',
      'lang.en_EN':           'EN',
      'lang.de_DE':           'DE',

      // ── Bearbeitungsbanner ─────────────────────────────────────────────────────────
      'editing.banner':       'Aufzeichnung wird bearbeitet:',
      'editing.new':          '✕ Neue Berechnung',

      // ── Schritt 1 – Grundumsatz ───────────────────────────────────────────────────
      'step1.title':          '1️⃣ Grundumsatz (BMR)',
      'step1.weight':         'Körpergewicht (kg)',
      'step1.gender':         'Geschlecht',
      'step1.male':           '👨 Mann',
      'step1.female':         '👩 Frau',
      'step1.formula.male':   'Formel: 1,0 × {weight} kg × 24h',
      'step1.formula.female': 'Formel: 0,9 × {weight} kg × 24h',
      'step1.note.male':      'Männer: 1,0 kcal/kg/h · Fitness Fibel 2.0, S. 129',
      'step1.note.female':    'Frauen: 0,9 kcal/kg/h · Fitness Fibel 2.0, S. 129',
      'step1.unit':           'kcal / Tag',

      // ── Schritt 2 – PAL ─────────────────────────────────────────────────────────
      'step2.title':          '2️⃣ Tagesaktivitäten (PAL)',
      'step2.hours':          '{n} / 24 Stunden',
      'step2.hours.error':    'Die Summe der Stunden muss genau 24 ergeben',
      'step2.intensity':      'Intensität:',
      'step2.unit.h':         'h',
      'pal.sleep':            'Schlaf',
      'pal.lying':            'Ausschließlich sitzende / liegende Lebensweise',
      'pal.sedentary':        'Sitzende Tätigkeit mit wenig Aktivität',
      'pal.light':            'Sitzend + kurze Steh- / Gehätigkeiten',
      'pal.standing':         'Überwiegend stehende / gehende Tätigkeit',
      'pal.heavy':            'Körperlich schwere Arbeit / Leistungssport',
      'pal.sport':            'Sport / Training',
      'pal.leisure':          'Freizeit (leichte Aktivität)',

      // ── Schritt 3 – Gesamtbedarf ─────────────────────────────────────────────────────
      'step3.title':          '3️⃣ Gesamtenergiebedarf',
      'step3.pal':            'Durchschnittlicher PAL',
      'step3.bmr':            'Grundumsatz',
      'step3.total':          'Gesamtbedarf',
      'step3.unit':           'kcal / Tag',

      // ── Schritt 4 – Ziel ───────────────────────────────────────────────────────────
      'step4.title':          '4️⃣ Ziel',
      'goal.muscle':          'Muskelaufbau',
      'goal.fat_loss':        'Fettabbau',
      'goal.recomp':          'Body-Rekomposition',
      'goal.muscle.desc':     'Kalorienüberschuss',
      'goal.fat_loss.desc':   'Kaloriendefizit',
      'goal.recomp.desc':     'Erhaltungsbedarf',
      'calc.by_calories':     'Nach Kalorien (kcal)',
      'calc.by_weight':       'Nach Gewicht (kg)',
      'surplus.label':        'Kalorienüberschuss',
      'deficit.label':        'Kaloriendefizit',
      'weekly.gain':          'Gewichtszunahme pro Woche',
      'weekly.loss':          'Gewichtsabnahme pro Woche',
      'unit.kcal_day':        'kcal/Tag',
      'unit.kg_week':         'kg/Woche',
      'maintenance':          'Erhaltungsbedarf',
      'target.label':         'kcal / Tag — dein Zielwert',
      'recommend.muscle.m':   '📖 Fitness Fibel 2.0: Männer +300 kcal, max. 1–1,5 kg/Monat. Sauberer Aufbau ohne überschüssiges Fett.',
      'recommend.muscle.f':   '📖 Fitness Fibel 2.0: Frauen +200 kcal, max. 0,5–1 kg/Monat. Frauen bauen Muskeln langsamer auf.',
      'recommend.fat_loss':   '📖 Fitness Fibel 2.0: Ein Defizit von 300 kcal/Tag ist der ideale Einstieg. Ziel: 0,5–1 kg/Woche.',

      // ── Info – Makros (aus Fitness Fibel 2.0) ───────────────────────────────────────────
      'info.why_macros':         '📖 Warum diese Makros?',
      'info.muscle.title':       'Makros beim Muskelaufbau',
      'info.muscle.text':        'Der Körper kann natürlich max. ~300 kcal Muskelmasse pro Tag synthetisieren (S. 137). Ein größerer Überschuss = Fett, keine Muskeln. Ein kleiner, kontrollierter Überschuss ist optimal.',
      'info.muscle.protein':     '1,8–2,0 g/kg — stimuliert die Muskelproteinsynthese (MPS). Im Kalorienüberschuss reicht ein niedrigerer Proteinbedarf als bei der Diät.',
      'info.muscle.fat':         '25–30 % der Kalorien — ein höherer Fettanteil ist entscheidend für Testosteron und anabole Hormone, die für den Muskelaufbau notwendig sind.',
      'info.muscle.carbs':       'Verbleibende Kalorien — primärer Treibstoff für das Training, füllt Glykogen und ermöglicht Trainingsfortschritte.',
      'info.fat_loss.title':     'Makros beim Fettabbau',
      'info.fat_loss.text':      'Im Defizit verbrennt der Körper sowohl Fett als auch Muskeln. Erhöhtes Protein und Krafttraining sind die wichtigsten Mittel zum Muskelerhalt (S. 140).',
      'info.fat_loss.protein':   '2,2–2,4 g/kg — schützt die Muskelmasse stark beim Kaloriendefizit. Mehr Aminosäuren = weniger Katabolismus.',
      'info.fat_loss.fat':       '15–20 % der Kalorien — minimiert, aber nie unter das biologische Minimum. Fette sind unerlässlich für Hormone (Testosteron, Östrogen) und Vitamine A, D, E, K.',
      'info.fat_loss.carbs':     'Verbleibend — so hoch wie möglich halten, um Energie und Kraft im Training zu erhalten, was den Gesamtkalorienverbrauch erhöht.',
      'info.recomp.title':       'Makros bei der Body-Rekomposition',
      'info.recomp.text':        'Rekomposition = gleichzeitiger Muskelaufbau und Fettabbau beim Erhaltungsbedarf (S. 128). Am effektivsten bei Anfängern oder nach einer Trainingspause.',
      'info.recomp.protein':     '1,8–2,2 g/kg — der mittlere Bereich deckt beide Prozesse ab: Aufbau und Schutz der Muskeln. Höhere Zufuhr = bessere Ergebnisse.',
      'info.recomp.fat':         '20–25 % der Kalorien — die goldene Mitte für die hormonelle Balance ohne Einschränkung der Trainingsleistung.',
      'info.recomp.carbs':       'Verbleibend — ausreichende Glykogenversorgung für das Training. Ergebnisse sind langsamer als beim reinen Bulk/Cut, aber ohne Gewichtsschwankungen.',

      // ── Schritt 5 – Makronährstoffe ─────────────────────────────────────────────────────
      'step5.title':          '5️⃣ Makronährstoffe',
      'macro.protein_per_kg': 'Eiweis (g/kg)',
      'macro.fat_pct':        'Fett (% der Kalorien)',
      'macro.carbs_auto':     'Kohlenhydrate füllen die verbleibenden Kalorien automatisch auf.',
      'macro.protein':        'Eiweis',
      'macro.fat':            'Fett',
      'macro.carbs':          'Kohlenhydrate',
      'macro.grams':          'Gramm',
      'fat.at_min':           '⚠️ Fett ({g} g) ist auf dem biologischen Minimum für {gender} — unerlässlich für Hormone und Vitamine A, D, E, K.',
      'fat.warning':          '⚠️ Fettzufuhr ({g} g) unter dem Minimum für {gender} ({min} g) — Gefahr einer Hormonstpörung.',
      'gender.m':             'Männer',
      'gender.f':             'Frauen',

      // ── Regeln ────────────────────────────────────────────────────────────────
      'rules.title':          '📋 Wichtige Regeln',
      'rules.fiber':          'Ballaststoffe',
      'rules.fiber.value':    '{min}–{max} g/Tag',
      'rules.water':          'Wasser',
      'rules.water.value':    'min. {l} L/Tag',
      'rules.8020':           '80/20-Regel',
      'rules.8020.value':     '80 % Vollwertkost',

      // ── Speichern ───────────────────────────────────────────────────────────────
      'save.title':           '💾 Ergebnisse speichern',
      'save.update':          '🔄 Aktualisieren',
      'save.new':             '➕ Als neu speichern',
      'save.button':          '💾 Diese Berechnung speichern',
      'save.note':            'Aufzeichnungen werden lokal in diesem Browser gespeichert.',

      // ── Aufzeichnungen ────────────────────────────────────────────────────────────
      'records.empty.title':  'Keine Aufzeichnungen',
      'records.empty.desc':   'Berechne deinen Plan im Rechner und speichere ihn für die spätere Verwendung.',
      'records.go_calc':      '🧲 Zum Rechner',
      'records.count.one':    'Aufzeichnung',
      'records.count.few':    'Aufzeichnungen',
      'records.count.many':   'Aufzeichnungen',
      'record.bmr':           'Grundumsatz',
      'record.total':         'Gesamtbedarf',
      'record.target':        'Zielwert',
      'record.open':          '✏️ Im Rechner öffnen',
      'record.delete':        '🗑️ Löschen',
      'record.show':          '▼ Details anzeigen',
      'record.hide':          '▲ Details ausblenden',
      'record.editing_note':  'Diese Aufzeichnung wird gerade im Rechner bearbeitet',
      'record.delete_confirm':'Aufzeichnung „{name}“ löschen?',
      'record.unit.kg':       'kg',
      'record.male':          'Mann',
      'record.female':        'Frau',

      // ── Speichern-Modal ──────────────────────────────────────────────────────────────
      'modal.save.title':     '💾 Berechnung speichern',
      'modal.update.title':   '🔄 Aufzeichnung aktualisieren',
      'modal.save.note':      'Ergebnisse werden als neue Aufzeichnung gespeichert.',
      'modal.update.note':    'Diese Aufzeichnung wird überschrieben: „{name}“',
      'modal.name.label':     'Name der Aufzeichnung (optional)',
      'modal.save.btn':       'Speichern',
      'modal.update.btn':     'Aktualisieren',
      'modal.cancel':         'Abbrechen',

      // ── Einstellungen ────────────────────────────────────────────────────────────
      'settings.title':           '⚙️ Einstellungen',
      'settings.lang.label':      '🌍 Sprache',
      'settings.lang.note':       'Standardsprache der Anwendung',
      'settings.macros.title':    '⚖️ Makronährstoff-Bereiche',
      'settings.macros.note':     'Bereiche nach eigenen Vorlieben anpassen. Standardwerte aus Fitness Fibel 2.0 (S. 168–170).',
      'settings.protein.min':     'Eiweis min.',
      'settings.protein.max':     'Eiweis max.',
      'settings.fat.min':         'Fett min.',
      'settings.fat.max':         'Fett max.',
      'settings.protein.unit':    'g/kg',
      'settings.fat.unit':        '%',
      'settings.minfat.title':    '🛡️ Biologisches Fettminimum',
      'settings.minfat.note':     'Minimale tägliche Fettzufuhr unabhängig von der %-Einstellung. Eine niedrigere Zufuhr schädigt die Hormone.',
      'settings.minfat.male':     'Minimum für Männer',
      'settings.minfat.female':   'Minimum für Frauen',
      'settings.minfat.unit':     'g/Tag',
      'settings.surplus.title':   '📈 Standardwerte',
      'settings.surplus.muscle.m':'Standardüberschuss (Männer)',
      'settings.surplus.muscle.f':'Standardüberschuss (Frauen)',
      'settings.deficit.default': 'Standarddefizit',
      'settings.reset':           '🔄 Auf Standardwerte zurücksetzen (Fitness Fibel 2.0)',
      'settings.save':            'Einstellungen speichern',
      'settings.close':           'Schließen',
    }
  };
})();
