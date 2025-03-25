---
title: A Nuxt blog using Content
description: A Nuxt blog using Content
headline: A Nuxt blog using Content
date: '2025-03-22T12:00:00'
dateUpdated: ''
author: 'Michael Paulukonis'
authorUrl: 'https://michael.paulukonis.github.io/'
socialImage:
    src: 'media/polychrometext.thumb.jpg'
    mime: 'webp'
    alt: 'an older version of Polychrometext with some GUI elements'
    width: 900
    height: 583
tags: 
  - blog
  - programming
  - code
  - nuxt
  - vuejs
---

This static blog is based on [Nuxt Blog Starter](https://github.com/GonzaloHirsch/nuxt-blog-starter)

I've smushed in ("integrated" is perhaps too generous) a different style for the front page, and am looking to smush it in farther.

I've also had to upgrade Nuxt and some other dependencies.


```shell
> nvm use 18
> rm package-lock.json
> rm -rf node_modules
> npm i -d nuxt@latest
> npm i -D @nuxtjs/tailwindcss@latest
> npx nuxi@latest devtools enable
```

Enabling `devtools` is not required if you've already added it to your `nuxt.config.ts`.