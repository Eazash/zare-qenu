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
    '@nuxt/image'
  ],
  eslint: {
    config : {
      stylistic: false,
      standalone: false
    }
  }
})
