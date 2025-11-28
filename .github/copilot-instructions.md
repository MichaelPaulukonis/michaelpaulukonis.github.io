
# GitHub Copilot Instructions

## Project Context

This is my personal website and blog, built with Nuxt.js 3 and deployed to GitHub Pages. Content is managed using Nuxt Content (currently v2, but migration to v3 is planned).

## Technology Stack

- **Framework:** Nuxt.js 3 (Vue 3)
- **Content Management:** Nuxt Content v2 (v3 migration planned)
- **Styling:** Tailwind CSS (v6.13.2), CSS/SCSS
- **Template Engine:** Pug (via `@vue/language-plugin-pug`)
- **Deployment:** GitHub Pages
- **Other:** `@vueuse/core`, `nuxt-content-assets`, `@nuxt/fonts`, `rehype-external-links`, `sass`

## Project Structure

- `pages/` — Route components
- `components/` — Reusable Vue components
- `content/` — Markdown/JSON content files
- `public/` — Static assets
- `layouts/` — Page layouts and templates
- `assets/` — CSS, fonts, images
- `docs/` — Project documentation and notes

## Coding Standards

- Use TypeScript for new code when possible
- Use Composition API (`setup()`, `ref()`, `computed()`, etc.)
- Prefer semantic HTML and accessibility best practices
- Use ESLint and Prettier for code formatting
- Use Tailwind CSS utility classes for styling
- Use Pug for templates where appropriate

## Content Management

- Write content in Markdown, YAML, JSON, or CSV in the `content/` directory
- Use Nuxt Content queries for filtering and displaying content
- Plan to migrate to Nuxt Content v3 for improved features and compatibility

## Development Workflow

1. Local development with `nuxt dev`
2. Content creation in Markdown files
3. Component development in Vue
4. Build with `nuxt build` and generate static site with `nuxi generate`
5. Deploy to GitHub Pages using `gh-pages`

## Deployment

- Deploy using the `publish` script: cleans, generates, and pushes to GitHub Pages
- Base URL configuration for custom domain or repo-based URL
- No custom CI/CD; manual deployment via npm scripts

## Future Enhancements

- Migrate to Nuxt Content v3
- Add custom CMS tools for easier content management
- Enhance interactive elements and blog features
- Integrate analytics and comments

## Reference Materials

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt Content Documentation](https://content.nuxtjs.org/)
- [GitHub Pages Deployment Guide](https://nuxt.com/deploy/github-pages)

## Notes

- There are inconsistencies in documentation and package versions; migration to Nuxt Content v3 is planned but not yet complete.
- Some instructions and numbering may be inconsistent due to previous deletions and edits.
