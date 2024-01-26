<template>
  <div class="w-1040 shrink-0 border-rd-12 bg-red-400 p-16 flex flex-row gap-56">
    <div class="w-240 h-240 bg-#fff rounded-md flex justify-center items-center">
      <img
        :src="item.image"
        :alt="item.title"
      >
    </div>
    <div class="flex flex-col flex-1">
      <span class="text-32 text-#1C1C1C mb-6">{{ item.title }}</span>
      <span class="text-20">{{ item.description }}</span>
      <div class="flex flex-row mb-14">
        <a-avatar
          :icon="item.author?.avatar"
          :size="15"
        ></a-avatar>
        <span>{{ item.author?.name }}</span>
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