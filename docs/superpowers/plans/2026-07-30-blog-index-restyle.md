# Blog Index Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the blog index page (`/blog`) so it shares the front page's purple/green color-block accent language, with the newest post given a larger "featured" treatment above the regular grid.

**Architecture:** Reuse the exact color pattern already in `app/components/blog/pinned.vue` (`.pinned__title` / `.pinned__description`) as new scoped CSS in a new `BlogFeatured` component and in the existing `BlogList` component. `app/pages/blog/index.vue` splits its fetched posts into one featured post + a grid of the rest. `app/pages/blog/page/[number].vue` is untouched — it inherits the `BlogList` restyle automatically, with no featured slot.

**Tech Stack:** Nuxt 3, Vue 3 `<script setup>`, Tailwind (custom `--` separator), Nuxt Content `queryCollection`.

**No test infra exists for Vue components in this repo** (only `app/composables/__tests__/useSeo.test.ts` for composable logic — no `@vue/test-utils` component tests). This plan verifies each step by checking the SSR HTML output from the Nuxt dev server with `curl` (structural correctness: right classes, right post counts) plus a final manual visual pass in the browser (color correctness, which `curl` can't check). This matches the codebase's existing testing scope rather than introducing new component-test infrastructure for a purely visual change.

---

## Before you start

Start the Nuxt dev server in the background and leave it running for the whole plan:

```bash
cd /Users/michaelpaulukonis/projects/michaelpaulukonis.github.io
npm run dev
```

Confirm it's up:

```bash
curl -s http://localhost:3000/blog | grep -o '<title>[^<]*' 
```

Expected: `<title>Blog - michaelpaulukonis.github.io` (or similar — any non-empty output means the server responded).

There are 11 posts in `content/blog/`, and `blogCountLimit` is 6, so `/blog` (page 1) shows 6 posts and `/blog/page/2` shows the remaining 5. Page 1 is where the featured split happens (1 featured + 5 grid); page 2 stays a plain 5-post grid.

---

### Task 1: Create `BlogFeatured` component

**Files:**
- Create: `app/components/blog/featured.vue`

- [ ] **Step 1: Write the component**

```vue
<template>
    <div class="rounded-md border-2 border-typography_primary hover--border-brand_primary group relative mb-8">
        <NuxtLink :to="article.path + '/'" class="p-6 block relative">
            <header>
                <h2 class="blog-featured__title text-h2 leading-h2 font-semibold mb-3">
                    {{ article.headline }}
                </h2>
                <p class="blog-featured__date mb-4">
                    {{ $formatDate(article.date) }}
                </p>
                <p class="text-typography_primary">{{ article.description }}</p>
            </header>
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    article: {
        type: Object,
        required: true
    }
});
const { $formatDate } = useNuxtApp();
</script>

<style scoped>
.blog-featured__title {
    display: inline-block;
    padding: 3px 10px;
    background-color: #7d5cff;
    color: #fcfcfc;
    border-radius: 2px;
}

.blog-featured__date {
    display: inline-block;
    padding: 2px 8px;
    background: #38ef7d;
    color: #000;
    font-size: 0.875rem;
}
</style>
```

This mirrors `app/components/blog/pinned.vue`'s color pattern (`#7d5cff` headline block, `#38ef7d` date block) at a larger scale (`text-h2`/`leading-h2` from `tailwind.config.js`, vs. `BlogList`'s `text-h3`), no image, no tag chip (explicitly deferred in the design spec).

- [ ] **Step 2: Sanity-check the file was written correctly**

This repo has no `vue-tsc`/lint/typecheck script (checked `package.json` — only `build`, `dev`, `test`). `BlogFeatured` isn't used anywhere yet, so it can't be exercised via the dev server until Task 3 wires it up. For now just confirm the file is non-empty and has the expected top-level tags:

```bash
grep -c '<template>\|<script setup>\|<style scoped>' app/components/blog/featured.vue
```

Expected: `3`

Full verification (it actually renders correctly) happens in Task 3, Step 2.

- [ ] **Step 3: Commit**

```bash
git add app/components/blog/featured.vue
git commit -m "feat: add BlogFeatured component for blog index hero post"
```

---

### Task 2: Restyle `BlogList` headline/date chips

**Files:**
- Modify: `app/components/blog/list.vue`

- [ ] **Step 1: Replace the headline/date markup and add scoped styles**

Replace the full contents of `app/components/blog/list.vue` with:

```vue
<template>
    <ul class="grid grid-cols-10 gap-4 text-typography_primary">
        <li
            v-for="article in data"
            :key="article.path"
            class="bg-gray-300 col-span-full md--col-span-5 relative rounded-md border-2 border-typography_primary hover--border-brand_primary group"
        >
            <NuxtLink :to="article.path + '/'" class="p-4 block relative">
                <div class="wrapper">
                    <header>
                        <h2 class="blog-list__title text-h3 leading-h3 font-semibold mb-2">
                            {{ article.headline }}
                        </h2>
                        <p class="blog-list__date mb-4">
                            {{ $formatDate(article.date) }}
                        </p>
                        <p>{{ article.description }}</p>
                    </header>
                </div>
            </NuxtLink>
        </li>
    </ul>
    <p v-if="data.length == 0" class="w-full md--w-7/12 text-h3 leading-h3 font-bold dark--text-white">{{message}}</p>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    message: {
        type: String,
        default: "There are no posts right now, but stay tuned for newer releases in the future."
    }
});
const { $formatDate } = useNuxtApp();
</script>

<style scoped>
.blog-list__title {
    display: inline-block;
    padding: 2px 8px;
    background-color: #7d5cff;
    color: #fcfcfc;
    border-radius: 2px;
}

.blog-list__date {
    display: inline-block;
    padding: 1px 6px;
    background: #38ef7d;
    color: #000;
    font-size: 0.875rem;
}
</style>
```

The only changes from the current file: the `h2` and date `p` lose their old text-color/hover classes and gain `blog-list__title` / `blog-list__date`, and a new `<style scoped>` block is added. Grid layout, card border, hover-border, and the empty-state message are untouched.

- [ ] **Step 2: Verify structurally via curl**

With the dev server running:

```bash
curl -s http://localhost:3000/blog/page/2 | grep -o 'blog-list__title' | wc -l
```

Expected: `5` (page 2 has 5 posts, all rendered through the unmodified `BlogList` grid — this page has no featured split).

- [ ] **Step 3: Commit**

```bash
git add app/components/blog/list.vue
git commit -m "style: apply purple/green chip accents to BlogList cards"
```

---

### Task 3: Split featured post out of `blog/index.vue`

**Files:**
- Modify: `app/pages/blog/index.vue`

- [ ] **Step 1: Replace the file contents**

```vue
<template lang="pug">
main
  BlogHero
  Section#main.pt-0-important
    BlogFeatured(v-if="featuredPost" :article="featuredPost")
    BlogList(v-if="gridPosts.length > 0" :data="gridPosts")
    BlogPagination.mt-8(
      v-if="totalPages > 1"
      :currentPage="1"
      :totalPages="totalPages"
      :nextPage="totalPages > 1"
      baseUrl="/blog/"
      pageUrl="/blog/page/"
    )
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const blogCountLimit = 6;

const { data } = await useAsyncData('blog-list', async () => {
  const [allPosts, posts] = await Promise.all([
    queryCollection('blog').all(),
    queryCollection('blog')
      .order('date', 'DESC')
      .limit(blogCountLimit)
      .all()
  ]);
  
  return {
    posts,
    totalPages: Math.ceil(allPosts.length / blogCountLimit)
  };
});

const posts = computed(() => data.value?.posts ?? []);
const featuredPost = computed(() => posts.value[0]);
const gridPosts = computed(() => posts.value.slice(1));
const totalPages = computed(() => data.value?.totalPages || 0);

useSeo({
  title: 'Blog',
  description: 'Articles and musings on art, programming, and generative experiments.'
})
</script>
```

Changes from the current file: `posts` now defaults to `[]` instead of possibly being `undefined` (needed since `featuredPost`/`gridPosts` index into it), and two new computed values (`featuredPost`, `gridPosts`) replace the single `BlogList(v-if="posts" ...)` line with `BlogFeatured` + `BlogList` fed from the split. Query logic, `totalPages` math, and SEO are unchanged.

- [ ] **Step 2: Verify the split via curl**

```bash
curl -s http://localhost:3000/blog | grep -o 'blog-featured__title' | wc -l
```

Expected: `1` (exactly one featured post on page 1).

```bash
curl -s http://localhost:3000/blog | grep -o 'blog-list__title' | wc -l
```

Expected: `5` (the remaining 5 of the 6 fetched posts go to the grid).

- [ ] **Step 3: Commit**

```bash
git add app/pages/blog/index.vue
git commit -m "feat: give newest blog post a featured treatment on /blog"
```

---

### Task 4: Manual visual verification

No code changes in this task — confirms the colors (which `curl` can't check) and confirms `/blog/page/2` correctly has no featured post.

- [ ] **Step 1: Visually check `/blog`**

Open `http://localhost:3000/blog` in a browser. Confirm:
- Newest post appears once, above the grid, with a visibly larger purple headline chip and green date chip than the grid cards below it.
- Grid below shows the next 5 posts, each with the same purple/green chip pattern at the original (smaller) `text-h3` size.
- Card shape (rounded corners, border, hover border color) is unchanged from before.

- [ ] **Step 2: Visually check `/blog/page/2`**

Open `http://localhost:3000/blog/page/2`. Confirm:
- No featured post — just the 5-post grid with the same restyled chips.
- Pagination control at the bottom still works (unchanged from before).

- [ ] **Step 3: Check an individual post page still renders correctly**

Open any post, e.g. `http://localhost:3000/blog/watmap/`. Confirm it's visually unchanged (this plan doesn't touch `app/pages/blog/[...slug].vue`).

---

## Self-review notes

- **Spec coverage:** All five design-doc changes are covered — new `BlogFeatured` (Task 1), `BlogList` chip restyle (Task 2), `blog/index.vue` split (Task 3), `page/[number].vue` left untouched by design (confirmed visually in Task 4, no code task needed since the spec calls for zero changes there), `BlogHero`/`BlogPagination` left untouched (no task touches them).
- **No tag chips, no images:** Neither `BlogFeatured` nor the `BlogList` restyle add image or tag-chip markup, per the design doc's explicit deferral.
- **Naming consistency:** `article` prop name matches `BlogList`'s existing per-item variable name (`v-for="article in data"`) and `BlogPinned`'s prop usage, so `BlogFeatured`'s `:article="featuredPost"` reads consistently across all three post-card components.
