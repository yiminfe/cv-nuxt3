<template>
  <div class="download-container close" ref="downloadRef">
    <div class="download-btn chat">
      <img
        :src="ossImageToWebp('https://static.yiminfe.com/CV/wachat')"
        :alt="{ weChatText }"
      />
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
import { debounce, isWeChat, ossImageToWebp } from '@/common/utils'

const openMenu = useOpenMenu()
const darkTheme = useDarkTheme()

const weChatText = ref('扫一扫，添加好友')
if (isWeChat()) {
  weChatText.value = '长按，添加好友'
}

const downloadRef = ref(null)
const downloadText = ref('')
const themeText = ref('')
let pdfUrl = ''

onMounted(() => {
  watchEffect(() => {
    if (openMenu.value) {
      downloadRef.value.classList.remove('close')
    } else {
      downloadRef.value.classList.add('close')
    }
  })

  const body = document.body
  watchEffect(() => {
    if (!darkTheme.value) {
      body.classList.add('light')
    } else {
      body.classList.remove('light')
    }
    downloadText.value = `下载 ${!darkTheme.value ? 'Light' : 'Dark'} 简历`
    themeText.value = `切换 ${!darkTheme.value ? 'Dark' : 'Light'} 主题`
    pdfUrl = !darkTheme.value
      ? 'https://static.yiminfe.com/CV/%E8%B5%B5%E4%BE%9D%E6%B0%91%EF%BC%88%E8%B5%84%E6%B7%B1%E5%A4%A7%E5%89%8D%E7%AB%AF%E7%A0%94%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88%EF%BC%89light.pdf'
      : 'https://static.yiminfe.com/CV/%E8%B5%B5%E4%BE%9D%E6%B0%91%EF%BC%88%E8%B5%84%E6%B7%B1%E5%A4%A7%E5%89%8D%E7%AB%AF%E7%A0%94%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88%EF%BC%89dark.pdf'
  })
})

function downloadPDF() {
  openMenu.value = false
  window.open(pdfUrl, '_blank')
}

function toggleTheme() {
  openMenu.value = false
  darkTheme.value = !darkTheme.value
}
</script>

<style lang="scss">
@import '@/assets/scss/layout/download.scss';
</style>
