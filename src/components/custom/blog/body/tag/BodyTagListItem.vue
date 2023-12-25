<template>
  <div>
    <span
      class="text-6 transition-all font-400 duration-200 cursor-pointer"
      :class="`${item.isChecked ? 'text-#3652E1 font-400' : 'text-#8E8E8E font-400'}`"
    >{{ item.name }}</span>
  </div>
</template>

<script lang='ts' setup>
interface Props {
  item: {
    id: number
    name: string
    isChecked: boolean
  }
}
const props = defineProps<Props>()
</script>

<style scoped></style>