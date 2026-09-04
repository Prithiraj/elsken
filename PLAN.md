# Elsken — Website Design & Implementation Plan

> Status: **Canal Light v2 implemented on `feat/canal-light-v2` for review.**
>
> Evidence rule: no prices, policies, current owner names, individual menu items, reservations, delivery promises, or other operational claims are published unless supported by reasonably current evidence. See [`RESEARCH.md`](RESEARCH.md) and [`IMAGE_RIGHTS.md`](IMAGE_RIGHTS.md).

## 1. Evidence baseline

Facts used in the build:

- **Business:** Elsken / Café Elsken.
- **Address:** Kiehlufer 75, 12059 Berlin-Neukölln.
- **Phone:** +49 30 28423798.
- **Hours used:** Tuesday–Sunday 10:00–18:00; Monday closed, based on current researched listings. The page recommends rechecking before travel because historical sources differ.
- **Offer positioning:** the indexed official Instagram describes homemade lunch, cakes, specialty coffee & drinks, plus Saturday/Sunday breakfast and brunch.
- **Coffee relationship:** Vote Coffee lists Elsken as a place to drink coffee and buy beans.
- **Community/cultural evidence:** Elsken was a 2026 48 Stunden Neukölln venue and hosted a documented Kiez conversation.
- **History:** public sources place the café at Kiehlufer 75 since winter 2020/21.
- **Social proof:** current researched directories report a Google rating around 4.7/5.
- **Accessibility:** the 2026 festival venue page lists barrier-free access and a barrier-free toilet.

Intentionally excluded until owner confirmation: current ownership/team details, complete menu/prices, reservations, delivery, pet policy, alcohol range, seating capacity, and current email address.

## 2. Audience

Primary: local Neukölln residents and nearby workers deciding where to have coffee, lunch, cake, breakfast, or brunch.

Secondary: visitors discovering the Kiehlufer area through Google Maps, Instagram, recommendations, or walking routes.

Tertiary: people attracted to the café’s documented neighbourhood/cultural role.

German-first. English can be added later if Elsken can maintain both versions accurately.

## 3. Conversion goals

Primary actions:

1. **Open directions**
2. **Understand the current offer**
3. **Call Elsken**

Secondary actions: visit Instagram, check hours, understand atmosphere/location.

There is no booking funnel because reservations are not verified.

## 4. Creative direction

### Warm Kiez Editorial + Canal Light

The site should feel warm, relaxed, personal, cultured, slightly playful, and unpretentious.

Evidence-led visual cues:

- editorial typography;
- tactile warm paper/cream surfaces;
- teal storefront/canal-inspired structure;
- restrained tomato/terracotta accents;
- asymmetrical real-photo compositions;
- slow canal/reflection geometry;
- generous whitespace and calm interaction.

Avoid glossy luxury styling, generic specialty-coffee minimalism, fake handwritten clichés, and game-like interaction.

## 5. Color system

| Token | Value | Purpose |
| --- | --- | --- |
| Ink | `#20201D` | Main text / dark Kiez section |
| Warm Paper | `#F4EFE5` | Primary page background |
| Soft Cream | `#FBF8F2` | Cards / light contrast |
| Kiehlufer Teal | `#276366` | Identity / canal light |
| Deep Teal | `#173F42` | Food/menu section |
| Tomato | `#C8543F` | CTA / editorial accent |
| Toast | `#B88961` | Supporting warmth |

These are proposed design colors, not claimed existing Elsken brand standards.

## 6. Typography

- **Newsreader Variable** — hero, section headings, large editorial statements.
- **IBM Plex Sans** — navigation, utility copy, hours, metadata, buttons.

The prototype uses Google Fonts. A production privacy/performance pass can self-host properly licensed WOFF2 subsets.

## 7. Image strategy

The v2 prototype uses **real Elsken photography** surfaced through Corner’s Elsken listing, where the images are labelled “photo via Google Maps.” This makes the prototype specific and realistic, but it does **not** establish commercial reuse rights.

Production priority remains:

1. owner-approved exterior/Kiehlufer image;
2. current food/menu photography;
3. interior/counter/details;
4. staff/process with permission;
5. canal/Kiez context.

Remote listing photos must be replaced by owner-approved originals before treating the site as commercially cleared. SVG artwork remains in `/assets/` as an error fallback for the main photo slots.

## 8. Information architecture

Single-page structure:

1. Header
2. Hero
3. Business value proposition
4. Food & drink offer
5. Space / atmosphere
6. Real-photo gallery
7. Kiez/community story
8. Location/contact/hours
9. Strong final directions CTA
10. Footer/socials

A standalone menu route should only be added once Elsken supplies a current source-of-truth menu.

## 9. Section-by-section layout

### Header

Sticky compact wordmark, anchor navigation, Instagram, and a clear Route CTA. Native `<details>` powers mobile navigation.

### Hero

- “Ein kleines Café. Mit viel Kiez.”
- Evidence-backed offer summary.
- Directions and offer actions.
- Current researched hours above the fold.
- Two real Elsken photographs on shallow depth layers.
- Decorative canal-light WebGL plane behind the photography.

### Value proposition

Three concrete notes: homemade offer, specialty coffee/Vote Coffee relationship, and documented neighbourhood participation. A small line-reveal gives the cards rhythm without becoming a carousel.

### Food & drink

Category-led content only: homemade lunch, cakes, specialty coffee/drinks, Saturday/Sunday breakfast & brunch. A scroll-responsive waterline motif passes behind the dark section.

### Space & atmosphere

Asymmetric real-photo layout with only enough copy to frame the experience. Images move a few pixels with scroll to create depth.

### Gallery

An editorial four-image sequence using real Elsken photography. Desktop is intentionally irregular; mobile becomes a scroll-snap gallery. No heavy lightbox dependency.

### Kiez

Dark editorial section referencing documented 2026 cultural/neighbourhood participation. Large concentric canal/orbit lines move slowly with scroll.

### Visit

Address, phone, hours, directions, and current accessibility note. Motion is deliberately minimal here because this is a utility/conversion section.

### Final CTA

Real Elsken photograph, warm-paper wash, “Bis gleich am Wasser,” Route and Instagram actions, and a final subtle reflected-water geometry.

## 10. Three.js / animation plan

Three.js is used **once**, in the hero, because the Kiehlufer/canal setting provides a real narrative reason for it.

Implementation:

- one orthographic camera;
- one full-plane shader material;
- procedural sine-based canal-light ribbons;
- subtle pointer influence;
- small scroll influence;
- low-power renderer;
- device pixel ratio capped at 1.4;
- renderer pauses when the hero is off-screen or the tab is hidden;
- dynamically imported from CDN only when JavaScript, WebGL, and normal-motion preferences are available.

Everything else uses lightweight DOM/CSS motion rather than extra WebGL scenes.

No 3D objects, camera fly-throughs, particles, spinning logos, or game-like controls.

## 11. Responsive behavior

### Mobile first

Persistent bottom actions: Route / Angebot / Anrufen.

### Small screens

- one-column hero/content;
- bounded editorial typography;
- native mobile menu;
- hero photographs remain layered but avoid clipping;
- gallery becomes horizontal scroll-snap;
- Three.js remains decorative and lower-opacity.

### Tablet

Two-column visual groups where useful; menu/Kiez collapse earlier than desktop.

### Desktop

Asymmetrical editorial grid, large typographic scale, shallow pointer depth in the hero, maximum content width around 1240px.

## 12. Accessibility

Target WCAG 2.2 AA.

- semantic `header`, `nav`, `main`, `section`, `footer`;
- one logical `h1`;
- skip link;
- visible `:focus-visible` state;
- keyboard-operable native mobile menu;
- 44px+ primary touch targets;
- meaningful link text and `tel:` link;
- descriptive alt text for real business photography;
- no color-only meaning;
- no essential content dependent on JavaScript or WebGL;
- `prefers-reduced-motion` disables WebGL motion, parallax and transitions;
- decorative canvas is `aria-hidden` by context and receives no interaction.

## 13. Performance

Core HTML/CSS remains framework-free. Three.js is enhancement-only and dynamically loaded.

Implemented safeguards:

- hero image is eager/high priority;
- below-fold photos are lazy loaded;
- `decoding="async"` on remote photography;
- preconnect to the remote image host;
- Three.js loaded only after the page script runs and skipped for reduced motion/WebGL failure;
- pixel ratio capped;
- WebGL rendering pauses off-screen;
- scroll effects share one `requestAnimationFrame` loop.

Production image requirements once originals are supplied: local AVIF/WebP, responsive `srcset`, fixed dimensions, and a licensed 1200×630 Open Graph crop.

Targets: LCP ≤2.5s, CLS ≤0.1, INP ≤200ms.

## 14. SEO / local discovery

The prototype includes the evidence-backed title, description, and `CafeOrCoffeeShop` JSON-LD.

Because this GitHub Pages version is an **unofficial concept**, it currently uses `noindex,nofollow` to avoid competing with or impersonating the business in search. Remove that only after owner approval and migration to the official domain.

Do not add unverified `priceRange`, reservation, delivery, aggregate-rating schema, cuisine classifications, or review objects.

## 15. Rights/licensing notes

Public availability does not equal commercial licensing.

Production-safe priority:

1. new photography commissioned by Elsken;
2. existing originals Elsken owns and can authorize;
3. photographer-owned images with an explicit commercial web license.

The currently displayed Google-Maps-based listing photos are prototype assets only. See `IMAGE_RIGHTS.md`.

## 16. Implementation sequence

1. Research and record evidence.
2. Establish image-rights policy.
3. Build semantic static site.
4. Build warm editorial design system.
5. Insert real prototype photography with rights disclosure and fallback handling.
6. Rebuild hero around one lightweight canal-light shader.
7. Add section-specific motion: value stagger, menu waterline, photo depth, Kiez orbits, CTA reflections.
8. Add gallery.
9. Add reduced-motion, visibility pausing and responsive behavior.
10. Keep prototype `noindex` until business approval.
11. Before commercial launch: owner verification, owner-approved photography, current menu, official domain and final QA.

## 17. Acceptance criteria

- [x] Design feels specific to Elsken/Kiehlufer rather than a generic café template.
- [x] Real Elsken photography is visible in the prototype.
- [x] Prototype photo-rights status is explicitly documented.
- [x] No invented prices, reservations, delivery or current-owner claims.
- [x] Directions and phone are one tap away on mobile.
- [x] Semantic HTML and keyboard navigation.
- [x] Reduced-motion behavior.
- [x] Site remains usable without JavaScript/WebGL.
- [x] One restrained Three.js treatment has a clear Kiehlufer/canal purpose.
- [x] WebGL pauses off-screen and uses a capped pixel ratio.
- [x] Gallery added without a heavy dependency.
- [x] `CafeOrCoffeeShop` JSON-LD included.
- [x] Unofficial GitHub prototype is `noindex,nofollow`.
- [ ] Replace public-listing photography with owner-approved originals before commercial launch.
- [ ] Add licensed 1200×630 Open Graph image.
- [ ] Obtain current authoritative menu and decide whether to add prices/items.
- [ ] Reverify hours and rating immediately before launch.
- [ ] Confirm current ownership/team story if an About narrative is desired.
- [ ] Run final Lighthouse/axe/browser QA on the official production host.

## Design thesis

> **A little piece of the Kiez on the Kiehlufer — with canal light moving quietly through it.**

The website should not claim Elsken is bigger, more premium or more elaborate than nearby cafés. Its strongest evidence-backed qualities remain **small scale, human atmosphere, homemade character, specialty coffee, Kiehlufer context, and a real relationship with the neighbourhood.**
