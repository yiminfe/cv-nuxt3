<template>
  <CommonModule :icon="icon" :title="title" :className="className">
    <div class="timeline">
      <div v-for="item in items" :key="item.id" class="timeline-item">
        <div class="timeline-item-line"><li></li></div>
        <div class="timeline-item-content">
          <div class="timeline-item-header">
            <span class="timeline-item-date">{{ item.date }}</span>
            <span class="timeline-item-company">{{ item.company }}</span>
            <span class="timeline-item-position">{{ item.position }}</span>
          </div>
          <div class="timeline-item-body">
            <div class="timeline-item-achievement">
              <ul>
                <li v-for="achievement in item.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CommonModule>
</template>

<script setup lang="ts">
import data from '@/data/cv-work-experience.json'

const { title, icon, className, items } = data
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/timeline.scss';
</style>
