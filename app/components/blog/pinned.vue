<template lang="pug">
#pinned-posts.ul.grid.grid-cols-1.md--grid-cols-2.gap-4.text-typography_primary
    li.relative.rounded-md.border-typography_primary.hover--border-brand_primary.group(v-for="article in data" :key="article.path")
        NuxtLink.pr-4.block.relative(:to="article.path + '/'")
            .wrapper
                img(:src="article.socialImage.src" :alt="article.description" class="rounded-md")
                .pinned__title.font-serif.text-h3.leading-h3.font-semibold.group-hover--text-brand_primary {{ article.headline }}
                .pinned__description {{ article.description }}
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.pinned__title {
    display: block;
    padding: 2px 8px;
    background-color: #7d5cff;
    color: #fcfcfc;
}

.pinned__description {
    padding: 2px 8px;
    background: #38ef7d;
    color: #000;
    display: block
}
</style>