importScripts('https://static.yiminfe.com/common/workbox-sw.js'),
  workbox.setConfig({ debug: !1 })
const { registerRoute: e } = workbox.routing,
  { StaleWhileRevalidate: t, CacheFirst: s } = workbox.strategies,
  { CacheableResponsePlugin: a } = workbox.cacheableResponse,
  { BroadcastUpdatePlugin: i } = workbox.broadcastUpdate,
  documentStaleWhileRevalidate = new t({
    cacheName: 'document',
    plugins: [new i()]
  })
e(
  ({ request: e }) => ['document', 'track'].indexOf(e.destination) > -1,
  documentStaleWhileRevalidate
)
const scriptStyleCacheFirst = new s({
  cacheName: 'script-style',
  plugins: [new a({ statuses: [200] })]
})
e(
  ({ request: e }) => ['script', 'style', 'worker'].indexOf(e.destination) > -1,
  scriptStyleCacheFirst
)
const assetsCacheFirst = new s({
  cacheName: 'assets',
  plugins: [new a({ statuses: [200] })]
})
e(
  ({ request: e }) =>
    ['audio', 'font', 'image', 'video'].indexOf(e.destination) > -1,
  assetsCacheFirst
)
