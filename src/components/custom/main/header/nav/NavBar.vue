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
  name: string
  path: string
}
//TODO 改由路由获取items
const route = useRoute()
const router = useRouter()
// const items = reactive<Item[]>([
//   {
//     title: '首页',
//     isChecked: true
//   }, {
//     title: '博客',
//     isChecked: false
//   }, {
//     title: '项目',
//     isChecked: false
//   }, {
//     title: '关于',
//     isChecked: false
//   }
//   // {
//   //   title: 'Contact',
//   //   isChecked: false
//   // },
// ])

const items = computed<Item[]>(() => {
  return router.options.routes.map(_ => {
    const title = _.meta.title as string || ''
    return {
      title: title,
      isChecked: router.currentRoute.value.path == _.path,
      name: _.name | '',
      path: _.path | ''
    }
  })
})

const handleClickItem = (item: Item) => {
  const { path } = item
  router.push({
    path
  })
}
</script>

<style lang='less' scoped></style>