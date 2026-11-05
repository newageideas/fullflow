# Full Flow Mains and Drains

Modern, mobile-first bilingual (English / Spanish) React application for Justin Moreno's residential plumbing business serving Stanislaus County.

## Architecture

- **Frontend**: React 19 + TypeScript + Vite + React Router.
- **Backend / API**: Express full-stack server mounted with Vite middlewares in development (`server.ts`).
- **Features**:
  - **Bilingual Interface**: One-click toggling between English and Spanish, respecting browser preferences and saving choices to localStorage.
  - **14-Point Home Safety Inspection**: Interactive overview and dedicated printable inspection checklist report (`/inspection`).
  - **Lead Capture & Booking**: Validation for 10-digit mobile phone numbers, honeypot spam protection, SMS consent management, in-memory/Vercel Blob storage, and fallback SMS links.
  - **Services & Price Transparency**: Service breakdown and clear sample price ranges with customer protection disclaimers.
  - **Local Service Coverage**: Stanislaus County service area list (Turlock, Modesto, Ceres, Keyes, Denair, Hughson, Delhi, Livingston, Atwater, Merced).
  - **Realtor / Landlord Inspection Package**: Escrow, listing, and multi-unit inspection information.
  - **Referral Program & QR Cards**: Printable 10-card referral sheet (`/qr`) with downloadable PNG/SVG codes.
  - **Mobile Sticky Bar**: Direct click-to-call and click-to-text quick actions on mobile viewports.

## Getting Started

```bash
# Run development server (port 3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Vercel production

Vite builds the static front end. Serverless handlers in `api/lead.js` and `api/chat.js` power the form and Flowie chat on Vercel (Express in `server.ts` stays for local `npm run dev` / `npm start`). `vercel.json` rewrites SPA paths like `/inspection` and `/qr` to `index.html`.
