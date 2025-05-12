# Personal Website Project Master Document

## Overview
This project is a personal website and blog platform built using modern web technologies. It serves as both a portfolio and a content publishing platform, allowing for easy creation and management of various types of content including blog posts, project showcases, and personal information.

## Technology Stack
- **Framework**: Nuxt 2 - A Vue.js framework that provides server-side rendering capabilities and an improved development experience
  - TODO: Migrate to Nuxt 3
- **Content Management**: Nuxt Content v3 - A document-driven CMS for Nuxt that allows writing content in Markdown
- **Styling**: CSS/SCSS for custom styling, leaning on Tailwind@6.13.2
- **Template Engine** pug - A template engine for Node.js that allows for cleaner HTML syntax
- **Deployment**: GitHub Pages - Simple hosting directly from the repository
- **Version Control**: Git/GitHub

## Core Features
- Blog posting capabilities with Markdown support
- Portfolio/project showcase section
- Responsive design for all devices
- Fast loading and performance optimized
- SEO friendly structure
- Content organization system

## Architecture
The project follows Nuxt's directory structure with:
- `pages/` - Route components
- `components/` - Reusable Vue components
- `content/` - Markdown/JSON content files
- `public/` - Static assets
- `layouts/` - Page layouts and templates

## Content Management
The content is managed through Nuxt Content which allows:
- Writing in Markdown, CSV, YAML, JSON(5), or XML
- Live editing capabilities
- Full-text search functionality
- Query builders for content filtering
- Syntax highlighting for code blocks

## Development Workflow
1. Local development using Nuxt development server
2. Content creation in Markdown files
3. Component development in Vue
4. Testing across devices and browsers
5. Building and deploying to GitHub Pages

## Deployment Strategy
The site is deployed to GitHub Pages with the following configuration:
- Repository: `michaelpaulukonis.github.io`
- Base URL configuration: For custom domain or repository-based URL
- GitHub Actions for automated deployment

## Future Enhancements
- Custom CMS tool for easier content management
- Complete migration to Content v3
- Enhanced interactive elements
- Integration with external APIs for additional functionality
- Analytics integration
- Comment system for blog posts

## Reference Materials
- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt Content Documentation](https://content.nuxtjs.org/)
- [GitHub Pages Deployment Guide](https://nuxt.com/deploy/github-pages)
