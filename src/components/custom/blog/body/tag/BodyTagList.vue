<template>
  <div class="flex flex-row w-full items-center gap-32">
    <a-button
      type="text"
      class="p-8!"
      @click="handleScroll('sub')"
    >
      <i-grommet-icons:next class="text-32 rotate-180"></i-grommet-icons:next>
    </a-button>
    <div
      ref="scrollRef"
      class="flex flex-row gap-50 items-center shrink-0 justify-start flex-1 overflow-x-scroll scrollbar-hide"
    >
      <BaseIsCheckButtonList :items="items || []">
        <template #item="{ item, active }">
          <BodyTagListItem
            :item="item"
            :is-active="active"
          ></BodyTagListItem>
        </template>
      </BaseIsCheckButtonList>
    </div>
    <a-button
      type="text"
      class="p-1"
      @click="handleScroll('add')"
    >
      <i-grommet-icons:next class="text-4"></i-grommet-icons:next>
    </a-button>
  </div>
</template>

<script lang='ts' setup>
import { useScroll } from '@vueuse/core'
import { useTagList } from '@/apis/blog/useTag'
import { Item } from '@/models/blog/tag'

const scrollRef = ref()
const { x } = useScroll(scrollRef, {
  behavior: 'smooth'
})
const { run, data, loading } = useTagList()
const items = computed(() => {
  return data.value
})

const handleScroll = (type: 'add' | 'sub') => {
  const distance = 400
  if (type == 'add') {
    x.value += distance
  } else if (type == 'sub') {
    x.value -= distance
  }
}

const init = async () => {
  // await run()
}

onMounted(init)
</script>

<style scoped></style>