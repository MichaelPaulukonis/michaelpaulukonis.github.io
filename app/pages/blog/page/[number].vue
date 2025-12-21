<template lang="pug">
main
  BlogHero
  Section#main.pt-0-important
    BlogList(v-if="posts" :data="posts")
    BlogPagination.mt-8(
      v-if="totalPages > 1"
      :currentPage="currentPage"
      :totalPages="totalPages"
      :nextPage="currentPage < totalPages"
      baseUrl="/blog/"
      pageUrl="/blog/page/"
    )
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const route = useRoute();
const currentPage = computed(() => parseInt(route.params.number) || 1);
const blogCountLimit = 6;

const { data, error } = await useAsyncData(`blog-list-${currentPage.value}`, async () => {
  const [allPosts, posts] = await Promise.all([
    queryCollection('blog').all(),
    queryCollection('blog')
      .order('date', 'DESC')
      .skip((currentPage.value - 1) * blogCountLimit)
      .limit(blogCountLimit)
      .all()
  ]);
  
  return {
    posts,
    totalPages: Math.ceil(allPosts.length / blogCountLimit)
  };
});

if (!data.value?.posts?.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const posts = computed(() => data.value?.posts);
const totalPages = computed(() => data.value?.totalPages || 0);

useHead({
  title: `Blog - Page ${currentPage.value}`,
  meta: [
    { name: 'description', content: `Blog posts page ${currentPage.value}` }
  ]
})
</script>
