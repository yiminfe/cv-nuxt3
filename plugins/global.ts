export default defineNuxtPlugin(app => {
  if (process.server) return

  function changeSmallScreen() {
    window.innerWidth <= 1104
      ? document.body.classList.add('small-screen')
      : document.body.classList.remove('small-screen')
  }

  function changeScale() {
    let e = window.screen.width,
      n = e / 794
    e > 1104 && (n = n > 1 ? 1 : n)
    let t = document.querySelector('meta[name="viewport"]')
    t.setAttribute('content', `width=794, initial-scale=${n}`),
      document.body && changeSmallScreen()
  }

  app.hook('page:finish', () => {
    setTimeout(changeScale, 10)
  })

  window.addEventListener('resize', changeScale)
})
