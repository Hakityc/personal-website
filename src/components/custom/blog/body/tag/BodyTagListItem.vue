<template>
  <div>
    <span
      class="text-48 transition-all font-400 duration-200 cursor-pointer"
      :class="`${isActive ? 'text-#3652E1' : 'text-#8E8E8E'}`"
    >{{ item.name }}</span>
  </div>
</template>

<script lang='ts' setup>
interface Props {
  item: {
    id: number
    name: string
  }
  isActive: boolean
}
const props = defineProps<Props>()
</script>

<style scoped></style>