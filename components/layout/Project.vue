<template>
  <CommonModule :icon="icon" :title="title" :pageClassName="className">
    <div class="project-list">
      <div v-for="project in projects" :key="project.id" class="project-item">
        <div class="project-meta">
          <div class="project-name">
            <ul>
              <li>{{ project.name }}</li>
            </ul>
          </div>
          <div class="project-info">
            <span class="project-industry">{{ project.industry }}</span>
            <span class="project-time">{{ project.time }}</span>
          </div>
        </div>
        <div class="project-details">
          <div
            v-for="(detail, index) in project.details"
            :key="`${index}`"
            class="project-row"
          >
            <div class="project-label">{{ detail.label }}</div>
            <ul class="project-list-inline">
              <li v-for="(point, index) in detail.points" :key="`${index}`">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </CommonModule>
</template>

<script setup lang="ts">
import data from '@/data/cv-main-projects.json'
import dataPage from '@/data/cv-main-projects-page.json'

interface Props {
  className?: string
}
const props = defineProps<Props>()

const { className } = props

const { title, icon, projects } = className ? dataPage : data
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/project.scss';
</style>
