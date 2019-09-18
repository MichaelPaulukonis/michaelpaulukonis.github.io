<template>
  <div class="page-index">
    <div class="container">

      <div class="bio">
        <h1>Michael Paulukonis</h1>
        <p>I am a developer/architect and digital artist living in Framingham, MA</p>
        <ul class="inline-list">
          <li><a href="https://instagram.com/michaelpaulukonis/">Instagram</a></li>
          <li><a href="http://www.twitter.com/OtherMichael">Twitter</a></li>
          <li><a href="https://github.com/michaelpaulukonis">GitHub</a></li>
        </ul>

        <p>other websites</p>
        <ul class="inline-list">
          <li><a href="http://michaelpaulukonis.com">michaelpaulukonis.com</a></li>
          <li><a href="http://www.xradiograph.com">xradiograph.com</a></li>
        </ul>

        <p>other web-projects</p>
        <ul class="inline-list">
          <li><a href="https://michaelpaulukonis.github.io/polychrome.p5/">polychrometext</a></li>
          <li><a href="https://michaelpaulukonis.github.io/imagetexter.p5/">imagetexter</a></li>
          <li><a href="http://poeticalbot.tumblr.com/">poetical bot</a></li>
          <li><a href="https://leanstooneside.tumblr.com/">List Mania</a></li>
          <li><a href="http://michaelpaulukonis.github.io/malepropp">fairy tale generator</a></li>
          <li><a href="http://michaelpaulukonis.github.io/poetrygen/">poetry generators</a></li>
          <li><a href="http://www.xradiograph.com/WordSalad/BotProjects">bot projects</a></li>
        </ul>
      </div>


      <BlogSection :blogs="blogs" />
    </div>
  </div>
</template>

<script>
import BlogSection from "~/components/Sections/BlogSection"

import blogsEn from '~/contents/en/blogsEn.js'

export default {
  async asyncData ({ app }) {

    const blogs = blogsEn

    async function asyncImport (blogName) {
      const wholeMD = await import(`~/contents/${app.i18n.locale}/blog/${blogName}.md`)
      return wholeMD.attributes
    }

    return Promise.all(blogs.map(blog => asyncImport(blog)))
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
        lang: this.$i18n.locale,
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
    ogImage: function () {
      return;
    }
  }
}
</script>

<style scoped lang="scss">
.inline-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.inline-list li {
  display: inline-block;
}

.inline-list li {
  padding-left: 20px;
}

.inline-list li a {
  padding: 2px 8px;
  border: 1px solid #96ebe1;
  border-radius: 2px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
}

.inline-list li a:hover {
  background: #96ebe1;
  color: #fff;
}
</style>