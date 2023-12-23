<template>
  <div class="flex shrink-0 items-center justify-center p-4 relative">
    <div
      class="w-full h-full rounded-full filter-blur-3xl absolute avatar-animate"
      :style="avatarStle"
    ></div>
    <img
      ref="avatarRef"
      :src="avatar"
      class="z-10 w-60! h-60! rounded-full"
      :class="`rounded-full`"
    />
  </div>
</template>

<script lang='ts' setup>
// import avatar from '@/assets/avatar.png'
import avatar from '@/assets/avatar4.jpg'
import { useColorThief } from '@/hooks/useColorThief'

const { getColor, mainColor } = useColorThief()

interface Props {
  size: number
}
const props = defineProps<Props>()
const avatarRef = ref<HTMLElement>()
const avatarStle = computed(() => {
  return {
    //TODO 暂时不用mainColor
    // backgroundColor: mainColor.value,
    backgroundImage: `url(${avatar})`
  }
})

const initColor = async () => {
  try {
    // await getColor(avatarRef.value)
  }
  catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await initColor()
})
</script>

<style scoped>
.avatar-animate {
  animation: avatar 0.6s ease-in-out;
}

@keyframes avatar {
  0% {
    width: 0;
    height: 0;
  }

  100% {
    width: 100%;
    height: 100%;
  }
}
</style>