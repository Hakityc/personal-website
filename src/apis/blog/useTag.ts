import { axios } from '@/utils/request/axios'
import { Item } from '@/models/blog/tag'
import { handleError } from '@/utils/request/handleError'

/**
 * 博客-获取标签列表
  GET /blog/tags
  接口ID：136420521
  接口地址：https://app.apifox.com/link/project/3808301/apis/api-136420521
 */
export const useTagList = () => {
  const data = ref<Item[]>()
  const loading = ref(false)
  const run = () => {
    try {
      loading.value = true
      const res = axios.get('/blog/tags')
    } catch (error) {
      handleError(error)
    } finally {
      loading.value = false
    }
  }
  return {
    run,
    loading,
    data
  }
}
