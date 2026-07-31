<template>
    <div class="bg-gray-300 rounded-md border-2 border-typography_primary hover--bg-gray-400 hover--border-4 hover--border-[#7d5cff] group relative mb-8">
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
