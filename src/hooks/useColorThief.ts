import ColorThief from "@neutrixs/colorthief"
import { handleError } from '@/utils/handlerError'
import { rgbToHex , isColorNearWhite } from '@/utils/handleColor'

interface Color {
  rgb: number[]
  hex: string
  isNearWhite: boolean
}

export const useColorThief = () => {
  const colorthief = new ColorThief()

  const mainColor = ref('')
  const colors = ref<Color[]>([])
  const hexColors = ref<string[]>([])

  const getColor = async (el?: HTMLElement) => {
    try {
      if (!el) {
        debugger
        return
      }
      // 设置图片的跨域属性
      el.crossOrigin = 'Anonymous'
      // 在图片加载完成后，调用 colorthief 的方法
      el.addEventListener('load',() => {
        const colorList = colorthief?.getPalette(el)
        if (colorList) {
          colors.value = colorList.map((color: number[]) => ({
            rgb: color,
            hex: rgbToHex(color[0], color[1], color[2]),
            isNearWhite: isColorNearWhite(color),
          }))
          hexColors.value = colors.value?.map(_ => _.hex)
          mainColor.value = colors.value[0].hex
          // mainColor.value = colors.value[1].hex
          console.log(colors.value,hexColors.value,mainColor.value)
        }
      })
      // return colorList
    } catch (error) {
      handleError(error)
    }
  }
  return {
    mainColor,
    hexColors,
    getColor,
    colors
  }
} 