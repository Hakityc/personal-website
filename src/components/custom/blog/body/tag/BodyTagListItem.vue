<template>
  <div>
    <span
      class="text-6 transition-all duration-200 cursor-pointer"
      :class="`${data.isChecked ? 'text-#3652E1 font-600' : 'text-#8E8E8E font-400'}`"
    >{{ data.text }}</span>
  </div>
</template>

<script lang='ts' setup>
interface Props {
  data: {
    text: string
    isChecked: boolean
  }
}
const props = defineProps<Props>()
</script>

<style scoped></style>