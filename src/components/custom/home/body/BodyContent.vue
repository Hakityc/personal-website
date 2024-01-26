<template>
  <div
    class="w-960 flex flex-col items-end text-default text-right text-180 font-not-italic font-600 lh-normal tracking--0.3375 bg-gradient-linear bg-gradient-[104deg,#3652E1_57.67%,#8057F5_78.54%] bg-clip-text"
  >
    <span class="text-zinc-900 text-180 font-semibold ">{{ t('home.content.welcome') }}</span>
    <span
      class="text-blue-600 text-180 font-semibold bg-gradient-to-r from-#3652E157 via-#7851E997 to-#7851E997 text-transparent bg-clip-text	"
    >{{ t('home.content.name') }}</span>
    <span class="text-zinc-900 text-180 font-semibold ">{{ t('home.content.blog') }}</span>
    <!-- <a-button class="w-48.5 h-16 shrink-0 border-rd-20 border-1 border-solid border-[#D9D9D9] bg-[#3652E1]">
        <span
          class="flex w-29.0205 h-5.75 flex-col justify-center shrink-0 text-[#EFEFEF] text-center font-Inter text-3.75 font-not-italic font-500 lh-normal"
        >登录</span>
      </a-button> -->
  </div>
</template>

<script lang='ts' setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<style lang='less' scoped></style>