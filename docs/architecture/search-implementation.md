# Search Implementation

The site uses a client-side full-text search implemented with [MiniSearch](https://github.com/lucaong/minisearch) and Nuxt Content v3's `queryCollectionSearchSections` API.

## Architecture

1.  **Index Building (Client-Side)**:
    *   The `useSearch` composable fetches *all* searchable sections from the `blog` and `content` collections using `queryCollectionSearchSections`.
    *   This data is fed into a `MiniSearch` instance, which runs entirely in the browser.
    *   **Singleton State**: The MiniSearch index is built once and stored in a global singleton (`miniSearch` ref in `useSearch.ts`). This ensures that navigating between the Search Bar and the Search Page doesn't trigger a re-fetch or re-index.

2.  **Search Logic**:
    *   **Fuzzy Matching**: Configured with `fuzzy: 0.2` to handle typos.
    *   **Prefix Matching**: Enabled (`prefix: true`) so "poly" matches "polychrome".
    *   **Boost**: Titles are boosted (`boost: { title: 2 }`) to prioritize header matches over body content.

3.  **Grouping**:
    *   Raw results from MiniSearch are sections (paragraphs, headers).
    *   We group these by their parent page path to present a cleaner list of *pages* rather than dozens of snippets from the same article.

## Key Files

*   **`app/composables/useSearch.ts`**: The core logic. Manages the global MiniSearch instance and `isIndexed` state.
*   **`app/components/UI/SearchBar.vue`**: The modal search interface in the header.
*   **`app/pages/search.vue`**: The dedicated search results page.
*   **`content.config.ts`**: Defines which fields (title, description, body) are indexed by Nuxt Content.

## Why Client-Side?

For a static site of this size (hundreds of pages), a client-side index is extremely fast and avoids the need for a server-side search API or third-party service (like Algolia). The index is small enough to load quickly, and subsequent searches are instant.
