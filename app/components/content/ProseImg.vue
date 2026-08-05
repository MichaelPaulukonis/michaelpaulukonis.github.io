<template>
    <figure>
        <img :src="refinedSrc" :alt="imgAlt" :width="width" :height="height" class="mx-auto"/>
        <figcaption class="text-base leading-base text-center mt-2 opacity-70">
            <span class="block">{{ caption }}</span>
            <span v-if="attribution" class="block text-sm mt-1 opacity-70">{{ attribution }}</span>
        </figcaption>
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

// Alt text may carry a trailing "| attribution" segment, rendered as a second,
// visually distinct figcaption line instead of running into the commentary.
const caption = computed(() => props.alt.split('|')[0].trim());
const attribution = computed(() => {
    const parts = props.alt.split('|');
    return parts.length > 1 ? parts.slice(1).join('|').trim() : '';
});
// Screen readers get the pipe-free version - "|" is markup for the sighted figcaption split, not content.
const imgAlt = computed(() => attribution.value ? `${caption.value} — ${attribution.value}` : caption.value);
</script>
