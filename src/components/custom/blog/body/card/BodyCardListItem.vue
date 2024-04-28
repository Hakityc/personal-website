<template>
  <div class="w-130 shrink-0 border-rd-3 bg-red-400 p-4 flex flex-row gap-8 justify-between">
    <div class="w-30 h-30 bg-#fff rounded-md flex shrink-0">
      <img
        :src="item.image"
        :alt="item.title"
      >
    </div>
    <div class="flex flex-col justify-between h-full w-full">
      <div class="flex flex-row justify-between h-full">
        <div class="flex flex-col flex-1 text-4 justify-between">
          <div class="flex flex-col">
            <h1 class="font-600">{{ item.title }}</h1>
            <span>{{ item.description }}</span>
          </div>
          <div class="flex flex-row">
            <a-avatar
              :icon="item.author?.avatar"
              :size="24"
            ></a-avatar>
            <span>{{ item.author?.name }}</span>
          </div>

        </div>
        <div class="flex">
          <span>time</span>
        </div>
      </div>
      <div class="flex flex-row justify-between">
        <div class="flex flex-row">
          <template v-for="tag in item.tags">
            <a-tag>
              {{ tag.name }}
            </a-tag>
          </template>
        </div>
        <div class="flex flex-row justify-between">
          <div class="flex flex-row text-4 justify-between items-center">
            <i-icon-park-outline:like></i-icon-park-outline:like>
            <span>{{ item.stat.like }}</span>
            <i-pajamas:comment-dots></i-pajamas:comment-dots>
            <span>{{ item.stat.comment }}</span>
          </div>
          <a-button>readMore</a-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script
  lang='ts'
  setup
>
import { Item } from '@/models/blog/card'

interface Props {
  item: Item
}
const props = defineProps<Props>()
</script>

<style scoped></style>