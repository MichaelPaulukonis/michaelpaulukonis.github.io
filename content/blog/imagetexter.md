---
title: painting with words
headline: imagetexter - painting with words
description: ASCII text-painter using whole words instead of letters, impressionistic and legible at once
date: 2026-08-04
dateUpdated: null
author: Michael Paulukonis
authorUrl: https://michael.paulukonis.github.io/
tags:
  - generative-art
  - p5js
  - creative-coding
  - image-processing
socialImage:
  src: /media/blog/imagetexter/imagetexter.thumb.png
  mime: image/png
  width: 512
  height: 332
  alt: imagetexter's UI next to a text-painted photo of a shark's mouth
---

[imagetexter](https://michaelpaulukonis.github.io/imagetexter.p5/) is another way to paint with text. Click and release, or drag the pointer around, and instead of a smear of color you get words at random sizes, their color sampled straight from whatever pixel sits under the mouse at that instant, randomly offset to keep things interesting (no really, no offset is so dull). Keep moving and the canvas fills with lexical daubs, overlapping and mingling.

Pick text that relates to the source image - Ariel's "Full fathom five" from The Tempest against the leaping maw of a great white shark - and the result works two ways at once. From across a distance you can see the picture, impresionistically. But Up close it's text, drifting fragments and letters that sometimes breach the surface of coherence and commentary.

![reworked Impressionist landscape painting, text daubs matching the underlying color | The Bridge at Argenteuil, Claude Monet, National Gallery of Art, Washington, D.C](/media/blog/imagetexter/imagetexter.impressionist.png)


There's another mode, grid-fill (`g`), that tiles the whole canvas edge to edge with no gaps and no gesture involved - a classic color-acii image. There's also auto-paint (`a`) that runs on its own, rotation adds another axis of randomness, and the size-range and jitter controls (arrow keys) give more (or less) control and personality. The UI could do with some polish.

![Full-bleed lines of text tiled over a Renaissance painting | Adoration of the Magi, Fra Angelico and Fra Filippo Lippi, National Gallery of Art, Washington D.C.](/media/blog/imagetexter/imagetexter.lines.png)


Painting with colored or grayscale text isn't new — ASCII art traces back through 1960s line printers to 1890s typewriters [1][2] — but I built mine anyway.

This started as a Java Processing sketch, moved through processing-js, and has sat as p5.js since a commit in 2019 I hadn't touched since. I'm a little embarassed looking at it now: no on-screen help, keys that don't follow any convention I recognize from my other apps, behavior that doesn't match what the repo's own instructions claim. Getting a good result out of it takes practice, and I'd forgotten most of what I used to know.

There are already a few "macros" that chain modes or setting-changes together, and they're fun. [Polychrome Text](/blog/polychrometext-introduction) went from that same kind of pre-set fun to something scriptable, and imagetexter could too. I've been circling that idea for ten-plus years. Time to actually do it.

On a related note - while the "painting-with-text" concept is closely related to PolychromeText, the workflow and outputs are very different.

Go write a picture: [michaelpaulukonis.github.io/imagetexter.p5](https://michaelpaulukonis.github.io/imagetexter.p5/) · source on [GitHub](https://github.com/MichaelPaulukonis/imagetexter.p5)

...

**References**

1. [ASCII Art — Wikipedia](https://en.wikipedia.org/wiki/ASCII_art)
2. [History of ASCII Art — asciiart.eu](https://www.asciiart.eu/history-of-ascii-art)
3. [The Surprisingly Rich History of ASCII Art — The New Stack](https://thenewstack.io/surprisingly-rich-history-ascii-art/)
