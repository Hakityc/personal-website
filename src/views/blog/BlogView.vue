<template>
  <div class="w-screen h-screen flex flex-row pt-30 overflow-x-hidden">
    <div class="w-140 h-full flex flex-col ml-100 gap-5">
      <BlogHeader></BlogHeader>
      <BlogBody class="flex-1"></BlogBody>
    </div>
    <div class="flex flex-col flex-1">
      <BlogSider></BlogSider>
    </div>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped></style>