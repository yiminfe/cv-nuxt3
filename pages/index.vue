<script setup lang="ts">
definePageMeta({
  title: '赵依民（资深大前端研发工程师）'
})

const isOpen = ref(false)

// if (process.client) {
//   window.addEventListener('load', function () {
//     console.log('load')
//     setTimeout(() => {
//       isOpen.value = true
//     }, 1000)

//     setTimeout(() => {
//       if (isOpen.value) {
//         isOpen.value = false
//       }
//     }, 5000)
//   })
// }
onMounted(() => {
  window.addEventListener('scroll', function () {
    console.log('scroll')
    if (isOpen.value) {
      isOpen.value = false
    }
  })
})

if (process.client) {
  this.$nextTick(() => {
    this.$nuxt.$once('clientReady', () => {
      console.log('load')
    })
  })
}
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
