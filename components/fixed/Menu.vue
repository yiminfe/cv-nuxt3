<template>
  <div class="menu-container" @click="toggleMenu">
    <div class="menu-btn">
      <span class="icon rotation" ref="menuIconRef">👉</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { debounce } from '@/common/utils'

const openMenu = useOpenMenu()
const menuIconRef = ref(null)
onMounted(() => {
  watchEffect(() => {
    if (openMenu.value) {
      menuIconRef.value.classList.add('open')
    } else {
      menuIconRef.value.classList.remove('open')
    }
  })
})

function toggleMenu() {
  openMenu.value = !openMenu.value
}
</script>

<style lang="scss">
@import '@/assets/scss/layout/menu.scss';
</style>
