# 03 — Typography Profile

Purpose: define type roles, hierarchy, line-height, number direction, and shared text behavior.

This file controls:
- text role system
- heading/body hierarchy
- hero text discipline
- line-height rules
- eyebrow standard
- metric/number direction
- Arabic typography behavior

This file does not control:
- page section order
- copywriting
- colors
- images
- animation
- card layout
- theme selection

---

# 1. Required Type Roles

All themes must support these type roles:

```ts
display
heading
subheading
cardTitle
bodyLg
body
label
meta
metric
metricSecondary
stat
```

Do not create ad hoc text sizes inside section components if a role already exists.

---

# 2. Role Responsibilities

## Display

Used for:
- hero title
- major editorial title

Should be:
- high impact
- controlled
- not oversized by default
- responsive through tokens or clamp

## Heading

Used for:
- section title
- major panel title

## Subheading

Used for:
- short supporting text under a heading
- section intro body

## Card Title

Used for:
- card item titles
- route titles
- tool card titles

## Body Large

Used for:
- hero body
- important explanatory copy

## Body

Used for:
- general section copy
- FAQ answers
- card text

## Label

Used for:
- small labels
- CTA metadata
- category text

## Meta

Used for:
- secondary notes
- helper text
- badges

## Metric / Stat

Used for:
- numbers
- percentages
- values
- counters
- business figures

Metrics and numbers must render with `dir="ltr"`.

---

# 3. Line Height Rules

Use consistent line heights:

- Hero line-height: `0.94` to `1.02`
- Heading line-height: `1.05` to `1.12`
- Body line-height: `1.6` to `1.8`

Arabic text may need slightly more breathing room, but do not rewrite the whole scale per market.

---

# 4. Hero Typography Rules

Hero typography should:
- communicate clearly within the first viewport
- avoid uncontrolled oversized text
- wrap cleanly in Arabic and English
- stay readable on mobile
- use a consistent max-width

Avoid:
- hero text that fills the entire viewport
- extreme tracking that breaks Arabic
- huge line-height gaps
- text blocks wider than their readable measure

---

# 5. Section Typography Rules

Each section should have:
- optional eyebrow
- title
- short description/body if needed
- cards/items below

Section titles should not be hidden inside cards unless the section variant explicitly requires it.

Section text should stay outside item cards.

Cards should contain item-specific title/body only.

---

# 6. Eyebrow Standard

Use one shared Eyebrow component.

Supported eyebrow styles:
- `eyebrow-divider`
- `eyebrow-pill`
- `eyebrow-text-only`

Eyebrows are:
- compact
- letter-spaced where appropriate
- theme-driven
- not hand-built per market

Do not build market-specific eyebrow JSX by hand.

---

# 7. Metrics and Number Direction

Numbers must remain LTR, including:
- percentages
- prices
- currencies
- timers
- scores
- phone numbers
- range values
- revenue values
- CPA/deal values
- counters

Use:
```tsx
<span dir="ltr">25% - 40%</span>
```

Do not force the whole page LTR to solve number display.

---

# 8. Arabic Typography Rules

Arabic pages may:
- change alignment
- reorder layout structurally through direction helpers
- use Arabic-friendly font families

Arabic pages may not:
- use a separate component tree
- create a totally separate token scale
- rely on manual margin patches
- use English-centric letter spacing on Arabic text

---

# 9. Font Selection Guidance

Font choice belongs in the selected theme or typography implementation.

Good Arabic-friendly directions:
- Cairo
- Tajawal
- IBM Plex Sans Arabic
- Noto Kufi Arabic
- Noto Sans Arabic

Use one clean main family unless the design explicitly supports a display/body split.

The font should feel:
- premium
- legible
- clean
- not childish
- not overly decorative

---

# 10. Highlight and Glow Text

Highlighted words may be supplied through content as `highlightedWords`.

Rules:
- highlight only key words
- do not glow entire paragraphs
- do not use highlight as a replacement for hierarchy
- keep readability high
- make the style token-driven

---

# 11. Text Measure

Text measure should come from page composition:

```ts
textMeasure: 'sm' | 'md' | 'lg'
```

Use smaller measure for:
- premium dense pages
- CTA panels
- business clarity

Use larger measure only when:
- editorial style is selected
- long-form copy is intentional

---

# 12. Do Not

Do not:
- define random font sizes inside every section
- use oversized headings everywhere
- hide section intros inside cards
- make body text too low contrast
- force `dir="ltr"` at page level for numbers
- use different font systems between Home and Partnership without intent
