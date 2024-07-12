<script lang="ts" setup>
import { message } from 'ant-design-vue'

enum UrlType {
  BILIBILI = 'https://space.bilibili.com/23076184',
  GITHUB = 'https://github.com/Tamcony',
  EMAIL = 'mailto:tangchony@qq.com',
  JUEJIN = 'https://juejin.cn/user/44448182708696'
}

const buttons = reactive([
  {
    key: 1,
    name: 'GitHub',
    url: UrlType.GITHUB,
    icon: 'i-tabler:brand-github'
  },
  {
    key: 3,
    name: '掘金',
    url: UrlType.JUEJIN,
    icon: 'i-tabler:brand-juejin'
  },
  {
    key: 2,
    name: '邮箱',
    url: UrlType.EMAIL,
    icon: 'i-tabler:mail'
  },

  {
    key: 0,
    name: '哔哩哔哩',
    url: UrlType.BILIBILI,
    icon: 'i-tabler:brand-bilibili'
  }
])

const handleClick = (url: UrlType) => {
  if (url == UrlType.EMAIL) {
    return
  }
  window.open(url)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-64">
    <div class="flex flex-row justify-center items-center">
      <FilterAvatar :size="60"></FilterAvatar>
    </div>
    <div class="flex flex-row gap-48 justify-evenly items-center">
      <template v-for="item in buttons">
        <template v-if="item.key == 2">
          <dev-message>
            <a-button
              type="text"
              class="flex items-center justify-center w-64 h-64 p-0"
              @click="handleClick(item.url)">
              <span
                class="text-48 text-default"
                :class="item.icon"></span>
            </a-button>
          </dev-message>
        </template>
        <template v-else>
          <a-button
            type="text"
            class="flex items-center justify-center w-64 h-64 p-0"
            @click="handleClick(item.url)">
            <span
              class="text-48 text-default"
              :class="item.icon"></span>
          </a-button>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
