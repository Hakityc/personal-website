<template>
  <div class="" :class="`${isChecked?'text-#3652E1':'text-#1C1C1C'}`">
    <slot></slot>
  </div>
</template>

<script lang='ts' setup>
interface Props {
  isChecked: boolean
}
const props = defineProps<Props>()
</script>

<style lang='less' scoped></style>