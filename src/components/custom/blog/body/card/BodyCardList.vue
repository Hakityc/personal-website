<template>
  <div class="flex flex-col overflow-y-scroll scrollbar-hide gap-3">
    <template v-for="item in items || []">
      <BodyCardListItem :item="item"></BodyCardListItem>
    </template>
  </div>
</template>

<script
  lang='ts'
  setup
>
import { Item } from '@/models/blog/card'
import { useCardList } from '@/apis/blog/useCard'

const { run, data, loading } = useCardList()
const items = ref<Item[]>([
  {
    id: 1,
    title: "这是第一条数据",
    description: "这是第一条数据的描述",
    image: "https://example.com/image1.jpg",
    date: "2024-04-13",
    author: {
      id: 1,
      name: "作者1",
      avatar: "https://example.com/avatar1.jpg"
    },
    tags: [
      { id: 1, name: "标签1" },
      { id: 2, name: "标签2" }
    ],
    stat: {
      like: 10,
      comment: 5
    }
  },
  {
    id: 2,
    title: "这是第二条数据",
    description: "这是第二条数据的描述",
    image: "https://example.com/image2.jpg",
    date: "2024-04-14",
    author: {
      id: 2,
      name: "作者2",
      avatar: "https://example.com/avatar2.jpg"
    },
    tags: [
      { id: 3, name: "标签3" },
      { id: 4, name: "标签4" }
    ],
    stat: {
      like: 20,
      comment: 8
    }
  }
])
const params = reactive({
  pageNum: 1,
  pageSize: 20,
})

const init = async () => {
  await run({
    pageNum: params.pageNum,
    pageSize: params.pageSize,
    q: ''
  })
  console.log(data.value)
}

onMounted(init)

</script>

<style scoped></style>