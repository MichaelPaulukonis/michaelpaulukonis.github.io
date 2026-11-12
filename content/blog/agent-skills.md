---
title: mjp-agent-skills
headline: A small public set of Claude Code skills
description: A small public repo of Claude Code / Agent Skills
date: 2026-11-12
dateUpdated: null
author: Michael Paulukonis
authorUrl: https://michaelpaulukonis.github.io/
tags:
  - claude-code
  - agent-skills
  - ai
  - writing
socialImage:
  src: /media/blog/agent-skills/agent-skills.thumb.png
  mime: image/png
  width: 512
  height: 332
  alt: Students at lathes in the Manual Training Shop, Illinois State Normal University, 1917
---

I've put a small set of skills for Claude Code (and other [Agent Skills](https://agentskills.io)-compatible agents) on GitHub: [mjp-agent-skills](https://github.com/MichaelPaulukonis/mjp-agent-skills). Skills you can install, examples you can read, and prompts. Well, one prompt so far. It's a start.

![Students at lathes in the Manual Training Shop, Illinois State Normal University, 1917](/media/blog/agent-skills/manual-training-shop-1917.jpg)

*Manual Training Shop, Illinois State Normal University, Normal, Ill. Stereograph, Keystone View Company, 1917. [Library of Congress](https://www.loc.gov/item/2018647661/). No known restrictions on publication.*

There are two tiers. `skills/` is installable: I've cleaned out my local paths and anything wired to my private setup. `examples/` are skills that work for me but are still tied to my environment (my repos, my voice). Read them, copy what's useful, adapt. When one gets its personal bits moved into config, it graduates.

The installable three are `elevator-pitch` (drafts or sharpens a short pitch, with a pass/fail eval loop), `image-frames-to-video` (turns numbered image frames into video with ffmpeg), and `verify-before-trusting` (makes the agent show how it knows something is "done" before you have to ask).

My dirty laundry stays in private repos (assuming, of course, I'm perfect in my opsec). But I've spent my whole career learning from other people's work, and I've been helped out by a lot of small repos with few or no stars. I don't expect this one to get many views, but if it helps anybody, good.

One example I use a lot is `writing-style`. It's my voice: lead with the point, short paragraphs, (parenthetical asides), fragments when they're doing work. I run it alongside Peter Yang's [no-ai-slop](https://github.com/petergyang/no-ai-slop), which catches the known AI tells: colon reveals, binary contrasts, throat-clearing openers.

The goal is that my `writing-style` holds what _I prefer_ and no-ai-slop holds _what to avoid_. In practice they overlap, and my style skill still carries some bans of its own. I'm not going to rebuild no-ai-slop when someone else has done it so well. When they disagree (no-ai-slop wants to cut a fragment I put there on purpose), my style wins, and I log it. The repo's eval/memory scaffolding follows another Peter Yang pattern, from his [self-improving skills tutorial](https://creatoreconomy.so/p/full-tutorial-build-self-improving-claude-skills-in-20-min).

Part of what I like about Claude Code, besides how well it handles both code and text, is how easy it is to make a new skill. Possibly too easy. So I'm trying to be conservative about what goes in this repo. We shall see.
