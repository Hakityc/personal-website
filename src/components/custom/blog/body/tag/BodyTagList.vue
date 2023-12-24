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
interface Item {
  text: string
  isChecked: boolean
}
const scrollRef = ref()
const { x } = useScroll(scrollRef, {
  behavior: 'smooth'
})
const items = ref<Item[]>([
  {
    text: 'All',
    isChecked: true
  }, {
    text: 'Technology',
    isChecked: false
  }, {
    text: 'Environment',
    isChecked: false
  }, {
    text: 'Business',
    isChecked: false
  }, {
    text: 'AAA',
    isChecked: false
  }, {
    text: 'AAA',
    isChecked: false
  }, {
    text: 'AAA',
    isChecked: false
  }, {
    text: 'AAA',
    isChecked: false
  }, {
    text: 'AAA',
    isChecked: false
  }
])

const handleClick = (item: Item) => {
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
</script>

<style scoped></style>