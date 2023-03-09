function initWorkbox() {
  navigator &&
    navigator.serviceWorker &&
    navigator.serviceWorker.addEventListener('message', function (e) {
      'workbox-broadcast-update' === e.data.meta && window.location.reload()
    })
}
function changeScale() {
  let e = window.screen.width,
    n = e / 794
  e > 1104 && (n = n > 1 ? 1 : n)
  let t = document.querySelector('meta[name="viewport"]')
  t.setAttribute('content', `width=794, initial-scale=${n}`),
    document.body && changeSmallScreen()
}
function changeSmallScreen() {
  window.innerWidth <= 1104
    ? document.body.classList.add('small-screen')
    : document.body.classList.remove('small-screen')
}
initWorkbox(),
  changeScale(),
  window.addEventListener('DOMContentLoaded', changeSmallScreen)
