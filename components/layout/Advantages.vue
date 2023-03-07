<template>
  <CommonModule :icon="icon" :title="title" :className="className">
    <ul class="advantages">
      <li v-for="item in list" :key="item.id" v-html="item.text"></li>
    </ul>
  </CommonModule>
</template>

<script setup lang="ts">
import data from '@/data/cv-advantages.json'

const { icon, title, className, list } = data
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/advantages.scss';
</style>
