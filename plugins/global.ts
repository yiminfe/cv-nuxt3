export default defineNuxtPlugin(() => {
  if (!process.client) return

  window.addEventListener('resize', () => {
    console.log('resize')
    if (window.innerWidth < 1034) {
      document.body.classList.add('small-screen')
    } else {
      document.body.classList.remove('small-screen')
    }
  })
})
