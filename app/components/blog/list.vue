<template>
    <ul class="grid grid-cols-10 gap-4 text-typography_primary">
        <li
            v-for="article in data"
            :key="article.path"
            class="bg-gray-300 col-span-full md--col-span-5 relative rounded-md border-2 border-typography_primary hover--bg-gray-400 hover--border-4 hover--border-[#7d5cff] group"
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
