<template>
  <div class="flex flex-row w-full items-center gap-4">
    <a-button
      type="text"
      class="p-1!"
      @click="handleScroll('sub')"
    >
      <i-grommet-icons:next class="text-4 rotate-180"></i-grommet-icons:next>
    </a-button>
    <div
      ref="scrollRef"
      class="flex flex-row gap-12.5 items-center shrink-0 justify-start flex-1 overflow-x-scroll scrollbar-hide"
    >
      <template v-for="item in items">
        <BodyTagListItem
          :item="item"
          @click="handleClick(item)"
        ></BodyTagListItem>
      </template>
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

interface TagItem extends Item {
  isChecked: boolean
}

const scrollRef = ref()
const { x } = useScroll(scrollRef, {
  behavior: 'smooth'
})
const { run, data, loading } = useTagList()
const items = computed(() => {
  return data.value?.map((item) => {
    return {
      ...item,
      isChecked: false
    }
  }) || []
})

const handleClick = (item: TagItem) => {
  items.value.forEach((i) => {
    i.isChecked = false
  })
  item.isChecked = true
}

const handleScroll = (type: 'add' | 'sub') => {
  const distance = 400
  if (type == 'add') {
    x.value += distance
  } else if (type == 'sub') {
    x.value -= distance
  }
}

const init = async () => {
  await run()
}

onMounted(init)
</script>

<style scoped></style>