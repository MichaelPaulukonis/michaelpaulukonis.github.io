<template>
  <Section id="blog" class="text-typography_primary">
    <div class="bg-gray-200">
      <div
        class="border-t-2 pt-8 border-typography_primary flex flex-col md--flex-row items-center md--justify-between md--text-right mb-6 md--mb-8">
        <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="p-3 blog-breadcrumb">
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a itemprop="item" href="/"> <span itemprop="name">Home</span></a>
            <meta itemprop="position" content="1" />
          </li>
          <span>/</span>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <span itemprop="name">Blog</span>
            <meta itemprop="position" content="2" />
          </li>
        </ol>
      </div>
      <div class="text-9xl p-3 font-black mb-4 md--mb-6 leading-9xl md--text-9xl md--leading-9xl text-center md--text-left">An blog
      </div>
      <p class="p-3 mb-3 md--w-8/12 md--text-lg md--leading-lg text-center md--text-left">
        So, this will be a blog, of sorts. Again. Maybe. I feel confidently ambivalent about this, I think.
      </p>
      <div
        class="border-t-2 mt-8 border-typography_primary flex flex-col md--flex-row items-center md--justify-between md--text-right">
      </div>
    </div>
  </Section>
</template>
