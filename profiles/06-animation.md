# 06 — Animation Profile

Purpose: define the motion rules for the landing-page system.

This file controls:
- Anime.js-only requirement
- allowed motion categories
- shared motion presets
- motion by section
- reduced-motion behavior
- performance safeguards

This file does not control:
- section order
- copy
- colors
- typography
- image generation
- asset paths

---

# 1. Runtime Choice

All motion in this system must use Anime.js.

Do not use Framer Motion for new landing pages or new sections.

---

# 2. Allowed Motion Categories

Allowed:
1. entrance reveals
2. hover emphasis
3. number count-up
4. looped ambient motion
5. marquee / scrolling tracks
6. chart and path animation
7. tab/content transitions

Do not create a new animation approach inside every section.

---

# 3. Motion Design Rules

- Motion must support `prefers-reduced-motion`.
- Entrance motion is short and directional.
- Hover motion is subtle.
- Ambient loops are slow and low amplitude.
- Avoid multiple competing infinite loops in the same viewport cluster.
- Scroll-hijack behavior is discouraged and opt-in only.
- Auto-rotation is a content device, not decoration.
- Auto-rotation must separate animate-out, state swap, and animate-in phases.

---

# 4. Shared Motion Tokens

Use one shared token set.

```ts
export const motionTokens = {
  duration: {
    fast: 220,
    base: 420,
    slow: 760,
    loop: 5200,
    marquee: 30000,
  },
  easing: {
    standard: 'easeOutCubic',
    entrance: 'cubicBezier(0.22, 1, 0.36, 1)',
    emphasis: 'easeOutExpo',
    linear: 'linear',
  },
  distance: {
    xs: 8,
    sm: 14,
    md: 20,
    lg: 28,
  },
  scale: {
    hover: 1.02,
    lift: 1.01,
  },
}
```

---

# 5. Required Preset Functions

Create and use shared helpers such as:

```ts
revealUp(targets, delay)
revealLeft(targets, delay)
revealScale(targets, delay)
floatLoop(targets, amplitude, duration)
pulseGlow(targets, duration)
countMetric(el, from, to, duration)
animateBar(el, value, delay)
drawPath(el, duration)
marqueeTrack(el, distance, duration)
hoverLift(el)
hoverTilt(el, options)
```

Agents must use these helpers instead of writing isolated animation logic in each section.

---

# 6. Viewport Reveal

Use reveal on first viewport entry.

Rules:
- content must be visible or recoverable if JS fails
- do not hide content permanently
- avoid reload-dependent animations
- cleanup Anime.js instances on unmount
- lazy-init viewport-triggered animations

Recommended entrance:
- opacity
- translateY
- small scale
- mild stagger

Use filters sparingly.

---

# 7. Motion by Section

## Hero

Allowed:
- reveal sequence for eyebrow, title, body, CTA, stats
- subtle loop on orb, emblem, or phone
- slow marquee if hero stage exists
- controlled auto-rotation when enabled

Not allowed:
- multiple aggressive loops
- autoplay motion that distracts from CTA
- abrupt carousel swaps

## Benefits

Allowed:
- staggered reveal
- subtle hover lift
- optional glow pulse on active accent cards

## Steps

Allowed:
- reveal on viewport
- number badge emphasis

Perpetual motion not needed.

## Paths / Models

Allowed:
- tab transitions
- chart bar entry
- line draw
- count-up metrics

## Tools

Allowed:
- calculator value transitions
- showcase float loops
- carousel translation if justified
- count-up only for meaningful numeric outputs

## Final CTA

Allowed:
- button reveal
- controlled expand animation
- card hover lift

---

# 8. Performance Rules

Hard limits:
- no more than three infinite ambient loops visible at once in the same viewport cluster
- no pointer-tracking transforms on large groups
- no background effect that triggers layout thrash
- no unnecessary tall scroll scenes
- no motion on low-priority decorative elements if the section already has data animation

Safeguards:
- gate non-essential motion behind `prefers-reduced-motion`
- lazy-init viewport animations
- cleanup Anime.js instances on unmount
- use transforms and opacity before filters
- avoid stacking blur-heavy layers on mobile
- keep at most one auto-rotating stage per viewport cluster
- do not run hover-only logic when reduced motion is active

---

# 9. Implementation Notes

Recommended files:
```txt
motion/anime.ts
motion/presets.ts
motion/observers.ts
```

Motion should be:
- reusable
- predictable
- token-driven
- section-agnostic
- cleanup-safe

Do not import Anime.js directly into every random component if a preset helper exists.
