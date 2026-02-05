// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'vercel'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Reihan - Game Developer & Modern Web Specialist',
      meta: [
        { name: 'description', content: 'Professional portfolio of Reihan, a Game Developer and Modern Web Specialist.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap' }
      ]
    }
  }
})

