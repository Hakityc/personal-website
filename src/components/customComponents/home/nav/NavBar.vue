<template>
  <div class="inline-flex items-start gap-7">
    <template v-for="item in items">
      <NavBarItem
        :is-checked="item.isChecked"
        @click="handleClickItem(item)"
      >
        {{ item.title }}
      </NavBarItem>
    </template>
    <!-- <NavBarSearch></NavBarSearch> -->
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
    title: 'Blog',
    isChecked: false
  }, {
    title: 'About',
    isChecked: false
  }, {
    title: 'Product',
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