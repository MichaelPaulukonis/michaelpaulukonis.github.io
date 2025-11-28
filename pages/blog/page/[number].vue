<template>
    <main>
        <!-- Query for the given blog page number -->
        <ContentQuery
            path="/blog"
            :only="['headline', 'excerpt', 'description', 'date', 'tags', '_path', 'image']"
            :sort="{
                date: -1
            }"
            :skip="blogCountLimit * (getPageNumber() - 1)"
            :limit="blogCountLimit"
        >
            <!-- In case it is found -->
            <template v-slot="{ data }">
                <BlogHero />
                <Section id="main" class="!pt-0">
                    <BlogList :data="data" />
                    <ContentQuery
                        path="/blog"
                        :only="['headline']"
                    >
                        <template v-slot="{ data }">
                            <BlogPagination
                                v-if="getPageLimit() > 1"
                                class="mt-8"
                                :currentPage="getPageNumber()"
                                :totalPages="getPageLimit()"
                                baseUrl="/blog/"
                                pageUrl="/blog/page/"
                            />
                        </template>
                        <template #not-found>
                            <!-- Nothing -->
                        </template>
                    </ContentQuery>
                </Section>
            </template>
            <!-- In case not found -->
            <template #not-found>
                <!-- Show hero and message -->
                <BlogHero />
                <Section id="main" class="!pt-0">
                    <BlogList :data="[]" message="There are no posts in this page, maybe try searching on another one."/>
                </Section>
            </template>
        </ContentQuery>
    </main>
</template>

<script setup>
import { useAsyncData, useRoute, useRouter } from '#imports';
const blogCountLimit = 6;
const route = useRoute();
const router = useRouter();

const pageNo = parseInt(route.params.number, 10) || 1;

// Get total posts at build time
const { data: allPosts } = await useAsyncData('allPosts', () =>
  queryContent('/blog').only(['headline']).sort({ date: -1 }).find()
);
const totalPosts = allPosts.value.length;
const totalPages = Math.max(1, Math.ceil(totalPosts / blogCountLimit));

// Guard: redirect if pageNo is out of bounds
if (pageNo < 1 || pageNo > totalPages) {
  router.replace('/blog/');
}

const getPageLimit = () => totalPages;
const getPageNumber = () => pageNo;
</script>
