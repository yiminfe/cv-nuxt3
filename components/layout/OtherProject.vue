<template>
  <CommonModule :icon="icon" :title="title">
    <div class="other-project">
      <ul class="other-project-outer">
        <template v-for="(project, index) in projects" :key="index">
          <li>
            {{ project.title }}
            <ul class="other-project-inner">
              <li
                v-for="(link, idx) in project.links"
                :key="`${link.id}-${idx}`"
              >
                <template
                  v-for="(item, itemIdex) in link.list"
                  :key="`${item.id}-${idx}`"
                >
                  {{ item.href == null ? item.text : '' }}
                  <a
                    v-if="item.href"
                    :href="item.href"
                    class="info-item"
                    target="_blank"
                    >{{ item.text }}</a
                  >
                  {{
                    item.href != null && itemIdex !== link.list.length - 1
                      ? '、'
                      : ''
                  }}
                </template>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </div>
  </CommonModule>
</template>

<script setup lang="ts">
import data from '@/data/cv-other-project.json'

const { icon, title, projects } = data
</script>

<style scoped lang="scss">
@import '@/assets/scss/layout/otherProject.scss';
</style>
