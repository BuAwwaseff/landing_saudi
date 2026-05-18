# Agent Profiles — Landing Pages Modular System

This folder splits the overloaded landing-page build profile into smaller operating files.

Use these files by task:

- `00-project-rules.md` — permanent system rules and architecture boundaries.
- `01-page-skeleton.md` — page structure only.
- `02-copy-and-wording.md` — user-facing wording, terminology, and content separation.
- `03-typography.md` — text hierarchy and type-role rules.
- `04-style-system.md` — tokens, theme families, surfaces, backgrounds, and visual identity rules.
- `05-assets-and-images.md` — media taxonomy, image placement, asset safety, and placeholder rules.
- `06-animation.md` — Anime.js-only motion rules and presets.
- `07-qa-checklist.md` — acceptance checks and definition of done.
- `style-packs/` — ready style-family files extracted from the operable spec.

Recommended usage:

```txt
Use:
- agent-profiles/00-project-rules.md
- agent-profiles/01-page-skeleton.md
- agent-profiles/02-copy-and-wording.md
- agent-profiles/03-typography.md
- one selected file from agent-profiles/style-packs/
- agent-profiles/05-assets-and-images.md
- agent-profiles/06-animation.md
- agent-profiles/07-qa-checklist.md
```

Do not give every file to Codex on every pass unless the task genuinely needs all of them.
Use the smallest set of files that matches the job.
