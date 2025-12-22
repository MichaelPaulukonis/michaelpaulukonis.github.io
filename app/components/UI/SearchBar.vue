<script setup lang="ts">
import { ref, watch } from 'vue'

const { search } = useSearch()
const searchQuery = ref('')
const isOpen = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)
const isSearching = ref(false)
const results = ref<any[]>([])

watch(searchQuery, async (newQuery) => {
  if (newQuery.length < 3) {
    results.value = []
    return
  }
  
  isSearching.value = true
  try {
    results.value = await search(newQuery)
  } finally {
    isSearching.value = false
  }
})

const toggleSearch = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    setTimeout(() => inputRef.value?.focus(), 100)
  }
}

const closeSearch = () => {
  isOpen.value = false
  searchQuery.value = ''
}

// Keyboard shortcut '/' to focus
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
      e.preventDefault()
      toggleSearch()
    }
    if (e.key === 'Escape' && isOpen.value) {
      closeSearch()
    }
  }
  window.addEventListener('keydown', handleKeydown)
  onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
})
</script>

<template>
  <div class="relative z-50">
    <button 
      @click="toggleSearch" 
      class="p-2 text-typography_primary hover:bg-brand_secondary/20 rounded-full transition-colors"
      aria-label="Toggle search"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>

    <div 
      v-if="isOpen" 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
      @click.self="closeSearch"
    >
      <div class="bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        <div class="p-4 border-b flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            ref="inputRef"
            v-model="searchQuery"
            type="text"
            placeholder="Search posts and pages... (min 3 chars)"
            class="flex-1 outline-none text-lg text-black"
            @keydown.enter="searchQuery.length >= 3 && $router.push(`/search?q=${searchQuery}`)"
          />
          <button @click="closeSearch" class="text-gray-400 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="overflow-y-auto flex-1 p-2">
          <div v-if="isSearching" class="p-8 text-center text-gray-500">
            <div class="animate-spin inline-block w-8 h-8 border-4 border-brand_primary border-t-transparent rounded-full mb-4"></div>
            <p>Searching...</p>
          </div>

          <div v-else-if="results?.length" class="flex flex-col gap-1">
            <NuxtLink 
              v-for="result in results" 
              :key="result.id"
              :to="result.path"
              class="p-3 hover:bg-gray-100 rounded-md transition-colors group"
              @click="closeSearch"
            >
              <h3 class="font-bold text-brand_primary group-hover:underline">{{ result.title }}</h3>
              <p v-if="result.excerpt" class="text-sm text-gray-600 line-clamp-2 mt-1">{{ result.excerpt }}</p>
              <div class="text-xxs text-gray-400 uppercase mt-2 tracking-widest">
                {{ result.path?.startsWith('/blog') ? 'Blog Post' : 'Page' }}
              </div>
            </NuxtLink>
            
            <div class="p-4 mt-2 border-t text-center">
              <NuxtLink 
                :to="`/search?q=${searchQuery}`" 
                class="text-brand_primary font-bold hover:underline"
                @click="closeSearch"
              >
                View all results for "{{ searchQuery }}"
              </NuxtLink>
            </div>
          </div>

          <div v-else-if="searchQuery.length >= 3" class="p-12 text-center text-gray-500">
            No results found for "{{ searchQuery }}"
          </div>

          <div v-else class="p-12 text-center text-gray-400">
            Type at least 3 characters to search.
            <div class="mt-4 text-xs italic">
              Pro tip: Press <kbd class="px-2 py-1 bg-gray-100 border rounded">Esc</kbd> to close
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
