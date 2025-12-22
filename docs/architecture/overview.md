# Architecture Overview

**Status:** Stable / In-Transition
**Last Updated:** December 21, 2025

## 1. High-Level Design

This application is a **Static Site Generator (SSG)** built on the **Nuxt 4** ecosystem. It is designed to be:

- **Fast:** Serving pre-rendered HTML and static JSON payloads.
- **Maintainable:** Using file-system routing and structured content schemas.
- **Portable:** Hosted statically on GitHub Pages with no server-side requirements.

## 2. Technology Stack

- **Framework:** [Nuxt 4](https://nuxt.com) (configured via `compatibilityVersion: 4`)
- **Language:** TypeScript, Vue 3 (Composition API)
- **Content Engine:** [Nuxt Content v3](https://content.nuxt.com)
  - **Dev:** Powered by `better-sqlite3` for local SQL-like querying.
  - **Prod:** Static JSON chunks generated at build time.
- **Styling:** Tailwind CSS v6 (Utility-first)
- **Templating:** Pug (via `@vue/language-plugin-pug`)

## 3. Data Architecture

### Content Source of Truth

The `content.config.ts` file is the strict definition of the application's data layer. It defines Zod schemas for:

- **`content`**: Generic pages (e.g., About, Projects).
- **`blog`**: Article posts with metadata (tags, dates, images).
- **`authors`**: Structured author data.

### Data Flow

1. **Authoring**: Content is written as Markdown (`.md`) or JSON files in `content/`.
2. **Ingestion**: Nuxt Content validates files against `content.config.ts`.
3. **Querying**: Components use `queryCollection()` to fetch data.

   ```ts
   // Example: Fetching a single blog post
   const { data: post } = await useAsyncData(path, () => {
     return queryCollection('blog').path(path).first()
   })
   ```

4. **Rendering**: The `<ContentRenderer :value="post" />` component handles Markdown parsing and component injection.

## 4. Component Architecture

The codebase follows the Nuxt 4 `app/` directory structure:

- **`app/pages/`**: Handles routing.
  - `[...slug].vue`: Catch-all for generic pages.
  - `blog/[...slug].vue`: specialized logic for blog post rendering.
  - `blog/page/[number].vue`: Pagination logic.
- **`app/components/`**: Atomic UI units.
  - `content/`: Components available directly within Markdown (Prose).
  - `blog/`: Blog-specific UI (lists, headers).
- **`app/layouts/`**: high-level wrappers (`default`, `purple`).

## 5. Asset Management

- **Static Assets**: Images and files referenced in content **MUST** reside in `public/`.
- **References**: Use absolute paths (`/images/blog/my-pic.jpg`).
- **Processing**: Nuxt copies `public/` to the root of the build output (`.output/public`) unchanged.

## 6. Build & Deployment

### Build Pipeline (`pnpm publish`)

1. **Clean**: Removes old build artifacts.
2. **Generate**: `nuxt generate` builds the static site.
   - Crawls all routes.
   - Generates `.html` files for SEO/initial load.
   - Generates `.json` payloads for client-side navigation.
3. **Deploy**: `gh-pages` pushes the `.output/public` folder to the `gh-pages` branch on GitHub.

## 7. Migration History

This project has evolved from a Nuxt 2 / Content v1 stack. Historical migration plans are archived in `docs/architecture/history/`.

- **Nuxt 2 -> 3**: Major framework upgrade.
- **Content v2 -> v3**: Shift from Mongo-style queries to SQL-like collections.
- **Nuxt 3 -> 4**: Adoption of new folder structure (`app/`).

## 8. Search

The site implements a client-side full-text search using MiniSearch. See [Search Implementation](search-implementation.md) for details.
