<template>
  <div class="flex items-center justify-center p-4 relative">
    <div
      class="w-full h-full rounded-full filter-blur-3xl absolute avatar-animate"
      :style="{
        backgroundImage: `url(${avatar})`
      }"
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
import { useColorThief } from '@/hooks/useColorThief'

const { getColor, mainColor } = useColorThief()

interface Props {
  avatar: string
  size: number
}
const props = defineProps<Props>()
const avatarRef = ref<HTMLElement>()

const initColor = async () => {
  try {
    await getColor(avatarRef.value)
    console.log(mainColor.value)
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