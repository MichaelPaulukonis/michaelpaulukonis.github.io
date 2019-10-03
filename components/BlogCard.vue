<template lang="pug">
li.blog
  nuxt-link(:to="localePath({ name: 'blog-slug', params: { slug: blog.name }})")
    ImageResponsive(
      :imageURL='`blog/${blog.id}/${blog.image.og}`' 
      :classes="'cardThumbnail'" 
      :width="'952'" 
      :height="'509'" 
      :alt='blog.cardAlt')
    span.blog__title
      | {{ blog.title }}
    span.blog__description
      | {{ blog.description }}

</template>

<script lang="js">
  export default {
    props: {
      blog: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
.image-placeholder {
  max-width: 476px;
  max-height: 240px;
}
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy="loaded"] {
    opacity: 1;
  }
}
.blog {
  max-width: 476px;
  @media (min-width: $screen-sm) {
    padding-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  .blog__title {
    display: block;
    background-color: #7d5cff;
    color: #fcfcfc;
  }

  &:hover {
    .blog__title {
      color: #000;
    }
  }

  &__title {
    font-family: "Tiempos Headline", Arial, sans-serif;
    color: $secondary;
    padding-top: 1rem;
    font-size: 2.5rem;
    transition: color 0.3s;
  }

  &__description {
    margin: 0;
    padding: 0;
    padding: 2px 8px;
    background: #38ef7d;
    color: #000;
    display: block;
  }
}
</style>
