<template>
  <div class="flex flex-col items-center justify-center gap-16">
    <div class="flex items-center justify-center p-4 relative">
      <div class="w-full h-full rounded-full bg-#8886CC filter-blur-3xl absolute avatar-animate"></div>
      <a-avatar
        :src="avatar"
        :size="200"
      >
      </a-avatar>
    </div>
    <div class="flex flex-row gap-6 justify-evenly items-center">
      <a-button
        type="text"
        class="flex items-center justify-center w-8 h-8 p-0"
        @click="handleClick(UrlType.BILIBILI)"
      >
        <i-tabler:brand-bilibili class="text-6 text-default"></i-tabler:brand-bilibili>
      </a-button>
      <a-button
        type="text"
        class="flex items-center justify-center w-8 h-8 p-0"
        @click="handleClick(UrlType.GITHUB)"
      >
        <i-line-md:github class="text-6 text-default"></i-line-md:github>
      </a-button>
      <a-button
        type="text"
        class="flex items-center justify-center w-8 h-8 p-0"
        @click="handleClick(UrlType.EMAIL)"
      >
        <i-line-md:email class="text-6 text-default"></i-line-md:email>
      </a-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import avatar from '@/assets/avatar.png'
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

<style lang='less' scoped>
.avatar-animate {
  animation: avatar 0.6s ease-in-out;
}

@keyframes avatar {
  0% {
    width: 0;
    height: 0;
  }

  100% {
    width: 100%;
    height: 100%;
  }
}
</style>