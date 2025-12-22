---
title: Return of the PoeticalBot
description: My poetry-generating bot originally written in 2016 is now on AWS and posting again
headline: Return of the PoeticalBot
date: '2025-11-23T12:00:00'
dateUpdated: 
author: 'Michael Paulukonis'
authorUrl: 'https://michael.paulukonis.github.io/'
socialImage:
    src: '/media/poeticalbot_2016_thumb.png'
    mime: 'png'
    alt: 'a "poem" from poeticalbot plus headers and things'
    width: 512
    height: 344
tags: 
  - art
  - programming
  - text
  - poetry
  - fake poetry
  - natural language processing
  - tumblr
  - bots
  - nodejs
  - pinned
---

# Poeticalbot "writes" poetically

<https://github.com/MichaelPaulukonis/PoeticalBot>

After four years of silence, [PoeticalBot](https://poeticalbot.tumblr.com/) is posting hourly again. The experimental poetry generator I built for 2016's NaPoGenMo has been resurrected from its Heroku grave and now lives on AWS.

## origin story

I built PoeticalBot for the 2016 NaPoGenMo (National Poetry Generation Month - an offshoot of NaNoGenMo for people who are allergic to margins).
Cart-before-the-horsely, I started with Tumblr integration, then iterated on the text output to make actual "poetry" (scare quotes because computer-generated poesy isn't really, or because you should be careful around the output lest it pull a Pontypool* on you and change everything). The bot mines existing texts for words, sentences, parts of speech, and punctuation, then applies various generators and transformers to create... something poetic-adjacent.

![a "poem" by poeticalbot](/media/poeticalbot_sample_email.png)

After it was running and posting, I deployed it to Heroku's free tier (where I already had a bunch of Twitter bots running). I kept adding features: new generator types, text transformers that changed punctuation or sorted lines alphabetically, more source texts. The original version even accepted input parameters, so I could run themed content for holidays or explore specific concepts (like spending a week on "Oz vs Apocalypse Now").

But life happened. New baby, new job, another personal project became my weekend focus, and eventually Heroku killed free dynos. PoeticalBot went silent in 2021.

::div{.mb-12}
::

::div{.mb-12}
::

Until this fall.

## migration

I brushed the dust and cobwebs off, and with some agentic help from the Kiro IDE, I moved the whole system to AWS: a Lambda function, EventBridge rule for hourly scheduling, a Lambda layer for my common-corpus text collection, Terraform scripts to deploy all of it.

The migration was easier than I had feared. The original code already worked with CLI and Heroku, so adapting it to Lambda required minimal changes. The biggest challenge was refactoring my "common-corpus" dependency. It had been optimized for Heroku - unzipping compressed text files into the dyno's filesytem. That wouldn't work in Lambda's ephemeral environment, so we stripped out the compression code and moved the entire corpus into a Lambda layer instead. PoeticalBot got a quick tweak to use that layer when live on Lambda, but keep using the dependency locally. Not too painful.

## born again

AND - it is posting hourly again, after all this time!

![poeticalbot posts with a long time gap](/media/poeticalbot_alive_cropped.png)

## avert your eyes

Looking at code I wrote nine years ago is... distressing. I don't want to meet the person who wrote this unless they've learned a lot since then. But here's the thing - it only stopped working because the host stopped running (for free). The original design was solid enough that revival only took a weekend, and the bot is posting again after years in stasis.

Hopefully, the resurrection is just step one. Now I can apply what I've learned since 2016, experiment with new generation strategies, add proper logging beyond CloudWatch basics, and maybe bring back those input parameters for themed content.

The ugly code gets to live another day. Sometimes that's all a project needs.

## where to buy it

See it in action at <https://github.com/MichaelPaulukonis/PoeticalBot>

See the code in inaction at <https://github.com/MichaelPaulukonis/textgen-monorepo/tree/main/apps/poeticalbot>

## footnotes

\* Pontypool: have you seen the [movie](https://en.wikipedia.org/wiki/Pontypool_(film)) or read the [book](https://en.wikipedia.org/wiki/Pontypool_Changes_Everything)? I have, and I have not.
