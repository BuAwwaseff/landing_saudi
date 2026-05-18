# 05 — Assets and Images Profile

Purpose: define how image assets, media placeholders, file paths, taxonomy, and card media should be handled.

This file controls:
- asset taxonomy
- media placement rules
- placeholder rules
- image fit behavior
- content-driven image references
- deployment-safe asset handling

This file does not control:
- page section order
- copy
- colors
- typography
- motion code

---

# 1. Asset Ownership

Localized assets and media choices belong in:
- structured content
- market config
- approved asset taxonomy

Do not embed asset paths directly in arbitrary JSX unless the component is receiving them from config/content.

---

# 2. Asset Taxonomy

Use predictable public paths.

Recommended taxonomy:

```txt
/public/player/hero
/public/player/games
/public/player/sports
/public/offer
/public/messaging
/public/logo.svg
```

Rules:
- `/public/player/hero` for hero-stage art
- `/public/player/games` for game thumbnails and discovery cards
- `/public/player/sports` for sports category art
- `/public/offer` for offer/promo art
- `/public/messaging` for Telegram, WhatsApp, and contact platform icons
- `/public/logo.svg` for shared brand mark usage

---

# 3. Content-Driven Assets

Content should provide:
- `src`
- `alt`
- `kind`
- optional `theme`
- optional `label`
- optional fit intent if needed

Do not let media-led player cards invent:
- untracked copy
- badges
- CTA labels
- image paths
- alt text

outside content files.

---

# 4. Image Fit Policy

Use intentional fit modes.

## object-cover

Use for:
- immersive category cards
- sports cards
- casino discovery cards
- atmospheric hero backgrounds

## object-contain

Use for:
- product art
- offer art
- icons
- provider logos
- messaging platform PNGs

Do not use `object-cover` when it cuts off important product/logo art.

Do not use `object-contain` when the image is supposed to feel immersive.

---

# 5. Media-Led Cards

Player discovery cards may use `surface-media`.

They should include:
- media/image area
- title
- short body or tag
- optional badge
- optional metrics

The media area should not be an afterthought.

If no final image exists, use a placeholder that has:
- correct aspect ratio
- intentional gradient/shape composition
- no fake path
- no broken image

---

# 6. Placeholder Rules

Use placeholders when final assets do not exist.

Good placeholders:
- CSS gradients
- abstract surfaces
- simple 3D-like shapes
- icon-backed media areas
- token-driven backgrounds

Bad placeholders:
- fake filenames
- broken image tags
- unstyled empty boxes
- random external links
- text embedded into images

---

# 7. Deployment-Safe Paths

All image paths must be:
- exact casing
- correct extension
- existing files only
- public-folder compatible
- not local-only absolute paths

Before referencing an asset:
1. inspect the public folder
2. confirm exact filename
3. confirm extension and casing
4. confirm usage path

Do not assume Windows local casing will work in deployment.

---

# 8. Image Generation Rules

Generated images should:
- contain no text unless explicitly required
- contain no logos unless supplied and legally/brand-approved
- fit the target card/section ratio
- avoid important details near crop edges
- leave space for overlays if needed
- not look like a card inside a card unless intended
- align with the selected style pack
- remain readable on mobile

Generate images for a slot, not generically.

Define before generation:
- section
- card/use case
- ratio
- mood
- background requirements
- crop safety
- whether text overlays will exist

---

# 9. Card Image Ratios

Recommended defaults:
- Hero stage: `16:9`, `16:10`, or responsive stage
- Wide banner placeholder: `3:1`
- Game/sports cards: `4:3`, `16:10`, or portrait if variant requires
- Offer cards: `16:9` or `4:3`
- Partnership route cards: `16:10`
- Messaging icons: square PNG/SVG, object-contain

Use the section variant contract if it defines a ratio.

---

# 10. Accessibility

Every meaningful image needs alt text from content.

Decorative images should be marked decorative:
- empty alt where appropriate
- `aria-hidden` for pure decoration

Do not write alt text inside components if the image is content-driven.

---

# 11. Benchmark Home Content

When a richer Home page uses benchmark content, that content owns:
- carousel images
- featured game cards
- sports showcase cards
- live preview boards
- offer cards

Benchmark content is optional.

Use it only when the Home page genuinely needs richer discovery.
