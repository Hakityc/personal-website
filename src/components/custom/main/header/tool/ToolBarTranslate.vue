<template>
  <a-button
    type="text"
    class="p-0! h-4 w-4 hover:bg-primary! flex items-center justify-center"
    @click="handleTranslate"
  >
    <i-icon-park-outline:translate class="text-4 text-#fff"></i-icon-park-outline:translate>
  </a-button>
</template>

<script lang='ts' setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const handleTranslate = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}
</script>

<style scoped></style>