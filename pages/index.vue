<script setup lang="ts">
const isOpen = ref(false)
function changeOpen() {
  if (isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', changeOpen)

  setTimeout(() => {
    isOpen.value = true
  }, 1000)

  setTimeout(() => {
    if (isOpen.value) {
      isOpen.value = false
    }
  }, 5000)

  const screenWidth = window.innerWidth
  alert(screenWidth)
  const designWidth = 794
  const scale = screenWidth / designWidth
  alert(scale)
  const viewport = document.querySelector('meta[name="viewport"]')
  viewport.setAttribute(
    'content',
    `width=${designWidth}, initial-scale=${scale}`
  )
})

onUnmounted(() => {
  window.removeEventListener('scroll', changeOpen)
})
</script>

<template>
  <div class="a4-container">
    <LayoutHomeHeader></LayoutHomeHeader>
    <LayoutAdvantages></LayoutAdvantages>
    <LayoutTimeline></LayoutTimeline>
    <LayoutProject></LayoutProject>
    <LayoutProject className="page"></LayoutProject>
    <LayoutOtherProject></LayoutOtherProject>
    <LayoutSchool></LayoutSchool>
    <FixedDownload v-model="isOpen"></FixedDownload>
    <FixedMenu v-model="isOpen"></FixedMenu>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/print.scss';
@import '@/assets/scss/smallScreen.scss';
</style>
