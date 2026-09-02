# Elsken — Image Source & Rights Notes

Research date: **2 September 2026**

## Production rule

Real Elsken photography is strongly preferred, but **public availability is not a commercial-use license**. The current implementation therefore does not scrape or republish third-party/customer photos.

The four SVGs in `/assets/` are intentionally marked **DEMO PLACEHOLDER**. They are original implementation assets and exist only to preserve the intended layout until licensed real photography is supplied.

## Sources found during research

| Source | What was found | Rights assessment | Production treatment |
| --- | --- | --- | --- |
| [Official Instagram — @cafeelsken](https://www.instagram.com/cafeelsken/) | Current business posts/profile imagery and current offer copy | Likely owner-controlled account, but individual photo copyright/photographer rights are not established by the public page alone | **Request originals and written approval before reuse** |
| [Official Facebook — Café Elsken](https://www.facebook.com/Cafeelsken/) | Business imagery and historical posts | Likely owner-controlled account; same copyright caveat | **Request originals and approval** |
| [Meininger/fizzz 2021 opening article](https://www.meininger.de/gastronomie/top-5-openings-aus-berlin) | Opening image captioned “Café Elsken, Berlin (Foto: Café Elsken)” | Strong clue that Café Elsken supplied/owned the image, but the press-site copy is still not a license to scrape it | **Best existing lead: ask Elsken for the original file** |
| [Restaurant Guru — Elsken](https://de.restaurantguru.com/Cafe-Elsken-Berlin) | Exterior, interior and food images; some Google-sourced review imagery | Third-party/reviewer/aggregator rights unclear | **Research/demo reference only; do not ship** |
| Google Maps / customer reviews | Real current customer photography | Copyright remains with the photographers / platform terms apply | **Do not copy into production without permission** |
| 48 Stunden Neukölln | Festival/editorial imagery related to an exhibition at the venue | Photographer/event rights, not automatically Elsken’s | **Do not repurpose without permission** |

## Recommended production shoot

### 1. Hero / exterior

Capture:

- Elsken facade;
- outdoor tables;
- enough Kiehlufer context to establish place;
- late-morning or afternoon natural light.

Preferred orientation: portrait/near-portrait, minimum 1600px wide source.

### 2. Food

Photograph the **current menu**, not historical directory dishes.

Priority frames:

- current signature plate after owner confirmation;
- breakfast/brunch table on a weekend;
- cake;
- coffee/drink;
- hands serving/plating.

### 3. Interior

Capture actual character rather than sanitising it:

- counter;
- menu/chalkboard;
- seating;
- windows;
- art/objects;
- record player/records only if these are still genuinely part of the space.

### 4. People / process

Use staff in real working moments. Obtain appropriate permission from identifiable people.

### 5. Kiez

One environmental photograph showing the canal/Kiehlufer relationship. Avoid generic Berlin landmarks that have nothing to do with the café.

## Required delivery formats

For each selected production image, request the original high-resolution file and prepare:

- AVIF;
- WebP;
- JPEG fallback where needed;
- multiple responsive widths;
- a 1200×630 Open Graph crop.

## Replacement map

| Current prototype asset | Replace with |
| --- | --- |
| `assets/exterior-placeholder.svg` | Licensed Elsken exterior/Kiehlufer photograph |
| `assets/food-placeholder.svg` | Licensed current food/table photograph |
| `assets/interior-placeholder.svg` | Licensed interior/space photograph |
| `assets/kiez-placeholder.svg` | Licensed Kiehlufer/neighbourhood photograph |

When replacing, update the HTML `alt` text so it describes the actual photograph rather than the placeholder status.

## Launch gate

Do not remove the visible “Demo imagery” disclosure until all displayed business photographs have a documented rights basis.
