<template>
  <div>
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
          v-text="item.text"
        ></a>
        <span v-else class="info-item" v-text="item.text"></span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '@/data/cv-header.json'
const { name, jobTitle, jobTitleIcon, infoList } = data
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/header.scss';
</style>
