import { defineStore } from "pinia"
import { useI18n } from "vue-i18n"

export const useI18nStore = defineStore('i18nStore', () => {
  const { locale } = useI18n()
  const currentLocale = ref(locale.value)
  const isCurrentCN = computed(() => {
    // console.log(currentLocale.value)
    return currentLocale.value === 'zh-CN'
  })
  const handleChangeLanguage = (lang?: 'en' | 'zh-CN') => { 
    // console.log(locale.value, currentLocale.value)
    if (typeof lang == 'string') {
      currentLocale.value = lang
      // locale.value = lang
    } else {
      currentLocale.value = isCurrentCN.value ? 'en' : 'zh-CN'
      // locale.value = isCurrentCN.value ? 'en' : 'zh-CN'
    }
  }

  watch(currentLocale, val => {
    if (typeof val == 'string') {
      locale.value = val
    }
  }, { immediate: true })
  
  return {
    isCurrentCN,
    handleChangeLanguage
  }
}, {
  //TODO 未生效
  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       key:'currentLocale',
  //       storage: localStorage,
  //       paths: ['currentLocale']
  //     }
  //   ]
  // }
})