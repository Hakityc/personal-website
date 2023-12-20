<template>
  <div class="flex h-25 gap-28 items-center">
    <template v-for="item in items">
      <NavBarItem
        :is-checked="item.isChecked"
        @click="handleClickItem(item)"
      >
        {{ item.title }}
      </NavBarItem>
    </template>
    <NavBarSearch></NavBarSearch>
  </div>
</template>

<script lang='ts' setup>
interface Item {
  title: string
  isChecked: boolean
}
const items = reactive<Item[]>([
  {
    title: 'Home',
    isChecked: true
  }, {
    title: 'Article',
    isChecked: false
  }, {
    title: 'About',
    isChecked: false
  }, {
    title: 'Contact',
    isChecked: false
  },
])

const handleClickItem = (item: Item) => {
  items.forEach((i) => {
    i.isChecked = false
  })
  item.isChecked = true
}
</script>

<style lang='less' scoped></style>