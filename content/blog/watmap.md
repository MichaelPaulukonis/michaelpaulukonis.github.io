---
title: WATMAP and other delights
headline: WATMAP and other delights
description: A glitch-aesthetic mosaic image-remaker built in Processing by somebody else
date: 2019-09-14
dateUpdated: ''
author: Michael Paulukonis
socialImage:
    src: 'media/sample.webp'
    mime: 'webp'
    alt: 'Mountain'
    width: 1200
    height: 630
tags:
  - art
  - processing
  - glitch
  - tools
---

## We can rebuild it for you wholesale!


![My son reimagined via WATMAP](/media/watmap.00.png)

Processing2/3 code written by [GenerateMe](https://github.com/tsulej/GenerateMe/tree/master/watmap). See their [TumblrBlog](https://generateme.tumblr.com/) for use and tips.

A [friend](http://everythingability.com/) thinks of it a "a poor-man's GAN". I can see the similarities: an image is "recreated", using elements from something else.

Original developer refers to it as part of a "glitch-aesthetic" which I get - but it's not a glitch, an error. There are seeming "hiccups" in the discontinuities. It's essentially a tile-mosaic replicator using a quad-tree to focus on sizes. It takes a long time to process, mainly due to the quad-tree preocessing.

I thought that [Richard Winters](https://www.instagram.com/richard.winters/) (last time I checked, all images had been removed, which makes me sad) was using a custom version inspired by WATMAP, but I've long-since changed my mind. Using square-subsections (instead of variadic-sized rectangles) and processes each color channel (RGB?) separately. So, channel-based tile-sets.
