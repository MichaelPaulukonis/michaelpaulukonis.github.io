---
title: DuoChrome and friends
description: A browser-based suite that generate combinations of two images
headline: DuoChrome
date: 2025-12-29T12:00:00
dateUpdated: null
author: Michael Paulukonis
authorUrl: https://michael.paulukonis.github.io/
socialImage:
  src: /media/blog/duo-chrome/duo-chrome-filmstrip-history-blog.png
  mime: webp
  alt: 
  width: 900
  height: 583
tags:
  - art
  - programming
  - text
  - p5js
fmContentType: default
---

# Duo-Chrome Programmatic Universe

![an image generated with duo-chrome](/media/blog/duo-chrome/duo-chrome-main.png)
![an image generated with duo-chrome](/media/blog/duo-chrome/duo-chrome-main-01.png)

Duo-chrome is a browser-based app that juxtaposes 2 images in 2 colors (with some blend modes that can be more than 2, but that's the basics). The images are black-on-transparent, and use p5js and web-canvas to render in a single color.

I'm building it in a [github mono-repo](https://github.com/MichaelPaulukonis/genart-monorepo.git), along with some other apps generative art apps that share some code.

The app is also available online at <https://michaelpaulukonis.github.io/duo-chrome>, but with a preset cluster of images. It does not currently support imports. If you want to run it, you can download the code and black-and-transparent images into the target folder. Will there ever be another way to handle this? I don't know. As a personal project, I don't curently have such a need. But the direction any given project takes does change over time.

![duo-chrome app showing an info box](/media/blog/duo-chrome/duo-chrome-info-box.png)

![duo-chrome screenshot showing timeline "filmstrip"](/media/blog/duo-chrome/duo-chrome-filmstrip-history.png)

## Monochromifier (a tool that makes black and white images, except the white is not white it is transparent)

![screenshot of monochromifier with infobox and original-image inset](/media/blog/duo-chrome/monochromifier-main-00.png)

Square black-on-transparent images are created in "Monochromifier." This is another browser-based app, using p5js, that allows me to select parts of images to use. It can adjust the threshold value, allows for cropping, resizing, placement adjustment, and some simple paint/erase functions. IT started out very, very simply and has evolved or devolved over time. Is the app overpowered? There has certainly been scope-creep, but all of the new features are to support the original goal - generating input images for DuoChrome.

## Renamer Browser (another tool, and you won't believe what this one does)

The **Renamer Browser** is a lightweight, Python-based tool created to help me get a better handle on the monochromifier output. It provides a web-interface for browsing directories, showing thumbnails + larger views, and applying reusable tags, to rename files in bulk with consistent naming conventions. This allows me to manually filter duo-chrome collections more easily, or maybe build such filtering directly into duo-chrome. The scope-creep never stops creeping!

![screenshot of renamer-browser showing thumbnails and rename option panel](/media/blog/duo-chrome/renamer-browser-screenshot-00.png)