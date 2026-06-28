# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server (default port 3000)
pnpm dev -- --port 3070  # Start on a specific port
pnpm build            # Production build (Node server)
pnpm generate         # Static site generation (for deployment)
pnpm preview          # Preview production build
pnpm test             # Run tests once
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Run tests with coverage
pnpm publish          # Full deploy: clean → generate → gh-pages deploy
```

## Architecture

**Nuxt 4 Static Site Generator** for a personal portfolio and blog. Markdown content is processed by Nuxt Content v3 into SQLite (dev) or static JSON (prod) and deployed to GitHub Pages. No server-side runtime — everything is pre-rendered at build time.

Full architecture documentation is in `docs/architecture/`. Key design decisions:

- Client-side search (MiniSearch) rather than a server or third-party service
- Assets in `public/` only — `nuxt-content-assets` was removed; no asset co-location with Markdown
- Pug + Tailwind requires the custom separator `--` (see below)

### Directory Layout

- `app/` — All application source code (Nuxt 4 `app/` directory pattern; **not** root-level)
- `content/` — Markdown blog posts (`content/blog/`) and static pages; `content/authors.json` for author metadata
- `public/` — Static assets (images, fonts, etc.); reference from Markdown as absolute paths (e.g. `![alt](/images/foo.jpg)`)
- `content.config.ts` — **Source of truth** for collection schemas (Zod-validated); modify here when changing content structure
- `nuxt.config.ts` — Modules, CSS entry point, markdown config
- `docs/` — Architecture docs, design decisions, migration history

### Content Collections

Defined in `content.config.ts`. Three collections:

- **`blog`** — Blog posts. Key frontmatter: `headline`, `description`, `date`, `dateUpdated`, `author`, `tags` (array), `socialImage` (`{ src, mime, width, height, alt }`)
- **`content`** — Static pages (about, etc.)
- **`authors`** — `content/authors.json`; Schema.org Person objects keyed by author name

Note: `excerpt` is a reserved keyword in Nuxt Content — use `description` instead for post summaries.

### Data Fetching (Content v3 — strict)

**Never use** `queryContent()` or `<ContentDoc />` — those are legacy Content v2.

```ts
// Collection listing
queryCollection('blog').order('date', 'DESC').limit(6).all()

// Single item
queryCollection('blog').path(cleanPath).first()

// Filtering (SQL-like syntax)
queryCollection('blog').where('tags', 'LIKE', '%pinned%').all()

// Prev/next surroundings
queryCollectionItemSurroundings('blog', cleanPath, { fields: ['headline', 'description'] })

// Render fetched content
<ContentRenderer :value="doc" />
```

Always wrap data fetches in `useAsyncData('unique-key', ...)`.

### Styling

- **Design system**: Multitude design system — CSS custom properties defined in `app/assets/css/main.multitude.css`; warm cream background (`var(--background-light)`), Space Grotesk font, orange accent (`var(--accent-warm)`). Full spec in `docs/prompts/multitude-design-system.md`.
- **Tailwind CSS** uses a custom separator `--` due to Pug syntax conflicts with `:`. Responsive classes are `md--flex`, **not** `md:flex`. This affects all responsive and state variants.
- Typography classes: `.display-xl/lg/md`, `.heading-xl/lg/md/sm`, `.body-lg/md/sm`, `.overline`, `.caption`, `.label`
- Scroll reveal: add `.reveal` or `.reveal-slide-x` to elements, call `useReveal()` composable in `<script setup>`

### Templating

Most components use **Pug** (`<template lang="pug">`). Vue SFCs, Composition API with `<script setup>`. Components in `app/components/content/` (e.g. `ProseCode.vue`, `ProseImg.vue`) are automatically available inside Markdown via MDC.

### Key Composables

- `useSeo(options)` — Sets page meta/OG/Twitter tags; accepts `title`, `description`, `image`, `url`, `type`, `author`, `publishedTime`
- `useReveal()` — Wires Intersection Observer on `.reveal` / `.reveal-slide-x` elements; call in `<script setup>` (runs on `onMounted`)
- `useSearch()` — MiniSearch-based client-side full-text search; builds index once as a singleton (via `queryCollectionSearchSections`), not re-built on navigation

### Testing

Vitest with `happy-dom`. Test files live in `__tests__/` subdirectories alongside the code they test (e.g. `app/composables/__tests__/useSeo.test.ts`). Run a single test file: `pnpm test path/to/file.test.ts`. Coverage is currently low — the framework exists but needs population.

### Deployment

GitHub Pages via the `gh-pages` package. `pnpm publish` runs `nuxt generate` (outputs to `.output/public`) then deploys that directory. Static assets must be in `public/` — no co-located assets with Markdown files in `content/`.
