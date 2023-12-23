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
const router = useRouter()

const items = computed(() => {
  const { currentRoute, options } = router
  return options.routes.map((item: any) => {
    const { meta, path, name } = item
    const { title } = meta
    return {
      title,
      isChecked: path == currentRoute.value.path,
      name,
      path
    }
  })
})

const handleClickItem = (item: Item) => {
  try {
    const { path } = item
    router.push({
      path
    })
  } catch (error) {

  }
}
</script>

<style lang='less' scoped></style>