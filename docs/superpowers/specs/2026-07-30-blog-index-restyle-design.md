# Blog index page restyle

## Problem

Front page (`app/pages/index.vue`) and individual post pages (`app/pages/blog/[...slug].vue`) have a distinct visual identity: bold color-block accents (purple/green from `BlogPinned`), big confident headline treatment. The blog index pages (`app/pages/blog/index.vue`, `app/pages/blog/page/[number].vue`) don't share that identity — cards in `BlogList` are flat gray boxes with no accent color, feeling disconnected from the rest of the site.

## Goals

- Bring the blog index card styling in line with the front page's `BlogPinned` color language (purple `#7d5cff` headline block, green `#38ef7d` date block).
- Give the newest post on the first index page (`/blog`) a featured treatment, echoing how the front page gives recent/pinned posts special weight.
- Keep the existing rounded-corner card shape and 2-column grid — those aren't the complaint.

## Non-goals (explicitly deferred)

- No background/faded images on cards. Considered, set aside — too much for this pass.
- No tag/category chips. Explored as an option, decided against for now — added clutter without enough payoff.
- No changes to `BlogHero`, `BlogPagination`, or the individual post page — those already work.
- No featured treatment on paginated pages (`/blog/page/2`, etc.) — a "featured" post only makes sense as the single newest post on page 1.

## Design

### Color treatment (new shared style)

Purple/green block-color pattern currently lives only in `app/components/blog/pinned.vue` as scoped CSS (`.pinned__title`, `.pinned__description`). Reuse the same colors in `BlogList` and the new `BlogFeatured`. Since the pattern is now used in two places, factor it into shared scoped classes per component (not a global token) — same hex values, no new design tokens introduced given this is a two-consumer pattern, not a systemic one.

- Headline: `background:#7d5cff; color:#fcfcfc` block
- Date: `background:#38ef7d; color:#000` block

### New component: `app/components/blog/featured.vue`

- Props: single `article` object (same shape as `BlogList`'s items).
- Full-width card, rounded-md border matching existing card style.
- Larger headline chip and date chip than `BlogList` (bigger font-size/padding — establishes visual hierarchy as "the newest post").
- No image, no tag chip.
- Links to the post via `NuxtLink`, same pattern as `BlogList`.

### `app/components/blog/list.vue` changes

- Replace the current plain `h2`/`p` headline and date with the purple headline chip / green date chip pattern (smaller scale than `BlogFeatured`).
- Keep existing grid (`grid grid-cols-10 gap-4`, `col-span-full md--col-span-5`), rounded-md border, hover border color.
- Keep the empty-state message behavior unchanged.

### `app/pages/blog/index.vue` changes

- Fetch newest post separately from the rest: newest 1 post for `BlogFeatured`, next 5 for `BlogList` (`blogCountLimit` stays 6 total posts fetched/considered for pagination math — only the split for rendering changes).
- Template order: `BlogHero` → `BlogFeatured` (newest post) → `BlogList` (remaining posts) → `BlogPagination`.
- `totalPages` calculation unchanged (still based on all posts / `blogCountLimit`).

### `app/pages/blog/page/[number].vue` changes

- No structural change — still just `BlogList` + `BlogPagination`. Inherits the new chip styling automatically once `BlogList` is restyled. No featured slot on these pages.

## Testing

- Visual check in dev server at `/blog` (featured post + grid) and `/blog/page/2` (grid only, no featured).
- Confirm empty-state message still renders if a page somehow has zero posts (shouldn't happen given routing guards, but `BlogList`'s existing check stays).
- Confirm hover states (`hover--border-brand_primary` on cards) still work after class changes.
