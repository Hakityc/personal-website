<script lang="ts" setup></script>
<template>
  <template v-if="import.meta.env.DEV">
    <slot></slot>
  </template>
</template>

<style scoped></style>
