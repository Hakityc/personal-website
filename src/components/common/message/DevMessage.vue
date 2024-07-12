<script lang="ts" setup>
import { message } from 'ant-design-vue'

const handleClick = () => {
  message.warn('👷该功能开发中...', 1)
  return
}
</script>
<template>
  <a-button
    type="text"
    class="p-0 m-0 border-0 bg-transparent"
    @click="handleClick">
    <slot></slot>
  </a-button>
</template>

<style scoped></style>
