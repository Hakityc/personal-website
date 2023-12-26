<template>
  <template v-for="(item, index) in items || []">
    <div @click="handleClick(index)">
      <slot
        name="item"
        :item="item"
        :active="currentIndex === index"
      ></slot>
    </div>
  </template>
</template>

<script lang='ts' setup>
interface Props {
  items?: any[]
  default?: number
}
const props = defineProps<Props>()

const currentIndex = ref<number | undefined>(props.default)
const handleClick = (index: number) => {
  currentIndex.value = index
}
</script>

<style scoped></style>