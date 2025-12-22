# Michael Paulukonis - Personal Website

![Website Screenshot, outdated as soon as it was captured](./docs/michaelpaulukonis_github_io.png)

I don't feel the need to update this as often as I once did. It's a static site, portfolio, and blog, currently being modernized with the latest Nuxt stack.

## 🚀 Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com)
- **Content Engine:** [Nuxt Content v3](https://content.nuxt.com)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) (v6)
- **Database:** SQLite (dev) / Static JSON (prod)
- **Templating:** Pug & Vue 3 Composition API
- **Package Manager:** [pnpm](https://pnpm.io)

## 🏗️ Architecture

This is a **Static Site Generator**. Markdown files go into the `content/` folder, and HTML is generated for deployment.

During development, Nuxt Content v3 processes content into a local SQLite database for querying. When building, it generates static JSON payloads so the site loads instantly on GitHub Pages without a backend.

### Directory Structure

Standard Nuxt 4 setup:

```text
/
├── app/                  # Source code
│   ├── components/       # Vue components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Routes (File-system based)
│   └── app.vue           # Root component
├── content/              # Content (Markdown, JSON)
├── public/               # Static Assets (Images, Favicons)
├── content.config.ts     # Content Schema Definitions
└── nuxt.config.ts        # Nuxt Configuration
```

## 🛠️ Quick Start

To run locally:

### Prerequisites

- Node.js (LTS)
- pnpm
- SQLite (for the local dev database)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/michaelpaulukonis/michaelpaulukonis.github.io.git
    cd michaelpaulukonis.github.io
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

3. **Run it:**

    ```bash
    pnpm dev
    ```

    Go to `http://localhost:3000`.

### Testing

This project uses Vitest for testing. To run the tests:

```bash
pnpm test
```

## 📦 Deployment

This lives on **GitHub Pages**.

To build and deploy (if you are me):

```bash
pnpm publish
```

This script will:

1. Clean the output directory.
2. Generate the static site (`pnpm generate`).
3. Deploy the `.output/public` folder to the `gh-pages` branch.

## 📝 Writing Content

- **Blog Posts**: New `.md` files go in `content/blog/`.
- **Static Pages**: New `.md` files go in `content/`.
- **Authors**: Metadata in `content/authors.json`.
- **Schemas**: Content structure is defined in `content.config.ts`.

## 📄 Documentation

Additional documentation can be found in the `docs/` directory:

-   [Reference Snapshot](docs/reference/2025-12-21-repository-snapshot.md): Technical overview.

-   [Search Implementation](docs/architecture/search-implementation.md): Details on the MiniSearch integration.

-   [Migration Plans](docs/plans/): Migration history.



## 🤝 Contributing

Sure, why not. Just follow the existing ~~mess~~ patterns.

---
*Maintained by Michael Paulukonis.*
