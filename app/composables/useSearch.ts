import MiniSearch from 'minisearch'

// Global state
const miniSearch = ref<MiniSearch | null>(null)
const isIndexed = ref(false)
const initPromise = ref<Promise<void> | null>(null)

export const useSearch = () => {
  const initSearch = async () => {
    if (isIndexed.value) return
    if (initPromise.value) return initPromise.value

    initPromise.value = (async () => {
      try {
        const [blogSections, contentSections] = await Promise.all([
          queryCollectionSearchSections('blog'),
          queryCollectionSearchSections('content')
        ])
        const data = [...blogSections, ...contentSections]

        if (data.length) {
          miniSearch.value = new MiniSearch({
            fields: ['title', 'content', 'titles'],
            storeFields: ['title', 'content', 'titles', 'id', 'level'],
            searchOptions: {
              prefix: true,
              fuzzy: 0.2,
              boost: { title: 2 }
            },
          })

          miniSearch.value.addAll(data)
          isIndexed.value = true
        }
      } catch (e) {
        console.error('Failed to initialize search index', e)
      } finally {
        initPromise.value = null
      }
    })()

    await initPromise.value
  }

  const search = async (query: string) => {
    if (!isIndexed.value) {
      await initSearch()
    }

    if (!miniSearch.value || !query) {
      return []
    }

    const results = miniSearch.value.search(query)
    
    // Group results by base path to avoid duplicates
    const grouped = results.reduce((acc, result) => {
      const basePath = result.id.split('#')[0]
      if (!acc[basePath]) {
        acc[basePath] = {
          ...result,
          path: basePath,
          matches: 1
        }
      } else {
        acc[basePath].matches++
        // Optionally merge content snippets or keep the highest scoring one
        if (result.score > acc[basePath].score) {
           acc[basePath] = { ...result, path: basePath, matches: acc[basePath].matches + 1 }
        }
      }
      return acc
    }, {} as Record<string, any>)

    return Object.values(grouped)
  }

  return {
    initSearch,
    search,
    isIndexed
  }
}
