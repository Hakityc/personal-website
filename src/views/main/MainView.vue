<template>
  <div class="w-screen h-screen flex flex-col relative">
    <HeaderView class="z-10"></HeaderView>
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="ease-in duration-300 absolute"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-out duration-300 absolute"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- <router-view v-slot="{ Component }">
    </router-view> -->
  </div>
</template>

<script setup lang="ts">
import HeaderView from './HeaderView.vue'
</script>

<style scoped></style>
