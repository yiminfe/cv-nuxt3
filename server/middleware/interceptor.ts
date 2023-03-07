import createEtag from 'etag'

const isProd = process.env.NODE_ENV === 'production'

function renderWorkboxUpdate() {
  return `<script>navigator&&navigator.serviceWorker&&navigator.serviceWorker.addEventListener('message',function(event){if(event.data.meta==='workbox-broadcast-update'){window.location.reload()}})</script>`
}

export default defineEventHandler(event => {
  const { node } = event
  const { res } = node

  const originalEnd = res.end
  res.end = html => {
    let newHtml = html
    if (isProd) {
      const workboxUpdate = renderWorkboxUpdate()
      html = newHtml.replace('</head>', `${workboxUpdate}</head>`)
    }
    res.setHeader('ETag', createEtag(newHtml))
    return originalEnd.call(res, newHtml)
  }
})
