import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'
import { startOfDay } from 'date-fns'
// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(() => {
  return [
    {
      loc: '/',
      changefreq: 'daily',
      lastmod: startOfDay(new Date()).toISOString(),
      priority: 1,
      alternatives: [
        { hreflang: 'en', href: '/' },
        { hreflang: 'am', href: '/am' },
      ]
    },
  ] satisfies SitemapUrlInput[]
})
