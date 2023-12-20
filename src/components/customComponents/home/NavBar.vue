<template>
  <div class="flex w-303 h-25 gap-28">
    <template v-for="item in items">
      <NavBarItem :is-checked="item.isChecked">
        {{ item.title }}
      </NavBarItem>
    </template>
    <NavBarSearch></NavBarSearch>
  </div>
</template>

<script lang='ts' setup>
const items = reactive([
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
</script>

<style lang='less' scoped></style>