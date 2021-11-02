import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  srcDir: 'src/',
  
  publicRuntimeConfig: {
    siteName: 'Nuxt3App',
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    perPage: 10 //1ページ毎の表示件数
  },

  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
})
