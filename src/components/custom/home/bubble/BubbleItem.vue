<template>
  <div
    class="bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-80"
    :class="`w-${width} h-${height}`"
  ></div>
</template>

<script lang='ts' setup>
interface Props {
  width: number
  height: number
}
defineProps<Props>()
</script>

<style lang='less' scoped></style>