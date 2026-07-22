# Fried Chicken Stall — Site Spec

## Business context
- Small fried chicken business, roadside stall, Malaysia.
- No rent, 1 employee.
- Cashless — DuitNow QR only, no cash handling.
- Licensing (not part of the site build, just noted for EJ):
  - Local council business/stall license (lesen perniagaan / lesen gerai) from the relevant Majlis (MPPJ/DBKL/etc. depending on location).
  - Typhoid vaccination + food handler's course (Kursus Pengendali Makanan) certificate for the food handler, via the district health office (Pejabat Kesihatan Daerah).
  - SSM business registration (sole prop is simplest for a 1-person stall).
  - Halal cert is optional, not required to operate.

## Site requirements
- SvelteKit app, single static homepage. No ordering, no accounts, no cart, no backend.
- Clean, simple, mobile-first (customers will view this on their phone at the stall).
- Sections:
  1. Stall name / header.
  2. Menu — item name, price, short description. Simple list/grid, no images required for v1.
  3. Payment — DuitNow QR code image, "Cashless only" note.
  4. Minimal footer (optional: operating hours, location note).
- No user input, no forms, no state — content can be hardcoded in the page for v1.

## Out of scope (v1)
- Online ordering / cart / checkout flow.
- Payment API integration (QR is a static image, not a live payment call).
- Admin/CMS for editing menu (menu is hardcoded, EJ can ask Claude to edit it later).

## Build steps
- [x] Scaffold new SvelteKit project (TypeScript, minimal template).
- [x] Build homepage: header, menu section, payment section, footer.
- [x] Add placeholder DuitNow QR image (EJ to swap in real QR code later).
- [x] Verify `npm run dev` renders correctly, mobile-width check.
- [x] Commit and push to GitHub.
- [x] Deploy to Cloudflare Pages, get live link.

Live: https://fried-chicken-stall.pages.dev
Repo: https://github.com/eujinloo/fried-chicken-stall
