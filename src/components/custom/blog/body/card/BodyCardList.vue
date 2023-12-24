<template>
  <div class="flex flex-col overflow-y-scroll scrollbar-hide gap-3">
    <template v-for="item in data?.items || []">
      <BodyCardListItem :item="item"></BodyCardListItem>
    </template>
  </div>
</template>

<script lang='ts' setup>
import { Item } from '@/models/blog/card'
import { useCardList } from '@/apis/blog/useCard'
import Mock from 'mockjs'
const { run, data, loading } = useCardList()
const items = ref<Item[]>()

const init = async () => {
  await run()
  console.log(data.value)
}

onMounted(init)

</script>

<style scoped></style>