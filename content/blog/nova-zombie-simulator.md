---
title: Nova Zombie Simulator
headline: Nova Zombie Simulator
description: A p5.js zombie game made with Anthony, where you play the main zombie instead of fighting it.
date: 2026-07-27
dateUpdated: null
author: Michael Paulukonis
authorUrl: https://michael.paulukonis.github.io/
tags:
  - games
  - p5js
  - creative-coding
socialImage:
  src: /media/blog/nova-zombie-simulator/nova-zombie-simulator-social.png
  mime: image/png
  width: 1200
  height: 630
  alt: Nova Zombie Simulator gameplay screenshot, zombie emoji scattered across a gray playfield
---

Last year Anthony and I built a small p5.js game called Nova Zombie Simulator. Copilot helped with some of the early code; last week I used Claude Code to fix a bug in it, so the thing is still, erratically, alive.

The name doesn't mean anything. Anthony likes the "Foo Simulator" naming convention from Roblox, and "Nova" was a random suggestion the online p5.js editor threw up early on. We kept it. No plans to make it make sense.

The game puts you in the zombies' shoes, not the humans' — Anthony's call from the start. You're playing the horde, not fighting it.

Anthony's fixation at the time was building everything out of emoji, and that's still the entire art style: emoji as sprites, nothing else. An interesting constraint, and it saved us from ever having to think about graphics. He's moved on since, but the emojis stayed.

![Nova Zombie Simulator gameplay, zombie emoji scattered across a gray playfield](/media/blog/nova-zombie-simulator/nvs_screenshot.00.png)

The in-game help screen shows off our 6 mobs but is otherwise light in info:

![Nova Zombie Simulator help screen](/media/blog/nova-zombie-simulator/nova-zombie-simulator-help-screen.png)

Play is fine if you're at a keyboard; there's no touch or mobile support. TBH, never built any before, so that would be an interesting addition. The attract mode might be more appropriate for a Robotron 2084-style game than this one. There's a discontinuity in the styles, but that's what iteration is for.

Anthony and I had fun picking sound effects too. A full credits list is in the repo, but our favorites:

- [Wilhelm Scream](https://freesound.org/s/64940/) by Syna-Max
- [Layered Gunshot 7](https://freesound.org/s/128297/) by Xenonn
- [Loopy Thing](https://freesound.org/s/425941/) by jarethorin
- [Bite (Cartoon Style)](https://freesound.org/s/353067/) by Jofae

We're mostly onto other projects now, but I want to keep poking at this one: soldiers that fire actual bullets you have to dodge, obstacles you can hide behind, power-ups. Maybe I'll create a long list of enhancements I'll never get around to building!

Play it at [michaelpaulukonis.github.io/nova-zombie-simulator](https://michaelpaulukonis.github.io/nova-zombie-simulator/). The source is on [GitHub](https://github.com/MichaelPaulukonis/nova-zombie-simulator).
