<template lang="pug">
.page-index.container.px-4.py-8
  .bio Michael Paulukonis

  .sectionhead
    | I am a full-stack developer and digital artist living in Framingham, MA

  ul.inline-list
    li(v-for="site in sites")
      a.site-link(:href="site.url") {{ site.name }}

  .sectionhead
    | other web-projects

  ul.inline-list
    li(v-for="project in projects" :key="project.url")
      a.site-link(:href="project.url") {{ project.name }}

  #main.pt-0-important.mt-10
    ContentQuery(
      path="/blog"
      :only="['headline', 'excerpt', 'description', 'date', 'tags', '_path', 'image', 'socialImage']"
      :where="{ 'tags': { $contains: 'pinned' } }"
      :sort="{ date: -1 }"
      v-slot="{ data }"
    )   
      BlogPinned(:data="data")
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const sites = ref([
      { url: 'https://github.com/michaelpaulukonis', name: 'github' },
      { url: 'https://www.linkedin.com/in/michaelpaulukonis/', name: 'linkedin' },
      { url: 'https://www.instagram.com/michaelpaulukonis', name: 'instagram' },
      { url: 'https://bsky.app/profile/xradiographer.bsky.social', name: 'Bluesky' },
      { url: 'https://docs.google.com/document/d/176IjNI0Dzk8jc9pCvFWTU98Zx_DfivRHgJpA-jgegsM/edit?usp=sharing', name: 'resume' }
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
      { url: 'http://michaelpaulukonis.github.io/nova-zombie-simulator/', name: 'nova zombie simulator' },
      { url: 'https://michaelpaulukonis.github.io/computational-collage/', name: 'computational collage' },
      { url: 'https://michaelpaulukonis.github.io/dragline/', name: 'dragline' },
      { url: 'http://michaelpaulukonis.github.io/crude-collage-painter', name: 'crude collage painter'},
      { url: '/blog', name: 'Blog'},
      { url: 'http://michaelpaulukonis.github.io/sketches/', name: 'web sketches' },

    ]);

    return { sites, projects };
  },
};
</script>