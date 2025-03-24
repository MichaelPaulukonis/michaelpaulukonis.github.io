<template lang="pug" name="default">
slot
</template>
  
<script setup lang="ts">
// Layout will be used by all pages
  import '~/assets/css/main.css'
</script>

<style lang="scss">
.container {
  @apply max-w-7xl mx-auto;
}
</style>
  