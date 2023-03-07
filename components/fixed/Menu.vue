<template>
  <div class="menu-container" @click="toggleMenu">
    <div class="menu-btn">
      <span class="icon rotation" ref="menuIconRef">🡰</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { debounce } from '@/common/utils'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const menuIconRef = ref(null)
onMounted(() => {
  watchEffect(() => {
    if (props.modelValue) {
      menuIconRef.value.classList.add('open')
    } else {
      menuIconRef.value.classList.remove('open')
    }
  })
})

function toggleMenu() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/menu.scss';
</style>
