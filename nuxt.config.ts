// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light'
  },
  compatibilityDate: '2024-10-21',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxthub/core',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  eslint: {
    config: {
      stylistic: false,
      standalone: false
    }
  },
  hub: {
    cache: false,
    analytics: true,
  },
  nitro: {
    routeRules: {
      '/' : {
        swr: true,
        cache: {
          maxAge: 60 * 60, // 1 hour
        }
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
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'last' }],
  },
  icon: {
    mode: 'svg',
    clientBundle: {
      icons: [
        'ic:sharp-light-mode',
        'ic:sharp-dark-mode',
        'ic:round-monitor',
        'ic:baseline-language'
      ]
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://zare-qenu.com',
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'am', language: 'am-ET' }
    ],
    defaultLocale: 'en',
  }
})