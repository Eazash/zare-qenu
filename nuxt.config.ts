// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
  },
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
    '@nuxtjs/robots',
    '@vueuse/nuxt'
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
  nitro: {
    routeRules: {
      '/' : {
        swr: true,
        prerender: true
      }
    }
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
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', {injectPosition: 'last'}],
  }
})