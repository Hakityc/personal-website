import { axios } from '@/utils/request/axios'
import { Item } from '@/models/blog/card'
import { handleError } from '@/utils/request/handleError'

/**
 * 博客-获取博客列表
  GET /articles
  接口ID：136164392
  接口地址：https://app.apifox.com/link/project/3808301/apis/api-136164392
 */
export const useCardList = () => {
  const data = ref<{
    total: number
    items: Item[]
  }>()
  const loading = ref(false)
  const run = async (params: { pageNum?: number; pageSize?: number; q?: string; tagId?: number }) => {
    try {
      loading.value = true
      const res = await axios.get('/articles', {
        params
      })
      data.value = res.data
      return res.data
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
