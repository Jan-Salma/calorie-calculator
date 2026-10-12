// Preklad aplikácie vopred: web/src → web/assets.
//
// Výsledok nepotrebuje žiadny CDN ani prekladač v prehliadači (Babel), takže
// prísna Content-Security-Policy môže zakázať inline skripty aj eval().
//   npm run build
import * as esbuild from 'esbuild';
import { rmSync, readFileSync } from 'node:fs';

const OUT = 'web/assets';
rmSync(OUT, { recursive: true, force: true });

const result = await esbuild.build({
  entryPoints: ['web/src/app.jsx', 'web/src/app.css'],
  outdir: OUT,
  bundle: true,
  minify: true,
  format: 'iife',                 // obyčajný <script>, funguje aj pri otvorení cez file://
  target: ['es2020'],
  jsx: 'transform',
  charset: 'utf8',
  legalComments: 'eof',           // licenčné poznámky Reactu ostávajú v súbore
  loader: { '.woff2': 'file' },
  assetNames: 'fonts/[name]-[hash]',
  define: { 'process.env.NODE_ENV': '"production"' },
  metafile: true,
  logLevel: 'warning',
});

for (const [file, info] of Object.entries(result.metafile.outputs)) {
  console.log(`${file.padEnd(48)} ${(info.bytes / 1024).toFixed(1).padStart(7)} kB`);
}

// Kontrola: prísna CSP zakazuje eval() — výsledok ho nesmie obsahovať.
const js = readFileSync(`${OUT}/app.js`, 'utf8');
if (/\beval\s*\(|new Function\s*\(/.test(js)) {
  console.error('CHYBA: assets/app.js obsahuje eval() alebo new Function() — prísna CSP by ho zablokovala.');
  process.exit(1);
}
console.log('OK: bez eval() a new Function()');
