<template>
  <a-button
    type="text"
    class="p-0! h-32 w-32 hover:bg-primary! flex items-center justify-center"
    @click="i18nStore.handleChangeLanguage()"
  >
    <i-icon-park-outline:translate class="text-32 text-#fff"></i-icon-park-outline:translate>
  </a-button>
</template>

<script lang='ts' setup>
import { useI18nStore } from '@/stores/modules/i18n'

const i18nStore = useI18nStore()
</script>

<style scoped></style>