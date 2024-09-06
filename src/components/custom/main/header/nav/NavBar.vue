<template>
  <div class="inline-flex items-start gap-46">
    <template v-for="item in items">
      <NavBarItem :is-active="item.path == router.currentRoute.value.path" :title="item.title"
        @click="handleClickItem(item)">
      </NavBarItem>
    </template>
    <a-button @click="handleRedirectBlog" class="w-100! h-48! flex flex-row items-center justify-center p-0!" type="text">
      <span class="text-nowrap text-32">博客</span>
      <BaseIcon icon-name="gg:arrow-top-right" icon-size="16"></BaseIcon>
    </a-button>
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
  window.open('https://tam.pub/blog', '_blank')
}
</script>

<style lang='less' scoped></style>