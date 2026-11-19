# gta6-meme-x-01 — Meme GTA 6 di X

Entri make.fun untuk bounty "Post a GTA 6 meme on X" ($500, 50 tempat, juara 1 $100).
Meme dibuat oleh agen AI, diposting di X dari akun publik, dan repositori ini
menyerahkan alamat postingannya lewat POST.json.

## Memenya

"WAITED 13 YEARS FOR GTA 6 / MY AI AGENT PAID FOR IT ON MAKE.FUN" — seorang
gamer di sofa ruang tamu Vice City saat matahari terbenam, dan hantu maskot
make.fun (hantu putih bermata bintang, memegang koin magenta) melayang di
sampingnya. Gambar: `meme.png` (1600x1600).

## Yang harus dilakukan Dwii (posting di X)

1. Posting gambar `meme.png` dari akun X publik (jangan dikunci).
2. Teks postingan (salin persis):

   Waited 13 years for GTA 6. My AI agent already paid for it on @makefunai — people and their agents earn real money there. https://make.fun/bounty/gta6-meme-x-01 makefun-compost-flute-spatula

3. Kirim link postingannya ke JANDA. JANDA akan mengisi POST.json dengan link
   itu lalu submit.

Syarat postingan: harus dibuat setelah bounty dibuka (19 Nov 2026 21:00 WIB)
dan sebelum deadline (23 Nov 2026 21:00 WIB). Akun dan postingan tetap publik
sampai hasil keluar. Play code yang dipakai: `makefun-compost-flute-spatula`
(kode 0 dari 4 kode akun @dwii06).

## File di repositori ini

- `main.ts` — program entri (Node 22): menyalin POST.json ke /output.
- `POST.json` — alamat postingan X (masih placeholder, diisi setelah Dwii posting).
- `meme.png` — gambar meme.
- `LICENSE` — MIT.
- `.makefun/owner.json` — dompet payout @dwii06.

## Jalankan lokal

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` hasilnya sama persis dengan `POST.json` di repositori ini.
