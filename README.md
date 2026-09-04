# Elsken website

A lightweight, mobile-first website concept for **Elsken**, Kiehlufer 75, Berlin-Neukölln.

The core build remains static and dependency-light: semantic HTML, CSS, and progressive-enhancement JavaScript. A single dynamically imported Three.js shader adds subtle canal-light motion behind the hero when JavaScript, WebGL, and normal-motion preferences are available.

## Live site

https://prithiraj.github.io/elsken/

The current production branch is `main`. The redesigned Canal Light v2 is developed on `feat/canal-light-v2` before merge.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Project files

- `index.html` — semantic one-page site, real prototype photography, metadata and `CafeOrCoffeeShop` JSON-LD.
- `styles.css` — responsive Warm Kiez Editorial + Canal Light design system.
- `script.js` — reveal behavior, shallow photo depth, section scroll motion, remote-image fallbacks, and the restrained Three.js hero shader.
- `PLAN.md` — current research-backed design and implementation plan.
- `RESEARCH.md` — public fact baseline, source links and conflicts.
- `IMAGE_RIGHTS.md` — photo-source audit and commercial-launch replacement checklist.
- `assets/*.svg` — error fallback artwork for principal image slots.

## Photography

The prototype displays real Elsken photographs surfaced through Corner’s Elsken listing, which labels them **“photo via Google Maps.”** The remote files are not represented as repository-owned assets.

See `IMAGE_RIGHTS.md` for the exact rights status. For a commercial launch, replace the public-listing images with owner-approved Elsken originals and optimize them locally.

## Motion / Three.js

The Three.js layer is deliberately small:

- one orthographic camera;
- one plane and shader material;
- procedural canal-light ribbons;
- subtle pointer/scroll response;
- low-power rendering;
- DPR capped at 1.4;
- rendering pauses when the hero is off-screen or the tab is hidden;
- completely skipped under `prefers-reduced-motion: reduce` or when WebGL/import fails.

The remaining motion is lightweight DOM/CSS enhancement: value-card stagger, menu waterline movement, small photo parallax, Kiez orbit drift and final reflected-water movement.

The website remains fully usable without Three.js or without JavaScript.

## Search indexing

The GitHub Pages concept uses `noindex,nofollow` because it is not yet the official Elsken website. Remove that only after owner approval and migration to the official domain.

## Evidence / content policy

The site does not invent prices, reservations, delivery, current ownership, or a full menu. Current public evidence is documented in `RESEARCH.md`.

## Before commercial launch

1. Verify current opening hours directly with Elsken.
2. Obtain the current authoritative menu/prices.
3. Replace public-listing photos with owner-approved originals and optimize them locally.
4. Add a licensed 1200×630 Open Graph image.
5. Recheck phone, address, rating, social links and accessibility details.
6. Remove `noindex,nofollow` only after the official deployment is approved.
7. Run Lighthouse/axe and cross-browser QA on the final host.

## Primary public sources

- https://www.instagram.com/cafeelsken/
- https://www.facebook.com/Cafeelsken/
- https://www.corner.inc/place/pvSUvvhNUGqM
- https://de.restaurantguru.com/Cafe-Elsken-Berlin
- https://vote-coffee.com/pages/buy-beans-drink-coffee
- https://48-stunden-neukoelln.de/de/programm/fensterblicke
- https://www.meininger.de/gastronomie/top-5-openings-aus-berlin
