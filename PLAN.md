# Elsken — Website Design & Implementation Plan

> Status: implemented as a reviewable static prototype on `feat/elsken-editorial-site`.
>
> Evidence rule: no prices, policies, current owner names, individual menu items, reservations, delivery promises, or other operational claims are published unless supported by a reasonably current source. See [`RESEARCH.md`](RESEARCH.md) and [`IMAGE_RIGHTS.md`](IMAGE_RIGHTS.md).

## 1. Evidence baseline

### Current facts used in the build

- **Business:** Elsken / Café Elsken
- **Address:** Kiehlufer 75, 12059 Berlin-Neukölln.
- **Phone:** +49 30 28423798.
- **Hours used:** Tuesday–Sunday 10:00–18:00; Monday closed. A Restaurant Guru listing updated in July 2026 reports these hours. The site explicitly recommends rechecking before travel because an older June 2025 Instagram post announced later weekend hours, so the evidence has changed over time.
- **Official social positioning:** the indexed Instagram profile describes Elsken as a cozy café in Neukölln with homemade lunch, cakes, specialty coffee & drinks, and Saturday/Sunday breakfast and brunch.
- **Coffee relationship:** Vote Coffee currently lists Elsken as a place to drink coffee and buy beans.
- **Community/cultural evidence:** Café Elsken was a venue for the 2026 48 Stunden Neukölln photography programme. A local initiative also documented a 2026 Kiez conversation at Elsken.
- **History:** hospitality press reported in January 2021 that Café Elsken had recently taken over the former Fishtank café premises. A local neighbourhood listing says it opened in November 2020. The current site therefore uses the careful phrasing “since winter 2020/21,” not an invented founding story.
- **Social proof:** current researched directories report a Google rating around 4.7/5. The implementation uses the rating but not a hard-coded review count because counts change.
- **Accessibility:** the 2026 48 Stunden Neukölln venue page lists barrier-free access and a barrier-free toilet for Café Elsken.

### Sources

- [Restaurant Guru — Elsken](https://de.restaurantguru.com/Cafe-Elsken-Berlin)
- [Official Instagram profile — @cafeelsken](https://www.instagram.com/cafeelsken/)
- [Official Facebook page — Café Elsken](https://www.facebook.com/Cafeelsken/)
- [Vote Coffee — Buy Beans / Drink Coffee](https://vote-coffee.com/pages/buy-beans-drink-coffee)
- [48 Stunden Neukölln — Fensterblicke at Café Elsken](https://48-stunden-neukoelln.de/de/programm/fensterblicke)
- [Meininger/fizzz — Top 5 Openings aus Berlin, 11 Jan 2021](https://www.meininger.de/gastronomie/top-5-openings-aus-berlin)
- [nebenan.de — Café Elsken historical listing](https://nebenan.de/places/businesses/52461)

### Intentionally excluded until owner confirmation

- Current owner/team identity.
- Current complete menu and prices.
- Reservations.
- Delivery.
- Pet policy.
- Alcohol range.
- Seating capacity.
- Current email address.
- Any permanent claim about individual dishes such as shakshuka; those appear in reviews/directories but are not treated as a guaranteed current menu.

## 2. Audience

### Primary

People living or working in Neukölln who are deciding where to have coffee, lunch, breakfast/brunch, or cake. Their practical questions are: what kind of place is this, what does it serve, is it open, and how do I get there?

### Secondary

Visitors walking around Neukölln/Kiehlufer who arrive through Google Maps, Instagram, recommendations, or local discovery.

### Tertiary

People drawn to the café’s documented neighbourhood/cultural role.

### Language

German-first. An English version is a sensible later extension if the business can maintain two accurate content sets.

## 3. Conversion goals

Primary actions:

1. **Open directions**
2. **Understand the current offer**
3. **Call Elsken**

Secondary actions:

- Visit Instagram for current specials/menu changes.
- Check hours.
- Understand the atmosphere and location.

No booking funnel is shown because reservations are not verified.

## 4. Creative direction

### Warm Kiez Editorial

Evidence points to a small, cozy, personal neighbourhood café rather than a luxury restaurant or scalable brunch brand. The design therefore combines:

- editorial typography;
- tactile warm surfaces;
- teal storefront-inspired structure;
- restrained tomato/terracotta accents;
- asymmetrical “printed photo” compositions;
- canal/Kiehlufer geometry;
- generous whitespace and calm motion.

The tone is **warm, relaxed, personal, cultured, slightly playful, and unpretentious**.

Avoid:

- generic Scandinavian specialty-coffee minimalism;
- glossy luxury restaurant styling;
- fake handwritten scripts everywhere;
- coffee-bean clichés;
- high-energy game-like interactions.

## 5. Color system

| Token | Value | Purpose |
| --- | --- | --- |
| Ink | `#20201D` | Main text / dark sections |
| Warm Paper | `#F4EFE5` | Primary page background |
| Soft Cream | `#FBF8F2` | Cards / light-on-dark contrast |
| Kiehlufer Teal | `#276366` | Brand and structural accent |
| Deep Teal | `#173F42` | Food/menu section |
| Tomato | `#C8543F` | CTA and editorial accent |
| Toast | `#B88961` | Supporting warmth |

These are proposed design colors, not claimed existing brand standards.

## 6. Typography

- **Newsreader Variable** — editorial display, hero, large statements.
- **IBM Plex Sans** — navigation, utility copy, hours, metadata, buttons.

Both are loaded from Google Fonts in the prototype. For a production privacy/performance pass, self-host licensed WOFF2 subsets if desired.

## 7. Image strategy

The web research found real Elsken photography on restaurant directories, press coverage, Google-sourced review imagery, and social accounts. Those images are useful as visual research but their commercial web rights are not proven by public availability.

Therefore the implementation deliberately ships **stylised SVG demo placeholders** rather than silently copying third-party photos. Each placeholder is visibly marked for replacement.

Production priority:

1. Exterior + Kiehlufer context.
2. Real current food/menu.
3. Interior/counter/details.
4. Staff/process with permission.
5. Canal/Kiez context.

See [`IMAGE_RIGHTS.md`](IMAGE_RIGHTS.md) for the source audit and replacement checklist.

## 8. Information architecture

Single-page structure:

1. Header
2. Hero
3. Business value proposition
4. Food & drink offer
5. Space/atmosphere
6. Kiez/community story
7. Location/contact/hours
8. Strong final directions CTA
9. Footer/socials

A standalone menu route should only be added once Elsken provides a current source-of-truth menu.

## 9. Section-by-section layout

### Header

Compact logo/wordmark, anchor navigation, Instagram, and a clear route CTA. Native `<details>` powers mobile navigation so it still works without JavaScript.

### Hero

- Kiehlufer location eyebrow.
- Headline: “Ein kleines Café. Mit viel Kiez.”
- Evidence-backed summary of lunch, cakes, specialty coffee/drinks, weekend breakfast/brunch.
- Directions and offer CTAs.
- Current researched hours above the fold.
- Layered photography slots, currently marked demo-only.

### Value proposition

Three concrete evidence-led notes instead of generic “quality/passion/community” cards:

- homemade lunch/cakes;
- specialty coffee / Vote Coffee relationship;
- documented neighbourhood/cultural participation.

### Food & drink

Category-led content only:

- homemade lunch;
- cakes;
- specialty coffee & drinks;
- Saturday/Sunday breakfast & brunch.

No prices or invented dish names.

### Space & atmosphere

Asymmetric visual composition with a concise explanation of why the design emphasizes warmth, music, personal service, and a lived-in feel. Review text is not copied verbatim as promotional testimony.

### Kiez

A dark editorial section referencing documented 2026 cultural/neighbourhood participation.

### Visit

Large practical block with address, phone, hours, directions, and the current accessibility note from the 2026 venue listing.

### Final CTA

“Bis gleich am Wasser.” with prominent directions and Instagram actions. Decorative canal geometry is CSS-only and does not block content.

## 10. Three.js / animation plan

**No Three.js.** There is no business story that benefits from 3D/WebGL and it would add weight and distraction.

Motion is limited to progressive-reveal transitions using `IntersectionObserver`. With JavaScript disabled, content is visible. With `prefers-reduced-motion: reduce`, transforms and smooth scrolling are disabled.

## 11. Responsive behavior

### Mobile first

The fixed bottom action bar prioritizes:

- Route
- Offer
- Call

### Small screens

- One-column hero and content.
- Large but bounded editorial typography.
- Native mobile menu.
- No layout-critical overlapping decorations.
- Photo placeholders remain readable and labelled.

### Tablet

- Two-column visual groups where useful.
- Menu and Kiez sections collapse to one column earlier than desktop.

### Desktop

- Asymmetrical editorial compositions.
- Large typographic scale.
- Maximum content width around 1240px.

## 12. Accessibility

Target: WCAG 2.2 AA.

Implemented/required:

- semantic `header`, `nav`, `main`, `section`, `footer`;
- one logical `h1`;
- skip link;
- visible `:focus-visible` state;
- keyboard-operable native mobile menu;
- 44px+ primary interactive targets;
- meaningful link text;
- `tel:` phone link;
- alt text explicitly describing placeholder status;
- no color-only meaning;
- no essential content dependent on JavaScript;
- reduced-motion handling;
- no text embedded in production photography (placeholder labels are temporary prototype disclosures).

## 13. Performance

Current build has no framework/runtime dependency.

Production image requirements once real photography is supplied:

- AVIF + WebP where practical;
- responsive `srcset`;
- fixed width/height to prevent CLS;
- hero not lazy loaded;
- below-fold photography lazy loaded;
- 1200×630 licensed Open Graph image;
- keep JavaScript enhancement-only.

Core Web Vitals targets:

- LCP ≤ 2.5s
- CLS ≤ 0.1
- INP ≤ 200ms

## 14. SEO / local discovery

Implemented title:

> Elsken | Café, Frühstück & Lunch in Berlin-Neukölln

Implemented description summarizes the address and verified offer/hours without fabricated menu data.

JSON-LD uses `CafeOrCoffeeShop` with:

- name;
- URL;
- phone;
- postal address;
- opening hours;
- Instagram/Facebook `sameAs` links.

Not added without owner confirmation:

- `priceRange`;
- reservations;
- delivery;
- aggregate rating schema;
- cuisine classifications;
- review objects.

Local SEO priority is consistent NAP data across the new site, Google Business Profile, Instagram, Facebook, and directories.

## 15. Rights/licensing notes

Publicly visible does not equal commercially licensed.

Production-safe priority:

1. New photography commissioned by Elsken.
2. Existing originals that Elsken owns and can authorize for web use.
3. Photographer-owned images with an explicit commercial web license.

Do not automatically copy:

- Google review photos;
- Restaurant Guru photos;
- customer Instagram posts;
- festival photographs;
- press photographs.

The 2021 Meininger article credits its café image to “Café Elsken,” making it a promising original to request from the business, but the published press copy itself should not simply be scraped.

## 16. Implementation sequence

1. Research current public facts.
2. Record evidence/conflicts in `RESEARCH.md`.
3. Establish image-rights policy.
4. Build semantic HTML without framework dependency.
5. Build responsive editorial design system.
6. Add native navigation and progressive enhancement.
7. Add metadata and JSON-LD.
8. Add explicit image placeholders rather than unlicensed photos.
9. QA links/content/accessibility.
10. Before commercial launch: owner verification + licensed real photography + current menu.

## 17. Acceptance criteria

- [x] Design feels specific to Elsken/Kiehlufer rather than a generic café template.
- [x] No invented prices.
- [x] No invented reservation or delivery promise.
- [x] No unsupported current owner claim.
- [x] Current researched address, phone and hours are centralized in the page.
- [x] Directions and phone are one tap away on mobile.
- [x] Semantic HTML and keyboard navigation.
- [x] Reduced-motion behavior.
- [x] Site remains usable without JavaScript.
- [x] `CafeOrCoffeeShop` JSON-LD included.
- [x] SEO title/meta and Open Graph base metadata included.
- [x] No unnecessary framework or Three.js.
- [x] Third-party photography is **not** silently shipped as production media.
- [ ] Replace demo SVGs with licensed real Elsken photography before commercial launch.
- [ ] Add licensed 1200×630 Open Graph image.
- [ ] Obtain current authoritative menu and decide whether to add prices/items.
- [ ] Reverify hours and rating immediately before launch.
- [ ] Confirm current ownership/team story if an About narrative is desired.
- [ ] Run final Lighthouse/axe/browser QA in the production hosting environment.

## Design thesis

> **A little piece of the Kiez on the Kiehlufer.**

The website should not claim that Elsken is bigger, more premium, or more elaborate than nearby cafés. The evidence supports the opposite competitive strength: **small scale, human atmosphere, homemade character, specialty coffee, Kiehlufer context, and a real relationship with the neighbourhood.**
