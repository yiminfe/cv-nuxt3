<template>
  <CommonModule :icon="icon" :title="title">
    <div class="school">
      <ul>
        <li>
          {{ schoolInfo.school }}
        </li>
      </ul>
      <span>{{ schoolInfo.major }}</span>
      <span>{{ schoolInfo.duration }}</span>
    </div>

    <ul class="school-honor">
      <li v-for="(item, index) in schoolList" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </CommonModule>
</template>

<script setup lang="ts">
import data from '@/data/cv-school.json'

const { icon, title, schoolInfo, schoolList } = data
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/school.scss';
</style>
