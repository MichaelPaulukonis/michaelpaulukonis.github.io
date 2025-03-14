<template lang="pug">
.page-index.container.px-4.py-8
  .bio
    h1.text-title.leading-title.mt-8.mb-4 Michael Paulukonis

  .sectionhead.mt-8.inline-block.bg-primary.text-white.leading-tight.antialiased.text-left.font-bold.p-2.text-2xl.font-serif
    | I am a full-stack developer and digital artist living in Framingham, MA

  ul.inline-list.list-none.m-0.p-0
    li.inline-block.leading-none.pl-5(v-for="site in accounts")
      a.site-link.px-2.py-1.bg-secondary.uppercase.tracking-wide.font-normal.text-sm.text-black(:href="site.url") {{ site.name }}

  .sectionhead.mt-8.inline-block.bg-primary.text-white.leading-tight.antialiased.text-left.font-bold.p-2.text-2xl.font-serif
    | other web-projects

  ul.inline-list.list-none.m-0.p-0
    li.inline-block.leading-none.pl-5(v-for="project in projects" :key="project.url")
      a.site-link.px-2.py-1.bg-secondary.uppercase.tracking-wide.font-normal.text-sm.text-black(:href="project.url") {{ project.name }}

  #main.pt-0-important.mt-10
    ContentQuery(
      path="/blog"
      :only="['headline', 'excerpt', 'date', 'tags', '_path', 'image', 'socialImage']"
      :where="{ 'tags': { $contains: 'pinned' } }"
      :sort="{ date: -1 }"
      v-slot="{ data }"
    )   
      BlogPinned(:data="data")
</template>

<script>
import { ref } from 'vue';

export default {
  mounted() {
    document.body.classList.add('index-page');
  },
  unmounted() {
    document.body.classList.remove('index-page');
  },
  setup() {
    const accounts = ref([
      { url: 'https://github.com/michaelpaulukonis', name: 'github' },
      { url: 'https://www.linkedin.com/in/michaelpaulukonis/', name: 'linkedin' },
      { url: 'https://www.instagram.com/michaelpaulukonis', name: 'instagram' },
      { url: 'https://bsky.app/profile/xradiographer.bsky.social', name: 'Bluesky' }
    ]);

    const websites = ref([
      { url: 'http://michaelpaulukonis.com', name: 'michaelpaulukonis.com' },
    ]);

    const projects = ref([
      {
        url: 'https://michaelpaulukonis.github.io/polychrome.p5/',
        name: 'polychrometext',
      },
      {
        url: 'https://michaelpaulukonis.github.io/imagetexter.p5/',
        name: 'imagetexter',
      },
      { url: 'https://michaelpaulukonis.github.io/obscurus/', name: 'OBSCURUS' },
      { url: 'http://poeticalbot.tumblr.com/', name: 'poetical bot' },
      { url: 'https://leanstooneside.tumblr.com/', name: 'List Mania' },
      {
        url: 'http://michaelpaulukonis.github.io/malepropp',
        name: 'fairy tale generator',
      },
      {
        url: 'http://michaelpaulukonis.github.io/poetrygen/',
        name: 'poetry generators',
      },
    ]);

    return { accounts, websites, projects };
  },
};
</script>