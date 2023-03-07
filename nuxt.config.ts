// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  builder: 'vite',
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  css: [
    // SCSS file in the project
    '@/assets/scss/common.scss'
  ],
  vite: {
    // build: {
    //   minify: 'terser',
    //   terserOptions: {
    //     compress: {
    //       drop_console: true,
    //       drop_debugger: true
    //     }
    //   },
    //   sourcemap: true
    // },
    // resolve: {
    //   alias: {
    //     '@': fileURLToPath(new URL('./', import.meta.url))
    //   }
    // },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@import "@/assets/scss/common.scss"'
    //     }
    //   }
    // }
  }
})
