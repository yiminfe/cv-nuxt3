// https://nuxt.com/docs/api/configuration/nuxt-config

import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

const isProd = process.env.NODE_ENV === 'production'
const CDN_URL = isProd ? 'https://static.yiminfe.com/cv-nuxt3' : ''

export default defineNuxtConfig({
  builder: 'vite',
  app: {
    keepalive: true,
    cdnURL: CDN_URL,
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ],
      link: [
        {
          rel: 'icon',
          href: `${CDN_URL}/favicon.ico`
        },
        {
          rel: 'mask-icon',
          href: `${CDN_URL}/logo.svg`,
          color: '#FFFFFF'
        },
        {
          rel: 'apple-touch-icon',
          href: `${CDN_URL}/logo.svg`,
          sizes: '180x180'
        },
        {
          rel: 'manifest',
          href: `${CDN_URL}/manifest.webmanifest`
        }
      ]
    }
  },
  css: ['@/assets/scss/common.scss'],
  vite: {
    plugins: [
      visualizer({
        emitFile: true,
        gzipSize: true,
        brotliSize: true
      }),
      viteCompression({
        algorithm: 'brotliCompress'
      })
    ],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      sourcemap: true
    }
  }
})
