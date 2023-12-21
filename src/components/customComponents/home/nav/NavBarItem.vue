<template>
  <div
    class="flex flex-col cursor-pointer relative text-4"
    :class="`${isChecked ? 'text-primary' : 'text-default'}`"
  >
    <slot></slot>

    <div class="flex flex-row w-full justify-center absolute -bottom-2.5">
      <transition
        enter-active-class="animate-enter"
        leave-active-class="animate-leave"
      >
        <div
          v-if="isChecked"
          class="flex w-full h-2 rounded-8 bg-primary"
        ></div>
      </transition>
    </div>

  </div>
</template>

<script lang='ts' setup>
interface Props {
  isChecked: boolean
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
    width: 16px;
    border-radius: 50%;
  }

  50% {
    transform: translateY(0);
    opacity: 1;
    width: 16px;
    border-radius: 50%;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>