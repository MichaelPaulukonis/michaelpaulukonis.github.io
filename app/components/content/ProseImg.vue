<template>
    <figure>
        <img :src="refinedSrc" :alt="alt" :width="width" :height="height" class="mx-auto"/>
        <figcaption class="text-base leading-base text-center mt-2 opacity-70">{{ alt }}</figcaption>    
    </figure>
</template>

<script setup lang="ts">
import { withBase } from 'ufo';
import { useRuntimeConfig, computed } from '#imports';

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number],
        default: undefined
    },
    height: {
        type: [String, Number],
        default: undefined
    }
});

const refinedSrc = computed(() => {
    let src = props.src;
    if (src && !src.startsWith('/') && !src.startsWith('http') && !src.startsWith('data:')) {
        src = '/' + src;
    }
    if (src?.startsWith('/') && !src.startsWith('//')) {
        return withBase(src, useRuntimeConfig().app.baseURL);
    }
    return src;
});
</script>
