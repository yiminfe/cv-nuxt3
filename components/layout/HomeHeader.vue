<template>
  <div class="title-box">
    <div class="header">
      <span class="name">{{ name }}</span>
      <div class="job-title">
        <span class="icon">{{ jobTitleIcon }}</span
        >{{ jobTitle }}
      </div>
    </div>

    <div class="personal-info">
      <p v-for="(item, index) in infoList" :key="`${item.icon}-${index}`">
        <span class="icon">{{ item.icon }}</span>
        <a
          v-if="item.href"
          class="info-item"
          :href="item.href"
          target="_blank"
          v-text="item.text"
        ></a>
        <span v-else class="info-item" v-text="item.text"></span>
      </p>
    </div>
    <div class="online-box">
      <a class="online-image" href="https://yiminfe.com" target="_blank"
        ><img :src="onlineImageUrl" alt="在线简历"
      /></a>
      <a class="online-a" href="https://yiminfe.com" target="_blank"
        >手机访问</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ossImageToWebp } from '@/common/utils'
import data from '@/data/cv-header.json'
const { name, jobTitle, jobTitleIcon, infoList } = data

const darkTheme = useDarkTheme()
const onlineImageUrl = ref('')
watchEffect(() => {
  onlineImageUrl.value = ossImageToWebp(
    `https://static.yiminfe.com/CV/${darkTheme.value ? 'dark' : 'light'}.png`
  )
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/header.scss';
</style>
