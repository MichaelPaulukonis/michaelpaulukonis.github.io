<template lang="pug" name="purple">
.index-page
  slot
</template>

<script setup lang="ts">
// Layout will be used by all pages
</script>

<style lang="css">
@import '~/assets/css/main.purple.css';

/* body {
  @apply bg-gradient-to-br from-fuchsia-700 via-rose-400 to-amber-400 bg-fixed h-full;
} */

.container {
  @apply max-w-7xl mx-auto;
}
</style>