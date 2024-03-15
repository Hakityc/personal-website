<template>
  <div class="flex flex-col items-center justify-center gap-64">
    <div class="flex flex-row justify-center items-center">
      <FilterAvatar :size="60"></FilterAvatar>
    </div>
    <div class="flex flex-row gap-48 justify-evenly items-center">
      <a-button
        type="text"
        class="flex items-center justify-center w-64 h-64 p-0"
        @click="handleClick(UrlType.BILIBILI)"
      >
        <i-tabler:brand-bilibili class="text-48 text-default"></i-tabler:brand-bilibili>
      </a-button>
      <a-button
        type="text"
        class="flex items-center justify-center w-64 h-64 p-0"
        @click="handleClick(UrlType.GITHUB)"
      >
        <i-line-md:github class="text-48 text-default"></i-line-md:github>
      </a-button>
      <a-button
        type="text"
        class="flex items-center justify-center w-64 h-64 p-0"
        @click="handleClick(UrlType.EMAIL)"
      >
        <i-line-md:email class="text-48 text-default"></i-line-md:email>
      </a-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { message } from 'ant-design-vue'

enum UrlType {
  BILIBILI = 'https://space.bilibili.com/23076184',
  GITHUB = 'https://github.com/Tamcony',
  EMAIL = 'mailto:tangchony@qq.com'
}

const handleClick = (url: UrlType) => {
  if (url == UrlType.EMAIL) {
    message.info('暂未支持email', 1)
    return
  }
  window.open(url)
}
</script>

<style lang='less' scoped></style>