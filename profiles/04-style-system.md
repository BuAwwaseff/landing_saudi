# 04 — Style System Profile

Purpose: define tokenized visual style, theme families, surface vocabulary, background variants, and identity rules.

This file controls:
- theme families
- design token schema
- surface vocabulary
- background variants
- market differentiation rules
- spacing and visual identity restrictions

This file does not control:
- copy
- section order
- exact image prompts
- motion code
- QA/build commands

---

# 1. Style Principle

Market identity should mostly come from:
- theme tokens
- imagery
- localized content
- selected approved variants
- typography posture
- background character
- surface mix
- density profile

Do not create a one-off visual system per page.

---

# 2. Identity Axis Rule

Every market must establish identity through at least four of these axes:

- palette behavior
- typography posture
- background character
- dominant surface family
- motion temperament
- imagery direction
- density profile

Changing color alone is not enough.

Two markets should not ship with the same:
- theme family
- background variant
- hero variant
- surface strategy

unless one is intentionally derivative.

---

# 3. Theme Families

Approved theme families:

```txt
gold-classic
green-depth
editorial-premium
saudi-premium
red-green-national
```

See `style-packs/` for ready extract files.

---

# 4. Canonical Theme Token Schema

All themes must extend:

```ts
export type ThemeTokens = {
  color: {
    bg: string
    bgTop: string
    foreground: string
    foregroundSoft: string
    primary: string
    primarySoft: string
    primaryStrong: string
    secondary?: string
    surface: string
    surfaceStrong: string
    surfaceAccent: string
    borderSoft: string
    borderStrong: string
    gridLine: string
    glow: string
    success?: string
    danger?: string
  }
  type: {
    display: string
    heading: string
    subheading: string
    cardTitle: string
    bodyLg: string
    body: string
    label: string
    meta: string
    metric: string
    metricSecondary: string
    stat: string
  }
  radius: {
    sm: string
    md: string
    lg: string
    xl: string
    pill: string
  }
  space: {
    sectionY: string
    sectionYMobile: string
    containerX: string
    cardPadding: string
    gridGap: string
  }
  shadow: {
    soft: string
    card: string
    hero: string
    glow: string
  }
  motion: {
    durationFast: number
    durationBase: number
    durationSlow: number
    durationLoop: number
    easingStandard: string
    easingEntrance: string
    easingEmphasis: string
  }
}
```

---

# 5. Token Rules

- No raw hex values inside section components unless coming from active theme file.
- No raw spacing values inside section components unless mapped from spacing tokens or approved utilities.
- Same radius scale must be used across markets.
- Motion timing must use shared motion tokens.
- Shared primitives start neutral and receive emphasis through tokens, props, or section wrappers.

---

# 6. Surface Vocabulary

Only these surface types are allowed.

## surface-glass

Dark frosted card.

Use when:
- the selected style family calls for glass
- visual hierarchy benefits from translucent layering

Do not overuse.

## surface-accent

Dark card with accent tint.

Use for:
- emphasis blocks
- active states
- important CTAs
- highlighted cards

## surface-light

White or near-white contrast card.

Use sparingly.

Allowed mainly in:
- editorial pages
- premium contrast pages

## surface-stage

High-focus container for:
- hero visuals
- calculators
- dashboards
- model tabs
- phone/browser mockups

## surface-media

Media-led card for player discovery sections.

Use for:
- image-backed cards
- illustration-backed cards
- game/sports discovery
- offer art

Image fit:
- `object-cover` for immersive category cards
- `object-contain` for product or offer art

---

# 7. Surface Rules

- A page should have one dominant surface family.
- A page may have at most one supporting family, plus `surface-stage` where needed.
- `surface-light` is an accent strategy, not a default mode.
- CTA panels and proof panels should feel related.
- Do not mix unrelated materials inside one viewport cluster.
- Surface contrast should increase hierarchy, not create random attention spikes.
- Do not invent additional card families unless the system is updated.

---

# 8. Background Variants

Approved background systems:

## bg-spotlight

- layered radial glows
- subtle grid
- optional pointer spotlight reveal
- high-impact pages only

## bg-depth

- base tint gradient
- corner glows
- vertical shafts
- low-opacity perspective plane

## bg-grid-minimal

- radial body glows
- static or slow-moving grid
- content-dominant

## bg-premium-minimal

- low-noise gradients
- restrained corner glow
- optional fixed grid mask
- dense premium layouts

---

# 9. Background Rules

- Background system is selected by page config.
- A page may use one main background variant only.
- Background belongs to the page shell, not arbitrary section wrappers.
- Interactive pointer backgrounds are not allowed on low-end/mobile-first configs unless approved.
- Backgrounds must stay low-noise enough for readability.

---

# 10. Spacing Rules

- Default to the smallest vertical spacing that preserves readability and hierarchy.
- Large decorative gaps are not allowed by default.
- When in doubt, make the composition denser rather than airier.
- Tight rhythm is part of the system language, especially partnership pages.

---

# 11. Visual Identity Restrictions

Allowed:
- reuse system skeleton
- reuse information architecture
- reuse approved variants
- reuse shared primitives

Not allowed:
- near-clone with only colors or country names swapped
- direct visual template copying from older pages
- relying on one style axis only

References are inputs, not templates.

---

# 12. Page Purpose and Presentation

Home pages optimize:
- energy
- browsing
- discovery
- media-led flow

Partnership pages optimize:
- clarity
- proof
- operational trust
- conversion

Home and Partnership should share market identity but not look like duplicates.

---

# 13. Composition Profile

Page config can define:

```ts
density: 'compact' | 'balanced' | 'editorial'
textMeasure: 'sm' | 'md' | 'lg'
surfaceMode: 'glass-dominant' | 'accent-led' | 'light-contrast' | 'restrained-mix'
motionProfile: 'subtle' | 'standard' | 'showcase'
```

Use this to guide layout feel without inventing new architecture.
