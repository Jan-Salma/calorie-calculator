#!/usr/bin/env python3
"""
po2locale.py — Development tool: compile .po files to .mo binaries.

⚠️  FOR DEVELOPMENT USE ONLY — not required to run the application.

The app loads translations directly from web/languages/*.mo at runtime.
This script is only needed if you want to compile .po → .mo from the
command line instead of using Poedit's built-in export.

Normal workflow (recommended):
    1. Open a .po file in Poedit (e.g. web/languages/sk_SK.po)
    2. Translate strings
    3. File → Save  (Poedit auto-compiles .mo alongside .po)
    4. Done — app picks up the new .mo automatically on next folder connect

This script workflow (alternative, no Poedit needed):
    1. Edit web/languages/XX_XX.po in any text editor
    2. Run: python3 web/tools/po2locale.py
    3. Done — .mo files are generated next to each .po file

Requirements:
    pip install polib

To add a new language:
    1. Copy web/languages/en_EN.po → web/languages/XX_XX.po
    2. Translate all strings (msgstr fields) in Poedit or a text editor
    3. Optionally add meta.name, meta.nativeName, meta.flag keys for display
    4. Save and compile (.mo) — either via Poedit or this script
    5. Place XX_XX.mo in web/languages/ and reconnect the app folder
"""
import os, sys

try:
    import polib
except ImportError:
    print("ERROR: 'polib' not found. Install with: pip install polib")
    sys.exit(1)

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
LANG_DIR   = os.path.join(os.path.dirname(SCRIPT_DIR), "languages")

def main():
    if not os.path.exists(LANG_DIR):
        print(f"ERROR: languages/ directory not found: {LANG_DIR}")
        sys.exit(1)

    compiled = 0
    for fname in sorted(os.listdir(LANG_DIR)):
        if not fname.endswith('.po'):
            continue
        po_path = os.path.join(LANG_DIR, fname)
        mo_path = po_path.replace('.po', '.mo')
        try:
            po = polib.pofile(po_path, encoding='utf-8')
            po.save_as_mofile(mo_path)
            print(f"  ✅ {fname} → {os.path.basename(mo_path)}  ({len(po)} entries)")
            compiled += 1
        except Exception as e:
            print(f"  ❌ {fname}: {e}")

    if compiled == 0:
        print("No .po files found.")
    else:
        print(f"\nCompiled {compiled} file(s). Reconnect the app folder to load changes.")

if __name__ == '__main__':
    main()
