<script setup lang="ts">
const route = useRoute()
const { search } = useSearch()
const searchQuery = ref(route.query.q as string || '')
const results = ref<any[]>([])
const isSearching = ref(false)

const performSearch = async (query: string) => {
  if (query.length < 3) {
    results.value = []
    isSearching.value = false
    return
  }
  
  isSearching.value = true
  try {
    results.value = await search(query)
  } finally {
    isSearching.value = false
  }
}

// Initial search if query param exists
onMounted(() => {
  if (searchQuery.value) {
    performSearch(searchQuery.value)
  }
})

watch(() => route.query.q, (newQ) => {
  if (newQ !== searchQuery.value) {
    searchQuery.value = newQ as string || ''
  }
})

watch(searchQuery, (newQ) => {
  // Update URL to match search query
  const query = newQ.trim()
  if (query) {
    performSearch(query)
  } else {
    results.value = []
    isSearching.value = false
  }
})

useSeo({
  title: 'Search Results',
  description: 'Search through articles and content on Michael Paulukonis\' website.'
})
</script>

<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl min-h-[60vh]">
    <h1 class="text-h2 font-black mb-8 border-b-4 border-typography_primary pb-4">Search</h1>
    
    <div class="mb-12">
      <div class="flex gap-4">
        <input 
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="flex-1 p-4 text-xl border-4 border-typography_primary outline-none focus:bg-brand_secondary/10 transition-colors"
        />
      </div>
    </div>

    <div v-if="isSearching" class="text-center py-20">
      <div class="animate-spin inline-block w-12 h-12 border-4 border-brand_primary border-t-transparent rounded-full mb-4"></div>
      <p class="text-xl font-bold">Finding things...</p>
    </div>

    <div v-else-if="results?.length">
      <p class="mb-8 text-gray-600 font-bold uppercase tracking-widest">
        Found {{ results.length }} page{{ results.length === 1 ? '' : 's' }} matching "{{ searchQuery }}"
      </p>
      
      <div class="flex flex-col gap-8">
        <NuxtLink 
          v-for="result in results" 
          :key="result.id"
          :to="result.path"
          class="block p-6 bg-white/50 hover:bg-white rounded-lg border-2 border-transparent hover:border-brand_primary transition-all group"
        >
          <div class="flex justify-between items-start mb-2">
            <h2 class="text-2xl font-black text-typography_primary group-hover:text-brand_primary">{{ result.title }}</h2>
            <div class="flex gap-2">
              <span v-if="result.matches > 1" class="px-2 py-1 bg-brand_secondary/20 text-[10px] uppercase font-bold rounded">
                {{ result.matches }} matches
              </span>
              <span class="px-2 py-1 bg-gray-200 text-[10px] uppercase font-bold rounded">
                {{ result.path?.startsWith('/blog') ? 'Blog Post' : 'Page' }}
              </span>
            </div>
          </div>
          <p v-if="result.content" class="text-lg leading-relaxed text-gray-700 line-clamp-3">
            {{ result.content }}
          </p>
          <div class="mt-4 text-brand_primary font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
            View Page 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div v-else-if="searchQuery.length >= 3" class="text-center py-20 bg-gray-100 rounded-xl">
      <h2 class="text-2xl font-bold mb-4">Nothing found</h2>
      <p class="text-gray-600">We couldn't find anything matching "{{ searchQuery }}". Try different keywords?</p>
    </div>

    <div v-else class="text-center py-20 text-gray-400 italic">
      Enter at least 3 characters to start your search.
    </div>

    <div class="mt-20 pt-8 border-t">
      <NuxtLink to="/" class="text-brand_primary hover:underline font-bold">← Back Home</NuxtLink>
    </div>
  </div>
</template>
