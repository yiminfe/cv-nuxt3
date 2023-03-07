export default defineNuxtPlugin(() => {
  if (!process.client) return

  const screenWidth = window.innerWidth
  const designWidth = 794 // 设计稿宽度
  const scale = screenWidth / designWidth
  const viewport = document.querySelector('meta[name="viewport"]')
  viewport?.setAttribute(
    'content',
    `width=${designWidth}, initial-scale=${scale}`
  )

  window.addEventListener('resize', () => {
    console.log('resize')
    if (window.innerWidth < 1034) {
      document.body.classList.add('small-screen')
    } else {
      document.body.classList.remove('small-screen')
    }
  })
})
