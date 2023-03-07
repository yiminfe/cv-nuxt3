<script setup lang="ts">
const pageMeta = {
  title: '赵依民（资深大前端研发工程师）',
  keywords: '专注 Web Client 端和 Node.js Server 端的深入，TypeScript 全栈开发',
  description:
    '一位非知名程序员，曾经想过改变世界，现在只想努力做好一位打工人，实现自己的价值。'
}
</script>

<template>
  <Head>
    <Title>{{ pageMeta.title }}</Title>
    <Meta name="keywords" :content="pageMeta.keywords" />
    <Meta name="description" :content="pageMeta.description" />
  </Head>
</template>
