# 07 — QA Checklist Profile

Purpose: define acceptance checks and completion standards for market landing pages.

This file controls:
- definition of done
- system compliance checks
- UX checks
- technical checks
- design checks
- performance checks
- agent final report expectations

This file does not control:
- copy
- typography
- colors
- section order
- image prompts
- implementation details

---

# 1. System Compliance

A market page or page pair is complete only if:

- uses shared codebase
- uses approved section variants only
- uses theme tokens only
- uses structured content only
- uses Anime.js shared motion presets only
- respects ownership boundaries
- defines separate page profiles for Home and Partnership when both exist

---

# 2. UX Compliance

Check:

- hero has clear promise and CTA
- page order follows canonical funnel
- final CTA is visible and strong
- numbers remain readable and LTR where needed
- language switching works if enabled
- section after hero adds new proof instead of paraphrasing hero
- page purpose is obvious within first viewport and first two sections
- Home reads like player discovery
- Partnership reads like recruitment and enablement
- FAQ is separated by audience

---

# 3. Technical Compliance

Check:

- no duplicated market-specific component copy
- no raw hardcoded copy in JSX
- no Framer Motion import
- reduced-motion behavior is supported
- responsive layout works at mobile, tablet, desktop
- RTL works where applicable
- runtime locale resolution works where applicable
- width contracts remain coherent on mobile collapse
- overlays and sticky nav are spatially coordinated
- image-backed player sections use predictable asset taxonomy
- no fake image paths
- no missing imports
- no missing assets
- no casing mismatch in asset paths
- no hydration errors
- no horizontal overflow

---

# 4. Design Compliance

Check:

- market is differentiated across multiple identity axes
- differentiation is not only accent color
- surface treatment is consistent within each page
- page density matches intended posture
- copy tone sounds user-facing rather than system-facing
- terminology is consistent across hero, nav, paths/models, and final CTA
- Home and Partnership share market identity but do not look like duplicates
- references are used for skeleton and reusable patterns only, not direct visual templates
- section spacing is tight enough without hurting readability
- no large decorative dead zones by default

---

# 5. Performance Compliance

Check:

- no obvious jank on scroll
- ambient motion count is within limits
- heavy visuals reduced on mobile where needed
- no layout-thrashing background effects
- no pointer tracking on large node groups
- animations cleanup on unmount
- reduced motion is respected

---

# 6. RTL and Locale Checks

Check:

- route/page shell direction reflects active locale
- text alignment flips through helpers
- icon spacing and chevrons reverse where needed
- grids reorder through helpers where intended
- numbers/percentages/prices/phone numbers remain LTR
- no duplicated Arabic component tree
- no hardcoded full-page `dir="ltr"`
- mobile nav works in RTL

---

# 7. Header and Footer Checks

Header:
- shared component used
- brand/logo present
- nav comes from content/config
- language switcher works if enabled
- grouped items supported
- mobile collapse works
- sticky/overlay behavior aligns to shell
- RTL order handling works

Footer:
- content-driven
- links map to rendered sections/routes
- contact links are valid if present
- minimal/full variant matches page needs
- not overbuilt for small pages

---

# 8. Content Checks

Check:

- all strings are in structured content
- SEO fields exist
- nav labels exist
- CTA labels exist
- final CTA content exists
- footer content exists
- player copy is not business-facing
- partnership copy is not player-facing
- FAQ questions are audience-separated
- no placeholder/dev-facing text remains

---

# 9. Asset Checks

Check:

- public asset paths exist
- filenames and extensions use exact casing
- images use correct fit mode
- image-backed cards use predictable taxonomy
- generated images contain no unwanted text/logos
- decorative images are marked decorative
- meaningful images have alt text

---

# 10. Build and Command Checks

Run available checks:

```bash
npm run build
npm run lint
npm run typecheck
```

If a script does not exist, report it clearly.

Also verify:
- app loads without 500
- no missing chunk/fallback errors after restart
- global CSS/Tailwind applies
- no terminal/compiler errors
- no console hydration errors

---

# 11. Existing Page Migration Checks

When upgrading existing pages:

1. extract shared tokens
2. extract shared button/surface/section shell/language switcher
3. replace old motion with Anime.js presets
4. normalize page configs
5. move copy into structured content
6. deprecate page-specific layout logic once equivalent variants exist

Do not attempt a full rewrite unless schedule and QA support it.

---

# 12. Final Report Format

Agent final response should include:

1. Files added or changed
2. Page types built/changed
3. Section variants used
4. Theme family used
5. Motion presets applied
6. Content files changed
7. Assets used
8. RTL/mobile notes
9. Build/lint/typecheck result
10. Remaining issues or polish needed
