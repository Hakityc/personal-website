<template>
  <div class="flex flex-row gap-12.5 items-center shrink-0 justify-start">
    <template v-for="item in items">
      <BodyTagListItem
        :data="item"
        @click="handleClick(item)"
      ></BodyTagListItem>
    </template>
  </div>
</template>

<script lang='ts' setup>
interface Item {
  text: string
  isChecked: boolean
}
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
  }
])

const handleClick = (item: Item) => {
  items.value.forEach((i) => {
    i.isChecked = false
  })
  item.isChecked = true
}
</script>

<style scoped></style>