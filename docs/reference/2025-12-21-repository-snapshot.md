# Repository Snapshot: michaelpaulukonis.github.io

**Date:** December 21, 2025
**Version:** 1.1.0
**Status:** Stable (Nuxt 4 / Content v3)

## 1. Project Overview

- **Project Name**: michaelpaulukonis.github.io (Personal Website & Blog)
- **Purpose**: A personal portfolio and blog site hosting articles, project showcases, and author information.
- **Project Type**: Static Web Application (SSG)
- **Target Audience**: Developers, recruiters, and technical readers interested in the author's work.
- **Current Status**: **Stable**. The codebase has been fully upgraded to Nuxt 4 and Nuxt Content v3. Key infrastructure (search, SEO, testing) is in place.
- **Technology Stack**:
  - **Framework**: Nuxt 4 (via `compatibilityVersion: 4`)
  - **Language**: TypeScript / Vue 3 (Composition API)
  - **Content Engine**: Nuxt Content v3 (SQLite-backed during dev, static JSON at build)
  - **Styling**: Tailwind CSS (v6.14.0)
  - **Templating**: Pug (via `@vue/language-plugin-pug`)
  - **Package Manager**: pnpm

## 2. Architecture Summary

### Overall Architecture

The application is a **Static Site Generator (SSG)**. Content is written in Markdown and JSON, processed by Nuxt Content v3 into a local SQLite database (dev) or static chunks (prod), and rendered via Vue components.

### Key Components

- **Content Engine (`content.config.ts`)**: Defines the schema for `content` (pages), `blog` (articles), and `authors`. This is the single source of truth for data structure.
- **Data Fetching**: Uses `queryCollection()` (Content v3 API) to retrieve data from defined collections.
- **Search**: Client-side full-text search implemented with `MiniSearch` and `queryCollectionSearchSections`.
- **Rendering**: Uses `<ContentRenderer />` to display Markdown content with Vue component injection.
- **Routing**: File-system based routing in `app/pages/`, with dynamic routes for blog posts (`app/pages/blog/[...slug].vue`) and generic pages (`app/pages/[...slug].vue`).

### Data Flow

1. **Source**: Markdown/JSON files in `content/` directory.
2. **Processing**: Nuxt Content v3 validates files against schemas in `content.config.ts`.
3. **Build Time**: Data is pre-rendered into static HTML and payload files.
4. **Runtime**: Client-side navigation fetches static JSON payloads; initial load is fully static HTML.

### External Dependencies

- **GitHub Pages**: Hosting provider.
- **Tailwind CSS**: Utility-first CSS framework.
- **Better-SQLite3**: Local database engine for content queries during development.
- **MiniSearch**: Client-side search library.

## 3. Repository Structure Analysis

The project follows the **Nuxt 4 directory structure**, utilizing the `app/` directory for source code.

```text
/
├── .gemini/              # AI Agent configuration
├── .github/              # GitHub Actions (if any) & Copilot instructions
├── .taskmaster/          # Project management (Tasks, PRDs)
├── app/                  # Main Source Code
│   ├── components/       # Vue components (Blog, Content, UI)
│   ├── composables/      # Shared logic (useSeo, useSearch)
│   ├── layouts/          # Page layouts (default, purple)
│   ├── pages/            # Application routes
│   │   ├── blog/         # Blog specific routes & pagination
│   │   └── [...slug].vue # Catch-all for standard pages
│   └── app.vue           # Root component
├── content/              # Content Sources (Markdown, JSON)
├── docs/                 # Documentation & Migration Plans
├── public/               # Static Assets (Images, Favicons)
├── content.config.ts     # Content v3 Schema Definition
├── nuxt.config.ts        # Nuxt Application Config
├── tailwind.config.js    # Styling Config
└── vitest.config.ts      # Testing Config
```

## 4. Feature Analysis

### Core Features

- **Blog Engine**: Markdown-based articles with metadata (tags, dates, authors).
- **Pagination**: Supported via `app/pages/blog/page/[number].vue`.
- **Tagging System**: Articles can be filtered/displayed by tags.
- **Search**: Full-text search across all content with keyboard support.
- **SEO**: Automated meta tags (Open Graph, Twitter) and sitemap generation.
- **Authors Management**: Structured author data linked to posts.
- **Static Asset Handling**: Images and assets served from `public/`.

### User Workflows

1. **Reading Blog**: User lands on `/blog`, browses list, clicks article -> `/blog/article-slug`.
2. **Search**: User presses `/` or clicks search icon -> types query -> views results.
3. **Navigation**: Users navigate via top navbar to generic pages (About, Projects).
4. **Pagination**: Users navigate through blog history via pagination controls.

## 5. Development Setup

### Prerequisites

- **Node.js**: Compatible version (LTS recommended).
- **pnpm**: Package manager.
- **SQLite**: Required for `better-sqlite3` (Content v3 dependency).

### Quick Start Guide

1. **Install Dependencies**:

    ```bash
    pnpm install
    ```

2. **Start Development Server**:

    ```bash
    pnpm dev
    ```

3. **Build for Production**:

    ```bash
    pnpm generate
    ```

### Code Quality & Testing

- **Linting**: ESLint config is implied but strictness varies.
- **Type Safety**: TypeScript is enabled but strict mode usage should be verified.
- **Testing**: **Vitest** is configured for unit testing. Run tests with `pnpm test`.

## 6. Documentation Assessment

- **README.md**: **Complete**. Comprehensive landing page created.
- **Architecture Docs**: **Complete**. Consolidated in `docs/architecture/`.
- **Code Documentation**: Improved. Key components and composables are documented.

## 7. Recommendations and Next Steps

### Completed
- [x] **Rewrite `README.md`**: New structure created.
- [x] **Consolidate Docs**: Architecture overview created, history archived.
- [x] **Infrastructure Cleanup**: Config files audited and cleaned.
- [x] **Verify Asset Migration**: Assets moved to `public/` and links fixed.
- [x] **Implement Search**: Client-side search added.
- [x] **Enhance SEO**: `useSeo` composable and sitemap added.
- [x] **Implement Testing**: Vitest framework set up.

### Priority 2: Refinement
- **Type Safety**: Audit codebase for `any` types and improve strictness.
- **Test Coverage**: Expand unit tests to cover more components.

### Priority 3: Features
- **Dark Mode**: fully implement and verify dark mode styles (partially present in CSS).

## 8. Technical Debt
- **Type Safety**: Some `any` types remain from rapid migration.
- **Test Coverage**: Framework exists, but coverage is currently low (only core composables tested).

## 9. Project Health Metrics
- **Complexity**: Low/Medium. Standard SSG architecture.
- **Maintainability**: High. Nuxt 4 + Content v3 provides a strong, typed structure.
- **Documentation**: High. Complete README and Architecture docs.
- **Test Coverage**: Low (Framework established, needs population).

## 10. Key Contact Points

- **Author**: Michael Paulukonis
- **Issues**: GitHub Issues page (if public) or direct repository contact.
