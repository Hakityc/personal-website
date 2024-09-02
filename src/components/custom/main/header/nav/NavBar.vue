<template>
  <div class="inline-flex items-start gap-46">
    <template v-for="item in items">
      <NavBarItem :is-active="item.path == router.currentRoute.value.path" :title="item.title"
        @click="handleClickItem(item)">
      </NavBarItem>
    </template>
    <NavBarItem @click="handleRedirectBlog">
      <span>博客</span>
    </NavBarItem>
    <!-- <NavBarSearch></NavBarSearch> -->
  </div>
</template>

<script lang='ts' setup>
import { useI18nStore } from '@/stores/modules/i18n'
const i18nStore = useI18nStore()

interface Item {
  title: string
  name: string
  path: string
}
const router = useRouter()

const items = computed(() => {
  const { options } = router
  return options.routes.map((item: any) => {
    const { meta, path, name } = item
    const { title, title_cn } = meta
    return {
      title: i18nStore.isCurrentCN ? title_cn : title,
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

const handleRedirectBlog = () => {
  window.open('https://tam.pub/docs', '_blank')
}
</script>

<style lang='less' scoped></style>