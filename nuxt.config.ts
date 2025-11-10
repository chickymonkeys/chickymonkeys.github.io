// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap', '@nuxt/content', 'motion-v/nuxt', 'nuxt-gtag', '@nuxt/fonts', '@nuxt/image', '@nuxt/eslint', '@nuxtjs/mdc'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: 'Alessandro Pizzigolotto: %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'keywords',
          content:

            `alessandro pizzigolotto, economics, phd, microeconomics, culture, household finance, political economy, institutions, econometrics`,
        },
        {
          id: 'description',
          name: 'description',
          content: 'Alessandro Pizzigolotto\'s AcademicWebsite',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss',
  ],
  site: {
    url: 'https://pizzigolot.to',
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [{
      name: 'Playfair Display', weights: [900],
    }, {
      name: 'Lato', weights: [300],
    }],
    defaults: {
      weights: [400],
    },
  },
  gtag: {
    id: 'G-8KX8483ME2',
  },
  image: {
    provider: 'ipx',
    format: ['avif', 'webp'],
    ipx: {
      modifiers: {
        format: 'webp',
      },
    },
  },
  nitro: {
    preset: 'github_pages',
  },
})