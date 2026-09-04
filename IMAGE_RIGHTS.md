# Elsken — Image Source & Rights Notes

Research date: **2 September 2026**

## Current prototype treatment

The current prototype uses **real Elsken photography** surfaced through the public Corner listing for Elsken. Corner labels the images as **“photo via Google Maps.”** The photographs are referenced remotely from `index.html`; the repository does not copy or claim ownership of the source files.

This makes the prototype specific to the real café, but it is important to distinguish **real business photography** from **commercially cleared photography**. A Google Maps / public-listing image is not automatically licensed for independent commercial website reuse.

The SVGs in `/assets/` remain available as error fallbacks for the principal photo slots when JavaScript is available. They are not intended as the commercial final imagery.

## Rights status

| Source | What was found | Rights assessment | Current treatment |
| --- | --- | --- | --- |
| [Corner — Elsken](https://www.corner.inc/place/pvSUvvhNUGqM) | Five real Elsken photos, each labelled by Corner as “photo via Google Maps” | Photographer/platform rights are not established by the listing | **Displayed in the prototype with this rights warning; replace with approved originals for commercial launch** |
| [Official Instagram — @cafeelsken](https://www.instagram.com/cafeelsken/) | Current business posts/profile imagery and offer copy | Likely owner-controlled account, but individual photographer rights are not established publicly | **Best route to owner-approved originals** |
| [Official Facebook — Café Elsken](https://www.facebook.com/Cafeelsken/) | Business imagery and historical posts | Likely owner-controlled account; same copyright caveat | **Request originals and approval** |
| [Meininger/fizzz 2021 opening article](https://www.meininger.de/gastronomie/top-5-openings-aus-berlin) | Opening image captioned “Café Elsken, Berlin (Foto: Café Elsken)” | Strong evidence that Café Elsken supplied/owned the image, but the press-site copy itself is not a reuse licence | **Strong owner-attributed photo lead; request the original from Elsken** |
| [Restaurant Guru — Elsken](https://de.restaurantguru.com/Cafe-Elsken-Berlin) | Exterior, interior and food images, many sourced from Google/customer reviews | Third-party/reviewer/aggregator rights unclear | **Research reference only** |
| 48 Stunden Neukölln | Festival/editorial imagery related to an exhibition at the venue | Photographer/event rights | **Do not repurpose without permission** |

## Remote images currently used

Five real-photo URLs from `cdn.corner.inc` are referenced directly in `index.html` for:

- hero exterior / café image;
- secondary hero image;
- wide interior/atmosphere image;
- tall café/Kiehlufer image;
- gallery/final CTA imagery.

They remain remote intentionally because the repository does not represent them as owned assets. If Elsken supplies approved originals, replace all remote URLs with optimized local files immediately.

## Recommended production replacements

### 1. Hero / exterior

Use an owner-approved current photograph showing the Elsken facade, outdoor tables and some Kiehlufer context in natural light.

### 2. Food

Photograph the **current menu**, not historical directory dishes. Priority frames: current signature plate after owner confirmation, weekend breakfast/brunch table, cake, coffee/drink, and hands serving/plating.

### 3. Interior

Capture the café’s real character: counter, menu/chalkboard, seating, windows, art/objects, and records/turntable only if they are still genuinely part of the space.

### 4. People / process

Use staff in real working moments and obtain appropriate permission from identifiable people.

### 5. Kiez

Use one environmental photograph that establishes the canal/Kiehlufer relationship rather than a generic Berlin landmark.

## Delivery formats for owner-approved files

For each selected production image prepare:

- AVIF;
- WebP;
- JPEG fallback where needed;
- responsive widths / `srcset`;
- explicit dimensions;
- a licensed 1200×630 Open Graph crop.

## Launch gate

Before treating this as a commercially cleared production site:

1. obtain written confirmation that the displayed/replacement photographs may be used on Elsken’s website;
2. move owner-approved optimized originals into the repository or official asset host;
3. remove the public-listing dependency;
4. update alt text to match the final selected photographs;
5. remove prototype photo-rights disclosure only after the rights basis is documented.
