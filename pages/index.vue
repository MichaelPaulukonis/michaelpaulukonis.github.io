<template lang="pug">
.page-index
  .container
    .bio
      h1 Michael Paulukonis
      
      .thingy I am a developer/architect and digital artist living in Framingham, MA
      
      ul.inline-list
        li
          a(href='https://instagram.com/michaelpaulukonis/') Instagram
        li
          a(href='http://www.twitter.com/OtherMichael') Twitter
        li
          a(href='https://github.com/michaelpaulukonis') GitHub
      
      .thingy other websites
      
      ul.inline-list
        li
          a(href='http://michaelpaulukonis.com') michaelpaulukonis.com
        li
          a(href='http://www.xradiograph.com') xradiograph.com

      .thingy other web-projects
      
      ul.inline-list
        li
          a(href='https://michaelpaulukonis.github.io/polychrome.p5/') polychrometext
        li
          a(href='https://michaelpaulukonis.github.io/imagetexter.p5/') imagetexter
        li
          a(href='http://poeticalbot.tumblr.com/') poetical bot
        li
          a(href='https://leanstooneside.tumblr.com/') List Mania
        li
          a(href='http://michaelpaulukonis.github.io/malepropp') fairy tale generator
        li
          a(href='http://michaelpaulukonis.github.io/poetrygen/') poetry generators
        li
          a(href='http://www.xradiograph.com/WordSalad/BotProjects') bot projects
        li
          a(:href="url + '/sketches'") web sketches
    
    BlogSection(:blogs='blogs')

</template>

<script>
import BlogSection from "~/components/Sections/BlogSection"
import pages from '~/contents/en/blogsEn.js'

export default {
  async asyncData ({ app }) {

    async function asyncImport (blogName) {
      const wholeMD = await import(`~/contents/en/blog/${blogName}.md`)
      return {
        ...wholeMD.attributes,
        ...{          image: {
            main: (wholeMD.attributes.image && wholeMD.attributes.image.main) || '_main.jpg',
            og: (wholeMD.attributes.image && wholeMD.attributes.image.og) || '_thumbnail.jpg'
          }
        }
      }
    }

    return Promise.all(pages.map(blog => asyncImport(blog)))
      .then((res) => {
        return {
          blogs: res
        }
      })
  },

  components: { BlogSection },

  transition: {
    name: 'slide-fade'
  },

  head () {
    return {
      title: this.$t('indexPageHead.title'),
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: "author", content: "Michael J. Paulukonis" },
        { name: "description", property: "og:description", content: this.$t('indexPageHead.description'), hid: "description" },
        { property: "og:title", content: this.$t('indexPageHead.title') },
        { property: "og:image", content: this.ogImage },
        { name: "twitter:description", content: this.$t('indexPageHead.description') },
        { name: "twitter:image", content: this.ogImage }
      ]
    };
  },

  computed: {
    ogImage: () => {
      return;
    },
    url: () => process.env.baseUrl
  }
}
</script>

<style scoped lang="scss">
.page-index {
  background-image: linear-gradient(to bottom right, #973999, #f8598b, #f7bf00);
  background-attachment: fixed;
}

.bio h1 {
  margin-bottom: 1rem;
  font-size: 6rem;
  line-height: 5rem;
  margin-top: 2rem;
}

.thingy {
  display: inline-block;
  background-color: #7d5cff;
  color: #fcfcfc;
  line-height: 1.15;
  -webkit-font-smoothing: antialiased;
  text-align: left;
  font-weight: 700;
  padding: 6px;
  font-size: 1.5em;
  font-family: Neuton, "Hoefler Text", Palatino, Baskerville, Georgia,
    "Times New Roman", serif;
}

.inline-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.inline-list li {
  display: inline-block;
  line-height: 0;
}

.inline-list li {
  padding-left: 20px;
}

.inline-list li a {
  padding: 2px 8px;
  background: #38ef7d;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  color: #000;
}

.inline-list li a:hover {
  background: #96ebe1;
  filter: invert(100%);
  -webkit-filter: invert(100%);
}
</style>