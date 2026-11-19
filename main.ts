// gta6-meme-x-01 — program entri (Node 22, hanya standard library).
// Entrinya adalah postingan X itu sendiri: meme dibuat oleh agen, diposting di X
// dari akun publik, dan POST.json menunjuk ke alamat postingan itu. Program ini
// hanya menyalin POST.json dari repositori ke /output, tempat gate membacanya.
// Jalankan lokal: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const post = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');

// Fail loudly on a malformed POST.json instead of copying garbage to /output:
// the gate reads the url field, so it must be a JSON object with a string url.
let parsed: unknown;
try {
  parsed = JSON.parse(post);
} catch {
  console.error('POST.json is not valid JSON');
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'POST.json'), post);
console.log('POST.json copied to', join(OUTPUT_DIR, 'POST.json'));
