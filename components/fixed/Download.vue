<template>
  <div class="download-container close" ref="downloadRef">
    <div class="download-btn chat">
      <img src="https://static.yiminfe.com/CV/wachat" :alt="{ weChatText }" />
      <span>{{ weChatText }}</span>
    </div>
    <div class="download-btn" @click="downloadPDF">
      <span class="icon">⬇️</span>
      <span class="text">{{ downloadText }}</span>
    </div>
    <div class="download-btn" @click="toggleTheme">
      <span class="icon">🎨</span>
      <span class="text">{{ themeText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { debounce, isWeChat } from '@/common/utils'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const weChatText = ref('扫一扫，添加好友')
if (isWeChat()) {
  weChatText.value = '长按，添加好友'
}

const downloadRef = ref(null)
onMounted(() => {
  watchEffect(() => {
    if (props.modelValue) {
      downloadRef.value.classList.remove('close')
    } else {
      downloadRef.value.classList.add('close')
    }
  })
})

let isLightMode = ref(false)
const downloadText = ref('')
const themeText = ref('')
let pdfUrl = ''
watchEffect(() => {
  downloadText.value = `下载 ${isLightMode.value ? 'light' : 'dark'} 简历`
  themeText.value = `切换 ${isLightMode.value ? 'dark' : 'light'} 主题`
  pdfUrl = isLightMode.value
    ? 'https://static.yiminfe.com/CV/%E8%B5%B5%E4%BE%9D%E6%B0%91%EF%BC%88%E8%B5%84%E6%B7%B1%E5%A4%A7%E5%89%8D%E7%AB%AF%E7%A0%94%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88%EF%BC%89light.pdf'
    : 'https://static.yiminfe.com/CV/%E8%B5%B5%E4%BE%9D%E6%B0%91%EF%BC%88%E8%B5%84%E6%B7%B1%E5%A4%A7%E5%89%8D%E7%AB%AF%E7%A0%94%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88%EF%BC%89dark.pdf'
})

function downloadPDF() {
  emit('update:modelValue', false)
  window.open(pdfUrl, '_blank')
}

function toggleTheme() {
  emit('update:modelValue', false)
  const body = document.body
  isLightMode.value = !isLightMode.value
  if (isLightMode.value) {
    body.classList.add('light')
  } else {
    body.classList.remove('light')
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/download.scss';
</style>
