// Lokálny testovací server pre web/ s rovnakými bezpečnostnými hlavičkami,
// aké beží na produkcii (bez upgrade-insecure-requests, lebo lokálne je http).
//   npm run serve   →   http://127.0.0.1:8080/
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { securityHeaders } from './security-headers.mjs';

const ROOT = resolve('web');
const PORT = Number(process.env.PORT) || 8080;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.woff2': 'font/woff2', '.json': 'application/json',
  '.mo': 'application/octet-stream', '.po': 'text/plain; charset=utf-8', '.ico': 'image/x-icon',
};

createServer(async (req, res) => {
  const headers = securityHeaders({ production: false });
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let file = normalize(join(ROOT, path));
    if (file !== ROOT && !file.startsWith(ROOT + sep)) throw Object.assign(new Error('forbidden'), { code: 403 });
    if (path.endsWith('/')) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { ...headers, 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch (e) {
    res.writeHead(e.code === 403 ? 403 : 404, { ...headers, 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(e.code === 403 ? 'Forbidden' : 'Not found');
  }
}).listen(PORT, '127.0.0.1', () => console.log(`http://127.0.0.1:${PORT}/`));
