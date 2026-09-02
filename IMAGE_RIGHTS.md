# Elsken — Image Source & Rights Notes

Research date: **2 September 2026**

## Current live treatment

The live GitHub Pages build now uses **real Elsken photography** surfaced through the public Corner listing for Elsken. Corner labels the images as **“photo via Google Maps.”** The photographs are loaded remotely at runtime; the original SVG placeholders remain as the static/no-JavaScript fallback.

This improves the realism of the prototype, but it is important to distinguish **real business photography** from **commercially cleared photography**. A Google Maps / public listing image is not automatically licensed for independent commercial website reuse.

## Rights status

| Source | What was found | Rights assessment | Current treatment |
| --- | --- | --- | --- |
| [Corner — Elsken](https://www.corner.inc/place/pvSUvvhNUGqM) | Five real Elsken photos, each labelled by Corner as “photo via Google Maps” | Photographer/platform rights are not established by the listing | **Displayed in the live prototype with this rights warning; replace with approved originals for commercial launch** |
| [Official Instagram — @cafeelsken](https://www.instagram.com/cafeelsken/) | Current business posts/profile imagery and offer copy | Likely owner-controlled account, but individual photographer rights are not established publicly | **Best source for owner-approved originals** |
| [Official Facebook — Café Elsken](https://www.facebook.com/Cafeelsken/) | Business imagery and historical posts | Likely owner-controlled account; same copyright caveat | **Request originals and approval** |
| [Meininger/fizzz 2021 opening article](https://www.meininger.de/gastronomie/top-5-openings-aus-berlin) | Opening image captioned “Café Elsken, Berlin (Foto: Café Elsken)” | Strong evidence that Café Elsken supplied/owned the image, but the press-site copy itself is not a reuse licence | **Strongest owner-attributed photo lead; request the original file from Elsken** |
| [Restaurant Guru — Elsken](https://de.restaurantguru.com/Cafe-Elsken-Berlin) | Exterior, interior and food images, many sourced from Google/customer reviews | Third-party/reviewer/aggregator rights unclear | **Research reference only** |
| 48 Stunden Neukölln | Festival/editorial imagery related to an exhibition at the venue | Photographer/event rights | **Do not repurpose without permission** |

## Remote images currently used

The five real-photo URLs currently used by `script.js` are served from `cdn.corner.inc` and correspond to the Elsken place listing. They are intentionally kept in JavaScript rather than copied into `/assets/`, because the repo does not claim ownership of the underlying files.

If Elsken supplies owner-approved originals, replace these remote URLs with local optimized assets immediately.

## Recommended production replacements

### 1. Hero / exterior

Use an owner-approved current photograph showing:

- the Elsken facade;
- outdoor tables;
- some Kiehlufer context;
- natural late-morning or afternoon light.

Preferred source size: at least 1600px on the long edge.

### 2. Food

Photograph the **current menu**, not historical directory dishes.

Priority frames:

- current signature plate after owner confirmation;
- weekend breakfast/brunch table;
- cake;
- coffee/drink;
- hands serving/plating.

### 3. Interior

Capture the café’s actual character:

- counter;
- menu/chalkboard;
- seating;
- windows;
- art/objects;
- records/turntable only if these are still genuinely part of the space.

### 4. People / process

Use staff in real working moments and obtain appropriate permission from identifiable people.

### 5. Kiez

Use one environmental photograph that establishes the canal/Kiehlufer relationship rather than a generic Berlin landmark.

## Delivery formats for owner-approved files

For each selected production image prepare:

- AVIF;
- WebP;
- JPEG fallback where needed;
- responsive widths;
- a 1200×630 Open Graph crop.

## Replacement map

| Current live slot | Production replacement |
| --- | --- |
| Hero large photo | Owner-approved current exterior / café photograph |
| Hero small photo | Owner-approved food / table photograph |
| Interior wide photo | Owner-approved interior photograph |
| Tall atmosphere photo | Owner-approved café / Kiehlufer photograph |
| Final CTA background | Owner-approved atmospheric café/Kiez photograph |

## Launch gate

Before treating this as a fully commercial production site, obtain written confirmation that the displayed photographs may be used on Elsken’s website, then move optimized originals into the repository and remove the public-listing dependency.
