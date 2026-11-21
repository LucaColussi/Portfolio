# Project context

This repository contains Luca Colussi's personal portfolio website. It presents his biography, education, work experience, and projects, with dedicated project detail pages. Content is intended to be available in Italian and English.

The visual reference is the Figma [Portfolio](https://www.figma.com/design/X458SXRvEHNAddldmOWgSz/Portfolio) file. Its visual direction uses a dark background, monospaced body text, sans-serif headings, thin dividers, and minimal composition. Adapt the desktop design for phones and tablets.

The visual inspiration is *The Mentalist*, specifically the title and dictionary-style typography in the user-provided images stored in `docs/references/the-mentalist-phonetic.jpeg` and `docs/references/the-mentalist-definition.jpeg`. These images are design references. The Figma layout remains the implementation reference.

The homepage hero presents Luca Colussi's name in IPA phonetic transcription, following the slash-delimited pronunciation treatment in the reference image. Preserve the Figma text `/ˈlu.ka koˈlus.si/`, including stress marks, syllable separators, and surrounding slashes. Keep the readable name "Luca Colussi" in navigation, metadata, and accessible text. Match the reference's typographic character and use fonts that support the phonetic glyphs correctly.

## Typography hierarchy

- The Figma typography uses Courier Prime Regular (400), Courier Prime Bold (700), and Inter Bold (700). Load the bundled font files through `next/font/local` in the root layout; retain their OFL licenses in `src/app/fonts/`.
- Use the shared typography utilities and Tailwind theme tokens in `src/app/globals.css`. Do not introduce competing font families or one-off typography scales in features.

| Utility | Family / weight | Desktop size / line height | Purpose |
| --- | --- | --- | --- |
| `type-display` | Courier Prime / 700 | 80 / 96 px | Hero phonetic name |
| `type-project-title` | Inter / 700 | 80 / 96 px | Main project page title |
| `type-section` | Inter / 700 | 36 / 44 px | Section headings |
| `type-card` | Inter / 700 | 24 / 32 px | Card titles and subheadings |
| `type-lead` | Courier Prime / 700 | 24 / 32 px | Hero supporting text |
| `type-body` | Courier Prime / 400 | 18 / 28 px | Body copy |
| `type-label` | Courier Prime / 400 | 14 / 20 px | Dates, tags, and secondary metadata |
| `type-brand` | Courier Prime / 700 | 20 / 28 px | Header name |
| `type-navigation` | Courier Prime / 400 | 16 / 24 px | Header navigation and mobile menu |

- Sizes are defined in rem; display and section sizes scale down for smaller viewports. Keep body text readable rather than scaling the entire design down.
- Inter headings use -0.03em letter spacing, except role headings that use normal spacing in Figma; use `tracking-normal` for that exception. Courier Prime uses normal letter spacing.
- For emphasized body text or social labels, use `type-body font-bold` or `type-label font-bold` as appropriate. The header uses its dedicated brand and navigation utilities.
- The header shows the name without a profile photo. Keep the name aligned left and desktop navigation aligned right, with both vertically centered in the header; use the compact menu on mobile.
- Courier Prime's header text needs optical centering in addition to centered layout boxes. The brand and navigation utilities apply the shared `--header-text-offset` (0.1em downward) without changing layout height.
- In the phonetic hero, render only the two IPA stress marks `ˈ` in Inter Bold; all other characters use Courier Prime Bold. Below the `sm` breakpoint (40rem), place the surname on a second line; keep each name segment intact. Provide the accessible heading name "Luca Colussi".
- Keep hero supporting text proportional to the phonetic name: `--text-lead` is 30% of `--text-display`, scaling from 16px to 24px at the default root size. The name scales from approximately 53.33px to 80px. Use the lead size for the gap between the title and supporting text; preserve the supporting text's two-line composition.
- Center the hero name horizontally and vertically within the available initial viewport using a fluid layout based on `min-height: 100svh`; account for navigation height when a header is present.

## Stack and structure

- Next.js App Router, React, strict TypeScript, and Tailwind CSS through PostCSS.
- Use npm and commit `package-lock.json` updates when dependencies change.
- For local development, install dependencies with `npm ci` and run `npm run dev`. Use `npm start` only after a successful production build.
- `src/app/` contains routes, layouts, and global styles. The `@/*` alias resolves to `src/*`.
- Store local static assets in `public/` when needed.
- Prefer Server Components. Add `"use client"` only when interactions or browser APIs require it.
- Follow the Node.js requirement in `package.json`; `.nvmrc` selects the development runtime.

## Feature-first architecture

- Organize domain code under `src/features/`. The portfolio areas are `introduction`, `education`, `experience`, and `projects`.
- Keep `src/app/` focused on Next.js routing, layouts, metadata, and composing feature components.
- Colocate each feature's components, content, types, and helpers within that feature. Start with a flat directory; add subdirectories only when real complexity warrants them.
- Keep feature-specific components inside their owning feature. Move components to `src/components/layout/` or `src/components/ui/` only when they are shared across features or routes.
- Use `src/lib/` only for genuinely shared, non-UI helpers. Features must not import from `src/app/` or depend on another feature's internal implementation; compose them at the route level.
- Use kebab-case filenames, PascalCase React component names, and explicit imports through `@/`. Avoid unnecessary barrel files.
- Create directories when implementation needs them; do not add empty features, placeholder files, or speculative hooks and services.

## Conventions

- Keep changes within the requested scope. Avoid unnecessary libraries and infrastructure.
- Use semantic HTML, keyboard-accessible navigation, visible focus states, and appropriate image alternative text.
- All UI must be responsive. Validate navigation at narrow mobile widths and desktop breakpoints, with no horizontal overflow. Keep shared header dimensions in CSS tokens and account for them in the hero's viewport height.
- On a full browser refresh, reset scroll to the top and remove stale section hashes before hydration so the hero entrance can replay. Preserve hash navigation on ordinary visits and section-link clicks, and restore the browser's prior scroll-restoration mode after the reload reset.
- Content sections such as About render visibly without scroll-triggered entrance animations.
- Implement fluid, responsive layouts rather than copying fixed dimensions and absolute positioning indiscriminately from generated Figma code.
- Reuse existing components and design tokens. Extract components when reuse or readability warrants it.
- Download Figma assets into the project; do not use temporary asset URLs at runtime.
- Do not present demonstration content as real experience. Illustrative entries and social links in the design require user-provided content.
- Keep secrets out of the repository. Use Git-ignored local `.env` files when needed.
- Keep README.md visitor-facing: present the portfolio, its purpose, and visual inspiration without setup instructions, architecture details, or technical tooling.
- Keep durable development commands, architecture, and agent conventions in this file.

## Commit messages

- Follow Conventional Commits: `<type>: <description>`, with an optional scope when useful, such as `feat(projects): add project cards`.
- Use `feat` for new functionality, `fix` for bug fixes, `refactor` for restructuring without behavior changes, `docs` for documentation, `style` for formatting-only changes, `perf` for performance improvements, `test` for tests, `build` for build tooling or dependencies, `ci` for CI configuration, and `chore` for other maintenance.
- Write short descriptions in English, in the imperative and without a trailing period, such as `feat: add introduction section` or `fix: correct mobile navigation`.
- Keep each commit focused on one coherent change. Choose the type based on its actual purpose; visual or behavioral changes are not formatting-only `style` commits.

## Validation

- After code changes, run `npm run typecheck` and `npm run build` when applicable.
- ESLint is available through `npm run lint`. Run it when requested or when checking changes to its configuration.
- For visual changes, check desktop and mobile behavior when browser verification is available.
- Add tests for meaningful behavior. Avoid tests that merely mirror markup or simple configuration.

## Maintaining this file

Keep this file in English. Include only durable project context, conventions, and useful agent commands. Do not add session histories, progress logs, temporary tasks, or duplicate README content.
