## SSG 需要手动添加的 JavaScript

### 源码
```javascript
<script> 
  const screenWidth = window.innerWidth
  const designWidth = 794
  const scale = screenWidth / designWidth
  const viewport = document.querySelector('meta[name="viewport"]')
  viewport.setAttribute(
    'content',
    `width=${designWidth}, initial-scale=${scale}`
  )

navigator &&
  navigator.serviceWorker &&
  navigator.serviceWorker.addEventListener('message', function (event) {
    if (event.data.meta === 'workbox-broadcast-update') {
      window.location.reload()
    }
  })
</script>
```


### 压缩
```javascript
<script>const screenWidth = window.innerWidth;const designWidth = 794;const scale = screenWidth/designWidth;const viewport = document.querySelector('meta[name="viewport"]');viewport.setAttribute('content',`width=${designWidth}, initial-scale=${scale}`);</script>
```
```javascript
<script>navigator&&navigator.serviceWorker&&navigator.serviceWorker.addEventListener("message",function(n){n.data.meta==="workbox-broadcast-update"&&window.location.reload()});</script>
```
