<script setup lang="ts">
import { isMobile } from '@/common/utils'

const openMenu = useOpenMenu()
function changeOpenMenu() {
  if (openMenu.value) {
    openMenu.value = false
  }
}

let timer
onMounted(() => {
  timer = setTimeout(() => {
    openMenu.value = true
    if (isMobile()) {
      timer = setTimeout(changeOpenMenu, 5000)
    }
  }, 1000)
  window.addEventListener('scroll', changeOpenMenu)
})

onUnmounted(() => {
  window.removeEventListener('scroll', changeOpenMenu)
  clearTimeout(timer)
  timer = null
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
    <FixedDownload></FixedDownload>
    <FixedMenu></FixedMenu>
    <CommonAfterStyle></CommonAfterStyle>
  </div>
</template>
