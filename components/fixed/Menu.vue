<template>
  <div class="menu-container" @click="debounce(toggleMenu, 100)">
    <div class="menu-btn">
      <span class="icon rotation" :ref="menuIconRef">⇦</span>
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

const isOpen = ref(props.modelValue)

const menuIconRef = ref(null)

watch(isOpen, newIsOpen => {
  emit('update:modelValue', newIsOpen)
  if (newIsOpen.value) {
    menuIconRef.value.classList.add('open')
  } else {
    menuIconRef.value.classList.remove('open')
  }
})

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/menu.scss';
</style>
