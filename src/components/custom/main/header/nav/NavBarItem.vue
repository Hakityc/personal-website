<template>
  <div
    class="flex flex-col cursor-pointer relative text-32"
    :class="`${isActive ? 'text-primary' : 'text-default'}`"
  >
    <slot>{{ title }}</slot>

    <div class="flex flex-row w-full justify-center absolute -bottom-20">
      <transition
        enter-active-class="animate-enter"
        leave-active-class="animate-leave"
      >
        <div
          v-if="isActive"
          class="flex w-full h-16 rounded-32 bg-primary"
        ></div>
      </transition>
    </div>

  </div>
</template>

<script lang='ts' setup>
interface Props {
  isActive: boolean
  title: string
}
const props = defineProps<Props>()
</script>

<style lang='less' scoped>
.animate-enter {
  animation: line-animate 0.6s;
}

.animate-leave {
  animation: line-animate 0.2s reverse;
}

@keyframes line-animate {
  0% {
    transform: translateY(-5px);
    opacity: 0.5;
    width: 128px;
    border-radius: 50%;
  }

  50% {
    transform: translateY(0);
    opacity: 1;
    width: 128px;
    border-radius: 50%;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>