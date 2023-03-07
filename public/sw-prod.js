importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js'
)

workbox.setConfig({
  debug: false
})

const { registerRoute } = workbox.routing
const { StaleWhileRevalidate, CacheFirst } = workbox.strategies
const { CacheableResponsePlugin } = workbox.cacheableResponse
const { BroadcastUpdatePlugin } = workbox.broadcastUpdate

const documentStaleWhileRevalidate = new StaleWhileRevalidate({
  cacheName: 'document',
  plugins: [new BroadcastUpdatePlugin()]
})
registerRoute(
  ({ request }) => ['document', 'track'].indexOf(request.destination) > -1,
  documentStaleWhileRevalidate
)

const scriptStyleCacheFirst = new CacheFirst({
  cacheName: 'script-style',
  plugins: [new CacheableResponsePlugin({ statuses: [200] })]
})

registerRoute(
  ({ request }) =>
    ['script', 'style', 'worker'].indexOf(request.destination) > -1,
  scriptStyleCacheFirst
)

const assetsCacheFirst = new CacheFirst({
  cacheName: 'assets',
  plugins: [new CacheableResponsePlugin({ statuses: [200] })]
})

registerRoute(
  ({ request }) =>
    ['audio', 'font', 'image', 'video'].indexOf(request.destination) > -1,
  assetsCacheFirst
)
