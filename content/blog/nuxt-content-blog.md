---
title: A Nuxt blog using Content
description: A Nuxt blog using Content
headline: A Nuxt blog using Content
date: '2025-03-22T12:00:00'
dateUpdated: 
author: 'Michael Paulukonis'
authorUrl: 'https://michael.paulukonis.github.io/'
socialImage:
    src: 'media/polychrometext.thumb.jpg'
    mime: 'webp'
    alt: 
    width: 900
    height: 583
tags: 
  - blog
  - programming
  - code
  - nuxt
  - vuejs
---

# A Nuxt blog using Content

This static blog is based on [Nuxt Blog Starter](https://github.com/GonzaloHirsch/nuxt-blog-starter)

I've smushed in ("integrated" is perhaps too generous) a different style for the front page, and am forcing it into the blog pages, as well.

I've also had to upgrade Nuxt and some other dependencies.

```shell
> nvm use 18
> rm package-lock.json
> rm -rf node_modules
> npm i -d nuxt@latest
> npm i -D @nuxtjs/tailwindcss@latest
> npx nuxi@latest devtools enable
```

::div{.mb-12}
::

::div{.mb-12}
Enabling `devtools` is not required if you've already added it to your `nuxt.config.ts`.
::

## Styling originally based on Marina Aisa's nuxt-markdown-blog

Marina's [nuxt markdown blog starter](https://github.com/marinaaisa/nuxt-markdown-blog-starter) was the original basis for the design, but the colors were electrified and more things changed. I hope to iteratively come up with a legible compromise between several designs. I may be an artist and a programmer, but CSS is not my favorite medium.
