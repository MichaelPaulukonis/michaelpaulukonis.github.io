<template lang="pug" name="default">
  .index-page
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