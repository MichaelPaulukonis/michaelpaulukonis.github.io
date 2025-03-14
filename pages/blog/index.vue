<template lang="pug">
main
    BlogHero
    Section#main.pt-0-important
        ContentQuery(
            path="/blog"
            :only="['headline', 'excerpt', 'date', 'tags', '_path', 'image']"
            :sort="{ date: -1 }"
            :limit="blogCountLimit"
            v-slot="{ data }"
        )
            BlogList(:data="data")
        BlogPagination.mt-8(
            v-if="data > 1"
            :currentPage="1"
            :totalPages="data"
            :nextPage="data > 1"
            baseUrl="/blog/"
            pageUrl="/blog/page/"
        )
</template>

<script setup>
// Find the number of blogs present
const blogCountLimit = 6;
const { data } = await useAsyncData(`content-/blog`, async () => {
    const _posts = await queryContent('/blog')
        .only('headline').find()
    return Math.ceil(_posts.length / blogCountLimit);
});
</script>
