# nuxt3_css_restart branch

I'm declaring CSS bankruptcy
The main index page and the pinned excerpts look great, but the blog is awful.

I want to go back to the original CSS (which wasn't awful, just not what I wanted) and add in the restyling for only where I want it to be, keeping other stuff.

It looks like things were deleted or renamed. I was using some AI to generate the CSS, and I have learned to mistrust even more since it did this.

## main culprit

I changed the default tailwind separator to be a double-dash - `--` - since `pug` does not play nicely with Tailwind.

I may have to rethink my use of pug. Otherwise, I do think it is much easier to parse visually than html.

Once I changed the uses of `md:` to `md--` so much functional appearances returned!!!!

Still some more things I would prefer.

Other main issue - font-size: 75% for `html` in `main.css` - this is straight from the other styling
I want to get rid of it for everything EXCEPT the purple layout.