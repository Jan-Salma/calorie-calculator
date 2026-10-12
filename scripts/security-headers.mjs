// Bezpečnostné HTTP hlavičky pre calorie.jan-salma.com.
//
// Jediný zdroj pravdy: lokálny server (scripts/serve.mjs) ich posiela pri teste
// a rovnaké hodnoty sa nastavujú v Cloudflare (Rules → Transform Rules →
// Modify Response Header) pre hostname calorie.jan-salma.com.
//
// Hlavičku nastavenú v Cloudflare nezmení ani niekto, kto by získal prístup
// k súborom na hostingu — preto sú tu, a nie v <meta> tagu v index.html.

const CSP = [
  "default-src 'none'",
  "script-src 'self'",          // len assets/app.js z vlastnej domény, žiadne inline ani eval
  "style-src 'self'",           // len assets/app.css (štýly z Reactu idú cez CSSOM, tie CSP neblokuje)
  "font-src 'self'",            // písma sú uložené s aplikáciou
  "img-src 'self' data:",       // data: = šípka v rozbaľovacom zozname jazykov (inline SVG v CSS)
  "connect-src 'self'",         // aplikácia zatiaľ nikam nekomunikuje
  "manifest-src 'self'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",     // stránku nemožno vložiť do cudzieho iframe (clickjacking)
  "object-src 'none'",
];

export function securityHeaders({ production = true } = {}) {
  return {
    'Content-Security-Policy': CSP.concat(production ? ['upgrade-insecure-requests'] : []).join('; '),
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'no-referrer',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
    // same-origin-allow-popups: pripravené na prihlásenie cez Google (otvára sa v popup okne)
    'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    'Cross-Origin-Resource-Policy': 'same-origin',
  };
}
