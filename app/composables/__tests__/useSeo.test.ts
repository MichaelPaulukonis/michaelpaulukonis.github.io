import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

const { useHeadMock } = vi.hoisted(() => ({
  useHeadMock: vi.fn()
}))

mockNuxtImport('useHead', () => useHeadMock)
mockNuxtImport('useRoute', () => {
  return () => ({ path: '/test-path' })
})

import { useSeo } from '../useSeo'

describe('useSeo', () => {
  beforeEach(() => {
    useHeadMock.mockClear()
  })

  it('sets the correct default meta tags', () => {
    useSeo({
      title: 'Test Page',
      description: 'Test description'
    })

    expect(useHeadMock).toHaveBeenCalledTimes(1)
    const headConfig = useHeadMock.mock.calls[0][0]
    
    expect(headConfig.title).toBe('Test Page | Michael Paulukonis')
    
    const descriptionMeta = headConfig.meta.find((m: any) => m.name === 'description')
    expect(descriptionMeta.content).toBe('Test description')
    
    const ogTitle = headConfig.meta.find((m: any) => m.property === 'og:title')
    expect(ogTitle.content).toBe('Test Page | Michael Paulukonis')
  })

  it('handles article specific tags', () => {
    useSeo({
      title: 'Article Title',
      type: 'article',
      publishedTime: '2025-12-21'
    })

    const headConfig = useHeadMock.mock.calls[0][0]
    const typeMeta = headConfig.meta.find((m: any) => m.property === 'og:type')
    expect(typeMeta.content).toBe('article')

    const publishedMeta = headConfig.meta.find((m: any) => m.property === 'article:published_time')
    expect(publishedMeta.content).toBe('2025-12-21')
  })

  it('generates correct canonical URL and image URL', () => {
    useSeo({
      title: 'Canonical Test',
      url: 'https://custom.url/path',
      image: 'https://custom.url/image.jpg'
    })

    const headConfig = useHeadMock.mock.calls[0][0]
    
    const canonicalLink = headConfig.link.find((l: any) => l.rel === 'canonical')
    expect(canonicalLink.href).toBe('https://custom.url/path')

    const ogImage = headConfig.meta.find((m: any) => m.property === 'og:image')
    expect(ogImage.content).toBe('https://custom.url/image.jpg')
  })
})
