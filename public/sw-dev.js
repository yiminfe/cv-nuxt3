importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js'
)

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', () => self.clients.claim())

workbox.setConfig({
  debug: true
})

const { registerRoute } = workbox.routing
const { StaleWhileRevalidate, NetworkFirst, CacheFirst, NetworkOnly } =
  workbox.strategies
const { CacheableResponsePlugin } = workbox.cacheableResponse
const { ExpirationPlugin } = workbox.expiration

// dev html NetworkOnly
registerRoute(
  ({ request }) => ['document', 'track'].indexOf(request.destination) > -1,
  new NetworkOnly({
    cacheName: 'document',
    plugins: [new CacheableResponsePlugin({ statuses: [200] })]
  })
)

// dev script-style NetworkOnly
registerRoute(
  ({ request }) =>
    ['script', 'style', 'worker'].indexOf(request.destination) > -1,
  new NetworkOnly({
    cacheName: 'script-style',
    plugins: [new CacheableResponsePlugin({ statuses: [200] })]
  })
)

// dev assets CacheFirst
registerRoute(
  ({ request }) =>
    ['audio', 'font', 'image', 'video'].indexOf(request.destination) > -1,
  new CacheFirst({
    cacheName: 'assets',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      // 50 entries max, 30 days max
      new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 })
    ]
  })
)
