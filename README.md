# Full Flow Mains and Drains — fullflow.vercel.app
Static, mobile-first bilingual (EN/ES) site for Justin Moreno's residential plumbing business.
- `index.html`, `styles.css`, `app.js` — main site (translations in app.js)
- `inspection.html` — printable 14-point report · `qr.html` — printable QR/referral cards · `privacy.html`
- `api/lead.js` — lead form endpoint; stores to private Vercel Blob when `BLOB_READ_WRITE_TOKEN` is set, else logs (masked) and the page offers text fallback
- `assets/qr-fullflow.{png,svg}` → https://fullflow.vercel.app/?src=qr
## Placeholders to confirm (marked on the site)
Prices (example ranges with X's), financing partner, license #, photo/bio, guarantee terms, referral reward, Google review link.
