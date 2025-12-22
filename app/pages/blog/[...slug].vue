<script setup>
const { $formatDate } = useNuxtApp();
const route = useRoute();
const cleanPath = route.path.replace(/\/+$/, '') || '/';

const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
  const [article, surround] = await Promise.all([
    queryCollection('blog').path(cleanPath).first(),
    queryCollectionItemSurroundings('blog', cleanPath, {
      fields: ['headline', 'description', 'excerpt']
    })
  ]);
  return { article, surround };
});

if (!data.value?.article && !error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const doc = computed(() => data.value?.article);

// Get the authors
const { data: authorData } = await useAsyncData('authors', () => queryCollection('authors').first());

// Set the meta
const baseUrl = 'https://michaelpaulukonis.github.io';
const canonicalPath = baseUrl + (route.path + '/').replace(/\/+$/, '/');
const image = baseUrl + (doc.value?.socialImage?.src ? (doc.value.socialImage.src.startsWith('/') ? doc.value.socialImage.src : '/' + doc.value.socialImage.src) : '/sample.webp');

useSeo({
  title: doc.value?.title,
  description: doc.value?.description,
  image: image,
  url: canonicalPath,
  type: 'article',
  author: doc.value?.author,
  publishedTime: doc.value?.date?.split('T')[0],
  modifiedTime: (doc.value?.dateUpdated || doc.value?.date)?.split('T')[0]
})

// JSON+LD
const jsonScripts = computed(() => {
  if (!doc.value) return [];
  return [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://michaelpaulukonis.github.io/'
        },
        url: canonicalPath,
        image: image,
        headline: doc.value.headline,
        abstract: doc.value.excerpt,
        datePublished: doc.value.date,
        dateModified: doc.value.dateUpdated || doc.value.date,
        author: authorData.value ? authorData.value[doc.value.author] : undefined,
        publisher: authorData.value ? authorData.value['Michael Paulukonis'] : undefined
      })
    }
  ];
});

useHead({
  script: jsonScripts
});
</script>

<template>
  <main class="blog-post-text" v-if="doc">
        <Section id="blog-title" type="header" class="bg-gray-300">
          <div >
            <div
              class="border-t-8 pt-8 border-typography_primary flex flex-col md--flex-row items-center md--justify-between md--text-right mb-12 md--mb-8">
              <!-- Breadcrumbs -->
              <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="blog-breadcrumb p-3">
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                  <a itemprop="item" href="/"> <span itemprop="name">Home</span></a>
                  <meta itemprop="position" content="1" />
                </li>
                <li class="separator"> > </li>
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                  <a itemscope itemtype="https://schema.org/WebPage" itemprop="item" itemid="/blog/" href="/blog/">
                    <span itemprop="name">Blog</span></a>
                  <meta itemprop="position" content="2" />
                </li>
                <li class="separator"> > </li>
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                  <span itemprop="name">{{ doc.headline }}</span>
                  <meta itemprop="position" content="3" />
                </li>
              </ol>
              <!-- Publish date -->
              <span class="pr-3 font-light text-typography_primary/75 dark--text-typography_primary_dark/75 mt-2 md--mt-0">{{
                $formatDate(doc.date)
              }}</span>
            </div>
            <!-- Headline -->
            <div id="headline"
              class="">
              {{ doc.headline }}
          </div>
            <p class="pl-3 blog-post-text mb-8 md--w-8/12 md--text-lg md--leading-lg text-center md--text-left">{{ doc.description }}
            </p>
            <div
              class="pl-3 pb-8 border-typography_primary dark--border-typography_primary_dark flex flex-col md--flex-row items-center md--justify-between mt-12 md--mt-4">
              <!-- Social Share -->
              <div class="mt-6 md--mt-0">
                <NavShareIcons :headline="doc.headline" :excerpt="doc.description" :path="doc.path + '/'" />
              </div>
            </div>
          </div>
        </Section>
        <!-- Content -->
        <Section id="main" class="!pt-0 relative grid grid-cols-10 gap-8 lg--gap-12">
          <!-- Table of Contents -->
          <aside class="col-span-full md--col-span-3 md--hidden">
            <div class="blog-post-text blog-aside-wrapper mb-2">
              <BlogTableOfContents :links="doc.body?.toc?.links" />
            </div>
          </aside>
          <article class="prose col-span-full md--col-span-7 relative">
            <!-- Update date -->
            <span v-show="doc.dateUpdated"
              class="italic absolute -top-8 text-sm leading-sm font-light text-typography_primary/75 dark--text-typography_primary_dark/75">(Updated:
              {{ $formatDate(doc.dateUpdated) }})</span>
            <!-- Blog content -->
            <ContentRenderer :value="doc" class="bg-gray-300 blog-content blog-post-text" />
          </article>
          <aside class="col-span-full md--col-span-3 blog-aside h-fit">
            <!-- Mobile Table of Content -->
            <div class="!hidden blog-aside-wrapper md--!flex mb-4">
              <BlogTableOfContents :links="doc.body?.toc?.links" class="blog-post-text" />
            </div>
            <!-- Related articles -->
            <div v-if="data?.surround?.filter((elem) => elem !== null)?.length > 0" class="blog-aside-wrapper">
              <BlogRelatedArticles :surround="data?.surround" class="blog-post-text" />
            </div>
          </aside>
        </Section>
        <!-- Scroll to top -->
        <NavScrollTopIcon />
  </main>
</template>

<style scoped>
.blog-aside {
  @apply sticky;
  top: calc(theme('spacing.nav') + 0.25rem);
}

.blog-aside-wrapper {
  @apply flex flex-col border-typography_primary py-4;
}

.blog-post-text {
  @apply text-typography_primary;
}

.separator {
  @apply mx-1;
}
</style>
