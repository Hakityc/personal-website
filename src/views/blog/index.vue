<template>
  <div class="w-screen h-screen flex flex-row pt-240 overflow-x-hidden">
    <div class="w-1200 h-full flex flex-col ml-800 gap-40">
      <BlogHeader></BlogHeader>
      <BlogBody class="flex-1"></BlogBody>
    </div>
    <div class="flex flex-col flex-1">
      <BlogSider></BlogSider>
    </div>
  </div>
</template>

<script lang='ts' setup>
import BlogHeader from './layouts/BlogHeader.vue'
import BlogBody from './layouts/BlogBody.vue'
import BlogSider from './layouts/BlogSider.vue'
</script>

<style scoped></style>