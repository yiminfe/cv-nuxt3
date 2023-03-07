<template>
  <div class="module">
    <div :class="`module-title ${pageClassName}`">
      <div :class="`icon-box ${className}`">
        <span class="icon">{{ icon }}</span>
      </div>
      <span class="text">{{ title }}</span>
      <div class="separator"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  className?: string
  pageClassName?: string
}

const props = defineProps<Props>()

let { icon, title, className, pageClassName } = props

className = className || ''
pageClassName = pageClassName || ''
</script>
