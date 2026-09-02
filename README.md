# Elsken website

A lightweight, mobile-first website prototype for **Elsken**, Kiehlufer 75, Berlin-Neukölln.

The build is intentionally static and dependency-light: semantic HTML, CSS, and a small progressive-enhancement script. No framework and no Three.js.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Project files

- `index.html` — semantic one-page site, metadata and `CafeOrCoffeeShop` JSON-LD.
- `styles.css` — responsive Warm Kiez Editorial design system.
- `script.js` — optional reveal enhancement; the page remains usable without JavaScript.
- `PLAN.md` — complete research-backed design and implementation plan.
- `RESEARCH.md` — public fact baseline, source links and conflicts.
- `IMAGE_RIGHTS.md` — photo-source audit and commercial-launch replacement checklist.
- `assets/*.svg` — clearly marked demo placeholders; replace with licensed real Elsken photography before launch.

## Evidence / content policy

The prototype does not invent prices, reservations, delivery, current ownership, or a full menu. Current public evidence is documented in `RESEARCH.md`.

## Before commercial launch

1. Verify current opening hours directly with Elsken.
2. Obtain the current authoritative menu/prices.
3. Replace all demo SVGs with licensed real Elsken photography.
4. Add a licensed 1200×630 Open Graph image.
5. Recheck phone, address, rating, social links and accessibility details.
6. Run Lighthouse/axe and cross-browser QA on the final host.

## Primary public sources

- https://www.instagram.com/cafeelsken/
- https://www.facebook.com/Cafeelsken/
- https://de.restaurantguru.com/Cafe-Elsken-Berlin
- https://vote-coffee.com/pages/buy-beans-drink-coffee
- https://48-stunden-neukoelln.de/de/programm/fensterblicke
- https://www.meininger.de/gastronomie/top-5-openings-aus-berlin
