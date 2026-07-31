<template lang="pug">
main
  BlogHero
  Section#main.pt-0-important
    BlogFeatured(v-if="featuredPost" :article="featuredPost")
    BlogList(v-if="posts.length === 0 || gridPosts.length > 0" :data="gridPosts")
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
