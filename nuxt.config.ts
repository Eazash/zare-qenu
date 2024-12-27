// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-10-21',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxthub/core',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  eslint: {
    config: {
      stylistic: false,
      standalone: false
    }
  },
  hub: {
    cache: true,
    analytics: true,

  },
  site: {
    url: "https://zare-qenu.com",
    name: "Zare Qenu",
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ],
    cacheMaxAgeSeconds: 60 * 60,
  }
})