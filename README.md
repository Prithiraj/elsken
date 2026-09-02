# Elsken website

A lightweight, mobile-first website for **Elsken**, Kiehlufer 75, Berlin-Neukölln.

The core build stays intentionally static and dependency-light: semantic HTML, CSS, and progressive-enhancement JavaScript. A small Three.js layer adds subtle canal-like motion behind the hero only when JavaScript, WebGL, and normal-motion preferences are available.

## Live site

https://prithiraj.github.io/elsken/

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Project files

- `index.html` — semantic one-page site, metadata and `CafeOrCoffeeShop` JSON-LD.
- `styles.css` — responsive Warm Kiez Editorial design system.
- `script.js` — reveal behavior, real-photo enhancement, and the restrained Three.js canal scene.
- `PLAN.md` — complete research-backed design and implementation plan.
- `RESEARCH.md` — public fact baseline, source links and conflicts.
- `IMAGE_RIGHTS.md` — photo-source audit and commercial-launch replacement checklist.
- `assets/*.svg` — static/no-JavaScript fallback imagery.

## Photography

The live prototype now displays real Elsken photographs surfaced through Corner's Elsken listing, which labels them **“photo via Google Maps.”** The files are loaded remotely and are not represented as repository-owned assets.

See `IMAGE_RIGHTS.md` for the exact rights status and production replacement plan. For a fully commercial launch, replace these public-listing images with owner-approved original Elsken files.

## Motion / Three.js

Three.js is dynamically imported only for the hero enhancement. The scene consists of a few slow canal-like lines; it is deliberately decorative and low-power. It is skipped entirely when `prefers-reduced-motion: reduce` is enabled or WebGL is unavailable.

The website remains fully usable without Three.js or without JavaScript.

## Evidence / content policy

The site does not invent prices, reservations, delivery, current ownership, or a full menu. Current public evidence is documented in `RESEARCH.md`.

## Before commercial launch

1. Verify current opening hours directly with Elsken.
2. Obtain the current authoritative menu/prices.
3. Replace public-listing photos with owner-approved originals and optimize them locally.
4. Add a licensed 1200×630 Open Graph image.
5. Recheck phone, address, rating, social links and accessibility details.
6. Run Lighthouse/axe and cross-browser QA on the final host.

## Primary public sources

- https://www.instagram.com/cafeelsken/
- https://www.facebook.com/Cafeelsken/
- https://www.corner.inc/place/pvSUvvhNUGqM
- https://de.restaurantguru.com/Cafe-Elsken-Berlin
- https://vote-coffee.com/pages/buy-beans-drink-coffee
- https://48-stunden-neukoelln.de/de/programm/fensterblicke
- https://www.meininger.de/gastronomie/top-5-openings-aus-berlin
