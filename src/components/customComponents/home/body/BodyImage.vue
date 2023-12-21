<template>
  <div class="flex flex-col items-center">
    <a-avatar
      :src="avatar"
      :size="200"
      class="border-1px border-solid border-#8886CC shadow-2xl"
    >
      <!-- <img
        class="w-60 h-60 shrink-0 rounded-full"
        :src="avatar"
      /> -->
    </a-avatar>
    <div class="flex flex-row gap-6 justify-evenly items-center">
      <a-button
        type="text"
        class="px-2"
      >
        <i-tabler:brand-bilibili class="text-6 text-default"></i-tabler:brand-bilibili>
      </a-button>
      <a-button
        type="text"
        class="px-2"
      >
        <i-line-md:github class="text-6 text-default"></i-line-md:github>
      </a-button>
      <a-button
        type="text"
        class="px-2"
      >
        <i-line-md:email class="text-6 text-default"></i-line-md:email>
      </a-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import avatar from '@/assets/avatar.png'

</script>

<style lang='less' scoped></style>