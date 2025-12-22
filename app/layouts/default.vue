<template lang="pug" name="default">
  .index-page
    header.fixed.top-0.right-0.p-4.z-50.flex.justify-end
      UISearchBar
    slot
  </template>
  
  <script setup lang="ts">
  // Layout will be used by all pages
  </script>
  
  <style lang="css">
  @import '~/assets/css/main.purple.css';
  
  .container {
    @apply max-w-7xl mx-auto;
  }
  </style>