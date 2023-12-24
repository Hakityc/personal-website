<template>
  <div class="w-130 shrink-0 border-rd-3 bg-red-400 p-4 flex flex-row gap-14">
    <div class="w-30 h-30 bg-#fff rounded-md">
      <img
        :src="item.image"
        :alt="item.title"
      >
    </div>
    <div class="flex flex-col flex-1">
      <h1>{{ item.title }}</h1>
      <span>{{ item.description }}</span>
      <div class="flex flex-row">
        <a-avatar
          :icon="item.author.avatar"
          :size="12"
        ></a-avatar>
        <span>{{ item.author.name }}</span>
      </div>
      <div class="flex flex-row">
        <template v-for="tag in item.tags">
          <a-tag>
            {{ tag.name }}
          </a-tag>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { Item } from '@/models/blog/card'

interface Props {
  item: Item
}
const props = defineProps<Props>()
</script>

<style scoped></style>