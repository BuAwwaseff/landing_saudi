# 00 — Project Rules Profile

Purpose: define the permanent operating rules for the landing-page system.

This file controls:
- architecture boundaries
- ownership rules
- shared-codebase requirements
- config/content/token principles
- RTL and locale system expectations
- reusable variant discipline
- prohibited patterns

This file does not control:
- page section order
- detailed copy
- typography scale
- visual style
- image prompts
- motion implementation details
- QA checklist

---

# 1. System Objective

Build market landing systems from one shared configurable system instead of cloning codebases.

Every new market should default to a paired build:
1. player-facing Home page
2. business-facing Partnership page

Use:
- shared design tokens
- shared section components
- shared motion utilities
- shared content schema
- market theme presets
- locale and RTL support

Do not create a new codebase per country.

---

# 2. Ownership Layers

## Global System Layer

Owns:
- tokens
- motion presets
- direction helpers
- shared primitives
- approved variants
- system vocabulary

## Market Layer

Owns:
- theme files
- localized content
- imagery choices
- allowed terminology overrides

## Page Layer

Owns:
- page purpose
- section order
- density
- CTA emphasis
- selected background system

## Section Layer

Owns:
- rendering supplied config only

A section does not invent market logic.

---

# 3. Ownership Rules

- Shared layout components own structure.
- Pages own composition.
- Themes own visual tokens.
- Content owns copy.
- Responsibilities must not bleed into one another.
- Global primitives must stay neutral by default.
- Market-specific exceptions are not part of the system until normalized and promoted.
- Background systems belong to the page shell or layout wrapper, not arbitrary children.

---

# 4. Core Principles

1. Config over cloning.
2. Tokens over hardcoding.
3. Variants over one-offs.
4. Content separate from layout.
5. Theme swap, not rewrite.
6. RTL is a system feature.
7. Anime.js only for motion.
8. Dual-page market model by default.
9. Tight rhythm over airy spacing.
10. Market pages must be visually distinct.
11. References are inputs, not templates.
12. Neutral primitives before styling.
13. Page purpose drives presentation.
14. Identity comes from multiple axes, not color alone.
15. Information hierarchy is a system rule.
16. Terminology is part of the system.
17. Encode recurring decisions into the system.

---

# 5. Supported Tech Assumptions

Assume:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Anime.js
- lightweight class/localization utilities if needed

If the implementation environment differs, preserve the same system structure.

---

# 6. Required Repository Intent

Shared components should be organized by responsibility:

```txt
components/ui              -> neutral primitives
components/layout          -> header, footer, shells, section wrappers
components/sections/home   -> player-facing rich patterns
components/sections        -> approved section variants
content/markets            -> structured market copy and data
content/system             -> shared terminology
config                     -> market page configs
themes                     -> tokenized market themes
motion                     -> Anime.js helpers and observers
lib                        -> locale, direction, layout-contract helpers
public                     -> predictable media taxonomy
```

Rules:
- `components/ui` stays neutral.
- `components/sections` expresses approved variants only.
- `content/system/terminology.ts` is the shared vocabulary source.
- `MarketPageShell` resolves locale, direction, header/footer content, and route-aware chrome.
- `lib/layout-contract.ts` and `lib/direction.ts` prevent responsive/RTL improvisation in sections.

---

# 7. Naming and Namespace Rules

- Shared CSS should use page-intent namespaces when needed.
- Examples: `player-*`, `signal-*`, `calculator-*`, `cta-*`.
- Namespace choice reflects intent, not only appearance.
- Home-specific styles must not reuse partnership-specific block names just because shapes look similar.

---

# 8. Market Config First

Every market must define a config before implementation.

Config should define:
- market
- slug if routing uses slugs
- supported locales
- default locale
- theme family
- theme file
- Home page profile
- Partnership page profile

Home and Partnership must have separate page profiles.

Direction must resolve from the active locale at runtime.

---

# 9. Extension Rules

New variants are allowed only if:
- the need cannot be solved by content or theming alone
- the new variant is reusable across at least three markets
- it fits the token schema
- it uses shared Anime.js helpers
- it is added to the approved catalog

Try in this order:
1. theme change
2. content change
3. approved variant swap
4. feature flag
5. new reusable variant

---

# 10. Prohibited Patterns

Do not:
- clone an old market page and rename colors
- create a new codebase per market
- hardcode market strings inside components
- use Framer Motion in new sections
- add unapproved layout variants
- duplicate Arabic and English component trees
- hand-roll custom hover physics in each component
- bypass the base token schema
- use scroll-hijacked horizontal sections unless explicitly enabled
- bake page-specific moods into shared primitives
- solve repeated review notes with one-off patches
- repeat the same business claim section after section
- patch responsive issues with breakpoint guesswork
- use one shared section map when Home and Partnership need different structures
- hardcode one market-wide `dir` when locale can change it
- store benchmark media content inside JSX

---

# 11. Source of Truth Priority

Use this priority order:

1. active modular profiles
2. approved shared tokens, components, and variants
3. market config and structured content
4. manually approved experimental learnings
5. old page implementations

The system grows through controlled reuse, not accidental drift.
