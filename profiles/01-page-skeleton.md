# 01 — Page Skeleton Profile

Purpose: define the reusable landing page structure only.

This file controls:
- page types
- section order
- section responsibility
- header/footer structure
- home vs partnership separation
- FAQ placement
- structural RTL/mobile expectations

This file does not control:
- colors
- typography
- animation
- image generation
- detailed copywriting
- asset filenames
- theme direction
- visual styling
- QA/build commands

---

# 1. Core System Shape

Every market should default to a paired landing system:

1. Home page — player-facing
2. Partnership page — business-facing

Both pages must share:
- header logic
- footer logic
- localization structure
- content architecture
- routing/page shell approach

But they must remain distinct:

- Home page = player discovery, games, sports, promos, browsing, registration.
- Partnership page = partner/agent recruitment, operational trust, tools, support, conversion.

the landing page must contain a 3rd page, it can be:
- about us: contains information about the company, testimonials
- faq: contains faq, can be implemented in various approaches.

Do not merge these purposes into one generic page.

---

# 2. Required Page Types

A mature market should support:

```txt
Home page
Partnership page
FAQ page or FAQ section
```

FAQ can be:
- a separate route/page, or
- a section near the bottom,

depending on project structure.

---

# 3. Home Page Skeleton

The Home page is player-facing.

Default structure:

```txt
Header
Hero
Trending Games / Casino Discovery
Trending Sports
Offers / Promos
Optional Final Player CTA
Footer
```
header and footer belong to the general layout
the sections other than header and footer can be placed in any order.

## Header

Purpose:
- provide global page navigation
- provide market navigation
- provide locale switching
- expose real section anchors

Should contain:
- shared header component
- brand/logo area
- main navigation items
- language switcher
- mobile navigation support
- RTL order handling

## Hero

Purpose:
- communicate the main player promise
- establish the market/page identity
- provide primary CTA
- optionally include proof, stats, or media stage

Hero should contain:
- eyebrow or label
- title
- short body
- primary CTA
- optional secondary CTA
- optional stats/highlights
- optional visual/stage area

## Trending Games / Casino Discovery

Purpose:
- show game variety
- give players a reason to explore
- support media-led discovery

Can include:
- featured game cards
- casino categories
- slots/live/table/instant games
- badges or short tags
- media cards

Must remain player-facing.

## Trending Sports

Purpose:
- show sports betting/player energy
- usually anchor around football, but contains information about all sports
- support sports discovery

Can include:
- sports category cards
- live match feeling
- sports board
- editorial sports cards
- tags or badges

## Esports

purpose:
- explores a side of esports competetions provided
- attract new auidences

Can include:
- games categories 
- best competeing teams
- popular championships

esports can be a section on its own, or included in the sports section as a sub section

## Offers / Promos

Purpose:
- show rewards, offers, bonuses, gifts, free spins, or free bets
- support conversion without becoming spammy

Can be omitted only if another section already acts as the conversion close.

## Final Player CTA

Purpose:
- close the player-facing journey
- route toward registration, play, or contact

Recommended but optional if:
- the last home section already acts as a strong conversion close, and
- the header CTA remains persistent.

## Footer

Purpose:
- close the page cleanly
- repeat useful navigation
- expose contact/support/legal links if needed

---

# 4. Partnership Page Skeleton

The Partnership page is business-facing.

Default structure:

```txt
Header
Hero
Benefits / Why Us
Steps
Paths / Models
Tools / Calculator / Showcase
Final CTA
Footer
```

## Header

Same shared header system as Home.

Must support:
- main page navigation
- partnership deep links
- language switching
- mobile navigation
- RTL/LTR behavior

## Partnership Hero

Purpose:
- communicate the business opportunity
- identify who the page is for
- provide a direct partner-facing CTA

Should contain:
- eyebrow or label
- title
- short body
- primary CTA
- optional secondary CTA
- optional stats
- optional visual/stage area

## Benefits / Why Us

Purpose:
- explain why someone should work with the company
- add proof after the hero
- communicate support, growth, tools, or operational confidence

This section may not be omitted.

## Steps

Purpose:
- explain onboarding
- reduce friction
- show how someone starts

Default:
```txt
Step 1
Step 2
Step 3
```

May be omitted only if the models/paths section is unusually deep and already self-explanatory.

## Paths / Models

Purpose:
- explain available work routes
- separate partner and agent logic
- help the visitor identify where they fit

Default route types:
```txt
Partner
Agent
Custom / Other, if needed
```

This section should not merge player-facing offers with business-facing routes.

## Tools / Calculator / Showcase

Purpose:
- show operational support
- explain tracking, managers, marketing materials, dashboards, support, or earning models

Can be:
- static tools showcase
- dashboard-style proof
- calculator, only if calculation genuinely improves conversion

May be omitted only for minimal pages.

## Final Partnership CTA

Purpose:
- create the main business conversion moment
- provide direct contact/action
- close the partnership journey clearly

This section may never be omitted.

Can structurally support:
- one CTA
- two CTAs
- Telegram
- WhatsApp
- contact form
- phone/contact method

Contact methods come from content/config, not hardcoded JSX.

## Footer

Same shared footer system as Home.

---

# 5. FAQ Skeleton

FAQ should be separated by audience.

Default separate page:

```txt
Header
FAQ Hero / Intro
Player FAQ
Partnership FAQ
Support CTA
Footer
```

Embedded FAQ:

```txt
FAQ Intro
Player FAQ
Partnership FAQ
Support CTA
```

## FAQ Intro

Purpose:
- explain what the FAQ covers
- keep it short and scannable

## Player FAQ

Purpose:
- answer player questions
- cover product/rewards/support concerns

Common topics:
- how to start
- available games
- sports/casino availability
- offers/promos
- mobile access
- support/help

## Partnership FAQ

Purpose:
- answer partner/agent questions
- reduce friction before contact

Common topics:
- who can apply
- partner vs agent difference
- available support
- tools/tracking
- payment/deal structure at a high level
- how to start

## Support CTA

Purpose:
- give users a path if they need more clarity
- route to support, Telegram, WhatsApp, or contact

---

# 6. Shared Header Skeleton

Use one shared header component.

Required support:
- brand mark/logo
- nav items
- language switcher
- sticky mode
- mobile collapse
- RTL order handling
- grouped items with child links
- home and partnership deep links

Header must not invent market-specific navigation internally.

Navigation comes from:
- content
- config
- shared terminology source

Home anchors can include:

```txt
#top
#games
#sports
#offers
```

Partnership anchors can include:

```txt
#top
#benefits
#steps
#paths
#tools
#final-cta
```

Rules:
- links map to real sections
- footer links map to real sections
- home and partnership links can coexist in grouped nav
- locale switching should preserve path and anchor intent when possible

---

# 7. Shared Footer Skeleton

Footer variants:

## Minimal Footer

Contains:
- brand
- small links
- copyright/legal line

## Full Footer

Contains:
- brand block
- home links
- partnership links
- contact links
- legal lines

Footer content must come from structured content, not hardcoded JSX.

---

# 8. Section Responsibility Map

## Home Page

| Section | Primary Question |
|---|---|
| Hero | Why should a player care immediately? |
| Trending Games / Casino | What can I play or explore? |
| Trending Sports | What sports action is available? |
| Offers / Promos | What value or reward can I get? |
| Final CTA | What should I do next? |

## Partnership Page

| Section | Primary Question |
|---|---|
| Hero | What is the business opportunity? |
| Benefits / Why Us | Why should I trust this opportunity? |
| Steps | How do I start? |
| Paths / Models | Which route fits me: partner or agent? |
| Tools / Showcase | What support and systems will I get? |
| Final CTA | How do I contact/apply now? |

## FAQ

| Section | Primary Question |
|---|---|
| Player FAQ | What does a player need to know quickly? |
| Partnership FAQ | What does a partner/agent need to know quickly? |
| Support CTA | Where do I go if I still need help? |

---

# 9. Approved Variant Skeleton

## Home Variants

Hero:
- `home-hero-stage`
- `home-hero-centered`

Discovery:
- `home-featured-grid`
- `home-sports-showcase`
- `home-offers-grid`

Final CTA:
- `final-cta-panel`
- `final-cta-dual-card`

Footer:
- `footer-minimal`
- `footer-full`

## Partnership Variants

Hero:
- `hero-split`
- `hero-centered`
- `hero-typographic`
- `hero-editorial`

Benefits:
- `benefits-glass-grid`
- `benefits-dashboard`
- `benefits-light-shell`

Steps:
- `steps-three-col`
- `steps-timeline`

Paths / Models:
- `paths-dual-card`
- `paths-choice-cards`
- `models-tabs`

Tools:
- `tools-calculator`
- `tools-carousel`
- `tools-showcase`

Final CTA:
- `final-cta-panel`
- `final-cta-expand`
- `final-cta-dual-card`

Footer:
- `footer-minimal`
- `footer-full`

---

# 10. Mobile Structure Rules

Mobile behavior is structural.

Rules:
- direct children inside asymmetric grids must support `min-width: 0`
- collapsed two-column stages expand children to `width: 100%`
- collapsed children should not keep desktop `max-width`
- mobile nav must not duplicate desktop nav data
- mobile menus must support grouped nav items
- avoid horizontal overflow by respecting width contracts

---

# 11. RTL/LTR Structure Rules

RTL support is systemic.

Required behavior:
- page shell direction reflects active locale
- text alignment flips through helpers/utilities
- icon spacing reverses where appropriate
- chevrons reverse where appropriate
- grids may reorder through helpers
- numbers, percentages, scores, timers, phone numbers, currencies, and metrics stay LTR

Do not:
- create separate Arabic components
- duplicate markup for RTL
- hardcode `dir="ltr"` on full page
- patch RTL with random margin overrides
- use left/right assumptions where start/end logic is needed
